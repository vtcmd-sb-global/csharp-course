import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
  return (
    <Layout
      title="Session 02 — Variables & Data Types"
      description="Variables, Data Types & Operators"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 02 — Variables & Data Types</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understanding how to store and work with data.</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should understand:</p>
          <ul>
            <li>Variables</li>
            <li>Data types</li>
            <li>Declaration and initialization</li>
            <li><code>int</code>, <code>double</code>, <code>float</code>, <code>decimal</code>, <code>char</code>, <code>string</code>, <code>bool</code></li>
            <li>Constants</li>
            <li>Arithmetic operators</li>
            <li>Comparison operators</li>
            <li>Type conversion</li>
            <li><code>Parse</code> and <code>TryParse</code></li>
          </ul>

          <hr />

          <h2>1. What is a Variable?</h2>
          <p>A variable is a named location used to store a value.</p>

          <pre>
            <code>{`int age = 20;`}</code>
          </pre>

          <p>Here:</p>
          <pre>
            <code>{`int  → Data type
age  → Variable name
20   → Value`}</code>
          </pre>

          <hr />

          <h2>2. Declaring a Variable</h2>
          <pre>
            <code>{`int age;          // declaration
age = 20;         // assignment`}</code>
          </pre>

          <p>Or both at once:</p>
          <pre>
            <code>{`int age = 20;`}</code>
          </pre>

          <hr />

          <h2>3. Common C# Data Types</h2>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>int</code></td>
                <td>25</td>
                <td>Whole numbers</td>
              </tr>
              <tr>
                <td><code>long</code></td>
                <td>1000000</td>
                <td>Large whole numbers</td>
              </tr>
              <tr>
                <td><code>float</code></td>
                <td>10.5f</td>
                <td>Decimal numbers</td>
              </tr>
              <tr>
                <td><code>double</code></td>
                <td>10.5</td>
                <td>Decimal numbers</td>
              </tr>
              <tr>
                <td><code>decimal</code></td>
                <td>10.50m</td>
                <td>Financial / precise decimals</td>
              </tr>
              <tr>
                <td><code>char</code></td>
                <td>'A'</td>
                <td>Single character</td>
              </tr>
              <tr>
                <td><code>string</code></td>
                <td>"Ali"</td>
                <td>Text</td>
              </tr>
              <tr>
                <td><code>bool</code></td>
                <td>true</td>
                <td>True / false</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Examples</h2>
          <pre>
            <code>{`int age = 25;
long population = 240000000;
float temperature = 36.5f;
double percentage = 85.75;
decimal salary = 75000.50m;
char grade = 'A';
string name = "Ali";
bool isStudent = true;`}</code>
          </pre>

          <hr />

          <h2>5. Displaying Variables</h2>
          <pre>
            <code>{`string name = "Ali";
int age = 20;

Console.WriteLine(name);
Console.WriteLine(age);`}</code>
          </pre>

          <p>Using string interpolation:</p>
          <pre>
            <code>{`Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");`}</code>
          </pre>

          <hr />

          <h2>6. Constants</h2>
          <p>A constant is a value that <strong>cannot</strong> be changed after declaration.</p>

          <pre>
            <code>{`const double PI = 3.14159;
const int PassingMarks = 50;`}</code>
          </pre>

          <hr />

          <h2>7. Arithmetic Operators</h2>

          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>+</code></td>
                <td>Addition</td>
              </tr>
              <tr>
                <td><code>-</code></td>
                <td>Subtraction</td>
              </tr>
              <tr>
                <td><code>*</code></td>
                <td>Multiplication</td>
              </tr>
              <tr>
                <td><code>/</code></td>
                <td>Division</td>
              </tr>
              <tr>
                <td><code>%</code></td>
                <td>Remainder</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Example:</strong></p>
          <pre>
            <code>{`int a = 10;
int b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3
Console.WriteLine(a % b);  // 1`}</code>
          </pre>

          <blockquote>
            <strong>Note:</strong> Integer division removes the fractional part.
          </blockquote>

          <pre>
            <code>{`int result = 10 / 3;         // 3
double result2 = 10.0 / 3.0; // 3.333...`}</code>
          </pre>

          <hr />

          <h2>8. Assignment Operators</h2>
          <pre>
            <code>{`int x = 10;

x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 3;   // x = x * 3
x /= 2;   // x = x / 2`}</code>
          </pre>

          <hr />

          <h2>9. Increment and Decrement</h2>
          <pre>
            <code>{`int x = 10;
x++;                // x becomes 11
Console.WriteLine(x);

x--;                // x becomes 10`}</code>
          </pre>

          <hr />

          <h2>10. Getting Numeric Input</h2>

          <h3>Convert.ToInt32</h3>
          <pre>
            <code>{`Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);
Console.WriteLine($"Your age is {age}");`}</code>
          </pre>

          <h3>int.Parse</h3>
          <pre>
            <code>{`Console.Write("Enter a number: ");
int number = int.Parse(Console.ReadLine());
Console.WriteLine(number);`}</code>
          </pre>

          <blockquote>
            <strong>Problem:</strong> Invalid input (e.g. "abc") causes an exception.
          </blockquote>

          <h3>int.TryParse (Safer)</h3>
          <pre>
            <code>{`Console.Write("Enter your age: ");

bool success = int.TryParse(Console.ReadLine(), out int age);

if (success)
{
    Console.WriteLine($"Your age is {age}");
}
else
{
    Console.WriteLine("Invalid age.");
}`}</code>
          </pre>

          <p><em>(You will study <code>if</code> properly in Session 3.)</em></p>

          <hr />

          <h2>Mini Project — Student Marks Calculator</h2>
          <p>Ask the student for:</p>
          <pre>
            <code>{`English Marks:
Math Marks:
Computer Marks:`}</code>
          </pre>

          <p>Calculate:</p>
          <ul>
            <li>Total</li>
            <li>Average</li>
            <li>Percentage</li>
          </ul>

          <p><strong>Example code:</strong></p>
          <pre>
            <code>{`Console.Write("English: ");
double english = double.Parse(Console.ReadLine());

Console.Write("Math: ");
double math = double.Parse(Console.ReadLine());

Console.Write("Computer: ");
double computer = double.Parse(Console.ReadLine());

double total = english + math + computer;
double average = total / 3;
double percentage = (total / 300) * 100;

Console.WriteLine($"Total: {total}");
Console.WriteLine($"Average: {average}");
Console.WriteLine($"Percentage: {percentage}%");`}</code>
          </pre>

          <hr />

          <h2>Session 2 Challenge</h2>
          <p>Create a <strong>Simple Billing Calculator</strong>.</p>

          <p><strong>Input:</strong></p>
          <pre>
            <code>{`Product Name:
Price:
Quantity:
Discount:`}</code>
          </pre>

          <p><strong>Calculate & Display:</strong></p>
          <pre>
            <code>{`Subtotal
Discount Amount
Final Amount`}</code>
          </pre>

          <p><strong>Example:</strong></p>
          <pre>
            <code>{`Product: Keyboard
Price: 2500
Quantity: 2
Discount: 10%

Subtotal: 5000
Discount: 500
Final Amount: 4500`}</code>
          </pre>

          <hr />

          <h2>Session 2 Quiz</h2>
          <ol>
            <li>What is a variable?</li>
            <li>What is a data type?</li>
            <li>Difference between <code>int</code> and <code>double</code>?</li>
            <li>Why does <code>float</code> normally use <code>f</code>?</li>
            <li>Why does <code>decimal</code> normally use <code>m</code>?</li>
            <li>What is a <code>char</code>?</li>
            <li>What is a <code>bool</code>?</li>
            <li>What is a constant?</li>
            <li>What does <code>%</code> do?</li>
            <li>Difference between <code>Parse()</code> and <code>TryParse()</code>?</li>
          </ol>

          <hr />

          <p><strong>Next up (Session 03):</strong> Conditions.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
