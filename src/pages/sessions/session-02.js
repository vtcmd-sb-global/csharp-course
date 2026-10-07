import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
  const codeBlockStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '12px 16px',
    borderRadius: '6px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    margin: '12px 0 24px 0'
  };

  const inlineCodeStyle = {
    backgroundColor: '#f4f4f4',
    color: '#d10057',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '0.9em'
  };
  return (
    <Layout
      title="Session 02 — Basic Building Blocks in C#"
      description="Variables, Data Types, Operators, Comments, Constants and Input/Output in C#"
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
          <h1>Session 02 — Basic Building Blocks in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Master variables, data types, operators, comments, constants, and basic input/output.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Declare and use variables</li>
            <li>Identify and use different data types in C#</li>
            <li>Write single-line and multi-line comments</li>
            <li>Use XML documentation comments</li>
            <li>Work with constants and literals</li>
            <li>Use string interpolation</li>
            <li>Apply different types of operators</li>
            <li>Handle basic input and output</li>
          </ul>

          <hr />

          <h2>1. Variables and Data Types</h2>

          <h3>What is a Variable?</h3>
          <p>A variable is a named storage location in memory that holds a value. The value can change during program execution.</p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 20;
string name = "Ali";
double salary = 45000.50;
bool isStudent = true;`}</code>
          </pre>

          <h3>Common Data Types</h3>
          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Size</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>int</code></td>
                <td>4 bytes</td>
                <td><code>25</code></td>
                <td>Whole numbers</td>
              </tr>
              <tr>
                <td><code>long</code></td>
                <td>8 bytes</td>
                <td><code>1234567890</code></td>
                <td>Large whole numbers</td>
              </tr>
              <tr>
                <td><code>float</code></td>
                <td>4 bytes</td>
                <td><code>12.5f</code></td>
                <td>Decimal numbers (less precision)</td>
              </tr>
              <tr>
                <td><code>double</code></td>
                <td>8 bytes</td>
                <td><code>12.5</code></td>
                <td>Decimal numbers (more precision)</td>
              </tr>
              <tr>
                <td><code>decimal</code></td>
                <td>16 bytes</td>
                <td><code>99.99m</code></td>
                <td>High precision (money)</td>
              </tr>
              <tr>
                <td><code>char</code></td>
                <td>2 bytes</td>
                <td><code>'A'</code></td>
                <td>Single character</td>
              </tr>
              <tr>
                <td><code>string</code></td>
                <td>—</td>
                <td><code>"Hello"</code></td>
                <td>Text</td>
              </tr>
              <tr>
                <td><code>bool</code></td>
                <td>1 byte</td>
                <td><code>true / false</code></td>
                <td>Boolean value</td>
              </tr>
            </tbody>
          </table>

          <h3>Declaring Variables</h3>
          <pre style={codeBlockStyle}>
            <code>{`// Method 1
int age;
age = 22;

// Method 2 (Recommended)
int age = 22;

// Multiple variables
int a = 10, b = 20, c = 30;`}</code>
          </pre>

          <hr />

          <h2>2. Comments in C#</h2>

          <h3>Single-line Comment</h3>
          <pre style={codeBlockStyle}>
            <code>{`// This is a single-line comment
int age = 20; // age of the student`}</code>
          </pre>

          <h3>Multi-line Comment</h3>
          <pre style={codeBlockStyle}>
            <code>{`/*
  This is a multi-line comment.
  It can span multiple lines.
*/`}</code>
          </pre>

          <h3>XML Documentation Comment</h3>
          <pre style={codeBlockStyle}>
            <code>{`/// <summary>
/// This method adds two numbers
/// </summary>
/// <param name="a">First number</param>
/// <param name="b">Second number</param>
/// <returns>Sum of a and b</returns>
int Add(int a, int b)
{
    return a + b;
}`}</code>
          </pre>

          <hr />

          <h2>3. Constants and Literals</h2>

          <h3>Constant</h3>
          <p>A constant is a value that cannot be changed after it is assigned.</p>

          <pre style={codeBlockStyle}>
            <code>{`const double PI = 3.14159;
const string CompanyName = "Aptech";

// PI = 3.14;  // Error! Cannot modify a constant`}</code>
          </pre>

          <h3>Literals</h3>
          <pre style={codeBlockStyle}>
            <code>{`int number = 100;          // Integer literal
double price = 99.99;      // Double literal
float rate = 5.5f;         // Float literal
decimal amount = 250.75m;  // Decimal literal
char grade = 'A';          // Character literal
string message = "Hello";  // String literal
bool isActive = true;      // Boolean literal`}</code>
          </pre>

          <hr />

          <h2>4. String Interpolation</h2>
          <p>Modern and preferred way to format strings.</p>

          <pre style={codeBlockStyle}>
            <code>{`string name = "Ali";
int age = 21;

// Old way
Console.WriteLine("Name: " + name + ", Age: " + age);

// Modern way (String Interpolation)
Console.WriteLine($"Name: {name}, Age: {age}");
Console.WriteLine($"Next year you will be {age + 1} years old.");`}</code>
          </pre>

          <hr />

          <h2>5. Operators in C#</h2>

          <h3>Arithmetic Operators</h3>
          <pre style={codeBlockStyle}>
            <code>{`int a = 10, b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3
Console.WriteLine(a % b);  // 1 (remainder)`}</code>
          </pre>

          <h3>Assignment Operators</h3>
          <pre style={codeBlockStyle}>
            <code>{`int x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6`}</code>
          </pre>

          <h3>Comparison Operators</h3>
          <pre style={codeBlockStyle}>
            <code>{`int a = 10, b = 20;

Console.WriteLine(a == b);  // false
Console.WriteLine(a != b);  // true
Console.WriteLine(a > b);   // false
Console.WriteLine(a < b);   // true
Console.WriteLine(a >= b);  // false
Console.WriteLine(a <= b);  // true`}</code>
          </pre>

          <h3>Logical Operators</h3>
          <pre style={codeBlockStyle}>
            <code>{`bool isStudent = true;
bool hasIdCard = false;

Console.WriteLine(isStudent && hasIdCard);  // false (AND)
Console.WriteLine(isStudent || hasIdCard);  // true  (OR)
Console.WriteLine(!isStudent);              // false (NOT)`}</code>
          </pre>

          <hr />

          <h2>6. Live Coding Examples</h2>

          <h3>Example 1: Simple Calculator</h3>
          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter first number: ");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter second number: ");
double num2 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine($"Sum = {num1 + num2}");
Console.WriteLine($"Difference = {num1 - num2}");
Console.WriteLine($"Product = {num1 * num2}");
Console.WriteLine($"Quotient = {num1 / num2}");`}</code>
          </pre>

          <h3>Example 2: Student Details</h3>
          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter student name: ");
string name = Console.ReadLine();

Console.Write("Enter marks in C#: ");
int marks = Convert.ToInt32(Console.ReadLine());

Console.WriteLine();
Console.WriteLine("----- Student Report -----");
Console.WriteLine($"Name  : {name}");
Console.WriteLine($"Marks : {marks}");
Console.WriteLine($"Result: {(marks >= 50 ? "Pass" : "Fail")}");`}</code>
          </pre>

          <hr />

          <h2>7. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Declare variables for:</p>
          <ul>
            <li>Employee Name (string)</li>
            <li>Employee ID (int)</li>
            <li>Salary (decimal)</li>
            <li>Is Permanent (bool)</li>
          </ul>
          <p>Take input from the user and display the information neatly.</p>

          <h3>Exercise 2</h3>
          <p>Write a program that takes two numbers and displays:</p>
          <ul>
            <li>Sum</li>
            <li>Product</li>
            <li>Average</li>
          </ul>

          <h3>Exercise 3</h3>
          <p>Create a program that asks for temperature in Celsius and converts it to Fahrenheit using the formula:</p>
          <pre style="codeBlockStyle">
            <code>{`F = (C * 9/5) + 32`}</code>
          </pre>

          <hr />

          <h2>8. Session Challenge</h2>
          <p>Create a program called <strong>Personal Information Card</strong> that asks the user for:</p>
          <ul>
            <li>Full Name</li>
            <li>Age</li>
            <li>City</li>
            <li>Favorite Subject</li>
          </ul>
          <p>Then display the information in this format:</p>

          <pre style={codeBlockStyle}>
            <code>{`===============================
       PERSONAL INFORMATION
===============================
Name            : Ali Khan
Age             : 20
City            : Karachi
Favorite Subject: C# Programming
===============================`}</code>
          </pre>

          <hr />

          <h2>9. Session Quiz</h2>
          <ol>
            <li>What is a variable?</li>
            <li>What is the difference between <code>int</code> and <code>double</code>?</li>
            <li>How do you declare a constant in C#?</li>
            <li>What is string interpolation?</li>
            <li>What does the <code>%</code> operator do?</li>
            <li>What is the difference between <code>&&</code> and <code>||</code>?</li>
            <li>Why do we use comments in a program?</li>
            <li>What is the purpose of XML documentation comments?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Programming Constructs and Arrays (if-else, switch, loops, and arrays)</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
