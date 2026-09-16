import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session05() {
  return (
    <Layout
      title="Session 05 — Inheritance and Polymorphism"
      description="Inheritance, Method Overriding, Sealed Classes and Polymorphism in C#"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 05 — Inheritance and Polymorphism</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn how classes can inherit from other classes and how polymorphism allows objects to behave differently.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 5</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and explain Inheritance</li>
            <li>Create a base class and derived class</li>
            <li>Use the <code>base</code> keyword</li>
            <li>Override methods using <code>virtual</code> and <code>override</code></li>
            <li>Understand sealed classes</li>
            <li>Explain and demonstrate Polymorphism</li>
          </ul>

          <hr />

          <h2>1. What is Inheritance?</h2>
          <p>Inheritance is the process of creating a new class from an existing class. The new class (derived/child class) inherits the members of the existing class (base/parent class).</p>

          <pre>
            <code>{`// Real-world example
Base Class     →  Person
Derived Classes →  Student, Teacher, Employee`}</code>
          </pre>

          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Code reusability</li>
            <li>Better organization</li>
            <li>Easier maintenance</li>
          </ul>

          <hr />

          <h2>2. Basic Inheritance Syntax</h2>

          <pre>
            <code>{`public class Person                     // Base class
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Display()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}

public class Student : Person           // Derived class
{
    public string Course { get; set; }

    public void Study()
    {
        Console.WriteLine($"{Name} is studying {Course}");
    }
}`}</code>
          </pre>

          <h3>Using the classes</h3>
          <pre>
            <code>{`Student s1 = new Student();
s1.Name = "Ali";
s1.Age = 20;
s1.Course = "C# Programming";

s1.Display();   // Inherited method
s1.Study();     // Own method`}</code>
          </pre>

          <hr />

          <h2>3. Calling Base Class Constructor</h2>
          <p>Constructors are not inherited. We use the <code>base</code> keyword to call the parent constructor.</p>

          <pre>
            <code>{`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

public class Student : Person
{
    public string Course { get; set; }

    public Student(string name, int age, string course) : base(name, age)
    {
        Course = course;
    }
}

// Usage
Student s1 = new Student("Ali", 21, "C#");`}</code>
          </pre>

          <hr />

          <h2>4. Method Overriding (virtual + override)</h2>
          <p>When a derived class wants to provide its own version of a method that exists in the base class, we use method overriding.</p>

          <pre>
            <code>{`public class Person
{
    public string Name { get; set; }

    // Mark method as virtual so it can be overridden
    public virtual void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}.");
    }
}

public class Student : Person
{
    public string Course { get; set; }

    // Override the method
    public override void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name} and I study {Course}.");
    }
}

public class Teacher : Person
{
    public string Subject { get; set; }

    public override void Introduce()
    {
        Console.WriteLine($"Hello, I am {Name}, your {Subject} teacher.");
    }
}`}</code>
          </pre>

          <h3>Testing Polymorphism</h3>
          <pre>
            <code>{`Person p1 = new Person { Name = "Sara" };
Person p2 = new Student { Name = "Ali", Course = "C#" };
Person p3 = new Teacher { Name = "Ahmed", Subject = "Mathematics" };

p1.Introduce();   // Hi, I am Sara.
p2.Introduce();   // Hi, I am Ali and I study C#.
p3.Introduce();   // Hello, I am Ahmed, your Mathematics teacher.`}</code>
          </pre>

          <hr />

          <h2>5. Using the base Keyword inside Overridden Method</h2>

          <pre>
            <code>{`public class Student : Person
{
    public string Course { get; set; }

    public override void Introduce()
    {
        base.Introduce();   // Call the original method first
        Console.WriteLine($"I am currently studying {Course}.");
    }
}`}</code>
          </pre>

          <hr />

          <h2>6. Sealed Classes</h2>
          <p>A <code>sealed</code> class cannot be inherited by any other class.</p>

          <pre>
            <code>{`public sealed class FinalClass
{
    public void Show()
    {
        Console.WriteLine("This class cannot be inherited.");
    }
}

// This will give an error
// public class Child : FinalClass { }`}</code>
          </pre>

          <p><strong>When to use sealed:</strong></p>
          <ul>
            <li>When you want to prevent further inheritance</li>
            <li>For security or design reasons</li>
          </ul>

          <hr />

          <h2>7. Complete Live Example</h2>

          <pre>
            <code>{`public class Animal
{
    public string Name { get; set; }

    public Animal(string name)
    {
        Name = name;
    }

    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic animal sound");
    }

    public virtual void Display()
    {
        Console.WriteLine($"Animal Name: {Name}");
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }

    public Dog(string name, string breed) : base(name)
    {
        Breed = breed;
    }

    public override void MakeSound()
    {
        Console.WriteLine("Woof! Woof!");
    }

    public override void Display()
    {
        base.Display();
        Console.WriteLine($"Breed: {Breed}");
    }
}

public class Cat : Animal
{
    public Cat(string name) : base(name) { }

    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Testing
Animal a1 = new Dog("Buddy", "German Shepherd");
Animal a2 = new Cat("Whiskers");

a1.MakeSound();
a1.Display();

Console.WriteLine();

a2.MakeSound();
a2.Display();`}</code>
          </pre>

          <hr />

          <h2>8. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a base class <code>Vehicle</code> with properties Brand and Speed, and a virtual method <code>Start()</code>.  
Then create two derived classes: <code>Car</code> and <code>Motorcycle</code> that override the <code>Start()</code> method.</p>

          <h3>Exercise 2</h3>
          <p>Create a class hierarchy:</p>
          <ul>
            <li><code>Employee</code> (base) → Name, Salary, virtual method CalculateBonus()</li>
            <li><code>Manager</code> → overrides CalculateBonus() (20% of salary)</li>
            <li><code>Developer</code> → overrides CalculateBonus() (10% of salary)</li>
          </ul>

          <h3>Exercise 3</h3>
          <p>Create a sealed class called <code>MathHelper</code> with a static method to calculate the square of a number.</p>

          <hr />

          <h2>9. Session Challenge</h2>
          <p>Build a simple School System:</p>
          <ul>
            <li>Base class: <code>Person</code> (Name, Age, virtual Introduce())</li>
            <li>Derived: <code>Student</code> (RollNo, Course)</li>
            <li>Derived: <code>Teacher</code> (EmployeeId, Subject)</li>
          </ul>
          <p>Create objects of both types and store them in a <code>List&lt;Person&gt;</code>.  
Loop through the list and call <code>Introduce()</code> on each object.</p>

          <hr />

          <h2>10. Session Quiz</h2>
          <ol>
            <li>What is Inheritance?</li>
            <li>What symbol is used for inheritance in C#?</li>
            <li>Are private members inherited?</li>
            <li>What is the purpose of the <code>virtual</code> keyword?</li>
            <li>What is the purpose of the <code>override</code> keyword?</li>
            <li>What does the <code>base</code> keyword do?</li>
            <li>What is a sealed class?</li>
            <li>What is Polymorphism? Give one example.</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Abstract Classes and Interfaces</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}





// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session05() {
//   return (
//     <Layout
//       title="Session 05 — Methods, Parameters & Recursion"
//       description="Methods, Parameters & Recursion"
//     >
//       <CustomLayout>
//         <article className="session-content">
//           <h1>Session 05 — Methods, Parameters & Recursion</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Writing reusable, clean, and professional code using methods. Introduction to recursion.</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should be able to:</p>
//           <ul>
//             <li>Understand what methods are and why we use them</li>
//             <li>Declare and call methods</li>
//             <li>Work with parameters and return values</li>
//             <li>Use <code>void</code> methods</li>
//             <li>Apply method overloading</li>
//             <li>Use optional parameters and named arguments</li>
//             <li>Write local functions</li>
//             <li>Understand and implement basic recursion</li>
//             <li>Avoid common mistakes with methods and recursion</li>
//             <li>Write cleaner, more maintainable code</li>
//           </ul>

//           <hr />

//           <h2>1. Why Do We Need Methods?</h2>
//           <p>Without methods, your code quickly becomes long, repetitive, and hard to maintain.</p>

//           <p><strong>Problems without methods:</strong></p>
//           <ul>
//             <li>Same logic copied in many places</li>
//             <li>Difficult to read</li>
//             <li>Hard to fix bugs (you have to change the code in multiple places)</li>
//             <li>Almost impossible to test individual pieces</li>
//           </ul>

//           <p><strong>Benefits of methods:</strong></p>
//           <ul>
//             <li>Reusability</li>
//             <li>Better organization</li>
//             <li>Easier testing</li>
//             <li>Cleaner and more professional code</li>
//             <li>Team collaboration becomes easier</li>
//           </ul>

//           <hr />

//           <h2>2. Basic Method Syntax</h2>
//           <pre>
//             <code>{`returnType MethodName(parameterList)
// {
//     // method body
//     return value;   // if returnType is not void
// }`}</code>
//           </pre>

//           <h3>Example – Simple Method</h3>
//           <pre>
//             <code>{`void SayHello()
// {
//     Console.WriteLine("Hello from a method!");
// }

// // Calling the method
// SayHello();`}</code>
//           </pre>

//           <h3>Example – Method with Parameters and Return Value</h3>
//           <pre>
//             <code>{`int Add(int a, int b)
// {
//     return a + b;
// }

// int result = Add(10, 20);
// Console.WriteLine(result);   // 30`}</code>
//           </pre>

//           <hr />

//           <h2>3. void Methods</h2>
//           <p>Use <code>void</code> when a method performs an action but does not return a value.</p>

//           <pre>
//             <code>{`void PrintLine(string message)
// {
//     Console.WriteLine(message);
// }

// PrintLine("Welcome to Session 5");`}</code>
//           </pre>

//           <hr />

//           <h2>4. Parameters</h2>

//           <h3>Passing Values</h3>
//           <pre>
//             <code>{`void Greet(string name)
// {
//     Console.WriteLine($"Hello, {name}!");
// }

// Greet("Ali");
// Greet("Sara");`}</code>
//           </pre>

//           <h3>Multiple Parameters</h3>
//           <pre>
//             <code>{`void DisplayStudent(string name, int age, string city)
// {
//     Console.WriteLine($"Name: {name}, Age: {age}, City: {city}");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>5. Return Values</h2>
//           <p>A method can return only one value (of the specified type).</p>

//           <pre>
//             <code>{`double CalculateAverage(double a, double b, double c)
// {
//     return (a + b + c) / 3;
// }

// double avg = CalculateAverage(80, 90, 85);
// Console.WriteLine($"Average = {avg}");`}</code>
//           </pre>

//           <blockquote>
//             <strong>Note:</strong> If you need to return multiple values, you can use tuples, <code>out</code> parameters, or create a class (we will cover these later).
//           </blockquote>

//           <hr />

//           <h2>6. Method Overloading</h2>
//           <p>You can have multiple methods with the same name as long as their parameter lists are different.</p>

//           <pre>
//             <code>{`int Add(int a, int b)
// {
//     return a + b;
// }

// double Add(double a, double b)
// {
//     return a + b;
// }

// int Add(int a, int b, int c)
// {
//     return a + b + c;
// }`}</code>
//           </pre>

//           <p>The compiler decides which version to call based on the arguments you pass.</p>

//           <hr />

//           <h2>7. Optional Parameters</h2>
//           <p>You can give parameters default values.</p>

//           <pre>
//             <code>{`void Log(string message, string level = "Info")
// {
//     Console.WriteLine($"[{level}] {message}");
// }

// Log("Application started");               // uses default "Info"
// Log("Something went wrong", "Error");`}</code>
//           </pre>

//           <p><strong>Rules:</strong></p>
//           <ul>
//             <li>Optional parameters must come after required parameters</li>
//             <li>You can have multiple optional parameters</li>
//           </ul>

//           <hr />

//           <h2>8. Named Arguments</h2>
//           <p>You can specify arguments by name (very useful with optional parameters).</p>

//           <pre>
//             <code>{`void CreateUser(string name, int age, string city = "Karachi", bool isActive = true)
// {
//     Console.WriteLine($"{name}, {age}, {city}, Active: {isActive}");
// }

// // Using named arguments
// CreateUser(name: "Ali", age: 22);
// CreateUser(age: 25, name: "Sara", isActive: false);
// CreateUser("Omar", 30, city: "Lahore");`}</code>
//           </pre>

//           <hr />

//           <h2>9. Local Functions (Modern C#)</h2>
//           <p>You can declare a function inside another method. Useful for helper logic that is only needed in one place.</p>

//           <pre>
//             <code>{`void ProcessNumbers()
// {
//     int[] numbers = { 1, 2, 3, 4, 5 };

//     int Square(int x)           // local function
//     {
//         return x * x;
//     }

//     foreach (int n in numbers)
//     {
//         Console.WriteLine(Square(n));
//     }
// }`}</code>
//           </pre>

//           <hr />

//           <h2>10. Recursion – Introduction</h2>
//           <p>Recursion is when a method calls itself.</p>

//           <p><strong>Every recursive method must have:</strong></p>
//           <ul>
//             <li><strong>Base case</strong> → the condition that stops the recursion</li>
//             <li><strong>Recursive case</strong> → the method calls itself with a smaller problem</li>
//           </ul>

//           <h3>Classic Example – Factorial</h3>
//           <pre>
//             <code>{`int Factorial(int n)
// {
//     // Base case
//     if (n <= 1)
//         return 1;

//     // Recursive case
//     return n * Factorial(n - 1);
// }

// Console.WriteLine(Factorial(5));   // 120`}</code>
//           </pre>

//           <p><strong>How it works (Factorial 5):</strong></p>
//           <pre>
//             <code>{`Factorial(5) → 5 * Factorial(4)
// Factorial(4) → 4 * Factorial(3)
// Factorial(3) → 3 * Factorial(2)
// Factorial(2) → 2 * Factorial(1)
// Factorial(1) → 1`}</code>
//           </pre>

//           <h3>Another Example – Sum of Numbers from 1 to N</h3>
//           <pre>
//             <code>{`int Sum(int n)
// {
//     if (n <= 0)
//         return 0;

//     return n + Sum(n - 1);
// }`}</code>
//           </pre>

//           <h3>Fibonacci (Recursive Version)</h3>
//           <pre>
//             <code>{`int Fibonacci(int n)
// {
//     if (n <= 1)
//         return n;

//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }`}</code>
//           </pre>

//           <blockquote>
//             <strong>Warning:</strong> The simple recursive Fibonacci is very slow for large <code>n</code> because of repeated calculations.
//           </blockquote>

//           <hr />

//           <h2>11. Recursion vs Loops</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Aspect</th>
//                 <th>Recursion</th>
//                 <th>Loops</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><strong>Readability</strong></td>
//                 <td>Often more elegant for some problems</td>
//                 <td>Usually clearer for simple repetition</td>
//               </tr>
//               <tr>
//                 <td><strong>Performance</strong></td>
//                 <td>Can be slower + risk of stack overflow</td>
//                 <td>Generally more efficient</td>
//               </tr>
//               <tr>
//                 <td><strong>Memory</strong></td>
//                 <td>Uses call stack</td>
//                 <td>Uses constant extra memory</td>
//               </tr>
//               <tr>
//                 <td><strong>Best for</strong></td>
//                 <td>Tree/graph problems, divide-and-conquer</td>
//                 <td>Most everyday repetition</td>
//               </tr>
//             </tbody>
//           </table>

//           <p><strong>Rule of thumb:</strong> Prefer loops unless recursion makes the solution significantly clearer.</p>

//           <hr />

//           <h2>12. Common Mistakes</h2>
//           <ul>
//             <li>Forgetting the base case → infinite recursion → <code>StackOverflowException</code></li>
//             <li>Not making the problem smaller in the recursive call</li>
//             <li>Using too many parameters or deep nesting</li>
//             <li>Returning the wrong type</li>
//             <li>Modifying parameters unexpectedly</li>
//           </ul>

//           <hr />

//           <h2>13. Practical Mini Projects</h2>

//           <h3>Mini Project 1 – Simple Calculator using Methods</h3>
//           <pre>
//             <code>{`int Add(int a, int b) => a + b;
// int Subtract(int a, int b) => a - b;
// int Multiply(int a, int b) => a * b;
// double Divide(int a, int b) => b != 0 ? (double)a / b : 0;

// Console.Write("Enter first number: ");
// int x = int.Parse(Console.ReadLine());

// Console.Write("Enter second number: ");
// int y = int.Parse(Console.ReadLine());

// Console.WriteLine($"Sum = {Add(x, y)}");
// Console.WriteLine($"Difference = {Subtract(x, y)}");
// Console.WriteLine($"Product = {Multiply(x, y)}");
// Console.WriteLine($"Quotient = {Divide(x, y)}");`}</code>
//           </pre>

//           <h3>Mini Project 2 – Grade Calculator with Methods</h3>
//           <pre>
//             <code>{`string GetGrade(int marks)
// {
//     if (marks >= 80) return "A+";
//     if (marks >= 70) return "A";
//     if (marks >= 60) return "B";
//     if (marks >= 50) return "C";
//     return "F";
// }

// bool IsPass(int marks) => marks >= 50;`}</code>
//           </pre>

//           <hr />

//           <h2>14. Session 5 Challenge</h2>
//           <h3>Challenge: Number Utility Library</h3>
//           <p>Create a program that offers the following menu using methods:</p>
//           <pre>
//             <code>{`1. Calculate Factorial (use recursion)
// 2. Calculate Sum from 1 to N (use recursion)
// 3. Generate Fibonacci sequence up to N terms
// 4. Check if a number is Prime (use a method)
// 5. Power function (base^exponent) using recursion
// 6. Exit`}</code>
//           </pre>

//           <p><strong>Requirements:</strong></p>
//           <ul>
//             <li>Each feature must be implemented in its own method</li>
//             <li>Use recursion for Factorial, Sum, and Power</li>
//             <li>Validate user input</li>
//             <li>Keep showing the menu until the user exits</li>
//           </ul>

//           <hr />

//           <h2>15. Exercises</h2>

//           <h3>Beginner</h3>
//           <ol>
//             <li>Write a method <code>PrintHello(string name)</code> that prints a greeting.</li>
//             <li>Write a method <code>IsEven(int number)</code> that returns true or false.</li>
//             <li>Write a method that returns the larger of two numbers.</li>
//           </ol>

//           <h3>Intermediate</h3>
//           <ol>
//             <li>Write an overloaded <code>Area</code> method (for rectangle and circle).</li>
//             <li>Write a method with optional parameters to display a person’s info.</li>
//             <li>Write a recursive method that prints numbers from N down to 1.</li>
//           </ol>

//           <h3>Advanced</h3>
//           <ol>
//             <li>Write a recursive method to calculate the power of a number (x<sup>y</sup>).</li>
//             <li>Write a recursive method to reverse a string.</li>
//             <li>Write a method that returns both the minimum and maximum of an array (using a tuple).</li>
//           </ol>

//           <hr />

//           <h2>16. Session 5 Quiz</h2>
//           <ol>
//             <li>What is the purpose of methods?</li>
//             <li>What does <code>void</code> mean?</li>
//             <li>What is method overloading?</li>
//             <li>What are optional parameters?</li>
//             <li>What are named arguments?</li>
//             <li>What is a local function?</li>
//             <li>What are the two essential parts of a recursive method?</li>
//             <li>What happens if you forget the base case?</li>
//             <li>When should you prefer recursion over a loop?</li>
//             <li>Can a method return more than one value directly? How can we solve this?</li>
//           </ol>
//           <hr />

//           <p><strong>Next up (Session 06):</strong> Arrays & Strings.</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
