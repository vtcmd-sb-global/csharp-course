import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session07() {
  return (
    <Layout
      title="Session 07 — Properties, Indexers, and Record Types"
      description="Properties, Indexers, init-only setters and Record Types in C#"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 07 — Properties, Indexers, and Record Types</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Master Properties, Indexers and modern Record Types for clean and safe data handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 7</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and use Properties in C#</li>
            <li>Create read-only, write-only and read-write properties</li>
            <li>Use auto-implemented properties</li>
            <li>Apply validation inside properties</li>
            <li>Create and use Indexers</li>
            <li>Understand init-only setters</li>
            <li>Work with Record Types</li>
          </ul>

          <hr />

          <h2>1. Properties in C#</h2>
          <p>Properties are members that provide a flexible way to read, write or compute the value of a private field. They are preferred over public fields.</p>

          <h3>1.1 Full Property (with backing field)</h3>
          <pre>
            <code>{`public class Student
{
    private string name;          // backing field

    public string Name            // Property
    {
        get { return name; }
        set { name = value; }
    }
}`}</code>
          </pre>

          <h3>1.2 Auto-Implemented Property (Most Common)</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }
}`}</code>
          </pre>

          <h3>1.3 Property with Validation</h3>
          <pre>
            <code>{`public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 15 || value > 60)
                throw new ArgumentException("Age must be between 15 and 60");
            age = value;
        }
    }
}`}</code>
          </pre>

          <h3>1.4 Read-only Property</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; }           // can only be set in constructor

    public Student(string name)
    {
        Name = name;
    }
}`}</code>
          </pre>

          <h3>1.5 Expression-bodied Property</h3>
          <pre>
            <code>{`public class Rectangle
{
    public double Length { get; set; }
    public double Width { get; set; }

    public double Area => Length * Width;
    public double Perimeter => 2 * (Length + Width);
}`}</code>
          </pre>

          <hr />

          <h2>2. Indexers</h2>
          <p>An indexer allows an object to be indexed like an array.</p>

          <pre>
            <code>{`public class StudentList
{
    private string[] names = new string[5];

    // Indexer
    public string this[int index]
    {
        get
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            return names[index];
        }
        set
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            names[index] = value;
        }
    }
}

// Usage
StudentList list = new StudentList();
list[0] = "Ali";
list[1] = "Sara";
list[2] = "Ahmed";

Console.WriteLine(list[0]);   // Ali
Console.WriteLine(list[1]);   // Sara`}</code>
          </pre>

          <hr />

          <h2>3. init-only Setters (C# 9+)</h2>
          <p>With <code>init</code>, a property can be set only during object initialization (using object initializer or constructor).</p>

          <pre>
            <code>{`public class Student
{
    public string Name { get; init; }
    public int Age { get; init; }
}

// Correct usage
Student s1 = new Student
{
    Name = "Ali",
    Age = 20
};

// This will give an error
// s1.Name = "Ahmed";   // Cannot modify after initialization`}</code>
          </pre>

          <hr />

          <h2>4. Record Types (C# 9+)</h2>
          <p>Records are a special type designed for storing data. They provide built-in support for immutability and value-based equality.</p>

          <h3>4.1 Simple Record</h3>
          <pre>
            <code>{`public record Student(string Name, int Age, string Course);

// Usage
Student s1 = new Student("Ali", 20, "C#");
Student s2 = new Student("Ali", 20, "C#");

Console.WriteLine(s1);                 // Student { Name = Ali, Age = 20, Course = C# }
Console.WriteLine(s1 == s2);           // True (value-based equality)`}</code>
          </pre>

          <h3>4.2 Record with Extra Members</h3>
          <pre>
            <code>{`public record Student
{
    public string Name { get; init; }
    public int Age { get; init; }
    public string Course { get; init; }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }

    public void Display()
    {
        Console.WriteLine($"{Name} is {Age} years old and studies {Course}");
    }
}`}</code>
          </pre>

          <h3>4.3 with Expression (Non-destructive mutation)</h3>
          <pre>
            <code>{`Student s1 = new Student("Ali", 20, "C#");
Student s2 = s1 with { Age = 21 };     // Creates a new copy with Age changed

Console.WriteLine(s1.Age);   // 20
Console.WriteLine(s2.Age);   // 21`}</code>
          </pre>

          <hr />

          <h2>5. Complete Live Example</h2>

          <pre>
            <code>{`public class BankAccount
{
    private double balance;

    public string AccountNumber { get; init; }
    public string AccountHolder { get; set; }

    public double Balance
    {
        get { return balance; }
        private set
        {
            if (value < 0)
                throw new ArgumentException("Balance cannot be negative");
            balance = value;
        }
    }

    public BankAccount(string accountNumber, string accountHolder, double initialBalance)
    {
        AccountNumber = accountNumber;
        AccountHolder = accountHolder;
        Balance = initialBalance;
    }

    public void Deposit(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive");
        Balance += amount;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdraw amount must be positive");
        if (amount > Balance)
            throw new InvalidOperationException("Insufficient balance");
        Balance -= amount;
    }

    public void Display()
    {
        Console.WriteLine($"Account: {AccountNumber}");
        Console.WriteLine($"Holder : {AccountHolder}");
        Console.WriteLine($"Balance: {Balance:C}");
    }
}

// Testing
BankAccount acc = new BankAccount("PK-12345", "Ali Khan", 50000);
acc.Display();

acc.Deposit(15000);
acc.Withdraw(8000);
acc.Display();`}</code>
          </pre>

          <hr />

          <h2>6. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a class <code>Product</code> with properties: Name, Price, Quantity.  
Add validation so that Price and Quantity cannot be negative.</p>

          <h3>Exercise 2</h3>
          <p>Create a class <code>Library</code> that uses an indexer to store and retrieve book titles by index.</p>

          <h3>Exercise 3</h3>
          <p>Create a record called <code>Employee</code> with properties Name, Id and Department.  
Demonstrate the <code>with</code> expression.</p>

          <hr />

          <h2>7. Session Challenge</h2>
          <p>Create a complete <strong>Student Record System</strong> using:</p>
          <ul>
            <li>A class or record for Student (Name, RollNo, Marks)</li>
            <li>Property validation for Marks (0–100)</li>
            <li>An indexer-based class to store multiple students</li>
            <li>Methods to add student, display all students, and find student by roll number</li>
          </ul>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is a property in C#?</li>
            <li>What is the advantage of using properties instead of public fields?</li>
            <li>What is an auto-implemented property?</li>
            <li>What is an indexer?</li>
            <li>What does the <code>init</code> keyword do?</li>
            <li>What is a record type?</li>
            <li>What is the main difference between a class and a record?</li>
            <li>What does the <code>with</code> expression do in records?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Namespaces and Exception Handling</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}





// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session07() {
//   return (
//     <Layout
//       title="Session 07 — Advanced Parameters, Tuples & Exception Handling"
//       description="Advanced Parameters, Tuples & Exception Handling"
//     >
//       <CustomLayout>
//         <article className="session-content">
//           <h1>Session 07 — Advanced Parameters, Tuples & Exception Handling</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Master the remaining parameter modes, return multiple values with tuples and <code>out</code>, and write crash-proof programs using exceptions.</p>
//           <p><strong>Prerequisite:</strong> Sessions 01–06 (loops, methods, recursion, arrays, strings).</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should be able to:</p>
//           <ul>
//             <li>Use <code>ref</code>, <code>out</code>, <code>in</code>, and <code>params</code> parameters correctly</li>
//             <li>Choose between value, <code>ref</code>, <code>out</code>, tuples, and classes for returning data</li>
//             <li>Return multiple values with tuples and <code>out</code> parameters</li>
//             <li>Understand <code>static</code> vs instance methods (bridge to OOP)</li>
//             <li>Understand variable scope and lifetime</li>
//             <li>Handle runtime errors with <code>try</code>, <code>catch</code>, <code>finally</code></li>
//             <li>Throw and re-throw exceptions correctly</li>
//             <li>Create custom exception classes</li>
//             <li>Apply defensive programming using <code>TryParse</code> and validation</li>
//             <li>Build a crash-proof console application</li>
//           </ul>

//           <hr />

//           <h2>1. Quick Recap — What You Already Know</h2>
//           <p>In <strong>Session 05</strong> you learned:</p>
//           <ul>
//             <li>How to declare and call methods</li>
//             <li>Return values and <code>void</code></li>
//             <li>Method overloading, optional parameters, named arguments</li>
//             <li>Local functions</li>
//             <li>Recursion with base cases</li>
//           </ul>

//           <p><strong>What we're adding today:</strong></p>
//           <ul>
//             <li>The <strong>5 parameter modes</strong> C# offers</li>
//             <li>How to return <strong>multiple values</strong></li>
//             <li>How to make programs <strong>not crash</strong> when things go wrong</li>
//           </ul>

//           <hr />

//           <h2>2. The 5 Parameter Modes</h2>
//           <p>This is the #1 interview topic about methods. Master all five.</p>

//           <h3>2.1 Pass by Value (default)</h3>
//           <p>A <strong>copy</strong> of the argument is passed. Changes inside the method do NOT affect the caller.</p>
//           <pre>
//             <code>{`void DoubleIt(int x)
// {
//     x = x * 2;
//     Console.WriteLine($"Inside: {x}");   // 20
// }

// int num = 10;
// DoubleIt(num);
// Console.WriteLine($"Outside: {num}");    // 10 — unchanged`}</code>
//           </pre>

//           <h3>2.2 ref — Pass by Reference</h3>
//           <p>The method works on the <strong>original variable</strong>. The caller <strong>must initialize</strong> it first.</p>
//           <pre>
//             <code>{`void DoubleRef(ref int x)
// {
//     x = x * 2;
// }

// int num = 10;
// DoubleRef(ref num);
// Console.WriteLine(num);   // 20 — changed!`}</code>
//           </pre>
//           <p><strong>When to use:</strong> When the method needs to read AND write the caller's variable.</p>

//           <h3>2.3 out — Output Parameter</h3>
//           <p>Used to <strong>return multiple values</strong>. The method <strong>must assign</strong> the <code>out</code> parameter before returning. The caller does NOT need to initialize it.</p>
//           <pre>
//             <code>{`bool TryDivide(int a, int b, out int result)
// {
//     if (b == 0)
//     {
//         result = 0;
//         return false;
//     }
//     result = a / b;
//     return true;
// }

// if (TryDivide(10, 2, out int quotient))
//     Console.WriteLine($"Result: {quotient}");   // 5
// else
//     Console.WriteLine("Cannot divide by zero");`}</code>
//           </pre>
//           <p><strong>Inline declaration</strong> (C# 7+): <code>out int quotient</code> — no need to declare beforehand.</p>
//           <p>You already saw <code>out</code> in <strong>Session 04</strong> with <code>int.TryParse(input, out int age)</code>. Now you know <em>why</em> it works that way.</p>

//           <h3>2.4 in — Read-only Reference (C# 7.2+)</h3>
//           <p>Passed by reference but <strong>cannot be modified</strong>. Used for large structs to avoid copying overhead.</p>
//           <pre>
//             <code>{`double CalculateArea(in double radius)
// {
//     // radius = 5;  // Compile error — read-only
//     return Math.PI * radius * radius;
// }`}</code>
//           </pre>
//           <p><strong>Rarely needed in beginner code.</strong> Mention it, don't dwell on it.</p>

//           <h3>2.5 params — Variable Number of Arguments</h3>
//           <p>Allows passing any number of arguments of the same type. Must be the <strong>last</strong> parameter.</p>
//           <pre>
//             <code>{`int Sum(params int[] numbers)
// {
//     int total = 0;
//     foreach (int n in numbers) total += n;
//     return total;
// }

// Console.WriteLine(Sum(1, 2));           // 3
// Console.WriteLine(Sum(1, 2, 3, 4, 5));  // 15
// Console.WriteLine(Sum());               // 0`}</code>
//           </pre>
//           <p><strong>Real-world use:</strong> <code>Console.WriteLine(string format, params object[] args)</code> — that's why you can pass any number of arguments to it.</p>

//           <h3>Comparison Table</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Mode</th>
//                 <th>Keyword</th>
//                 <th>Caller must init?</th>
//                 <th>Method must assign?</th>
//                 <th>Affects caller?</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Value</td>
//                 <td>(none)</td>
//                 <td>Yes</td>
//                 <td>No</td>
//                 <td>No</td>
//               </tr>
//               <tr>
//                 <td>Reference</td>
//                 <td><code>ref</code></td>
//                 <td>Yes</td>
//                 <td>No</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Output</td>
//                 <td><code>out</code></td>
//                 <td>No</td>
//                 <td><strong>Yes</strong></td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Read-only ref</td>
//                 <td><code>in</code></td>
//                 <td>Yes</td>
//                 <td>No (read-only)</td>
//                 <td>No</td>
//               </tr>
//               <tr>
//                 <td>Variable args</td>
//                 <td><code>params</code></td>
//                 <td>N/A</td>
//                 <td>N/A</td>
//                 <td>N/A</td>
//               </tr>
//             </tbody>
//           </table>

//           <h3>Quick Practice — Predict the Output</h3>
//           <pre>
//             <code>{`void Change(int x, ref int y, out int z)
// {
//     x = 100;
//     y = 200;
//     z = 300;
// }

// int a = 1, b = 2;
// Change(a, ref b, out int c);
// Console.WriteLine($"{a} {b} {c}");   // ?`}</code>
//           </pre>
//           <p><strong>Answer:</strong> <code>1 200 300</code> — <code>a</code> unchanged (value), <code>b</code> changed (ref), <code>c</code> assigned (out).</p>

//           <hr />

//           <h2>3. Returning Multiple Values</h2>
//           <p>Session 05 promised this. Here it is — three ways, in order of preference.</p>

//           <h3>3.1 Tuples (Modern, Preferred)</h3>
//           <pre>
//             <code>{`(int min, int max) FindMinMax(int[] numbers)
// {
//     int min = numbers[0];
//     int max = numbers[0];

//     foreach (int n in numbers)
//     {
//         if (n < min) min = n;
//         if (n > max) max = n;
//     }

//     return (min, max);
// }

// var result = FindMinMax(new[] { 5, 2, 9, 1, 7 });
// Console.WriteLine($"Min: {result.min}, Max: {result.max}");

// // Or deconstruct:
// var (min, max) = FindMinMax(new[] { 5, 2, 9, 1, 7 });
// Console.WriteLine($"Min: {min}, Max: {max}");`}</code>
//           </pre>
//           <p><strong>Why tuples?</strong> Clean, no extra class needed, named elements.</p>

//           <h3>3.2 out Parameters (When one value is a "success" flag)</h3>
//           <pre>
//             <code>{`bool TryParseAge(string input, out int age)
// {
//     if (int.TryParse(input, out age) && age >= 0 && age <= 120)
//         return true;
//     age = 0;
//     return false;
// }`}</code>
//           </pre>
//           <p><strong>Use when:</strong> The pattern is "try to do X, tell me if it worked, and give me the result."</p>

//           <h3>3.3 Class / Struct (For 3+ related values with behavior)</h3>
//           <p>We'll cover this properly in Session 08. For now, know that tuples are fine for 2–3 values.</p>

//           <h3>Decision Guide</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Situation</th>
//                 <th>Use</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>2–3 related values, no behavior</td>
//                 <td><strong>Tuple</strong></td>
//               </tr>
//               <tr>
//                 <td>"Try" pattern with success flag</td>
//                 <td><strong><code>out</code> parameter</strong></td>
//               </tr>
//               <tr>
//                 <td>4+ values OR needs methods/validation</td>
//                 <td><strong>Class</strong> (Session 08)</td>
//               </tr>
//               <tr>
//                 <td>Only one value to return</td>
//                 <td><strong>Normal return</strong></td>
//               </tr>
//             </tbody>
//           </table>

//           <h3>Live Coding Exercise</h3>
//           <pre>
//             <code>{`(int sum, double average, int count) Analyze(int[] numbers)
// {
//     if (numbers == null || numbers.Length == 0)
//         throw new ArgumentException("Array cannot be empty.");

//     int sum = 0;
//     foreach (int n in numbers) sum += n;

//     return (sum, (double)sum / numbers.Length, numbers.Length);
// }

// var (sum, avg, count) = Analyze(new[] { 10, 20, 30 });
// Console.WriteLine($"Sum={sum}, Avg={avg:F2}, Count={count}");`}</code>
//           </pre>

//           <hr />

//           <h2>4. Scope, Lifetime & static</h2>

//           <h3>4.1 Variable Scope</h3>
//           <p>Scope = where a variable is visible.</p>
//           <pre>
//             <code>{`void Example()
// {
//     int outer = 10;            // visible in whole method

//     for (int i = 0; i < 3; i++)
//     {
//         int inner = i * 2;     // only visible inside the loop
//         Console.WriteLine(inner);
//     }

//     // Console.WriteLine(inner);   // Error — inner is out of scope
//     Console.WriteLine(outer);      // OK
// }`}</code>
//           </pre>
//           <p><strong>Rules:</strong></p>
//           <ul>
//             <li>A variable lives inside the <code>{'{ }'}</code> block where it's declared</li>
//             <li>Inner blocks can see outer variables</li>
//             <li>Outer blocks cannot see inner variables</li>
//           </ul>

//           <h3>4.2 static — A Bridge to Session 08</h3>
//           <p>So far you've been writing methods like this:</p>
//           <pre>
//             <code>{`int Add(int a, int b) => a + b;`}</code>
//           </pre>
//           <p>If you're using <strong>top-level statements</strong> (C# 9+), these are implicitly local functions — you don't need <code>static</code>.</p>
//           <p>But in traditional C#, methods live inside a <strong>class</strong>:</p>
//           <pre>
//             <code>{`public class Calculator
// {
//     public static int Add(int a, int b) => a + b;   // static: belongs to class
//     public int Multiply(int a, int b) => a * b;     // instance: belongs to object
// }`}</code>
//           </pre>
//           <ul>
//             <li><strong><code>static</code> method</strong> → call on the class itself: <code>Calculator.Add(2, 3)</code></li>
//             <li><strong>Instance method</strong> → must create an object first: <code>var c = new Calculator(); c.Multiply(2, 3);</code></li>
//           </ul>
//           <p>You'll learn the "why" in Session 08. For now, remember: <code>static</code> = doesn't need an object.</p>

//           <hr />

//           <h2>5. Exception Handling — The Heart of This Session</h2>

//           <h3>5.1 What is an Exception?</h3>
//           <p>A <strong>runtime error</strong> that disrupts normal flow. Examples you've already seen:</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>Exception</th>
//                 <th>Trigger</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>FormatException</code></td>
//                 <td><code>int.Parse("abc")</code></td>
//               </tr>
//               <tr>
//                 <td><code>DivideByZeroException</code></td>
//                 <td><code>10 / 0</code> (integers)</td>
//               </tr>
//               <tr>
//                 <td><code>IndexOutOfRangeException</code></td>
//                 <td><code>arr[100]</code> on a 5-element array</td>
//               </tr>
//               <tr>
//                 <td><code>NullReferenceException</code></td>
//                 <td>Calling a method on a <code>null</code> reference</td>
//               </tr>
//               <tr>
//                 <td><code>ArgumentOutOfRangeException</code></td>
//                 <td>Passing bad args to framework methods</td>
//               </tr>
//               <tr>
//                 <td><code>StackOverflowException</code></td>
//                 <td>Infinite recursion (Session 05)</td>
//               </tr>
//             </tbody>
//           </table>
//           <p><strong>Without handling, the program crashes.</strong> With handling, you control what happens.</p>

//           <h3>5.2 try / catch / finally</h3>
//           <pre>
//             <code>{`try
// {
//     Console.Write("Enter a number: ");
//     int n = int.Parse(Console.ReadLine());
//     Console.WriteLine($"100 / {n} = {100 / n}");
// }
// catch (FormatException ex)
// {
//     Console.WriteLine($"Invalid format: {ex.Message}");
// }
// catch (DivideByZeroException ex)
// {
//     Console.WriteLine($"Cannot divide by zero: {ex.Message}");
// }
// catch (Exception ex)   // catch-all — MUST be last
// {
//     Console.WriteLine($"Unexpected error: {ex.Message}");
// }
// finally
// {
//     Console.WriteLine("Done.");   // always runs
// }`}</code>
//           </pre>
//           <p><strong>Rules:</strong></p>
//           <ol>
//             <li>More specific catches first, <code>Exception</code> last.</li>
//             <li><code>finally</code> always runs — even if an exception is thrown, even if there's a <code>return</code>.</li>
//             <li><code>try</code> must have at least one <code>catch</code> OR a <code>finally</code>.</li>
//           </ol>

//           <h3>5.3 finally — When and Why</h3>
//           <pre>
//             <code>{`try
// {
//     Console.WriteLine("Opening file...");
//     // pretend we open a file
//     return;   // even with return...
// }
// finally
// {
//     Console.WriteLine("Closing file...");   // ...this STILL runs
// }`}</code>
//           </pre>
//           <p><strong>Use <code>finally</code> for cleanup:</strong> closing files, DB connections, releasing resources.</p>

//           <h3>5.4 throw — Raising Exceptions</h3>
//           <pre>
//             <code>{`double Divide(int a, int b)
// {
//     if (b == 0)
//         throw new DivideByZeroException("Divisor cannot be zero.");
//     return (double)a / b;
// }`}</code>
//           </pre>

//           <h3>5.5 throw; vs throw ex; — Interview Favourite</h3>
//           <pre>
//             <code>{`try { /* ... */ }
// catch (Exception ex)
// {
//     // Log the error
//     Console.WriteLine("Logging...");

//     throw;        // Preserves original stack trace
//     // throw ex;  // Resets stack trace — bad practice
// }`}</code>
//           </pre>
//           <p><strong>Rule:</strong> Always use <code>throw;</code> to re-throw.</p>

//           <h3>5.6 Custom Exceptions</h3>
//           <pre>
//             <code>{`public class InvalidAgeException : Exception
// {
//     public InvalidAgeException(string message) : base(message) { }
// }

// void SetAge(int age)
// {
//     if (age < 0 || age > 120)
//         throw new InvalidAgeException($"Age {age} is invalid.");
//     Console.WriteLine($"Age set to {age}");
// }

// try
// {
//     SetAge(150);
// }
// catch (InvalidAgeException ex)
// {
//     Console.WriteLine(ex.Message);
// }`}</code>
//           </pre>
//           <p><strong>When to create custom exceptions:</strong></p>
//           <ul>
//             <li>Domain-specific errors (e.g., <code>InsufficientFundsException</code>)</li>
//             <li>When callers need to distinguish your exception from framework ones</li>
//           </ul>

//           <h3>5.7 Defensive Input — The TryParse Pattern</h3>
//           <p>You saw this in Session 04. Now it becomes a rule:</p>
//           <pre>
//             <code>{`// Bad — crashes on bad input
// int age = int.Parse(Console.ReadLine());

// // Good — handles bad input gracefully
// int age;
// while (!int.TryParse(Console.ReadLine(), out age))
// {
//     Console.Write("Invalid number. Try again: ");
// }`}</code>
//           </pre>
//           <p><strong>Rule:</strong> Never use <code>Parse</code> on untrusted input. Use <code>TryParse</code>.</p>

//           <h3>5.8 Best Practices Table</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Do</th>
//                 <th>Don't</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Catch specific exceptions</td>
//                 <td>Catch <code>Exception</code> everywhere blindly</td>
//               </tr>
//               <tr>
//                 <td>Use <code>throw;</code> to re-throw</td>
//                 <td>Use <code>throw ex;</code> (loses stack trace)</td>
//               </tr>
//               <tr>
//                 <td>Validate inputs early</td>
//                 <td>Rely on exceptions for control flow</td>
//               </tr>
//               <tr>
//                 <td>Use <code>TryParse</code> for user input</td>
//                 <td>Use <code>Parse</code> on untrusted input</td>
//               </tr>
//               <tr>
//                 <td>Log errors with context</td>
//                 <td>Swallow exceptions silently</td>
//               </tr>
//               <tr>
//                 <td>Use <code>finally</code> for cleanup</td>
//                 <td>Put cleanup after a <code>return</code></td>
//               </tr>
//             </tbody>
//           </table>

//           <h3>5.9 Exception Filters (Bonus)</h3>
//           <pre>
//             <code>{`try { /* ... */ }
// catch (Exception ex) when (ex.Message.Contains("timeout"))
// {
//     Console.WriteLine("Network timeout — retrying...");
// }`}</code>
//           </pre>
//           <p>The <code>when</code> clause lets you catch conditionally.</p>

//           <hr />

//           <h2>6. Live Coding — Bringing It All Together</h2>
//           <p>Let's build a <strong>safe number analyzer</strong> using everything from today.</p>
//           <pre>
//             <code>{`// Returns (sum, average, count) as a tuple
// (int sum, double avg, int count) Analyze(int[] numbers)
// {
//     if (numbers == null || numbers.Length == 0)
//         throw new ArgumentException("Array cannot be empty.");

//     int sum = 0;
//     foreach (int n in numbers) sum += n;
//     return (sum, (double)sum / numbers.Length, numbers.Length);
// }

// // Safe input using TryParse
// int ReadInt(string prompt, int min, int max)
// {
//     while (true)
//     {
//         Console.Write(prompt);
//         if (int.TryParse(Console.ReadLine(), out int value) && value >= min && value <= max)
//             return value;
//         Console.WriteLine($"Please enter a number between {min} and {max}.");
//     }
// }

// // Main flow with exception handling
// try
// {
//     int count = ReadInt("How many numbers? ", 1, 100);
//     int[] numbers = new int[count];

//     for (int i = 0; i < count; i++)
//         numbers[i] = ReadInt($"Number {i + 1}: ", int.MinValue, int.MaxValue);

//     var (sum, avg, n) = Analyze(numbers);
//     Console.WriteLine($"\\nSum={sum}, Average={avg:F2}, Count={n}");
// }
// catch (Exception ex)
// {
//     Console.WriteLine($"Something went wrong: {ex.Message}");
// }
// finally
// {
//     Console.WriteLine("Program finished.");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>7. Session 7 Challenge</h2>
//           <h3>Challenge: Safe Student Report System</h3>
//           <p>Build a console app that:</p>
//           <ol>
//             <li>Asks how many students (validate: 1–50 with <code>TryParse</code>, reject invalid)</li>
//             <li>For each student:
//               <ul>
//                 <li>Read name (non-empty; reject blank)</li>
//                 <li>Read 3 marks (validate each is 0–100)</li>
//               </ul>
//             </li>
//             <li>Uses a method <code>(int total, double avg, char grade) Analyze(int m1, int m2, int m3)</code></li>
//             <li>Uses a method <code>char GetGrade(double avg)</code> with proper grading scale</li>
//             <li>Throws a custom <code>NoStudentsException</code> if the list ends up empty (edge case)</li>
//             <li>Handles ALL invalid input gracefully — no crashes, no unhandled exceptions</li>
//             <li>Displays a formatted report at the end</li>
//           </ol>

//           <p><strong>Requirements:</strong></p>
//           <ul>
//             <li>At least <strong>5 methods</strong></li>
//             <li>Use <code>TryParse</code> for all numeric input</li>
//             <li>Use <code>try/catch/finally</code> at least once</li>
//             <li>Use a <strong>tuple</strong> for returning multiple values</li>
//             <li>Use a <strong>custom exception</strong> somewhere</li>
//             <li>No <code>Parse</code> on user input</li>
//           </ul>

//           <p><strong>Grading scale:</strong></p>
//           <ul>
//             <li>≥ 90 → A+</li>
//             <li>≥ 80 → A</li>
//             <li>≥ 70 → B</li>
//             <li>≥ 60 → C</li>
//             <li>≥ 50 → D</li>
//             <li>else → F</li>
//           </ul>

//           <hr />

//           <h2>8. Exercises</h2>

//           <h3>Beginner</h3>
//           <ol>
//             <li>Write <code>void Increment(ref int x)</code> that adds 1 to the caller's variable. Test it.</li>
//             <li>Write <code>bool TryParsePositive(string input, out int value)</code> that returns true only if the input is a positive integer.</li>
//             <li>Write <code>int Sum(params int[] numbers)</code> and call it with 0, 1, and 5 arguments.</li>
//             <li>Write <code>(int min, int max) MinMax(int a, int b)</code> using a tuple.</li>
//           </ol>

//           <h3>Intermediate</h3>
//           <ol>
//             <li>Write <code>(int quotient, int remainder) Divide(int a, int b)</code> — throw <code>DivideByZeroException</code> if <code>b == 0</code>.</li>
//             <li>Write a method with <code>params string[] names</code> that prints all names, one per line.</li>
//             <li>Write a method <code>SafeReadInt(string prompt, int min, int max)</code> that loops until valid input.</li>
//             <li>Wrap an <code>int.Parse</code> call in <code>try/catch</code> and print a friendly message on <code>FormatException</code>.</li>
//           </ol>

//           <h3>Advanced</h3>
//           <ol>
//             <li>Create a custom <code>InsufficientFundsException</code>. Write a <code>Withdraw(decimal balance, decimal amount, out decimal newBalance)</code> method that throws it if <code>amount &gt; balance</code>.</li>
//             <li>Write a method that takes an array and returns <code>(int min, int max, double avg)</code> — throw <code>ArgumentException</code> if empty.</li>
//             <li>Write a method <code>SafeDivide</code> using both <code>ref</code> (to update an error counter) and <code>out</code> (for the result).</li>
//             <li>Write a method <code>SumEven(params int[] numbers)</code> that only sums even numbers.</li>
//           </ol>

//           <hr />

//           <h2>9. Session 7 Quiz</h2>
//           <ol>
//             <li>What is the difference between <code>ref</code> and <code>out</code>?</li>
//             <li>When must a <code>params</code> parameter appear in the parameter list?</li>
//             <li>What does <code>finally</code> do, and when does it run?</li>
//             <li>What is the difference between <code>throw;</code> and <code>throw ex;</code>?</li>
//             <li>Why is <code>TryParse</code> preferred over <code>Parse</code> for user input?</li>
//             <li>What is the difference between <code>TryParse</code> and <code>int.Parse</code> in terms of what they throw?</li>
//             <li>How do you return 3 values from a method? Name two ways.</li>
//             <li>What does the <code>in</code> keyword do?</li>
//             <li>What is a tuple in C#? Give an example.</li>
//             <li>When should you create a custom exception?</li>
//           </ol>

//           <hr />

//           <h2>10. Interview Questions</h2>
//           <ol>
//             <li><strong>Explain the difference between value types and reference types in method parameters.</strong></li>
//             <li><strong>When would you use <code>out</code> over returning a tuple?</strong></li>
//             <li><strong>What is the call stack, and how does it relate to exceptions?</strong></li>
//             <li><strong>Why is <code>catch (Exception)</code> alone considered bad practice in libraries?</strong></li>
//             <li><strong>What is the difference between <code>catch (Exception)</code> and <code>catch (Exception ex) when (...)</code>?</strong></li>
//             <li><strong>Can a <code>finally</code> block override a <code>return</code> statement?</strong> (Yes — a <code>return</code> inside <code>finally</code> overrides the try's return. Bad practice.)</li>
//             <li><strong>What is the purpose of <code>nameof</code> in exception messages?</strong> (e.g., <code>throw new ArgumentNullException(nameof(param))</code>)</li>
//             <li><strong>How would you design a method that returns multiple values? Compare <code>out</code>, tuples, and a result class.</strong></li>
//             <li><strong>What happens if you throw an exception inside a <code>catch</code> block?</strong></li>
//             <li><strong>What is the difference between <code>StackOverflowException</code> and <code>OutOfMemoryException</code>?</strong></li>
//           </ol>

//           <hr />

//           <p><strong>Next up (Session 08):</strong> Object-Oriented Programming — Classes, Objects, Fields, Properties, Constructors, and Encapsulation.</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
