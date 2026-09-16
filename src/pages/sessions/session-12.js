import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session12() {
  return (
    <Layout
      title="Session 12 — Advanced Concepts in C#"
      description="Anonymous Methods, Lambda Expressions, Extension Methods, Nullable Types and more"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 12 — Advanced Concepts in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn modern and advanced features of C# that make code cleaner, shorter and more powerful.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 12</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Use Anonymous Methods</li>
            <li>Write Lambda Expressions</li>
            <li>Create and use Extension Methods</li>
            <li>Work with Nullable Types</li>
            <li>Understand Partial Classes and Methods</li>
            <li>Use built-in generic delegates (Func, Action, Predicate)</li>
            <li>Write simple LINQ Query Expressions</li>
          </ul>

          <hr />

          <h2>1. Anonymous Methods</h2>
          <p>An anonymous method is a method without a name. It is defined using the <code>delegate</code> keyword.</p>

          <pre>
            <code>{`// Normal way
public delegate void PrintDelegate(string message);

PrintDelegate print = delegate(string msg)
{
    Console.WriteLine(msg);
};

print("Hello from Anonymous Method");`}</code>
          </pre>

          <hr />

          <h2>2. Lambda Expressions</h2>
          <p>Lambda expressions are a shorter and modern way to write anonymous methods.</p>

          <pre>
            <code>{`// Lambda expression
PrintDelegate print = (msg) => Console.WriteLine(msg);
print("Hello from Lambda");

// With multiple parameters
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(10, 20));     // 30

// With body
Func<int, int> square = x =>
{
    return x * x;
};
Console.WriteLine(square(5));       // 25`}</code>
          </pre>

          <h3>Common Built-in Delegates</h3>
          <table>
            <thead>
              <tr>
                <th>Delegate</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Action</code></td>
                <td>Method that returns void</td>
              </tr>
              <tr>
                <td><code>Action&lt;T&gt;</code></td>
                <td>Method that takes one parameter and returns void</td>
              </tr>
              <tr>
                <td><code>Func&lt;T, TResult&gt;</code></td>
                <td>Method that takes parameters and returns a value</td>
              </tr>
              <tr>
                <td><code>Predicate&lt;T&gt;</code></td>
                <td>Method that returns true/false</td>
              </tr>
            </tbody>
          </table>

          <pre>
            <code>{`Action<string> greet = name => Console.WriteLine($"Hello {name}");
greet("Ali");

Func<int, int, int> multiply = (a, b) => a * b;
Console.WriteLine(multiply(5, 4));

Predicate<int> isEven = x => x % 2 == 0;
Console.WriteLine(isEven(10));     // True`}</code>
          </pre>

          <hr />

          <h2>3. Extension Methods</h2>
          <p>Extension methods allow you to add new methods to existing types without modifying them.</p>

          <pre>
            <code>{`public static class StringExtensions
{
    public static bool IsCapitalized(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return false;

        return char.IsUpper(str[0]);
    }

    public static string ToTitleCase(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return str;

        return char.ToUpper(str[0]) + str.Substring(1).ToLower();
    }
}

// Usage
string name = "ali";
Console.WriteLine(name.IsCapitalized());     // False
Console.WriteLine(name.ToTitleCase());       // Ali`}</code>
          </pre>

          <hr />

          <h2>4. Nullable Types</h2>
          <p>Value types (int, double, bool, etc.) normally cannot be null. Nullable types allow them to hold null.</p>

          <pre>
            <code>{`int? age = null;               // Nullable int
double? salary = 45000.50;

if (age.HasValue)
{
    Console.WriteLine($"Age: {age.Value}");
}
else
{
    Console.WriteLine("Age is not set");
}

// Null-coalescing operator
int finalAge = age ?? 18;      // If age is null, use 18
Console.WriteLine(finalAge);`}</code>
          </pre>

          <hr />

          <h2>5. Partial Classes and Methods</h2>
          <p>Partial classes allow a class to be split into multiple files.</p>

          <pre>
            <code>{`// File 1: Student.Part1.cs
public partial class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// File 2: Student.Part2.cs
public partial class Student
{
    public void Display()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}`}</code>
          </pre>

          <hr />

          <h2>6. LINQ Query Expressions (Introduction)</h2>
          <p>LINQ provides a powerful way to query collections.</p>

          <pre>
            <code>{`List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query Syntax
var evenNumbers = from n in numbers
                  where n % 2 == 0
                  select n;

// Method Syntax (more common)
var evenNumbers2 = numbers.Where(n => n % 2 == 0);

foreach (var num in evenNumbers)
{
    Console.Write(num + " ");   // 2 4 6 8 10
}`}</code>
          </pre>

          <h3>More LINQ Examples</h3>
          <pre>
            <code>{`List<string> names = new List<string> { "Ali", "Sara", "Ahmed", "Fatima", "Usman" };

var result = names.Where(n => n.StartsWith("A"))
                  .OrderBy(n => n);

foreach (var name in result)
{
    Console.WriteLine(name);
}`}</code>
          </pre>

          <hr />

          <h2>7. Complete Live Example</h2>

          <pre>
            <code>{`public static class NumberExtensions
{
    public static bool IsEven(this int number)
    {
        return number % 2 == 0;
    }

    public static int Square(this int number)
    {
        return number * number;
    }
}

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // Using Lambda + Extension Methods + LINQ
        var result = numbers
                        .Where(n => n.IsEven())
                        .Select(n => n.Square());

        Console.WriteLine("Squares of even numbers:");
        foreach (var item in result)
        {
            Console.Write(item + " ");   // 4 16 36 64 100
        }
    }
}`}</code>
          </pre>

          <hr />

          <h2>8. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Write a lambda expression that checks whether a number is positive, negative, or zero.</p>

          <h3>Exercise 2</h3>
          <p>Create an extension method for <code>string</code> that counts the number of vowels in a word.</p>

          <h3>Exercise 3</h3>
          <p>Create a list of integers and use LINQ to find:</p>
          <ul>
            <li>All even numbers</li>
            <li>Numbers greater than 50</li>
            <li>The sum of all numbers</li>
          </ul>

          <h3>Exercise 4</h3>
          <p>Declare a nullable integer and demonstrate the use of <code>HasValue</code>, <code>Value</code>, and the null-coalescing operator (<code>??</code>).</p>

          <hr />

          <h2>9. Session Challenge</h2>
          <p>Create a complete program that:</p>
          <ul>
            <li>Has a list of students (Name, Marks)</li>
            <li>Uses LINQ to filter students who scored more than 70</li>
            <li>Uses an extension method to display student details</li>
            <li>Uses lambda expressions for filtering and ordering</li>
          </ul>

          <hr />

          <h2>10. Session Quiz</h2>
          <ol>
            <li>What is an anonymous method?</li>
            <li>What is a lambda expression?</li>
            <li>What is the difference between <code>Action</code> and <code>Func</code>?</li>
            <li>What is an extension method?</li>
            <li>Why do we need nullable types?</li>
            <li>What is a partial class?</li>
            <li>What does the <code>??</code> operator do?</li>
            <li>What is LINQ used for?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Building Cross-Platform Mobile Apps Using .NET MAUI</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
