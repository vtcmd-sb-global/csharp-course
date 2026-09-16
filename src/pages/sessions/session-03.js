import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
  return (
    <Layout
      title="Session 03 — Programming Constructs and Arrays"
      description="Selection constructs, loops, jump statements and Arrays in C#"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 03 — Programming Constructs and Arrays</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Master decision-making, loops, and arrays — the core building blocks of real programs.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 3</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Use <code>if</code>, <code>if-else</code>, <code>else-if</code> and nested <code>if</code></li>
            <li>Use <code>switch</code> statement</li>
            <li>Work with different types of loops (<code>for</code>, <code>while</code>, <code>do-while</code>, <code>foreach</code>)</li>
            <li>Use jump statements (<code>break</code>, <code>continue</code>)</li>
            <li>Declare and use single-dimensional and multi-dimensional arrays</li>
            <li>Use common methods of the <code>Array</code> class</li>
          </ul>

          <hr />

          <h2>1. Selection Constructs (Decision Making)</h2>

          <h3>1.1 if Statement</h3>
          <pre>
            <code>{`int age = 18;

if (age >= 18)
{
    Console.WriteLine("You are eligible to vote.");
}`}</code>
          </pre>

          <h3>1.2 if-else</h3>
          <pre>
            <code>{`int marks = 45;

if (marks >= 50)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Fail");
}`}</code>
          </pre>

          <h3>1.3 else-if Ladder</h3>
          <pre>
            <code>{`int marks = 78;

if (marks >= 90)
    Console.WriteLine("Grade A+");
else if (marks >= 80)
    Console.WriteLine("Grade A");
else if (marks >= 70)
    Console.WriteLine("Grade B");
else if (marks >= 60)
    Console.WriteLine("Grade C");
else if (marks >= 50)
    Console.WriteLine("Grade D");
else
    Console.WriteLine("Fail");`}</code>
          </pre>

          <h3>1.4 Nested if</h3>
          <pre>
            <code>{`int age = 22;
bool hasCNIC = true;

if (age >= 18)
{
    if (hasCNIC)
        Console.WriteLine("You can cast your vote.");
    else
        Console.WriteLine("Please apply for CNIC first.");
}
else
{
    Console.WriteLine("You are underage.");
}`}</code>
          </pre>

          <h3>1.5 switch Statement</h3>
          <pre>
            <code>{`Console.Write("Enter day number (1-7): ");
int day = Convert.ToInt32(Console.ReadLine());

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
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
        Console.WriteLine("Saturday");
        break;
    case 7:
        Console.WriteLine("Sunday");
        break;
    default:
        Console.WriteLine("Invalid day number");
        break;
}`}</code>
          </pre>

          <hr />

          <h2>2. Loop Constructs</h2>

          <h3>2.1 for Loop</h3>
          <pre>
            <code>{`// Print numbers from 1 to 10
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}

// Print even numbers from 2 to 20
for (int i = 2; i <= 20; i += 2)
{
    Console.Write(i + " ");
}`}</code>
          </pre>

          <h3>2.2 while Loop</h3>
          <pre>
            <code>{`int i = 1;
while (i <= 5)
{
    Console.WriteLine("Hello " + i);
    i++;
}`}</code>
          </pre>

          <h3>2.3 do-while Loop</h3>
          <pre>
            <code>{`int i = 1;
do
{
    Console.WriteLine("Count: " + i);
    i++;
} while (i <= 5);`}</code>
          </pre>

          <h3>2.4 foreach Loop</h3>
          <pre>
            <code>{`string[] names = { "Ali", "Sara", "Ahmed", "Fatima" };

foreach (string name in names)
{
    Console.WriteLine(name);
}`}</code>
          </pre>

          <hr />

          <h2>3. Jump Statements</h2>

          <h3>break</h3>
          <pre>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i == 6)
        break;          // exit the loop completely

    Console.WriteLine(i);
}
// Output: 1 2 3 4 5`}</code>
          </pre>

          <h3>continue</h3>
          <pre>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
        continue;       // skip even numbers

    Console.WriteLine(i);
}
// Output: 1 3 5 7 9`}</code>
          </pre>

          <hr />

          <h2>4. Arrays</h2>

          <h3>4.1 Single-Dimensional Array</h3>
          <pre>
            <code>{`// Declaration + Initialization
int[] marks = { 85, 90, 78, 92, 88 };

// Accessing elements
Console.WriteLine(marks[0]);     // 85
Console.WriteLine(marks[2]);     // 78

// Using loop
for (int i = 0; i < marks.Length; i++)
{
    Console.WriteLine($"Subject {i + 1}: {marks[i]}");
}`}</code>
          </pre>

          <h3>4.2 Declaring Array First, Then Assigning</h3>
          <pre>
            <code>{`int[] numbers = new int[5];   // size = 5

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;`}</code>
          </pre>

          <h3>4.3 Multi-Dimensional Array (2D)</h3>
          <pre>
            <code>{`int[,] matrix = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};

Console.WriteLine(matrix[1, 2]);   // 6

// Printing 2D array
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.Write(matrix[i, j] + " ");
    }
    Console.WriteLine();
}`}</code>
          </pre>

          <h3>4.4 Common Array Class Methods</h3>
          <pre>
            <code>{`int[] numbers = { 45, 12, 78, 23, 56 };

Array.Sort(numbers);          // Sort ascending
Array.Reverse(numbers);       // Reverse the array
int index = Array.IndexOf(numbers, 78);  // Find index

Console.WriteLine("Sorted & Reversed:");
foreach (int num in numbers)
{
    Console.Write(num + " ");
}`}</code>
          </pre>

          <hr />

          <h2>5. Live Coding Examples</h2>

          <h3>Example 1: Find Maximum Number in Array</h3>
          <pre>
            <code>{`int[] numbers = { 34, 67, 12, 89, 45, 23 };
int max = numbers[0];

for (int i = 1; i < numbers.Length; i++)
{
    if (numbers[i] > max)
        max = numbers[i];
}

Console.WriteLine("Maximum number is: " + max);`}</code>
          </pre>

          <h3>Example 2: Student Marks System</h3>
          <pre>
            <code>{`string[] students = { "Ali", "Sara", "Ahmed", "Fatima", "Usman" };
int[] marks = { 78, 92, 65, 88, 45 };

Console.WriteLine("===== Student Results =====");
for (int i = 0; i < students.Length; i++)
{
    string result = marks[i] >= 50 ? "Pass" : "Fail";
    Console.WriteLine($"{students[i],-10} : {marks[i]} → {result}");
}`}</code>
          </pre>

          <hr />

          <h2>6. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Write a program that takes a number (1–7) and prints the day name using <code>switch</code>.</p>

          <h3>Exercise 2</h3>
          <p>Print the multiplication table of a number entered by the user using a <code>for</code> loop.</p>

          <h3>Exercise 3</h3>
          <p>Create an array of 5 integers, take input from the user, and calculate the sum and average.</p>

          <h3>Exercise 4</h3>
          <p>Write a program that finds the largest and smallest number in an array.</p>

          <hr />

          <h2>7. Session Challenge</h2>
          <p>Create a simple **Grade Management System**:</p>
          <ul>
            <li>Ask the user how many students (e.g. 5)</li>
            <li>Take name and marks of each student and store them in arrays</li>
            <li>Display a report showing:
              <ul>
                <li>Name</li>
                <li>Marks</li>
                <li>Grade (A/B/C/D/F)</li>
                <li>Result (Pass/Fail)</li>
              </ul>
            </li>
            <li>Also show the class average at the end</li>
          </ul>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is the difference between <code>if-else</code> and <code>switch</code>?</li>
            <li>When should we use a <code>do-while</code> loop instead of a <code>while</code> loop?</li>
            <li>What does the <code>break</code> statement do inside a loop?</li>
            <li>What does the <code>continue</code> statement do?</li>
            <li>How do you find the length of an array?</li>
            <li>What is the difference between a single-dimensional and multi-dimensional array?</li>
            <li>Name any three methods of the <code>Array</code> class.</li>
            <li>Which loop is best when you want to go through every element of an array?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Classes and Methods in C#</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}



// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session03() {
//   return (
//     <Layout
//       title="Session 03 — Conditions"
//       description="Conditions & Decision Making"
//     >
//       <CustomLayout>
//         <article className="session-content">
//           <h1>Session 03 — Conditions & Decision Making</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Teaching programs how to make decisions.</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should understand:</p>
//           <ul>
//             <li>Decision making</li>
//             <li><code>if</code></li>
//             <li><code>else</code></li>
//             <li><code>else if</code></li>
//             <li>Nested <code>if</code></li>
//             <li>Comparison operators</li>
//             <li>Logical operators</li>
//             <li><code>switch</code></li>
//             <li>Conditional (ternary) operator</li>
//             <li>Basic validation</li>
//           </ul>

//           <hr />

//           <h2>1. Why Do We Need Conditions?</h2>
//           <p>Programs often need to make decisions.</p>

//           <pre>
//             <code>{`If marks >= 50
//     Student passes
// Otherwise
//     Student fails`}</code>
//           </pre>

//           <p>C# uses conditional statements for this.</p>

//           <hr />

//           <h2>2. if Statement</h2>
//           <pre>
//             <code>{`if (condition)
// {
//     // code
// }`}</code>
//           </pre>

//           <p><strong>Example:</strong></p>
//           <pre>
//             <code>{`int age = 20;

// if (age >= 18)
// {
//     Console.WriteLine("You are an adult.");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>3. if / else</h2>
//           <pre>
//             <code>{`int age = 16;

// if (age >= 18)
// {
//     Console.WriteLine("Adult");
// }
// else
// {
//     Console.WriteLine("Minor");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>4. Comparison Operators</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Operator</th>
//                 <th>Meaning</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>==</code></td>
//                 <td>Equal</td>
//               </tr>
//               <tr>
//                 <td><code>!=</code></td>
//                 <td>Not equal</td>
//               </tr>
//               <tr>
//                 <td><code>&gt;</code></td>
//                 <td>Greater than</td>
//               </tr>
//               <tr>
//                 <td><code>&lt;</code></td>
//                 <td>Less than</td>
//               </tr>
//               <tr>
//                 <td><code>&gt;=</code></td>
//                 <td>Greater than or equal</td>
//               </tr>
//               <tr>
//                 <td><code>&lt;=</code></td>
//                 <td>Less than or equal</td>
//               </tr>
//             </tbody>
//           </table>

//           <hr />

//           <h2>5. else if</h2>
//           <p>Useful when there are multiple possible conditions.</p>

//           <pre>
//             <code>{`int marks = 85;

// if (marks >= 80)
// {
//     Console.WriteLine("A+");
// }
// else if (marks >= 70)
// {
//     Console.WriteLine("A");
// }
// else if (marks >= 60)
// {
//     Console.WriteLine("B");
// }
// else if (marks >= 50)
// {
//     Console.WriteLine("C");
// }
// else
// {
//     Console.WriteLine("Fail");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>6. Nested if</h2>
//           <p>An <code>if</code> inside another <code>if</code>.</p>

//           <pre>
//             <code>{`int age = 25;
// bool hasLicense = true;

// if (age >= 18)
// {
//     if (hasLicense)
//     {
//         Console.WriteLine("You can drive.");
//     }
// }`}</code>
//           </pre>

//           <hr />

//           <h2>7. Logical Operators</h2>

//           <h3>AND — <code>&&</code></h3>
//           <p>Both conditions must be true.</p>
//           <pre>
//             <code>{`int age = 25;

// if (age >= 18 && age <= 60)
// {
//     Console.WriteLine("Valid working age.");
// }`}</code>
//           </pre>

//           <h3>OR — <code>||</code></h3>
//           <p>At least one condition must be true.</p>
//           <pre>
//             <code>{`string role = "Admin";

// if (role == "Admin" || role == "Manager")
// {
//     Console.WriteLine("Access granted.");
// }`}</code>
//           </pre>

//           <h3>NOT — <code>!</code></h3>
//           <p>Reverses a boolean value.</p>
//           <pre>
//             <code>{`bool isLoggedIn = false;

// if (!isLoggedIn)
// {
//     Console.WriteLine("Please login.");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>8. Combining Conditions</h2>
//           <pre>
//             <code>{`int age = 22;
// bool hasId = true;

// if (age >= 18 && hasId)
// {
//     Console.WriteLine("Access granted.");
// }
// else
// {
//     Console.WriteLine("Access denied.");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>9. switch Statement</h2>
//           <p>Useful when checking one value against multiple known options.</p>

//           <pre>
//             <code>{`int day = 2;

// switch (day)
// {
//     case 1:
//         Console.WriteLine("Monday");
//         break;

//     case 2:
//         Console.WriteLine("Tuesday");
//         break;

//     case 3:
//         Console.WriteLine("Wednesday");
//         break;

//     default:
//         Console.WriteLine("Invalid day");
//         break;
// }`}</code>
//           </pre>

//           <h3>switch with String</h3>
//           <pre>
//             <code>{`string role = "Admin";

// switch (role)
// {
//     case "Admin":
//         Console.WriteLine("Full access");
//         break;

//     case "Teacher":
//         Console.WriteLine("Teacher access");
//         break;

//     case "Student":
//         Console.WriteLine("Student access");
//         break;

//     default:
//         Console.WriteLine("Unknown role");
//         break;
// }`}</code>
//           </pre>

//           <hr />

//           <h2>10. Conditional Operator (Ternary)</h2>
//           <p>A short way of writing a simple <code>if/else</code>.</p>

//           <pre>
//             <code>{`int age = 20;

// string result = age >= 18 ? "Adult" : "Minor";

// Console.WriteLine(result);`}</code>
//           </pre>

//           <p>Think of it as:</p>
//           <pre>
//             <code>{`condition ? value-if-true : value-if-false`}</code>
//           </pre>

//           <hr />

//           <h2>11. Practical Example — Grade Calculator</h2>
//           <pre>
//             <code>{`Console.Write("Enter marks: ");
// int marks = int.Parse(Console.ReadLine());

// if (marks >= 80)
// {
//     Console.WriteLine("Grade: A+");
// }
// else if (marks >= 70)
// {
//     Console.WriteLine("Grade: A");
// }
// else if (marks >= 60)
// {
//     Console.WriteLine("Grade: B");
// }
// else if (marks >= 50)
// {
//     Console.WriteLine("Grade: C");
// }
// else
// {
//     Console.WriteLine("Grade: F");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>12. Practical Example — Simple Login</h2>
//           <pre>
//             <code>{`Console.Write("Username: ");
// string username = Console.ReadLine();

// Console.Write("Password: ");
// string password = Console.ReadLine();

// if (username == "admin" && password == "12345")
// {
//     Console.WriteLine("Login successful.");
// }
// else
// {
//     Console.WriteLine("Invalid username or password.");
// }`}</code>
//           </pre>

//           <blockquote>
//             <strong>Teaching note only:</strong> Real applications should never store passwords like this.
//           </blockquote>

//           <hr />

//           <h2>13. Practical Example — ATM Menu</h2>
//           <pre>
//             <code>{`decimal balance = 50000;

// Console.WriteLine("===== ATM =====");
// Console.WriteLine("1. Check Balance");
// Console.WriteLine("2. Deposit");
// Console.WriteLine("3. Withdraw");
// Console.WriteLine("4. Exit");

// Console.Write("Choose an option: ");
// int choice = int.Parse(Console.ReadLine());

// switch (choice)
// {
//     case 1:
//         Console.WriteLine($"Balance: {balance}");
//         break;

//     case 2:
//         Console.Write("Enter deposit amount: ");
//         decimal deposit = decimal.Parse(Console.ReadLine());

//         if (deposit > 0)
//         {
//             balance += deposit;
//             Console.WriteLine($"New Balance: {balance}");
//         }
//         else
//         {
//             Console.WriteLine("Invalid amount.");
//         }
//         break;

//     case 3:
//         Console.Write("Enter withdrawal amount: ");
//         decimal withdrawal = decimal.Parse(Console.ReadLine());

//         if (withdrawal > 0 && withdrawal <= balance)
//         {
//             balance -= withdrawal;
//             Console.WriteLine($"New Balance: {balance}");
//         }
//         else
//         {
//             Console.WriteLine("Invalid withdrawal.");
//         }
//         break;

//     case 4:
//         Console.WriteLine("Goodbye!");
//         break;

//     default:
//         Console.WriteLine("Invalid option.");
//         break;
// }`}</code>
//           </pre>

//           <hr />

//           <h2>Session 3 Challenge</h2>
//           <p>Build a <strong>Student Result System</strong>.</p>

//           <p><strong>Ask for:</strong></p>
//           <pre>
//             <code>{`Student Name:
// English Marks:
// Math Marks:
// Computer Marks:`}</code>
//           </pre>

//           <p><strong>Calculate & Display:</strong></p>
//           <ul>
//             <li>Total</li>
//             <li>Percentage</li>
//             <li>Grade</li>
//             <li>Pass / Fail</li>
//           </ul>

//           <p><strong>Grading Rules:</strong></p>
//           <pre>
//             <code>{`80–100 → A+
// 70–79  → A
// 60–69  → B
// 50–59  → C
// Below 50 → F`}</code>
//           </pre>

//           <p><strong>Extra Requirements:</strong></p>
//           <ul>
//             <li>Marks cannot be below 0</li>
//             <li>Marks cannot be above 100</li>
//             <li>Student passes only if the required criteria are met</li>
//           </ul>

//           <hr />

//           <h2>Session 3 Homework</h2>
//           <p>Create a <strong>Simple ATM Program</strong> with the following menu:</p>
//           <pre>
//             <code>{`1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit`}</code>
//           </pre>

//           <p><strong>Requirements:</strong></p>
//           <ul>
//             <li>Initial balance = 50,000</li>
//             <li>Deposit must be greater than 0</li>
//             <li>Withdrawal must be greater than 0</li>
//             <li>Withdrawal cannot exceed balance</li>
//             <li>Display appropriate messages</li>
//             <li>Use <code>switch</code></li>
//             <li>Use <code>if/else</code></li>
//             <li>Use variables and operators</li>
//           </ul>

//           <hr />

//           <h2>Session 3 Quiz</h2>
//           <ol>
//             <li>Why do we use conditional statements?</li>
//             <li>What is an <code>if</code> statement?</li>
//             <li>Difference between <code>if</code> and <code>if/else</code>?</li>
//             <li>When do we use <code>else if</code>?</li>
//             <li>What does <code>==</code> mean?</li>
//             <li>Difference between <code>=</code> and <code>==</code>?</li>
//             <li>What does <code>&&</code> mean?</li>
//             <li>What does <code>||</code> mean?</li>
//             <li>What does <code>!</code> mean?</li>
//             <li>When is <code>switch</code> useful?</li>
//             <li>What is the conditional operator?</li>
//             <li>What is a nested <code>if</code>?</li>
//           </ol>
//           <hr />

//           <p><strong>Next up (Session 04):</strong> Loops & Iterations.</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
