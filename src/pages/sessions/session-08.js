import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session08() {
  return (
    <Layout
      title="Session 08 — Namespaces and Exception Handling"
      description="Namespaces and Exception Handling in C#"
    >
      <CustomLayout>
        <article className="session-content">
        <style>{`
            article code:not(pre code) {
              background-color: #f4f4f4;
              color: #d10057;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: Consolas, Monaco, monospace;
              font-size: 0.9em;
            }
          `}</style>
          <h1>Session 08 — Namespaces and Exception Handling</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Organize code using Namespaces and write crash-proof programs using Exception Handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 8</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and use namespaces</li>
            <li>Create nested namespaces</li>
            <li>Understand the purpose of the <code>using</code> directive</li>
            <li>Handle exceptions using <code>try</code>, <code>catch</code>, and <code>finally</code></li>
            <li>Use multiple catch blocks</li>
            <li>Throw exceptions using <code>throw</code></li>
            <li>Create custom exception classes</li>
            <li>Apply best practices for exception handling</li>
          </ul>

          <p>
            This session covers two practical skills: organizing types with
            namespaces so large projects stay manageable, and handling runtime
            errors with try/catch so programs fail gracefully instead of
            crashing.
          </p>

          <hr />

          <h2>1. Namespaces in C#</h2>
          <p>A namespace is used to organize classes and avoid name conflicts.</p>

          <p>
            Every type in C# lives in a namespace (or in the global namespace).
            The .NET libraries themselves are organized this way:
            <code>System</code>, <code>System.Collections.Generic</code>,
            <code>System.IO</code>, and so on. Your application should follow
            the same idea: group related classes under a clear hierarchy such as
            <code>Company.Product.Feature</code>.
          </p>

          <h3>1.1 Declaring a Namespace</h3>
          <CodeBlock
          language="csharp"
            code={`namespace Aptech.Training
{
    public class Student
    {
        public string Name { get; set; }
    }
}`}
          caption="Declaring a namespace and a class inside it"/>

          <p>
            The class <code>Student</code> is fully named
            <code>Aptech.Training.Student</code>. Outside this namespace you
            either write the full name or add a <code>using</code> directive.
          </p>

          <h3>1.2 Nested Namespaces</h3>
          <CodeBlock
          language="csharp"
            code={`namespace Aptech
{
    namespace Training
    {
        namespace CSharp
        {
            public class Course
            {
                public string Title { get; set; }
            }
        }
    }
}

// Fully qualified name
Aptech.Training.CSharp.Course course = new Aptech.Training.CSharp.Course();`}
          caption="Nested namespaces and fully qualified type name"/>

          <p>
            You can also write nested namespaces in a single line:
            <code>namespace Aptech.Training.CSharp {'{'} ... {'}'}</code>.
            Modern C# also supports file-scoped namespaces
            (<code>namespace Aptech.Training;</code> at the top of the file),
            which reduces nesting braces for the whole file.
          </p>

          <h3>1.3 using Directive</h3>
          <CodeBlock
          language="csharp"
            code={`using Aptech.Training.CSharp;

Course course = new Course();
course.Title = "Programming in C#";`}
          caption="using directive to import a namespace"/>

          <p>
            <code>using</code> imports a namespace so you can use short type
            names. If two namespaces define a type with the same name, you can
            still disambiguate with the full name, or use a namespace alias:
          </p>
          <CodeBlock
          language="csharp"
            code={`using Training = Aptech.Training.CSharp;
Training.Course course = new Training.Course();`}
          caption="Namespace alias to resolve name conflicts"/>

          <h3>1.4 Why Namespaces are Important</h3>
          <ul>
            <li>Prevent name conflicts</li>
            <li>Organize large projects</li>
            <li>Make code more readable and maintainable</li>
          </ul>

          <p>
            Without namespaces, two libraries that both define a class named
            <code>Logger</code> would collide. With namespaces, each lives in
            its own path and your project stays clear.
          </p>

          <hr />

          <h2>2. Exception Handling</h2>
          <p>An exception is an unexpected error that occurs during program execution. If not handled, the program crashes.</p>

          <p>
            Exceptions are objects that inherit from <code>System.Exception</code>.
            When something goes wrong (bad input, missing file, division by zero),
            the runtime creates an exception and searches up the call stack for a
            matching <code>catch</code>. If none is found, the process terminates.
            Handling exceptions lets you show a clear message, recover, or clean up
            resources before continuing or exiting.
          </p>

          <h3>2.1 Basic try-catch</h3>
          <CodeBlock
          language="csharp"
            code={`try
{
    Console.Write("Enter a number: ");
    int number = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine($"You entered: {number}");
}
catch (FormatException)
{
    Console.WriteLine("Invalid input! Please enter a valid number.");
}`}
          caption="Basic try-catch for FormatException"/>

          <p>
            Code that might fail goes in <code>try</code>. If
            <code>Convert.ToInt32</code> receives non-numeric text, it throws
            <code>FormatException</code>, control jumps to the matching
            <code>catch</code>, and the program continues instead of crashing.
            You can capture the exception object as
            <code>catch (FormatException ex)</code> to read
            <code>ex.Message</code> or other details.
          </p>

          <h3>2.2 Multiple catch Blocks</h3>
          <CodeBlock
          language="csharp"
            code={`try
{
    Console.Write("Enter first number: ");
    int a = Convert.ToInt32(Console.ReadLine());

    Console.Write("Enter second number: ");
    int b = Convert.ToInt32(Console.ReadLine());

    int result = a / b;
    Console.WriteLine($"Result: {result}");
}
catch (FormatException)
{
    Console.WriteLine("Please enter valid numbers only.");
}
catch (DivideByZeroException)
{
    Console.WriteLine("Cannot divide by zero.");
}
catch (Exception ex)          // General catch (must be last)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
}`}
          caption="Multiple catch blocks – specific exceptions first"/>

          <p>
            Order matters: more specific exception types must appear before more
            general ones. <code>Exception</code> is the base type, so its catch
            block must be last; otherwise the compiler reports that earlier
            specific catches are unreachable. Only one catch block runs for a
            given exception.
          </p>

          <h3>2.3 finally Block</h3>
          <p>The <code>finally</code> block always executes — whether an exception occurs or not.</p>

          <CodeBlock
          language="csharp"
            code={`try
{
    Console.WriteLine("Opening file...");
    // code that may throw exception
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
finally
{
    Console.WriteLine("This will always run (cleanup code).");
}`}
          caption="try-catch-finally – finally always runs"/>

          <p>
            Use <code>finally</code> for cleanup: closing files, disposing
            connections, or releasing locks. Even if a <code>return</code>
            happens inside <code>try</code> or <code>catch</code>,
            <code>finally</code> still runs. For types that implement
            <code>IDisposable</code>, prefer a <code>using</code> statement,
            which is syntactic sugar for a <code>try/finally</code> block that
            automatically calls <code>Dispose</code>.This guarantees unmanaged 
            resources like file handles, network streams, and database connections 
            are released immediately—even if an exception is thrown inside the block.
          </p>

          <CodeBlock
          language="csharp"
            code={`// using statement = try/finally that calls Dispose
using (var reader = new StreamReader("data.txt"))
{
    string line = reader.ReadLine();
    Console.WriteLine(line);
} // reader.Dispose() is called here automatically`}
          caption="using statement automatically calls Dispose (try/finally)"/>

          <h2>Modern Alternative: <code>using</code> Declaration (C# 8+)</h2>
          <p>
            When you want the resource to stay alive until the end of the 
            current enclosing scope (such as a method or <code>if</code> block), 
            omit the curly braces to avoid extra nesting
          </p>

          <CodeBlock
              language="csharp"
                code={`void ReadFirstLine()
{
    using var reader = new StreamReader("data.txt");
    string line = reader.ReadLine();
    Console.WriteLine(line);
} // reader.Dispose() is called automatically when the method exits`}
caption="using statement automatically calls Dispose (try/finally)"/>

          <h2>What the Compiler Generates:</h2>
          <p>
            Under the hood, the <code>C#</code> compiler lowers both forms into an explicit <code>try/finally</code> block:
          </p>

          <CodeBlock
  language="csharp"
    code={`var reader = new StreamReader("data.txt");
try
{
    string line = reader.ReadLine();
    Console.WriteLine(line);
}
finally
{
    if (reader != null)
    {
        ((IDisposable)reader).Dispose();
    }
}`}
caption="compiler under the hood generates the above"/>
          
          <hr />

          <h2>3. Throwing Exceptions</h2>

          <p>
            You can raise exceptions yourself with <code>throw</code> when a
            method receives invalid input or cannot complete its contract.
            Prefer standard exception types when they fit
            (<code>ArgumentException</code>, <code>ArgumentNullException</code>,
            <code>InvalidOperationException</code>).
          </p>

          <CodeBlock
          language="csharp"
            code={`public void SetAge(int age)
{
    if (age < 0 || age > 120)
    {
        throw new ArgumentException("Age must be between 0 and 120");
    }
    Console.WriteLine($"Age set to {age}");
}

// Usage
try
{
    SetAge(150);
}
catch (ArgumentException ex)
{
    Console.WriteLine(ex.Message);
}`}
          caption="Throwing an ArgumentException for invalid input"/>

          <p>
            Callers are responsible for catching (or documenting) exceptions
            that your method may throw. Do not throw exceptions for normal
            control flow; use them for unexpected or invalid conditions.
          </p>

          <hr />

          <h2>4. Custom Exception Classes</h2>

          <p>
            When a domain-specific error cannot be expressed clearly with a
            built-in type, define your own exception by inheriting from
            <code>Exception</code> (or a more specific base). Custom exceptions
            make catch blocks more precise and error messages more meaningful
            to callers.
          </p>

          <CodeBlock
          language="csharp"
            code={`public class InvalidAgeException : Exception
{
    public InvalidAgeException(string message) : base(message)
    {
    }
}

public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 15 || value > 60)
                throw new InvalidAgeException("Student age must be between 15 and 60");
            age = value;
        }
    }
}

// Usage
try
{
    Student s = new Student();
    s.Age = 10;
}
catch (InvalidAgeException ex)
{
    Console.WriteLine($"Custom Error: {ex.Message}");
}`}
          caption="Simple custom exception class"/>

          <p>
            A fuller custom exception often includes multiple constructors
            (message only, message + inner exception) so it integrates with
            the rest of the exception system:
          </p>
          <CodeBlock
          language="csharp"
            code={`public class InvalidAgeException : Exception
{
    public int AttemptedAge { get; }

    public InvalidAgeException(string message) : base(message) { }

    public InvalidAgeException(string message, int attemptedAge)
        : base(message)
    {
        AttemptedAge = attemptedAge;
    }

    public InvalidAgeException(string message, Exception inner)
        : base(message, inner) { }
}`}
          caption="Richer custom exception with extra properties and constructors"/>

          <hr />

          <h2>5. Common Exception Types</h2>
          <table>
            <thead>
              <tr>
                <th>Exception</th>
                <th>When it occurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>FormatException</code></td>
                <td>Invalid format (e.g. converting "abc" to int)</td>
              </tr>
              <tr>
                <td><code>DivideByZeroException</code></td>
                <td>Division by zero</td>
              </tr>
              <tr>
                <td><code>IndexOutOfRangeException</code></td>
                <td>Accessing invalid array index</td>
              </tr>
              <tr>
                <td><code>NullReferenceException</code></td>
                <td>Using a null object</td>
              </tr>
              <tr>
                <td><code>ArgumentException</code></td>
                <td>Invalid argument passed to a method</td>
              </tr>
              <tr>
                <td><code>FileNotFoundException</code></td>
                <td>File does not exist</td>
              </tr>
            </tbody>
          </table>

          <p>
            Knowing these types helps you write specific catch blocks and choose
            the right exception to throw. Avoid catching <code>Exception</code>
            alone when you can handle a more specific type; broad catches can
            hide bugs.
          </p>

          <hr />

          <h2>6. Best Practices</h2>
          <ul>
            <li>Always catch specific exceptions first</li>
            <li>Never use empty catch blocks</li>
            <li>Use <code>finally</code> for cleanup (closing files, connections, etc.)</li>
            <li>Throw meaningful exceptions with clear messages</li>
            <li>Prefer <code>TryParse</code> over <code>Parse</code> for user input</li>
          </ul>

          <p>
            Empty <code>catch {'{'} {'}'}</code> blocks swallow errors and make
            debugging hard. At minimum log the exception or rethrow it.
            <code>TryParse</code> returns false instead of throwing when input
            is invalid, which is often cleaner for interactive input.
          </p>

          <CodeBlock
          language="csharp"
            code={`// Recommended way for user input
Console.Write("Enter age: ");
if (int.TryParse(Console.ReadLine(), out int age))
{
    Console.WriteLine($"Age: {age}");
}
else
{
    Console.WriteLine("Invalid age entered.");
}`}
          caption="Prefer TryParse over Parse for user input"/>

          <hr />

          <h2>7. Complete Live Example</h2>

          <p>
            This example validates arguments, throws appropriate exceptions, and
            demonstrates multiple catch blocks plus a finally block for a simple
            bank withdrawal flow.
          </p>

          <CodeBlock
          language="csharp"
            code={`public class BankAccount
{
    public string AccountHolder { get; set; }
    public double Balance { get; private set; }

    public BankAccount(string holder, double initialBalance)
    {
        if (initialBalance < 0)
            throw new ArgumentException("Initial balance cannot be negative");

        AccountHolder = holder;
        Balance = initialBalance;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdrawal amount must be positive");

        if (amount > Balance)
            throw new InvalidOperationException("Insufficient balance");

        Balance -= amount;
        Console.WriteLine($"Withdrawn: {amount:C}. Remaining: {Balance:C}");
    }
}

// Testing
try
{
    BankAccount acc = new BankAccount("Ali Khan", 10000);
    acc.Withdraw(3000);
    acc.Withdraw(9000);   // This will throw exception
}
catch (ArgumentException ex)
{
    Console.WriteLine($"Argument Error: {ex.Message}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Operation Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"General Error: {ex.Message}");
}
finally
{
    Console.WriteLine("Transaction process completed.");
}`}
          caption="Complete BankAccount example with multiple exception types"/>

          <p>
            The second <code>Withdraw(9000)</code> fails because the remaining
            balance is only 7000. <code>InvalidOperationException</code> is
            caught and reported; <code>finally</code> still prints the completion
            message. Try changing the amounts and the initial balance to see
            different catch paths run.
          </p>

          <hr />

          <h2>8. Try It Yourself:</h2>

          <p>
            Practice both namespaces and exception handling. Prefer specific
            catch blocks and clear error messages.
          </p>

          <h3>Exercise 1</h3>
          <p>Write a program that takes two numbers from the user and performs division. Handle <code>FormatException</code> and <code>DivideByZeroException</code>.</p>

          <h3>Exercise 2</h3>
          <p>Create a custom exception called <code>InsufficientBalanceException</code> and use it in a BankAccount class.</p>

          <h3>Exercise 3</h3>
          <p>Create a namespace <code>Aptech.Students</code> and place a <code>Student</code> class inside it. Use the class from the main program.</p>

          <hr />

          <h2>9. Session Challenge</h2>
          <p>Create a complete program that:</p>

          <p>
            Combine input validation, a custom exception for marks, and a loop
            that keeps asking until the data is valid — a realistic pattern for
            console data entry.
          </p>

          <ul>
            <li>Asks the user for student name, age, and marks</li>
            <li>Validates the input using exceptions</li>
            <li>Throws a custom exception if marks are not between 0 and 100</li>
            <li>Displays a proper error message and continues running until valid data is entered</li>
          </ul>

          <hr />

          <h2>10. Test Your Knowledge:</h2>

          <p>
            Review namespace organization, try/catch/finally roles, catch order,
            and when to use TryParse versus throwing exceptions.
          </p>

          <ol>
            <li>What is a namespace?</li>
            <li>Why do we use namespaces?</li>
            <li>What is an exception?</li>
            <li>What is the purpose of the <code>try</code> block?</li>
            <li>What is the purpose of the <code>finally</code> block?</li>
            <li>Can we have multiple <code>catch</code> blocks?</li>
            <li>How do you create a custom exception?</li>
            <li>Why is <code>int.TryParse()</code> preferred over <code>int.Parse()</code>?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Events, Delegates, and Collections</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}








// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';
// import CodeBlock from '@site/src/components/CodeBlock';

// export default function Session08() {
//   return (
//     <Layout
//       title="Session 08 — Namespaces and Exception Handling"
//       description="Namespaces and Exception Handling in C#"
//     >
//       <CustomLayout>
//         <article className="session-content">
//         <style>{`
//             article code:not(pre code) {
//               background-color: #f4f4f4;
//               color: #d10057;
//               padding: 2px 6px;
//               border-radius: 4px;
//               font-family: Consolas, Monaco, monospace;
//               font-size: 0.9em;
//             }
//           `}</style>
//           <h1>Session 08 — Namespaces and Exception Handling</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Organize code using Namespaces and write crash-proof programs using Exception Handling.</p>
//           <p><strong>Based on:</strong> Official Aptech Book – Session 8</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should be able to:</p>
//           <ul>
//             <li>Define and use namespaces</li>
//             <li>Create nested namespaces</li>
//             <li>Understand the purpose of the <code>using</code> directive</li>
//             <li>Handle exceptions using <code>try</code>, <code>catch</code>, and <code>finally</code></li>
//             <li>Use multiple catch blocks</li>
//             <li>Throw exceptions using <code>throw</code></li>
//             <li>Create custom exception classes</li>
//             <li>Apply best practices for exception handling</li>
//           </ul>

//           <p>
//             This session covers two practical skills: organizing types with
//             namespaces so large projects stay manageable, and handling runtime
//             errors with try/catch so programs fail gracefully instead of
//             crashing.
//           </p>

//           <hr />

//           <h2>1. Namespaces in C#</h2>
//           <p>A namespace is used to organize classes and avoid name conflicts.</p>

//           <p>
//             Every type in C# lives in a namespace (or in the global namespace).
//             The .NET libraries themselves are organized this way:
//             <code>System</code>, <code>System.Collections.Generic</code>,
//             <code>System.IO</code>, and so on. Your application should follow
//             the same idea: group related classes under a clear hierarchy such as
//             <code>Company.Product.Feature</code>.
//           </p>

//           <h3>1.1 Declaring a Namespace</h3>
//           <CodeBlock
//           language="csharp"
//             code={`namespace Aptech.Training
// {
//     public class Student
//     {
//         public string Name { get; set; }
//     }
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             The class <code>Student</code> is fully named
//             <code>Aptech.Training.Student</code>. Outside this namespace you
//             either write the full name or add a <code>using</code> directive.
//           </p>

//           <h3>1.2 Nested Namespaces</h3>
//           <CodeBlock
//           language="csharp"
//             code={`namespace Aptech
// {
//     namespace Training
//     {
//         namespace CSharp
//         {
//             public class Course
//             {
//                 public string Title { get; set; }
//             }
//         }
//     }
// }

// // Fully qualified name
// Aptech.Training.CSharp.Course course = new Aptech.Training.CSharp.Course();`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             You can also write nested namespaces in a single line:
//             <code>namespace Aptech.Training.CSharp {'{'} ... {'}'}</code>.
//             Modern C# also supports file-scoped namespaces
//             (<code>namespace Aptech.Training;</code> at the top of the file),
//             which reduces nesting braces for the whole file.
//           </p>

//           <h3>1.3 using Directive</h3>
//           <CodeBlock
//           language="csharp"
//             code={`using Aptech.Training.CSharp;

// Course course = new Course();
// course.Title = "Programming in C#";`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             <code>using</code> imports a namespace so you can use short type
//             names. If two namespaces define a type with the same name, you can
//             still disambiguate with the full name, or use a namespace alias:
//           </p>
//           <CodeBlock
//           language="csharp"
//             code={`using Training = Aptech.Training.CSharp;
// Training.Course course = new Training.Course();`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <h3>1.4 Why Namespaces are Important</h3>
//           <ul>
//             <li>Prevent name conflicts</li>
//             <li>Organize large projects</li>
//             <li>Make code more readable and maintainable</li>
//           </ul>

//           <p>
//             Without namespaces, two libraries that both define a class named
//             <code>Logger</code> would collide. With namespaces, each lives in
//             its own path and your project stays clear.
//           </p>

//           <hr />

//           <h2>2. Exception Handling</h2>
//           <p>An exception is an unexpected error that occurs during program execution. If not handled, the program crashes.</p>

//           <p>
//             Exceptions are objects that inherit from <code>System.Exception</code>.
//             When something goes wrong (bad input, missing file, division by zero),
//             the runtime creates an exception and searches up the call stack for a
//             matching <code>catch</code>. If none is found, the process terminates.
//             Handling exceptions lets you show a clear message, recover, or clean up
//             resources before continuing or exiting.
//           </p>

//           <h3>2.1 Basic try-catch</h3>
//           <CodeBlock
//           language="csharp"
//             code={`try
// {
//     Console.Write("Enter a number: ");
//     int number = Convert.ToInt32(Console.ReadLine());
//     Console.WriteLine($"You entered: {number}");
// }
// catch (FormatException)
// {
//     Console.WriteLine("Invalid input! Please enter a valid number.");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             Code that might fail goes in <code>try</code>. If
//             <code>Convert.ToInt32</code> receives non-numeric text, it throws
//             <code>FormatException</code>, control jumps to the matching
//             <code>catch</code>, and the program continues instead of crashing.
//             You can capture the exception object as
//             <code>catch (FormatException ex)</code> to read
//             <code>ex.Message</code> or other details.
//           </p>

//           <h3>2.2 Multiple catch Blocks</h3>
//           <CodeBlock
//           language="csharp"
//             code={`try
// {
//     Console.Write("Enter first number: ");
//     int a = Convert.ToInt32(Console.ReadLine());

//     Console.Write("Enter second number: ");
//     int b = Convert.ToInt32(Console.ReadLine());

//     int result = a / b;
//     Console.WriteLine($"Result: {result}");
// }
// catch (FormatException)
// {
//     Console.WriteLine("Please enter valid numbers only.");
// }
// catch (DivideByZeroException)
// {
//     Console.WriteLine("Cannot divide by zero.");
// }
// catch (Exception ex)          // General catch (must be last)
// {
//     Console.WriteLine($"An error occurred: {ex.Message}");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             Order matters: more specific exception types must appear before more
//             general ones. <code>Exception</code> is the base type, so its catch
//             block must be last; otherwise the compiler reports that earlier
//             specific catches are unreachable. Only one catch block runs for a
//             given exception.
//           </p>

//           <h3>2.3 finally Block</h3>
//           <p>The <code>finally</code> block always executes — whether an exception occurs or not.</p>

//           <CodeBlock
//           language="csharp"
//             code={`try
// {
//     Console.WriteLine("Opening file...");
//     // code that may throw exception
// }
// catch (Exception ex)
// {
//     Console.WriteLine($"Error: {ex.Message}");
// }
// finally
// {
//     Console.WriteLine("This will always run (cleanup code).");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             Use <code>finally</code> for cleanup: closing files, disposing
//             connections, or releasing locks. Even if a <code>return</code>
//             happens inside <code>try</code> or <code>catch</code>,
//             <code>finally</code> still runs. For types that implement
//             <code>IDisposable</code>, prefer a <code>using</code> statement,
//             which is syntactic sugar for try/finally with Dispose.
//           </p>

//           <CodeBlock
//           language="csharp"
//             code={`// using statement = try/finally that calls Dispose
// using (var reader = new StreamReader("data.txt"))
// {
//     string line = reader.ReadLine();
//     Console.WriteLine(line);
// } // reader.Dispose() is called here automatically`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <hr />

//           <h2>3. Throwing Exceptions</h2>

//           <p>
//             You can raise exceptions yourself with <code>throw</code> when a
//             method receives invalid input or cannot complete its contract.
//             Prefer standard exception types when they fit
//             (<code>ArgumentException</code>, <code>ArgumentNullException</code>,
//             <code>InvalidOperationException</code>).
//           </p>

//           <CodeBlock
//           language="csharp"
//             code={`public void SetAge(int age)
// {
//     if (age < 0 || age > 120)
//     {
//         throw new ArgumentException("Age must be between 0 and 120");
//     }
//     Console.WriteLine($"Age set to {age}");
// }

// // Usage
// try
// {
//     SetAge(150);
// }
// catch (ArgumentException ex)
// {
//     Console.WriteLine(ex.Message);
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             Callers are responsible for catching (or documenting) exceptions
//             that your method may throw. Do not throw exceptions for normal
//             control flow; use them for unexpected or invalid conditions.
//           </p>

//           <hr />

//           <h2>4. Custom Exception Classes</h2>

//           <p>
//             When a domain-specific error cannot be expressed clearly with a
//             built-in type, define your own exception by inheriting from
//             <code>Exception</code> (or a more specific base). Custom exceptions
//             make catch blocks more precise and error messages more meaningful
//             to callers.
//           </p>

//           <CodeBlock
//           language="csharp"
//             code={`public class InvalidAgeException : Exception
// {
//     public InvalidAgeException(string message) : base(message)
//     {
//     }
// }

// public class Student
// {
//     private int age;

//     public int Age
//     {
//         get { return age; }
//         set
//         {
//             if (value < 15 || value > 60)
//                 throw new InvalidAgeException("Student age must be between 15 and 60");
//             age = value;
//         }
//     }
// }

// // Usage
// try
// {
//     Student s = new Student();
//     s.Age = 10;
// }
// catch (InvalidAgeException ex)
// {
//     Console.WriteLine($"Custom Error: {ex.Message}");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             A fuller custom exception often includes multiple constructors
//             (message only, message + inner exception) so it integrates with
//             the rest of the exception system:
//           </p>
//           <CodeBlock
//           language="csharp"
//             code={`public class InvalidAgeException : Exception
// {
//     public int AttemptedAge { get; }

//     public InvalidAgeException(string message) : base(message) { }

//     public InvalidAgeException(string message, int attemptedAge)
//         : base(message)
//     {
//         AttemptedAge = attemptedAge;
//     }

//     public InvalidAgeException(string message, Exception inner)
//         : base(message, inner) { }
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <hr />

//           <h2>5. Common Exception Types</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Exception</th>
//                 <th>When it occurs</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>FormatException</code></td>
//                 <td>Invalid format (e.g. converting "abc" to int)</td>
//               </tr>
//               <tr>
//                 <td><code>DivideByZeroException</code></td>
//                 <td>Division by zero</td>
//               </tr>
//               <tr>
//                 <td><code>IndexOutOfRangeException</code></td>
//                 <td>Accessing invalid array index</td>
//               </tr>
//               <tr>
//                 <td><code>NullReferenceException</code></td>
//                 <td>Using a null object</td>
//               </tr>
//               <tr>
//                 <td><code>ArgumentException</code></td>
//                 <td>Invalid argument passed to a method</td>
//               </tr>
//               <tr>
//                 <td><code>FileNotFoundException</code></td>
//                 <td>File does not exist</td>
//               </tr>
//             </tbody>
//           </table>

//           <p>
//             Knowing these types helps you write specific catch blocks and choose
//             the right exception to throw. Avoid catching <code>Exception</code>
//             alone when you can handle a more specific type; broad catches can
//             hide bugs.
//           </p>

//           <hr />

//           <h2>6. Best Practices</h2>
//           <ul>
//             <li>Always catch specific exceptions first</li>
//             <li>Never use empty catch blocks</li>
//             <li>Use <code>finally</code> for cleanup (closing files, connections, etc.)</li>
//             <li>Throw meaningful exceptions with clear messages</li>
//             <li>Prefer <code>TryParse</code> over <code>Parse</code> for user input</li>
//           </ul>

//           <p>
//             Empty <code>catch {'{'} {'}'}</code> blocks swallow errors and make
//             debugging hard. At minimum log the exception or rethrow it.
//             <code>TryParse</code> returns false instead of throwing when input
//             is invalid, which is often cleaner for interactive input.
//           </p>

//           <CodeBlock
//           language="csharp"
//             code={`// Recommended way for user input
// Console.Write("Enter age: ");
// if (int.TryParse(Console.ReadLine(), out int age))
// {
//     Console.WriteLine($"Age: {age}");
// }
// else
// {
//     Console.WriteLine("Invalid age entered.");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <hr />

//           <h2>7. Complete Live Example</h2>

//           <p>
//             This example validates arguments, throws appropriate exceptions, and
//             demonstrates multiple catch blocks plus a finally block for a simple
//             bank withdrawal flow.
//           </p>

//           <CodeBlock
//           language="csharp"
//             code={`public class BankAccount
// {
//     public string AccountHolder { get; set; }
//     public double Balance { get; private set; }

//     public BankAccount(string holder, double initialBalance)
//     {
//         if (initialBalance < 0)
//             throw new ArgumentException("Initial balance cannot be negative");

//         AccountHolder = holder;
//         Balance = initialBalance;
//     }

//     public void Withdraw(double amount)
//     {
//         if (amount <= 0)
//             throw new ArgumentException("Withdrawal amount must be positive");

//         if (amount > Balance)
//             throw new InvalidOperationException("Insufficient balance");

//         Balance -= amount;
//         Console.WriteLine($"Withdrawn: {amount:C}. Remaining: {Balance:C}");
//     }
// }

// // Testing
// try
// {
//     BankAccount acc = new BankAccount("Ali Khan", 10000);
//     acc.Withdraw(3000);
//     acc.Withdraw(9000);   // This will throw exception
// }
// catch (ArgumentException ex)
// {
//     Console.WriteLine($"Argument Error: {ex.Message}");
// }
// catch (InvalidOperationException ex)
// {
//     Console.WriteLine($"Operation Error: {ex.Message}");
// }
// catch (Exception ex)
// {
//     Console.WriteLine($"General Error: {ex.Message}");
// }
// finally
// {
//     Console.WriteLine("Transaction process completed.");
// }`}
//           caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

//           <p>
//             The second <code>Withdraw(9000)</code> fails because the remaining
//             balance is only 7000. <code>InvalidOperationException</code> is
//             caught and reported; <code>finally</code> still prints the completion
//             message. Try changing the amounts and the initial balance to see
//             different catch paths run.
//           </p>

//           <hr />

//           <h2>8. Practice Exercises</h2>

//           <p>
//             Practice both namespaces and exception handling. Prefer specific
//             catch blocks and clear error messages.
//           </p>

//           <h3>Exercise 1</h3>
//           <p>Write a program that takes two numbers from the user and performs division. Handle <code>FormatException</code> and <code>DivideByZeroException</code>.</p>

//           <h3>Exercise 2</h3>
//           <p>Create a custom exception called <code>InsufficientBalanceException</code> and use it in a BankAccount class.</p>

//           <h3>Exercise 3</h3>
//           <p>Create a namespace <code>Aptech.Students</code> and place a <code>Student</code> class inside it. Use the class from the main program.</p>

//           <hr />

//           <h2>9. Session Challenge</h2>
//           <p>Create a complete program that:</p>

//           <p>
//             Combine input validation, a custom exception for marks, and a loop
//             that keeps asking until the data is valid — a realistic pattern for
//             console data entry.
//           </p>

//           <ul>
//             <li>Asks the user for student name, age, and marks</li>
//             <li>Validates the input using exceptions</li>
//             <li>Throws a custom exception if marks are not between 0 and 100</li>
//             <li>Displays a proper error message and continues running until valid data is entered</li>
//           </ul>

//           <hr />

//           <h2>10. Session Quiz</h2>

//           <p>
//             Review namespace organization, try/catch/finally roles, catch order,
//             and when to use TryParse versus throwing exceptions.
//           </p>

//           <ol>
//             <li>What is a namespace?</li>
//             <li>Why do we use namespaces?</li>
//             <li>What is an exception?</li>
//             <li>What is the purpose of the <code>try</code> block?</li>
//             <li>What is the purpose of the <code>finally</code> block?</li>
//             <li>Can we have multiple <code>catch</code> blocks?</li>
//             <li>How do you create a custom exception?</li>
//             <li>Why is <code>int.TryParse()</code> preferred over <code>int.Parse()</code>?</li>
//           </ol>

//           <hr />

//           <p><strong>Next Session:</strong> Events, Delegates, and Collections</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
