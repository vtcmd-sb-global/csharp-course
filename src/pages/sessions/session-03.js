import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
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
      title="Session 03 — Programming Constructs and Arrays"
      description="Selection constructs, loops, jump statements and Arrays in C#"
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
          <pre style={codeBlockStyle}>
            <code>{`int age = 18;

if (age >= 18)
{
    Console.WriteLine("You are eligible to vote.");
}`}</code>
          </pre>

          <h3>1.2 if-else</h3>
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
            <code>{`int i = 1;
while (i <= 5)
{
    Console.WriteLine("Hello " + i);
    i++;
}`}</code>
          </pre>

          <h3>2.3 do-while Loop</h3>
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i == 6)
        break;          // exit the loop completely

    Console.WriteLine(i);
}
// Output: 1 2 3 4 5`}</code>
          </pre>

          <h3>continue</h3>
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = new int[5];   // size = 5

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;`}</code>
          </pre>

          <h3>4.3 Multi-Dimensional Array (2D)</h3>
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
          <pre style={codeBlockStyle}>
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
