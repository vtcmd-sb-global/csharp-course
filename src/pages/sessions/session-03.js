import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
  return (
    <Layout
      title="Session 03 — Conditions"
      description="Conditions & Decision Making"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 03 — Conditions & Decision Making</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Teaching programs how to make decisions.</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should understand:</p>
          <ul>
            <li>Decision making</li>
            <li><code>if</code></li>
            <li><code>else</code></li>
            <li><code>else if</code></li>
            <li>Nested <code>if</code></li>
            <li>Comparison operators</li>
            <li>Logical operators</li>
            <li><code>switch</code></li>
            <li>Conditional (ternary) operator</li>
            <li>Basic validation</li>
          </ul>

          <hr />

          <h2>1. Why Do We Need Conditions?</h2>
          <p>Programs often need to make decisions.</p>

          <pre>
            <code>{`If marks >= 50
    Student passes
Otherwise
    Student fails`}</code>
          </pre>

          <p>C# uses conditional statements for this.</p>

          <hr />

          <h2>2. if Statement</h2>
          <pre>
            <code>{`if (condition)
{
    // code
}`}</code>
          </pre>

          <p><strong>Example:</strong></p>
          <pre>
            <code>{`int age = 20;

if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}`}</code>
          </pre>

          <hr />

          <h2>3. if / else</h2>
          <pre>
            <code>{`int age = 16;

if (age >= 18)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Minor");
}`}</code>
          </pre>

          <hr />

          <h2>4. Comparison Operators</h2>
          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>==</code></td>
                <td>Equal</td>
              </tr>
              <tr>
                <td><code>!=</code></td>
                <td>Not equal</td>
              </tr>
              <tr>
                <td><code>&gt;</code></td>
                <td>Greater than</td>
              </tr>
              <tr>
                <td><code>&lt;</code></td>
                <td>Less than</td>
              </tr>
              <tr>
                <td><code>&gt;=</code></td>
                <td>Greater than or equal</td>
              </tr>
              <tr>
                <td><code>&lt;=</code></td>
                <td>Less than or equal</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. else if</h2>
          <p>Useful when there are multiple possible conditions.</p>

          <pre>
            <code>{`int marks = 85;

if (marks >= 80)
{
    Console.WriteLine("A+");
}
else if (marks >= 70)
{
    Console.WriteLine("A");
}
else if (marks >= 60)
{
    Console.WriteLine("B");
}
else if (marks >= 50)
{
    Console.WriteLine("C");
}
else
{
    Console.WriteLine("Fail");
}`}</code>
          </pre>

          <hr />

          <h2>6. Nested if</h2>
          <p>An <code>if</code> inside another <code>if</code>.</p>

          <pre>
            <code>{`int age = 25;
bool hasLicense = true;

if (age >= 18)
{
    if (hasLicense)
    {
        Console.WriteLine("You can drive.");
    }
}`}</code>
          </pre>

          <hr />

          <h2>7. Logical Operators</h2>

          <h3>AND — <code>&&</code></h3>
          <p>Both conditions must be true.</p>
          <pre>
            <code>{`int age = 25;

if (age >= 18 && age <= 60)
{
    Console.WriteLine("Valid working age.");
}`}</code>
          </pre>

          <h3>OR — <code>||</code></h3>
          <p>At least one condition must be true.</p>
          <pre>
            <code>{`string role = "Admin";

if (role == "Admin" || role == "Manager")
{
    Console.WriteLine("Access granted.");
}`}</code>
          </pre>

          <h3>NOT — <code>!</code></h3>
          <p>Reverses a boolean value.</p>
          <pre>
            <code>{`bool isLoggedIn = false;

if (!isLoggedIn)
{
    Console.WriteLine("Please login.");
}`}</code>
          </pre>

          <hr />

          <h2>8. Combining Conditions</h2>
          <pre>
            <code>{`int age = 22;
bool hasId = true;

if (age >= 18 && hasId)
{
    Console.WriteLine("Access granted.");
}
else
{
    Console.WriteLine("Access denied.");
}`}</code>
          </pre>

          <hr />

          <h2>9. switch Statement</h2>
          <p>Useful when checking one value against multiple known options.</p>

          <pre>
            <code>{`int day = 2;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;

    case 2:
        Console.WriteLine("Tuesday");
        break;

    case 3:
        Console.WriteLine("Wednesday");
        break;

    default:
        Console.WriteLine("Invalid day");
        break;
}`}</code>
          </pre>

          <h3>switch with String</h3>
          <pre>
            <code>{`string role = "Admin";

switch (role)
{
    case "Admin":
        Console.WriteLine("Full access");
        break;

    case "Teacher":
        Console.WriteLine("Teacher access");
        break;

    case "Student":
        Console.WriteLine("Student access");
        break;

    default:
        Console.WriteLine("Unknown role");
        break;
}`}</code>
          </pre>

          <hr />

          <h2>10. Conditional Operator (Ternary)</h2>
          <p>A short way of writing a simple <code>if/else</code>.</p>

          <pre>
            <code>{`int age = 20;

string result = age >= 18 ? "Adult" : "Minor";

Console.WriteLine(result);`}</code>
          </pre>

          <p>Think of it as:</p>
          <pre>
            <code>{`condition ? value-if-true : value-if-false`}</code>
          </pre>

          <hr />

          <h2>11. Practical Example — Grade Calculator</h2>
          <pre>
            <code>{`Console.Write("Enter marks: ");
int marks = int.Parse(Console.ReadLine());

if (marks >= 80)
{
    Console.WriteLine("Grade: A+");
}
else if (marks >= 70)
{
    Console.WriteLine("Grade: A");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade: B");
}
else if (marks >= 50)
{
    Console.WriteLine("Grade: C");
}
else
{
    Console.WriteLine("Grade: F");
}`}</code>
          </pre>

          <hr />

          <h2>12. Practical Example — Simple Login</h2>
          <pre>
            <code>{`Console.Write("Username: ");
string username = Console.ReadLine();

Console.Write("Password: ");
string password = Console.ReadLine();

if (username == "admin" && password == "12345")
{
    Console.WriteLine("Login successful.");
}
else
{
    Console.WriteLine("Invalid username or password.");
}`}</code>
          </pre>

          <blockquote>
            <strong>Teaching note only:</strong> Real applications should never store passwords like this.
          </blockquote>

          <hr />

          <h2>13. Practical Example — ATM Menu</h2>
          <pre>
            <code>{`decimal balance = 50000;

Console.WriteLine("===== ATM =====");
Console.WriteLine("1. Check Balance");
Console.WriteLine("2. Deposit");
Console.WriteLine("3. Withdraw");
Console.WriteLine("4. Exit");

Console.Write("Choose an option: ");
int choice = int.Parse(Console.ReadLine());

switch (choice)
{
    case 1:
        Console.WriteLine($"Balance: {balance}");
        break;

    case 2:
        Console.Write("Enter deposit amount: ");
        decimal deposit = decimal.Parse(Console.ReadLine());

        if (deposit > 0)
        {
            balance += deposit;
            Console.WriteLine($"New Balance: {balance}");
        }
        else
        {
            Console.WriteLine("Invalid amount.");
        }
        break;

    case 3:
        Console.Write("Enter withdrawal amount: ");
        decimal withdrawal = decimal.Parse(Console.ReadLine());

        if (withdrawal > 0 && withdrawal <= balance)
        {
            balance -= withdrawal;
            Console.WriteLine($"New Balance: {balance}");
        }
        else
        {
            Console.WriteLine("Invalid withdrawal.");
        }
        break;

    case 4:
        Console.WriteLine("Goodbye!");
        break;

    default:
        Console.WriteLine("Invalid option.");
        break;
}`}</code>
          </pre>

          <hr />

          <h2>Session 3 Challenge</h2>
          <p>Build a <strong>Student Result System</strong>.</p>

          <p><strong>Ask for:</strong></p>
          <pre>
            <code>{`Student Name:
English Marks:
Math Marks:
Computer Marks:`}</code>
          </pre>

          <p><strong>Calculate & Display:</strong></p>
          <ul>
            <li>Total</li>
            <li>Percentage</li>
            <li>Grade</li>
            <li>Pass / Fail</li>
          </ul>

          <p><strong>Grading Rules:</strong></p>
          <pre>
            <code>{`80–100 → A+
70–79  → A
60–69  → B
50–59  → C
Below 50 → F`}</code>
          </pre>

          <p><strong>Extra Requirements:</strong></p>
          <ul>
            <li>Marks cannot be below 0</li>
            <li>Marks cannot be above 100</li>
            <li>Student passes only if the required criteria are met</li>
          </ul>

          <hr />

          <h2>Session 3 Homework</h2>
          <p>Create a <strong>Simple ATM Program</strong> with the following menu:</p>
          <pre>
            <code>{`1. Check Balance
2. Deposit
3. Withdraw
4. Exit`}</code>
          </pre>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Initial balance = 50,000</li>
            <li>Deposit must be greater than 0</li>
            <li>Withdrawal must be greater than 0</li>
            <li>Withdrawal cannot exceed balance</li>
            <li>Display appropriate messages</li>
            <li>Use <code>switch</code></li>
            <li>Use <code>if/else</code></li>
            <li>Use variables and operators</li>
          </ul>

          <hr />

          <h2>Session 3 Quiz</h2>
          <ol>
            <li>Why do we use conditional statements?</li>
            <li>What is an <code>if</code> statement?</li>
            <li>Difference between <code>if</code> and <code>if/else</code>?</li>
            <li>When do we use <code>else if</code>?</li>
            <li>What does <code>==</code> mean?</li>
            <li>Difference between <code>=</code> and <code>==</code>?</li>
            <li>What does <code>&&</code> mean?</li>
            <li>What does <code>||</code> mean?</li>
            <li>What does <code>!</code> mean?</li>
            <li>When is <code>switch</code> useful?</li>
            <li>What is the conditional operator?</li>
            <li>What is a nested <code>if</code>?</li>
          </ol>
        </article>
      </CustomLayout>
    </Layout>
  );
}