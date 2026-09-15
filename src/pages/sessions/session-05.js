import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session05() {
  return (
    <Layout
      title="Session 05 — Methods, Parameters & Recursion"
      description="Methods, Parameters & Recursion"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 05 — Methods, Parameters & Recursion</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Writing reusable, clean, and professional code using methods. Introduction to recursion.</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Understand what methods are and why we use them</li>
            <li>Declare and call methods</li>
            <li>Work with parameters and return values</li>
            <li>Use <code>void</code> methods</li>
            <li>Apply method overloading</li>
            <li>Use optional parameters and named arguments</li>
            <li>Write local functions</li>
            <li>Understand and implement basic recursion</li>
            <li>Avoid common mistakes with methods and recursion</li>
            <li>Write cleaner, more maintainable code</li>
          </ul>

          <hr />

          <h2>1. Why Do We Need Methods?</h2>
          <p>Without methods, your code quickly becomes long, repetitive, and hard to maintain.</p>

          <p><strong>Problems without methods:</strong></p>
          <ul>
            <li>Same logic copied in many places</li>
            <li>Difficult to read</li>
            <li>Hard to fix bugs (you have to change the code in multiple places)</li>
            <li>Almost impossible to test individual pieces</li>
          </ul>

          <p><strong>Benefits of methods:</strong></p>
          <ul>
            <li>Reusability</li>
            <li>Better organization</li>
            <li>Easier testing</li>
            <li>Cleaner and more professional code</li>
            <li>Team collaboration becomes easier</li>
          </ul>

          <hr />

          <h2>2. Basic Method Syntax</h2>
          <pre>
            <code>{`returnType MethodName(parameterList)
{
    // method body
    return value;   // if returnType is not void
}`}</code>
          </pre>

          <h3>Example – Simple Method</h3>
          <pre>
            <code>{`void SayHello()
{
    Console.WriteLine("Hello from a method!");
}

// Calling the method
SayHello();`}</code>
          </pre>

          <h3>Example – Method with Parameters and Return Value</h3>
          <pre>
            <code>{`int Add(int a, int b)
{
    return a + b;
}

int result = Add(10, 20);
Console.WriteLine(result);   // 30`}</code>
          </pre>

          <hr />

          <h2>3. void Methods</h2>
          <p>Use <code>void</code> when a method performs an action but does not return a value.</p>

          <pre>
            <code>{`void PrintLine(string message)
{
    Console.WriteLine(message);
}

PrintLine("Welcome to Session 5");`}</code>
          </pre>

          <hr />

          <h2>4. Parameters</h2>

          <h3>Passing Values</h3>
          <pre>
            <code>{`void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

Greet("Ali");
Greet("Sara");`}</code>
          </pre>

          <h3>Multiple Parameters</h3>
          <pre>
            <code>{`void DisplayStudent(string name, int age, string city)
{
    Console.WriteLine($"Name: {name}, Age: {age}, City: {city}");
}`}</code>
          </pre>

          <hr />

          <h2>5. Return Values</h2>
          <p>A method can return only one value (of the specified type).</p>

          <pre>
            <code>{`double CalculateAverage(double a, double b, double c)
{
    return (a + b + c) / 3;
}

double avg = CalculateAverage(80, 90, 85);
Console.WriteLine($"Average = {avg}");`}</code>
          </pre>

          <blockquote>
            <strong>Note:</strong> If you need to return multiple values, you can use tuples, <code>out</code> parameters, or create a class (we will cover these later).
          </blockquote>

          <hr />

          <h2>6. Method Overloading</h2>
          <p>You can have multiple methods with the same name as long as their parameter lists are different.</p>

          <pre>
            <code>{`int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}

int Add(int a, int b, int c)
{
    return a + b + c;
}`}</code>
          </pre>

          <p>The compiler decides which version to call based on the arguments you pass.</p>

          <hr />

          <h2>7. Optional Parameters</h2>
          <p>You can give parameters default values.</p>

          <pre>
            <code>{`void Log(string message, string level = "Info")
{
    Console.WriteLine($"[{level}] {message}");
}

Log("Application started");               // uses default "Info"
Log("Something went wrong", "Error");`}</code>
          </pre>

          <p><strong>Rules:</strong></p>
          <ul>
            <li>Optional parameters must come after required parameters</li>
            <li>You can have multiple optional parameters</li>
          </ul>

          <hr />

          <h2>8. Named Arguments</h2>
          <p>You can specify arguments by name (very useful with optional parameters).</p>

          <pre>
            <code>{`void CreateUser(string name, int age, string city = "Karachi", bool isActive = true)
{
    Console.WriteLine($"{name}, {age}, {city}, Active: {isActive}");
}

// Using named arguments
CreateUser(name: "Ali", age: 22);
CreateUser(age: 25, name: "Sara", isActive: false);
CreateUser("Omar", 30, city: "Lahore");`}</code>
          </pre>

          <hr />

          <h2>9. Local Functions (Modern C#)</h2>
          <p>You can declare a function inside another method. Useful for helper logic that is only needed in one place.</p>

          <pre>
            <code>{`void ProcessNumbers()
{
    int[] numbers = { 1, 2, 3, 4, 5 };

    int Square(int x)           // local function
    {
        return x * x;
    }

    foreach (int n in numbers)
    {
        Console.WriteLine(Square(n));
    }
}`}</code>
          </pre>

          <hr />

          <h2>10. Recursion – Introduction</h2>
          <p>Recursion is when a method calls itself.</p>

          <p><strong>Every recursive method must have:</strong></p>
          <ul>
            <li><strong>Base case</strong> → the condition that stops the recursion</li>
            <li><strong>Recursive case</strong> → the method calls itself with a smaller problem</li>
          </ul>

          <h3>Classic Example – Factorial</h3>
          <pre>
            <code>{`int Factorial(int n)
{
    // Base case
    if (n <= 1)
        return 1;

    // Recursive case
    return n * Factorial(n - 1);
}

Console.WriteLine(Factorial(5));   // 120`}</code>
          </pre>

          <p><strong>How it works (Factorial 5):</strong></p>
          <pre>
            <code>{`Factorial(5) → 5 * Factorial(4)
Factorial(4) → 4 * Factorial(3)
Factorial(3) → 3 * Factorial(2)
Factorial(2) → 2 * Factorial(1)
Factorial(1) → 1`}</code>
          </pre>

          <h3>Another Example – Sum of Numbers from 1 to N</h3>
          <pre>
            <code>{`int Sum(int n)
{
    if (n <= 0)
        return 0;

    return n + Sum(n - 1);
}`}</code>
          </pre>

          <h3>Fibonacci (Recursive Version)</h3>
          <pre>
            <code>{`int Fibonacci(int n)
{
    if (n <= 1)
        return n;

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}`}</code>
          </pre>

          <blockquote>
            <strong>Warning:</strong> The simple recursive Fibonacci is very slow for large <code>n</code> because of repeated calculations.
          </blockquote>

          <hr />

          <h2>11. Recursion vs Loops</h2>
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Recursion</th>
                <th>Loops</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Readability</strong></td>
                <td>Often more elegant for some problems</td>
                <td>Usually clearer for simple repetition</td>
              </tr>
              <tr>
                <td><strong>Performance</strong></td>
                <td>Can be slower + risk of stack overflow</td>
                <td>Generally more efficient</td>
              </tr>
              <tr>
                <td><strong>Memory</strong></td>
                <td>Uses call stack</td>
                <td>Uses constant extra memory</td>
              </tr>
              <tr>
                <td><strong>Best for</strong></td>
                <td>Tree/graph problems, divide-and-conquer</td>
                <td>Most everyday repetition</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Rule of thumb:</strong> Prefer loops unless recursion makes the solution significantly clearer.</p>

          <hr />

          <h2>12. Common Mistakes</h2>
          <ul>
            <li>Forgetting the base case → infinite recursion → <code>StackOverflowException</code></li>
            <li>Not making the problem smaller in the recursive call</li>
            <li>Using too many parameters or deep nesting</li>
            <li>Returning the wrong type</li>
            <li>Modifying parameters unexpectedly</li>
          </ul>

          <hr />

          <h2>13. Practical Mini Projects</h2>

          <h3>Mini Project 1 – Simple Calculator using Methods</h3>
          <pre>
            <code>{`int Add(int a, int b) => a + b;
int Subtract(int a, int b) => a - b;
int Multiply(int a, int b) => a * b;
double Divide(int a, int b) => b != 0 ? (double)a / b : 0;

Console.Write("Enter first number: ");
int x = int.Parse(Console.ReadLine());

Console.Write("Enter second number: ");
int y = int.Parse(Console.ReadLine());

Console.WriteLine($"Sum = {Add(x, y)}");
Console.WriteLine($"Difference = {Subtract(x, y)}");
Console.WriteLine($"Product = {Multiply(x, y)}");
Console.WriteLine($"Quotient = {Divide(x, y)}");`}</code>
          </pre>

          <h3>Mini Project 2 – Grade Calculator with Methods</h3>
          <pre>
            <code>{`string GetGrade(int marks)
{
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    return "F";
}

bool IsPass(int marks) => marks >= 50;`}</code>
          </pre>

          <hr />

          <h2>14. Session 5 Challenge</h2>
          <h3>Challenge: Number Utility Library</h3>
          <p>Create a program that offers the following menu using methods:</p>
          <pre>
            <code>{`1. Calculate Factorial (use recursion)
2. Calculate Sum from 1 to N (use recursion)
3. Generate Fibonacci sequence up to N terms
4. Check if a number is Prime (use a method)
5. Power function (base^exponent) using recursion
6. Exit`}</code>
          </pre>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Each feature must be implemented in its own method</li>
            <li>Use recursion for Factorial, Sum, and Power</li>
            <li>Validate user input</li>
            <li>Keep showing the menu until the user exits</li>
          </ul>

          <hr />

          <h2>15. Exercises</h2>

          <h3>Beginner</h3>
          <ol>
            <li>Write a method <code>PrintHello(string name)</code> that prints a greeting.</li>
            <li>Write a method <code>IsEven(int number)</code> that returns true or false.</li>
            <li>Write a method that returns the larger of two numbers.</li>
          </ol>

          <h3>Intermediate</h3>
          <ol>
            <li>Write an overloaded <code>Area</code> method (for rectangle and circle).</li>
            <li>Write a method with optional parameters to display a person’s info.</li>
            <li>Write a recursive method that prints numbers from N down to 1.</li>
          </ol>

          <h3>Advanced</h3>
          <ol>
            <li>Write a recursive method to calculate the power of a number (x<sup>y</sup>).</li>
            <li>Write a recursive method to reverse a string.</li>
            <li>Write a method that returns both the minimum and maximum of an array (using a tuple).</li>
          </ol>

          <hr />

          <h2>16. Session 5 Quiz</h2>
          <ol>
            <li>What is the purpose of methods?</li>
            <li>What does <code>void</code> mean?</li>
            <li>What is method overloading?</li>
            <li>What are optional parameters?</li>
            <li>What are named arguments?</li>
            <li>What is a local function?</li>
            <li>What are the two essential parts of a recursive method?</li>
            <li>What happens if you forget the base case?</li>
            <li>When should you prefer recursion over a loop?</li>
            <li>Can a method return more than one value directly? How can we solve this?</li>
          </ol>
          <hr />

          <p><strong>Next up (Session 06):</strong> Arrays & Strings.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
