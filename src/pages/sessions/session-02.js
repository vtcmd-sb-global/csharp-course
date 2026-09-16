import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
  return (
    <Layout
      title="Session 02 — Basic Building Blocks in C#"
      description="Variables, Data Types, Operators, Comments, Constants and Input/Output in C#"
    >
      <CustomLayout>
        <article className="session-content">
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

          <pre>
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
          <pre>
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
          <pre>
            <code>{`// This is a single-line comment
int age = 20; // age of the student`}</code>
          </pre>

          <h3>Multi-line Comment</h3>
          <pre>
            <code>{`/*
  This is a multi-line comment.
  It can span multiple lines.
*/`}</code>
          </pre>

          <h3>XML Documentation Comment</h3>
          <pre>
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

          <pre>
            <code>{`const double PI = 3.14159;
const string CompanyName = "Aptech";

// PI = 3.14;  // Error! Cannot modify a constant`}</code>
          </pre>

          <h3>Literals</h3>
          <pre>
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

          <pre>
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
          <pre>
            <code>{`int a = 10, b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3
Console.WriteLine(a % b);  // 1 (remainder)`}</code>
          </pre>

          <h3>Assignment Operators</h3>
          <pre>
            <code>{`int x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6`}</code>
          </pre>

          <h3>Comparison Operators</h3>
          <pre>
            <code>{`int a = 10, b = 20;

Console.WriteLine(a == b);  // false
Console.WriteLine(a != b);  // true
Console.WriteLine(a > b);   // false
Console.WriteLine(a < b);   // true
Console.WriteLine(a >= b);  // false
Console.WriteLine(a <= b);  // true`}</code>
          </pre>

          <h3>Logical Operators</h3>
          <pre>
            <code>{`bool isStudent = true;
bool hasIdCard = false;

Console.WriteLine(isStudent && hasIdCard);  // false (AND)
Console.WriteLine(isStudent || hasIdCard);  // true  (OR)
Console.WriteLine(!isStudent);              // false (NOT)`}</code>
          </pre>

          <hr />

          <h2>6. Live Coding Examples</h2>

          <h3>Example 1: Simple Calculator</h3>
          <pre>
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
          <pre>
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
          <pre>
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

          <pre>
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



// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session02() {
//   return (
//     <Layout
//       title="Session 02 — Variables & Data Types"
//       description="Variables, Data Types & Operators"
//     >
//       <CustomLayout>
//         <article className="session-content">
//           <h1>Session 02 — Variables & Data Types</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Understanding how to store and work with data.</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should understand:</p>
//           <ul>
//             <li>Variables</li>
//             <li>Data types</li>
//             <li>Declaration and initialization</li>
//             <li><code>int</code>, <code>double</code>, <code>float</code>, <code>decimal</code>, <code>char</code>, <code>string</code>, <code>bool</code></li>
//             <li>Constants</li>
//             <li>Arithmetic operators</li>
//             <li>Comparison operators</li>
//             <li>Type conversion</li>
//             <li><code>Parse</code> and <code>TryParse</code></li>
//           </ul>

//           <hr />

//           <h2>1. What is a Variable?</h2>
//           <p>A variable is a named location used to store a value.</p>

//           <pre>
//             <code>{`int age = 20;`}</code>
//           </pre>

//           <p>Here:</p>
//           <pre>
//             <code>{`int  → Data type
// age  → Variable name
// 20   → Value`}</code>
//           </pre>

//           <hr />

//           <h2>2. Declaring a Variable</h2>
//           <pre>
//             <code>{`int age;          // declaration
// age = 20;         // assignment`}</code>
//           </pre>

//           <p>Or both at once:</p>
//           <pre>
//             <code>{`int age = 20;`}</code>
//           </pre>

//           <hr />

//           <h2>3. Common C# Data Types</h2>

//           <table>
//             <thead>
//               <tr>
//                 <th>Type</th>
//                 <th>Example</th>
//                 <th>Purpose</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>int</code></td>
//                 <td>25</td>
//                 <td>Whole numbers</td>
//               </tr>
//               <tr>
//                 <td><code>long</code></td>
//                 <td>1000000</td>
//                 <td>Large whole numbers</td>
//               </tr>
//               <tr>
//                 <td><code>float</code></td>
//                 <td>10.5f</td>
//                 <td>Decimal numbers</td>
//               </tr>
//               <tr>
//                 <td><code>double</code></td>
//                 <td>10.5</td>
//                 <td>Decimal numbers</td>
//               </tr>
//               <tr>
//                 <td><code>decimal</code></td>
//                 <td>10.50m</td>
//                 <td>Financial / precise decimals</td>
//               </tr>
//               <tr>
//                 <td><code>char</code></td>
//                 <td>'A'</td>
//                 <td>Single character</td>
//               </tr>
//               <tr>
//                 <td><code>string</code></td>
//                 <td>"Ali"</td>
//                 <td>Text</td>
//               </tr>
//               <tr>
//                 <td><code>bool</code></td>
//                 <td>true</td>
//                 <td>True / false</td>
//               </tr>
//             </tbody>
//           </table>

//           <hr />

//           <h2>4. Examples</h2>
//           <pre>
//             <code>{`int age = 25;
// long population = 240000000;
// float temperature = 36.5f;
// double percentage = 85.75;
// decimal salary = 75000.50m;
// char grade = 'A';
// string name = "Ali";
// bool isStudent = true;`}</code>
//           </pre>

//           <hr />

//           <h2>5. Displaying Variables</h2>
//           <pre>
//             <code>{`string name = "Ali";
// int age = 20;

// Console.WriteLine(name);
// Console.WriteLine(age);`}</code>
//           </pre>

//           <p>Using string interpolation:</p>
//           <pre>
//             <code>{`Console.WriteLine($"Name: {name}");
// Console.WriteLine($"Age: {age}");`}</code>
//           </pre>

//           <hr />

//           <h2>6. Constants</h2>
//           <p>A constant is a value that <strong>cannot</strong> be changed after declaration.</p>

//           <pre>
//             <code>{`const double PI = 3.14159;
// const int PassingMarks = 50;`}</code>
//           </pre>

//           <hr />

//           <h2>7. Arithmetic Operators</h2>

//           <table>
//             <thead>
//               <tr>
//                 <th>Operator</th>
//                 <th>Meaning</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>+</code></td>
//                 <td>Addition</td>
//               </tr>
//               <tr>
//                 <td><code>-</code></td>
//                 <td>Subtraction</td>
//               </tr>
//               <tr>
//                 <td><code>*</code></td>
//                 <td>Multiplication</td>
//               </tr>
//               <tr>
//                 <td><code>/</code></td>
//                 <td>Division</td>
//               </tr>
//               <tr>
//                 <td><code>%</code></td>
//                 <td>Remainder</td>
//               </tr>
//             </tbody>
//           </table>

//           <p><strong>Example:</strong></p>
//           <pre>
//             <code>{`int a = 10;
// int b = 3;

// Console.WriteLine(a + b);  // 13
// Console.WriteLine(a - b);  // 7
// Console.WriteLine(a * b);  // 30
// Console.WriteLine(a / b);  // 3
// Console.WriteLine(a % b);  // 1`}</code>
//           </pre>

//           <blockquote>
//             <strong>Note:</strong> Integer division removes the fractional part.
//           </blockquote>

//           <pre>
//             <code>{`int result = 10 / 3;         // 3
// double result2 = 10.0 / 3.0; // 3.333...`}</code>
//           </pre>

//           <hr />

//           <h2>8. Assignment Operators</h2>
//           <pre>
//             <code>{`int x = 10;

// x += 5;   // x = x + 5
// x -= 2;   // x = x - 2
// x *= 3;   // x = x * 3
// x /= 2;   // x = x / 2`}</code>
//           </pre>

//           <hr />

//           <h2>9. Increment and Decrement</h2>
//           <pre>
//             <code>{`int x = 10;
// x++;                // x becomes 11
// Console.WriteLine(x);

// x--;                // x becomes 10`}</code>
//           </pre>

//           <hr />

//           <h2>10. Getting Numeric Input</h2>

//           <h3>Convert.ToInt32</h3>
//           <pre>
//             <code>{`Console.Write("Enter your age: ");
// string input = Console.ReadLine();
// int age = Convert.ToInt32(input);
// Console.WriteLine($"Your age is {age}");`}</code>
//           </pre>

//           <h3>int.Parse</h3>
//           <pre>
//             <code>{`Console.Write("Enter a number: ");
// int number = int.Parse(Console.ReadLine());
// Console.WriteLine(number);`}</code>
//           </pre>

//           <blockquote>
//             <strong>Problem:</strong> Invalid input (e.g. "abc") causes an exception.
//           </blockquote>

//           <h3>int.TryParse (Safer)</h3>
//           <pre>
//             <code>{`Console.Write("Enter your age: ");

// bool success = int.TryParse(Console.ReadLine(), out int age);

// if (success)
// {
//     Console.WriteLine($"Your age is {age}");
// }
// else
// {
//     Console.WriteLine("Invalid age.");
// }`}</code>
//           </pre>

//           <p><em>(You will study <code>if</code> properly in Session 3.)</em></p>

//           <hr />

//           <h2>Mini Project — Student Marks Calculator</h2>
//           <p>Ask the student for:</p>
//           <pre>
//             <code>{`English Marks:
// Math Marks:
// Computer Marks:`}</code>
//           </pre>

//           <p>Calculate:</p>
//           <ul>
//             <li>Total</li>
//             <li>Average</li>
//             <li>Percentage</li>
//           </ul>

//           <p><strong>Example code:</strong></p>
//           <pre>
//             <code>{`Console.Write("English: ");
// double english = double.Parse(Console.ReadLine());

// Console.Write("Math: ");
// double math = double.Parse(Console.ReadLine());

// Console.Write("Computer: ");
// double computer = double.Parse(Console.ReadLine());

// double total = english + math + computer;
// double average = total / 3;
// double percentage = (total / 300) * 100;

// Console.WriteLine($"Total: {total}");
// Console.WriteLine($"Average: {average}");
// Console.WriteLine($"Percentage: {percentage}%");`}</code>
//           </pre>

//           <hr />

//           <h2>Session 2 Challenge</h2>
//           <p>Create a <strong>Simple Billing Calculator</strong>.</p>

//           <p><strong>Input:</strong></p>
//           <pre>
//             <code>{`Product Name:
// Price:
// Quantity:
// Discount:`}</code>
//           </pre>

//           <p><strong>Calculate & Display:</strong></p>
//           <pre>
//             <code>{`Subtotal
// Discount Amount
// Final Amount`}</code>
//           </pre>

//           <p><strong>Example:</strong></p>
//           <pre>
//             <code>{`Product: Keyboard
// Price: 2500
// Quantity: 2
// Discount: 10%

// Subtotal: 5000
// Discount: 500
// Final Amount: 4500`}</code>
//           </pre>

//           <hr />

//           <h2>Session 2 Quiz</h2>
//           <ol>
//             <li>What is a variable?</li>
//             <li>What is a data type?</li>
//             <li>Difference between <code>int</code> and <code>double</code>?</li>
//             <li>Why does <code>float</code> normally use <code>f</code>?</li>
//             <li>Why does <code>decimal</code> normally use <code>m</code>?</li>
//             <li>What is a <code>char</code>?</li>
//             <li>What is a <code>bool</code>?</li>
//             <li>What is a constant?</li>
//             <li>What does <code>%</code> do?</li>
//             <li>Difference between <code>Parse()</code> and <code>TryParse()</code>?</li>
//           </ol>

//           <hr />

//           <p><strong>Next up (Session 03):</strong> Conditions.</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
