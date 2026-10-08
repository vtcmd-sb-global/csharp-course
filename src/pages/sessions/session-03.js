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
      description="Selection constructs, loops, jump statements, ternary operator and arrays in C#"
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

          <h1>Session 03 — Programming Constructs and Arrays in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Master decision-making, loops, jump statements,
            the ternary operator, and arrays — the core building blocks used to
            control program flow and work with collections of values.
          </p>

          <p><strong>Based on:</strong> Official Aptech Book – Session 3</p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Understand what programming constructs are</li>
            <li>Use conditions to make decisions in a program</li>
            <li>Use <code>if</code>, <code>if-else</code>, and <code>else-if</code></li>
            <li>Use nested <code>if</code> statements</li>
            <li>Use the <code>switch</code> statement</li>
            <li>Understand <code>case</code>, <code>break</code>, and <code>default</code></li>
            <li>Use the ternary operator for simple decisions</li>
            <li>Understand why loops are needed</li>
            <li>Use <code>for</code>, <code>while</code>, <code>do-while</code>, and <code>foreach</code></li>
            <li>Understand the difference between the different types of loops</li>
            <li>Use nested loops</li>
            <li>Use <code>break</code> and <code>continue</code></li>
            <li>Declare, initialize, and access arrays</li>
            <li>Understand zero-based array indexing</li>
            <li>Use the <code>Length</code> property</li>
            <li>Update and traverse array elements</li>
            <li>Work with two-dimensional arrays</li>
            <li>Use common methods of the <code>Array</code> class</li>
            <li>Build small programs using conditions, loops, and arrays together</li>
          </ul>

          <hr />

          <h2>1. Programming Constructs</h2>

          <p>
            A programming construct is a structure used to control how a program
            executes its instructions.
          </p>

          <p>
            In simple terms, programming constructs help us answer questions such as:
          </p>

          <ul>
            <li><strong>Should this code run?</strong> → Decision-making</li>
            <li><strong>Which option should run?</strong> → Selection</li>
            <li><strong>Should this code repeat?</strong> → Loops</li>
            <li><strong>Should the loop stop or skip something?</strong> → Jump statements</li>
          </ul>

          <p>
            In this session, we will mainly work with three areas:
          </p>

          <ol>
            <li>Selection constructs</li>
            <li>Loop constructs</li>
            <li>Arrays</li>
          </ol>

          <hr />

          <h2>2. Selection Constructs — Decision Making</h2>

          <p>
            Selection constructs allow a program to make decisions.
            The program checks a condition and decides which block of code should run.
          </p>

          <p>
            A condition produces a Boolean result:
            <code>true</code> or <code>false</code>.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 20;

Console.WriteLine(age >= 18);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`True`}</code>
          </pre>

          <p>
            Since <code>age >= 18</code> is <code>true</code>, the program can
            execute code associated with that condition.
          </p>

          <h3>2.1 if Statement</h3>

          <p>
            The <code>if</code> statement executes a block of code only when
            its condition is true.
          </p>

          <p><strong>Syntax:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`if (condition)
{
    // Code runs when condition is true
}`}</code>
          </pre>

          <p><strong>Example:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 18;

if (age >= 18)
{
    Console.WriteLine("You are eligible to vote.");
}`}</code>
          </pre>

          <p>
            If <code>age</code> is less than <code>18</code>, the message will
            not be displayed.
          </p>

          <h3>2.2 if-else Statement</h3>

          <p>
            Use <code>if-else</code> when there are two possible paths:
            one when the condition is true and another when it is false.
          </p>

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

          <p>
            Here, exactly one of the two blocks will execute.
          </p>

          <h3>2.3 else-if Ladder</h3>

          <p>
            An <code>else-if</code> ladder is useful when there are multiple
            possible conditions.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int marks = 78;

if (marks >= 90)
{
    Console.WriteLine("Grade A+");
}
else if (marks >= 80)
{
    Console.WriteLine("Grade A");
}
else if (marks >= 70)
{
    Console.WriteLine("Grade B");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade C");
}
else if (marks >= 50)
{
    Console.WriteLine("Grade D");
}
else
{
    Console.WriteLine("Fail");
}`}</code>
          </pre>

          <p>
            C# checks the conditions from top to bottom. Once it finds a
            condition that is true, its block executes and the remaining
            <code>else-if</code> conditions are skipped.
          </p>

          <h3>2.4 Nested if</h3>

          <p>
            A nested <code>if</code> is an <code>if</code> statement placed
            inside another <code>if</code> statement.
          </p>

          <p>
            It is useful when one decision depends on another decision.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 22;
bool hasCNIC = true;

if (age >= 18)
{
    if (hasCNIC)
    {
        Console.WriteLine("You can cast your vote.");
    }
    else
    {
        Console.WriteLine("Please apply for CNIC first.");
    }
}
else
{
    Console.WriteLine("You are underage.");
}`}</code>
          </pre>

          <p>
            The inner condition is checked only when the outer condition is true.
          </p>

          <h3>2.5 switch Statement</h3>

          <p>
            The <code>switch</code> statement is useful when one value needs
            to be compared against multiple possible values.
          </p>

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

          <h3>Understanding switch Components</h3>

          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>switch</code></td>
                <td>Starts the selection structure</td>
              </tr>

              <tr>
                <td><code>case</code></td>
                <td>Defines a possible value to match</td>
              </tr>

              <tr>
                <td><code>break</code></td>
                <td>Stops execution of the switch</td>
              </tr>

              <tr>
                <td><code>default</code></td>
                <td>Runs when none of the cases match</td>
              </tr>
            </tbody>
          </table>

          <h3>if-else vs switch</h3>

          <table>
            <thead>
              <tr>
                <th>if-else</th>
                <th>switch</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Good for conditions and ranges</td>
                <td>Good for matching specific values</td>
              </tr>

              <tr>
                <td>Can use expressions such as <code>&gt;</code>, <code>&lt;</code></td>
                <td>Commonly compares one value against cases</td>
              </tr>

              <tr>
                <td>Useful for marks, age, salary ranges, etc.</td>
                <td>Useful for menus, days, choices, options, etc.</td>
              </tr>
            </tbody>
          </table>

          <h3>2.6 Ternary Operator</h3>

          <p>
            The ternary operator is a short way to write a simple
            <code>if-else</code> decision.
          </p>

          <p><strong>Syntax:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`condition ? valueIfTrue : valueIfFalse`}</code>
          </pre>

          <p><strong>Example:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`int marks = 75;

string result = marks >= 50 ? "Pass" : "Fail";

Console.WriteLine(result);`}</code>
          </pre>

          <p>
            This is approximately equivalent to:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`string result;

if (marks >= 50)
{
    result = "Pass";
}
else
{
    result = "Fail";
}`}</code>
          </pre>

          <p>
            Use the ternary operator for simple decisions. For complex logic,
            a normal <code>if-else</code> statement is usually easier to read.
          </p>

          <hr />

          <h2>3. Loop Constructs</h2>

          <h3>What is a Loop?</h3>

          <p>
            A loop repeatedly executes a block of code while a condition is
            satisfied or while there are values that still need to be processed.
          </p>

          <p>
            Without loops, repeating the same operation would require writing
            the same code again and again.
          </p>

          <p>For example, without a loop:</p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine(1);
Console.WriteLine(2);
Console.WriteLine(3);
Console.WriteLine(4);
Console.WriteLine(5);`}</code>
          </pre>

          <p>
            With a loop:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`}</code>
          </pre>

          <p>
            Loops make repetitive tasks shorter, easier to maintain, and more flexible.
          </p>

          <h3>3.1 for Loop</h3>

          <p>
            The <code>for</code> loop is commonly used when you know how many
            times you want to repeat something.
          </p>

          <p><strong>Syntax:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`for (initialization; condition; update)
{
    // Code to repeat
}`}</code>
          </pre>

          <p>Example:</p>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`}</code>
          </pre>

          <p>The three parts mean:</p>

          <table>
            <thead>
              <tr>
                <th>Part</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>int i = 1</code></td>
                <td>Initialize the loop variable</td>
              </tr>

              <tr>
                <td><code>i &lt;= 5</code></td>
                <td>Continue while this condition is true</td>
              </tr>

              <tr>
                <td><code>i++</code></td>
                <td>Increase the variable after each iteration</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Execution flow:</strong></p>

          <ol>
            <li>Create <code>i</code> and set it to <code>1</code>.</li>
            <li>Check whether <code>i &lt;= 5</code>.</li>
            <li>Execute the loop body.</li>
            <li>Increase <code>i</code>.</li>
            <li>Check the condition again.</li>
            <li>Repeat until the condition becomes false.</li>
          </ol>

          <h3>Example: Even Numbers</h3>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 2; i <= 20; i += 2)
{
    Console.Write(i + " ");
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`2 4 6 8 10 12 14 16 18 20`}</code>
          </pre>

          <h3>3.2 while Loop</h3>

          <p>
            A <code>while</code> loop repeats as long as its condition is true.
          </p>

          <p>
            It is useful when you do not necessarily know the exact number of
            repetitions in advance.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int i = 1;

while (i <= 5)
{
    Console.WriteLine("Hello " + i);
    i++;
}`}</code>
          </pre>

          <p>
            <strong>Important:</strong> Make sure the condition can eventually
            become false. Otherwise, you can create an infinite loop.
          </p>

          <h3>Infinite Loop Example</h3>

          <pre style={codeBlockStyle}>
            <code>{`int i = 1;

while (i <= 5)
{
    Console.WriteLine(i);

    // i is never increased
}`}</code>
          </pre>

          <p>
            Since <code>i</code> remains <code>1</code>, the condition stays true
            forever.
          </p>

          <h3>3.3 do-while Loop</h3>

          <p>
            A <code>do-while</code> loop is similar to a <code>while</code> loop,
            but the loop body executes at least once before the condition is checked.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int i = 1;

do
{
    Console.WriteLine("Count: " + i);
    i++;
}
while (i <= 5);`}</code>
          </pre>

          <h3>while vs do-while</h3>

          <pre style={codeBlockStyle}>
            <code>{`int number = 10;

while (number < 5)
{
    Console.WriteLine("while");
}`}</code>
          </pre>

          <p>
            The condition is false before the loop starts, so nothing is printed.
          </p>

          <p>With <code>do-while</code>:</p>

          <pre style={codeBlockStyle}>
            <code>{`int number = 10;

do
{
    Console.WriteLine("do-while");
}
while (number < 5);`}</code>
          </pre>

          <p>
            The message is printed once because the body executes before the
            condition is checked.
          </p>

          <h3>3.4 foreach Loop</h3>

          <p>
            The <code>foreach</code> loop is designed for going through each
            element of a collection such as an array.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`string[] names = { "Ali", "Sara", "Ahmed", "Fatima" };

foreach (string name in names)
{
    Console.WriteLine(name);
}`}</code>
          </pre>

          <p>
            With <code>foreach</code>, you do not need to manually manage an
            index to visit each element.
          </p>

          <h3>Choosing the Right Loop</h3>

          <table>
            <thead>
              <tr>
                <th>Loop</th>
                <th>Common Use</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>for</code></td>
                <td>When you know or can define the number of repetitions</td>
              </tr>

              <tr>
                <td><code>while</code></td>
                <td>When repetition depends mainly on a condition</td>
              </tr>

              <tr>
                <td><code>do-while</code></td>
                <td>When the code must execute at least once</td>
              </tr>

              <tr>
                <td><code>foreach</code></td>
                <td>When processing every element in a collection</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Nested Loops</h2>

          <p>
            A nested loop is a loop placed inside another loop.
            Nested loops are commonly used for tables, matrices, patterns,
            and two-dimensional arrays.
          </p>

          <h3>Example: Multiplication Table</h3>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= 5; j++)
    {
        Console.Write((i * j) + "\\t");
    }

    Console.WriteLine();
}`}</code>
          </pre>

          <p>
            The inner loop completes all of its iterations for every single
            iteration of the outer loop.
          </p>

          <hr />

          <h2>5. Jump Statements</h2>

          <p>
            Jump statements change the normal flow of execution.
            In this session, we will focus on <code>break</code> and
            <code>continue</code>.
          </p>

          <h3>5.1 break</h3>

          <p>
            The <code>break</code> statement immediately exits the loop.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i == 6)
    {
        break;
    }

    Console.WriteLine(i);
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`1
2
3
4
5`}</code>
          </pre>

          <p>
            When <code>i</code> becomes <code>6</code>, <code>break</code>
            immediately terminates the loop.
          </p>

          <h3>5.2 continue</h3>

          <p>
            The <code>continue</code> statement skips the current iteration
            and moves to the next iteration.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        continue;
    }

    Console.WriteLine(i);
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`1
3
5
7
9`}</code>
          </pre>

          <h3>break vs continue</h3>

          <table>
            <thead>
              <tr>
                <th><code>break</code></th>
                <th><code>continue</code></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Stops the loop completely</td>
                <td>Skips the current iteration</td>
              </tr>

              <tr>
                <td>No more iterations execute</td>
                <td>The loop continues with the next iteration</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>6. Arrays</h2>

          <h3>What is an Array?</h3>

          <p>
            An array is a collection of values of the same data type stored
            under one variable name.
          </p>

          <p>
            For example, instead of creating five separate variables:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int mark1 = 85;
int mark2 = 90;
int mark3 = 78;
int mark4 = 92;
int mark5 = 88;`}</code>
          </pre>

          <p>
            We can store the values in one array:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 85, 90, 78, 92, 88 };`}</code>
          </pre>

          <p>
            Arrays are useful when we have multiple values of the same type
            that belong together.
          </p>

          <h3>6.1 Single-Dimensional Array</h3>

          <p>
            A single-dimensional array stores values in a single sequence.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 85, 90, 78, 92, 88 };`}</code>
          </pre>

          <h3>Array Index</h3>

          <p>
            Every array element has an index. C# arrays use
            <strong> zero-based indexing</strong>.
          </p>

          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>0</code></td>
                <td><code>85</code></td>
              </tr>

              <tr>
                <td><code>1</code></td>
                <td><code>90</code></td>
              </tr>

              <tr>
                <td><code>2</code></td>
                <td><code>78</code></td>
              </tr>

              <tr>
                <td><code>3</code></td>
                <td><code>92</code></td>
              </tr>

              <tr>
                <td><code>4</code></td>
                <td><code>88</code></td>
              </tr>
            </tbody>
          </table>

          <p>
            Therefore, the first element is at index <code>0</code>, not index
            <code>1</code>.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine(marks[0]); // 85
Console.WriteLine(marks[2]); // 78
Console.WriteLine(marks[4]); // 88`}</code>
          </pre>

          <h3>6.2 Array Length</h3>

          <p>
            The <code>Length</code> property tells us how many elements an array contains.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 85, 90, 78, 92, 88 };

Console.WriteLine(marks.Length);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`5`}</code>
          </pre>

          <p>
            If an array has a length of <code>5</code>, its valid indexes are
            <code>0</code> through <code>4</code>.
          </p>

          <h3>Array Index Out of Range</h3>

          <p>
            Trying to access an index that does not exist causes an error.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 10, 20, 30 };

// Valid
Console.WriteLine(numbers[2]);

// Invalid
// Console.WriteLine(numbers[3]);`}</code>
          </pre>

          <p>
            The array has three elements, so its valid indexes are
            <code>0</code>, <code>1</code>, and <code>2</code>.
          </p>

          <h3>6.3 Declaring an Array First, Then Assigning Values</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = new int[5];

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;`}</code>
          </pre>

          <p>
            <code>new int[5]</code> creates an integer array capable of storing
            five values.
          </p>

          <h3>6.4 Updating an Array Element</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 70, 80, 90 };

marks[1] = 85;

Console.WriteLine(marks[1]);`}</code>
          </pre>

          <p>
            The value at index <code>1</code> changes from <code>80</code>
            to <code>85</code>.
          </p>

          <h3>6.5 Traversing an Array with for</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 85, 90, 78, 92, 88 };

for (int i = 0; i < marks.Length; i++)
{
    Console.WriteLine($"Mark {i + 1}: {marks[i]}");
}`}</code>
          </pre>

          <p>
            Notice the condition:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`i < marks.Length`}</code>
          </pre>

          <p>
            This is safer than manually writing the number of elements because
            the loop automatically adapts to the array's size.
          </p>

          <h3>6.6 Traversing an Array with foreach</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 85, 90, 78, 92, 88 };

foreach (int mark in marks)
{
    Console.WriteLine(mark);
}`}</code>
          </pre>

          <p>
            Use <code>foreach</code> when you simply need to process every element
            and do not need the index.
          </p>

          <h3>for vs foreach with Arrays</h3>

          <table>
            <thead>
              <tr>
                <th><code>for</code></th>
                <th><code>foreach</code></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Provides the index</td>
                <td>Directly provides each value</td>
              </tr>

              <tr>
                <td>Useful when index is required</td>
                <td>Useful when simply processing every element</td>
              </tr>

              <tr>
                <td><code>marks[i]</code></td>
                <td><code>mark</code></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>7. Multi-Dimensional Arrays</h2>

          <p>
            A multi-dimensional array stores data across multiple dimensions.
            A two-dimensional array can be visualized as rows and columns.
          </p>

          <h3>7.1 Two-Dimensional Array</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[,] matrix =
{
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};`}</code>
          </pre>

          <p>
            This array contains 3 rows and 3 columns.
          </p>

          <p>
            To access a value, we provide both the row index and column index.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine(matrix[1, 2]);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`6`}</code>
          </pre>

          <p>
            Remember that both row and column indexes start from zero.
          </p>

          <h3>7.2 Printing a 2D Array</h3>

          <p>
            Nested loops are commonly used to process two-dimensional arrays.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.Write(matrix[i, j] + " ");
    }

    Console.WriteLine();
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`1 2 3
4 5 6
7 8 9`}</code>
          </pre>

          <h3>Understanding the Nested Loops</h3>

          <ul>
            <li>The outer loop moves through the rows.</li>
            <li>The inner loop moves through the columns.</li>
            <li>The inner loop completes before the outer loop moves to the next row.</li>
          </ul>

          <hr />

          <h2>8. Common Array Class Methods</h2>

          <p>
            C# provides the <code>Array</code> class with useful methods for
            working with arrays.
          </p>

          <h3>8.1 Array.Sort()</h3>

          <p>
            Sorts an array in ascending order.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 45, 12, 78, 23, 56 };

Array.Sort(numbers);

foreach (int number in numbers)
{
    Console.Write(number + " ");
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`12 23 45 56 78`}</code>
          </pre>

          <h3>8.2 Array.Reverse()</h3>

          <p>
            Reverses the order of the elements in the array.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 10, 20, 30, 40, 50 };

Array.Reverse(numbers);

foreach (int number in numbers)
{
    Console.Write(number + " ");
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`50 40 30 20 10`}</code>
          </pre>

          <h3>8.3 Array.IndexOf()</h3>

          <p>
            Searches for a value and returns its index.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 45, 12, 78, 23, 56 };

int index = Array.IndexOf(numbers, 78);

Console.WriteLine(index);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`2`}</code>
          </pre>

          <p>
            If the value is not found, <code>Array.IndexOf()</code> returns
            <code>-1</code>.
          </p>

          <h3>8.4 Array.Clear()</h3>

          <p>
            <code>Array.Clear()</code> clears a range of elements.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 10, 20, 30, 40, 50 };

Array.Clear(numbers, 1, 2);

foreach (int number in numbers)
{
    Console.Write(number + " ");
}`}</code>
          </pre>

          <p>
            For an integer array, cleared elements become <code>0</code>.
          </p>

          <h3>8.5 Array.Copy()</h3>

          <p>
            <code>Array.Copy()</code> can copy elements from one array into another.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] source = { 10, 20, 30 };
int[] destination = new int[3];

Array.Copy(source, destination, 3);

foreach (int number in destination)
{
    Console.Write(number + " ");
}`}</code>
          </pre>

          <hr />

          <h2>9. Live Coding Examples</h2>

          <h3>Example 1: Find Maximum Number in an Array</h3>

          <p>
            This example combines arrays, loops, comparison, and variables.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 34, 67, 12, 89, 45, 23 };

int max = numbers[0];

for (int i = 1; i < numbers.Length; i++)
{
    if (numbers[i] > max)
    {
        max = numbers[i];
    }
}

Console.WriteLine("Maximum number is: " + max);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`Maximum number is: 89`}</code>
          </pre>

          <h3>Example 2: Find Minimum Number</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 34, 67, 12, 89, 45, 23 };

int min = numbers[0];

for (int i = 1; i < numbers.Length; i++)
{
    if (numbers[i] < min)
    {
        min = numbers[i];
    }
}

Console.WriteLine("Minimum number is: " + min);`}</code>
          </pre>

          <h3>Example 3: Calculate Array Sum and Average</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] marks = { 78, 85, 92, 67, 88 };

int sum = 0;

foreach (int mark in marks)
{
    sum += mark;
}

double average = (double)sum / marks.Length;

Console.WriteLine($"Total = {sum}");
Console.WriteLine($"Average = {average}");`}</code>
          </pre>

          <p>
            Notice the conversion to <code>double</code>. Without it,
            integer division could remove the decimal portion of the average.
          </p>

          <h3>Example 4: Student Marks System</h3>

          <p>
            This example combines two arrays. One stores student names and
            the other stores their marks.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`string[] students =
{
    "Ali",
    "Sara",
    "Ahmed",
    "Fatima",
    "Usman"
};

int[] marks =
{
    78,
    92,
    65,
    88,
    45
};

Console.WriteLine("===== Student Results =====");

for (int i = 0; i < students.Length; i++)
{
    string result = marks[i] >= 50 ? "Pass" : "Fail";

    Console.WriteLine(
        $"{students[i],-10} : {marks[i]} → {result}"
    );
}`}</code>
          </pre>

          <h3>Example 5: Simple Menu System</h3>

          <p>
            This example combines user input and <code>switch</code>.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine("===== MENU =====");
Console.WriteLine("1. View Profile");
Console.WriteLine("2. View Marks");
Console.WriteLine("3. Exit");

Console.Write("Choose an option: ");

int choice = Convert.ToInt32(Console.ReadLine());

switch (choice)
{
    case 1:
        Console.WriteLine("Opening profile...");
        break;

    case 2:
        Console.WriteLine("Opening marks...");
        break;

    case 3:
        Console.WriteLine("Goodbye!");
        break;

    default:
        Console.WriteLine("Invalid option.");
        break;
}`}</code>
          </pre>

          <hr />

          <h2>10. Common Beginner Mistakes</h2>

          <h3>Mistake 1 — Forgetting That Array Indexes Start at 0</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 10, 20, 30 };

// First element
Console.WriteLine(numbers[0]);`}</code>
          </pre>

          <p>
            The first element is at index <code>0</code>, not <code>1</code>.
          </p>

          <h3>Mistake 2 — Going Outside the Array</h3>

          <pre style={codeBlockStyle}>
            <code>{`int[] numbers = { 10, 20, 30 };

// Console.WriteLine(numbers[3]); // Error`}</code>
          </pre>

          <p>
            The valid indexes are <code>0</code>, <code>1</code>, and
            <code>2</code>.
          </p>

          <h3>Mistake 3 — Forgetting to Update a while Loop Variable</h3>

          <pre style={codeBlockStyle}>
            <code>{`int i = 1;

while (i <= 5)
{
    Console.WriteLine(i);

    // Missing i++
}`}</code>
          </pre>

          <p>
            This can result in an infinite loop.
          </p>

          <h3>Mistake 4 — Using <code>break</code> When You Only Want to Skip</h3>

          <p>
            Remember:
          </p>

          <ul>
            <li><code>break</code> → stop the loop completely</li>
            <li><code>continue</code> → skip the current iteration</li>
          </ul>

          <h3>Mistake 5 — Forgetting <code>break</code> in switch</h3>

          <p>
            In the traditional <code>switch</code> structure used in this session,
            <code>break</code> is used to leave the selected case.
          </p>

          <h3>Mistake 6 — Using a Loop When a Simple Statement Is Enough</h3>

          <p>
            Loops are designed for repetition. Do not use a loop simply because
            it is available.
          </p>

          <hr />

          <h2>11. Practice Exercises</h2>

          <h3>Exercise 1 — Day Name</h3>

          <p>
            Write a program that takes a number from <code>1</code> to
            <code>7</code> and prints the day name using <code>switch</code>.
          </p>

          <h3>Exercise 2 — Multiplication Table</h3>

          <p>
            Ask the user for a number and print its multiplication table
            from 1 to 10 using a <code>for</code> loop.
          </p>

          <p>Example:</p>

          <pre style={codeBlockStyle}>
            <code>{`5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50`}</code>
          </pre>

          <h3>Exercise 3 — Sum and Average</h3>

          <p>
            Create an array of 5 integers. Take the values from the user and
            calculate the total and average.
          </p>

          <h3>Exercise 4 — Largest and Smallest Number</h3>

          <p>
            Create an array and write a program that finds both the largest
            and smallest number.
          </p>

          <h3>Exercise 5 — Count Even and Odd Numbers</h3>

          <p>
            Create an integer array and count how many values are even and
            how many are odd.
          </p>

          <h3>Exercise 6 — Search an Array</h3>

          <p>
            Ask the user for a number and check whether that number exists
            in an array.
          </p>

          <h3>Exercise 7 — Reverse an Array</h3>

          <p>
            Create an array of numbers and display the values in reverse order.
            Try both:
          </p>

          <ul>
            <li>Using a loop</li>
            <li>Using <code>Array.Reverse()</code></li>
          </ul>

          <hr />

          <h2>12. Session Challenge</h2>

          <h3>Grade Management System</h3>

          <p>
            Create a console application called
            <strong> Grade Management System</strong>.
          </p>

          <p>The program should:</p>

          <ol>
            <li>Ask the user how many students they want to enter.</li>
            <li>Create arrays for student names and marks.</li>
            <li>Take the name and marks of each student.</li>
            <li>Store the values in the arrays.</li>
            <li>Display each student's name and marks.</li>
            <li>Calculate the grade for each student.</li>
            <li>Display Pass or Fail.</li>
            <li>Calculate the class average.</li>
            <li>Display the highest mark.</li>
            <li>Display the lowest mark.</li>
          </ol>

          <p>Suggested grading system:</p>

          <table>
            <thead>
              <tr>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>90–100</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>80–89</td>
                <td>A</td>
              </tr>

              <tr>
                <td>70–79</td>
                <td>B</td>
              </tr>

              <tr>
                <td>60–69</td>
                <td>C</td>
              </tr>

              <tr>
                <td>50–59</td>
                <td>D</td>
              </tr>

              <tr>
                <td>Below 50</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          <p>Example report:</p>

          <pre style={codeBlockStyle}>
            <code>{`========================================
           GRADE MANAGEMENT SYSTEM
========================================

Name       Marks       Grade       Result
----------------------------------------
Ali          85          A          Pass
Sara         92          A+         Pass
Ahmed        65          C          Pass
Fatima       45          F          Fail

----------------------------------------
Class Average : 71.75
Highest Marks : 92
Lowest Marks  : 45
========================================`}</code>
          </pre>

          <p>
            <strong>Bonus:</strong> Add a search feature that asks for a student
            name and displays that student's marks and grade.
          </p>

          <hr />

          <h2>13. Quick Revision</h2>

          <table>
            <thead>
              <tr>
                <th>Concept</th>
                <th>Remember</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Programming Construct</td>
                <td>A structure used to control program execution</td>
              </tr>

              <tr>
                <td><code>if</code></td>
                <td>Runs code when a condition is true</td>
              </tr>

              <tr>
                <td><code>if-else</code></td>
                <td>Provides two possible execution paths</td>
              </tr>

              <tr>
                <td><code>else-if</code></td>
                <td>Checks multiple conditions</td>
              </tr>

              <tr>
                <td>Nested if</td>
                <td>An if statement inside another if statement</td>
              </tr>

              <tr>
                <td><code>switch</code></td>
                <td>Matches a value against multiple cases</td>
              </tr>

              <tr>
                <td>Ternary</td>
                <td>Short form of a simple if-else decision</td>
              </tr>

              <tr>
                <td><code>for</code></td>
                <td>Useful when the repetition count is known</td>
              </tr>

              <tr>
                <td><code>while</code></td>
                <td>Repeats while a condition is true</td>
              </tr>

              <tr>
                <td><code>do-while</code></td>
                <td>Executes at least once before checking the condition</td>
              </tr>

              <tr>
                <td><code>foreach</code></td>
                <td>Processes each element in a collection</td>
              </tr>

              <tr>
                <td><code>break</code></td>
                <td>Stops a loop or exits a switch case</td>
              </tr>

              <tr>
                <td><code>continue</code></td>
                <td>Skips the current loop iteration</td>
              </tr>

              <tr>
                <td>Array</td>
                <td>Stores multiple values of the same type</td>
              </tr>

              <tr>
                <td>Array Index</td>
                <td>Position of an element; starts at 0</td>
              </tr>

              <tr>
                <td><code>Length</code></td>
                <td>Returns the number of elements in an array</td>
              </tr>

              <tr>
                <td>2D Array</td>
                <td>Stores data using rows and columns</td>
              </tr>

              <tr>
                <td><code>Array.Sort()</code></td>
                <td>Sorts array elements</td>
              </tr>

              <tr>
                <td><code>Array.Reverse()</code></td>
                <td>Reverses array elements</td>
              </tr>

              <tr>
                <td><code>Array.IndexOf()</code></td>
                <td>Finds the index of a value</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>14. Session Quiz</h2>

          <ol>
            <li>What is a programming construct?</li>

            <li>
              What is the difference between <code>if</code> and
              <code>if-else</code>?
            </li>

            <li>
              When would you use an <code>else-if</code> ladder?
            </li>

            <li>
              What is a nested <code>if</code> statement?
            </li>

            <li>
              When is <code>switch</code> useful?
            </li>

            <li>
              What is the purpose of <code>case</code>, <code>break</code>,
              and <code>default</code>?
            </li>

            <li>
              What is the ternary operator?
            </li>

            <li>
              What is a loop and why do we use loops?
            </li>

            <li>
              What are the three main parts of a <code>for</code> loop?
            </li>

            <li>
              What is the difference between <code>while</code> and
              <code>do-while</code>?
            </li>

            <li>
              When is <code>foreach</code> useful?
            </li>

            <li>
              What is an infinite loop?
            </li>

            <li>
              What is the difference between <code>break</code> and
              <code>continue</code>?
            </li>

            <li>
              What is an array?
            </li>

            <li>
              Why does the first element of an array have index <code>0</code>?
            </li>

            <li>
              If an array has 5 elements, what are its valid indexes?
            </li>

            <li>
              What does the <code>Length</code> property return?
            </li>

            <li>
              What is the difference between a one-dimensional and
              two-dimensional array?
            </li>

            <li>
              Name three methods of the <code>Array</code> class.
            </li>

            <li>
              Which loop is commonly used to process every element of an array?
            </li>
          </ol>

          <hr />

          <h2>15. Instructor Demonstration Checklist</h2>

          <p>
            During the class, demonstrate these concepts live in Visual Studio:
          </p>

          <ol>
            <li>Create a simple <code>if</code> statement.</li>
            <li>Change it into an <code>if-else</code> statement.</li>
            <li>Create an <code>else-if</code> grading system.</li>
            <li>Demonstrate a nested <code>if</code>.</li>
            <li>Convert a simple decision into a <code>switch</code>.</li>
            <li>Explain <code>case</code>, <code>break</code>, and <code>default</code>.</li>
            <li>Demonstrate the ternary operator.</li>
            <li>Write a basic <code>for</code> loop.</li>
            <li>Explain initialization, condition, and update in a <code>for</code> loop.</li>
            <li>Demonstrate a <code>while</code> loop.</li>
            <li>Show why forgetting to update a <code>while</code> variable can create an infinite loop.</li>
            <li>Demonstrate <code>do-while</code>.</li>
            <li>Demonstrate <code>foreach</code> with an array.</li>
            <li>Show the difference between <code>break</code> and <code>continue</code>.</li>
            <li>Create an integer array.</li>
            <li>Demonstrate zero-based indexing.</li>
            <li>Demonstrate the <code>Length</code> property.</li>
            <li>Update an array element.</li>
            <li>Traverse an array with <code>for</code>.</li>
            <li>Traverse an array with <code>foreach</code>.</li>
            <li>Create a 2D array.</li>
            <li>Use nested loops to display a 2D array.</li>
            <li>Demonstrate <code>Array.Sort()</code>.</li>
            <li>Build the Student Grade Management challenge with the students.</li>
          </ol>

          <hr />

          <h2>16. Homework</h2>

          <p>
            Complete the following programs and submit your source code:
          </p>

          <ol>
            <li>
              <strong>Number Analyzer</strong> —
              Take a number from the user and determine whether it is
              positive, negative, or zero. Also determine whether it is even or odd.
            </li>

            <li>
              <strong>Multiplication Table</strong> —
              Take a number and print its table from 1 to 10.
            </li>

            <li>
              <strong>Array Statistics</strong> —
              Store 10 numbers in an array and calculate the sum,
              average, maximum, and minimum.
            </li>

            <li>
              <strong>Student Marks</strong> —
              Store student names and marks in arrays and display
              their grades and pass/fail status.
            </li>

            <li>
              <strong>Menu Program</strong> —
              Create a simple menu using <code>switch</code> that allows
              the user to select different operations.
            </li>
          </ol>

          <hr />

          <h2>17. Key Takeaways</h2>

          <ul>
            <li>Conditions allow programs to make decisions.</li>
            <li><code>if</code> is used when code should run only when a condition is true.</li>
            <li><code>if-else</code> provides two possible paths.</li>
            <li><code>else-if</code> allows multiple conditions to be checked.</li>
            <li><code>switch</code> is useful for matching a value against multiple choices.</li>
            <li>The ternary operator provides a short form for simple decisions.</li>
            <li>Loops allow us to repeat code without writing it multiple times.</li>
            <li><code>for</code>, <code>while</code>, <code>do-while</code>, and <code>foreach</code> serve different purposes.</li>
            <li><code>break</code> stops a loop, while <code>continue</code> skips the current iteration.</li>
            <li>Arrays store multiple values of the same data type.</li>
            <li>C# arrays use zero-based indexing.</li>
            <li>The <code>Length</code> property tells us how many elements an array contains.</li>
            <li>Nested loops are useful for working with two-dimensional arrays.</li>
            <li>The <code>Array</code> class provides useful methods for sorting, searching, reversing, and copying arrays.</li>
          </ul>

          <hr />

          <p>
            <strong>Next Session:</strong> Classes and Methods in C#
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}





// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session03() {
//   const codeBlockStyle = {
//     backgroundColor: '#1e1e1e',
//     color: '#d4d4d4',
//     padding: '12px 16px',
//     borderRadius: '6px',
//     fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
//     fontSize: '0.9rem',
//     overflowX: 'auto',
//     lineHeight: '1.5',
//     margin: '12px 0 24px 0'
//   };

//   const inlineCodeStyle = {
//     backgroundColor: '#f4f4f4',
//     color: '#d10057',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     fontFamily: 'Consolas, Monaco, monospace',
//     fontSize: '0.9em'
//   };
//   return (
//     <Layout
//       title="Session 03 — Programming Constructs and Arrays"
//       description="Selection constructs, loops, jump statements and Arrays in C#"
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
//           <h1>Session 03 — Programming Constructs and Arrays</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Master decision-making, loops, and arrays — the core building blocks of real programs.</p>
//           <p><strong>Based on:</strong> Official Aptech Book – Session 3</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should be able to:</p>
//           <ul>
//             <li>Use <code>if</code>, <code>if-else</code>, <code>else-if</code> and nested <code>if</code></li>
//             <li>Use <code>switch</code> statement</li>
//             <li>Work with different types of loops (<code>for</code>, <code>while</code>, <code>do-while</code>, <code>foreach</code>)</li>
//             <li>Use jump statements (<code>break</code>, <code>continue</code>)</li>
//             <li>Declare and use single-dimensional and multi-dimensional arrays</li>
//             <li>Use common methods of the <code>Array</code> class</li>
//           </ul>

//           <hr />

//           <h2>1. Selection Constructs (Decision Making)</h2>

//           <h3>1.1 if Statement</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int age = 18;

// if (age >= 18)
// {
//     Console.WriteLine("You are eligible to vote.");
// }`}</code>
//           </pre>

//           <h3>1.2 if-else</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int marks = 45;

// if (marks >= 50)
// {
//     Console.WriteLine("Pass");
// }
// else
// {
//     Console.WriteLine("Fail");
// }`}</code>
//           </pre>

//           <h3>1.3 else-if Ladder</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int marks = 78;

// if (marks >= 90)
//     Console.WriteLine("Grade A+");
// else if (marks >= 80)
//     Console.WriteLine("Grade A");
// else if (marks >= 70)
//     Console.WriteLine("Grade B");
// else if (marks >= 60)
//     Console.WriteLine("Grade C");
// else if (marks >= 50)
//     Console.WriteLine("Grade D");
// else
//     Console.WriteLine("Fail");`}</code>
//           </pre>

//           <h3>1.4 Nested if</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int age = 22;
// bool hasCNIC = true;

// if (age >= 18)
// {
//     if (hasCNIC)
//         Console.WriteLine("You can cast your vote.");
//     else
//         Console.WriteLine("Please apply for CNIC first.");
// }
// else
// {
//     Console.WriteLine("You are underage.");
// }`}</code>
//           </pre>

//           <h3>1.5 switch Statement</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`Console.Write("Enter day number (1-7): ");
// int day = Convert.ToInt32(Console.ReadLine());

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
//     case 4:
//         Console.WriteLine("Thursday");
//         break;
//     case 5:
//         Console.WriteLine("Friday");
//         break;
//     case 6:
//         Console.WriteLine("Saturday");
//         break;
//     case 7:
//         Console.WriteLine("Sunday");
//         break;
//     default:
//         Console.WriteLine("Invalid day number");
//         break;
// }`}</code>
//           </pre>

//           <hr />

//           <h2>2. Loop Constructs</h2>

//           <h3>2.1 for Loop</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`// Print numbers from 1 to 10
// for (int i = 1; i <= 10; i++)
// {
//     Console.WriteLine(i);
// }

// // Print even numbers from 2 to 20
// for (int i = 2; i <= 20; i += 2)
// {
//     Console.Write(i + " ");
// }`}</code>
//           </pre>

//           <h3>2.2 while Loop</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int i = 1;
// while (i <= 5)
// {
//     Console.WriteLine("Hello " + i);
//     i++;
// }`}</code>
//           </pre>

//           <h3>2.3 do-while Loop</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int i = 1;
// do
// {
//     Console.WriteLine("Count: " + i);
//     i++;
// } while (i <= 5);`}</code>
//           </pre>

//           <h3>2.4 foreach Loop</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`string[] names = { "Ali", "Sara", "Ahmed", "Fatima" };

// foreach (string name in names)
// {
//     Console.WriteLine(name);
// }`}</code>
//           </pre>

//           <hr />

//           <h2>3. Jump Statements</h2>

//           <h3>break</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`for (int i = 1; i <= 10; i++)
// {
//     if (i == 6)
//         break;          // exit the loop completely

//     Console.WriteLine(i);
// }
// // Output: 1 2 3 4 5`}</code>
//           </pre>

//           <h3>continue</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`for (int i = 1; i <= 10; i++)
// {
//     if (i % 2 == 0)
//         continue;       // skip even numbers

//     Console.WriteLine(i);
// }
// // Output: 1 3 5 7 9`}</code>
//           </pre>

//           <hr />

//           <h2>4. Arrays</h2>

//           <h3>4.1 Single-Dimensional Array</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`// Declaration + Initialization
// int[] marks = { 85, 90, 78, 92, 88 };

// // Accessing elements
// Console.WriteLine(marks[0]);     // 85
// Console.WriteLine(marks[2]);     // 78

// // Using loop
// for (int i = 0; i < marks.Length; i++)
// {
//     Console.WriteLine($"Subject {i + 1}: {marks[i]}");
// }`}</code>
//           </pre>

//           <h3>4.2 Declaring Array First, Then Assigning</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int[] numbers = new int[5];   // size = 5

// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers[3] = 40;
// numbers[4] = 50;`}</code>
//           </pre>

//           <h3>4.3 Multi-Dimensional Array (2D)</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int[,] matrix = {
//     { 1, 2, 3 },
//     { 4, 5, 6 },
//     { 7, 8, 9 }
// };

// Console.WriteLine(matrix[1, 2]);   // 6

// // Printing 2D array
// for (int i = 0; i < 3; i++)
// {
//     for (int j = 0; j < 3; j++)
//     {
//         Console.Write(matrix[i, j] + " ");
//     }
//     Console.WriteLine();
// }`}</code>
//           </pre>

//           <h3>4.4 Common Array Class Methods</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int[] numbers = { 45, 12, 78, 23, 56 };

// Array.Sort(numbers);          // Sort ascending
// Array.Reverse(numbers);       // Reverse the array
// int index = Array.IndexOf(numbers, 78);  // Find index

// Console.WriteLine("Sorted & Reversed:");
// foreach (int num in numbers)
// {
//     Console.Write(num + " ");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>5. Live Coding Examples</h2>

//           <h3>Example 1: Find Maximum Number in Array</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int[] numbers = { 34, 67, 12, 89, 45, 23 };
// int max = numbers[0];

// for (int i = 1; i < numbers.Length; i++)
// {
//     if (numbers[i] > max)
//         max = numbers[i];
// }

// Console.WriteLine("Maximum number is: " + max);`}</code>
//           </pre>

//           <h3>Example 2: Student Marks System</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`string[] students = { "Ali", "Sara", "Ahmed", "Fatima", "Usman" };
// int[] marks = { 78, 92, 65, 88, 45 };

// Console.WriteLine("===== Student Results =====");
// for (int i = 0; i < students.Length; i++)
// {
//     string result = marks[i] >= 50 ? "Pass" : "Fail";
//     Console.WriteLine($"{students[i],-10} : {marks[i]} → {result}");
// }`}</code>
//           </pre>

//           <hr />

//           <h2>6. Practice Exercises</h2>

//           <h3>Exercise 1</h3>
//           <p>Write a program that takes a number (1–7) and prints the day name using <code>switch</code>.</p>

//           <h3>Exercise 2</h3>
//           <p>Print the multiplication table of a number entered by the user using a <code>for</code> loop.</p>

//           <h3>Exercise 3</h3>
//           <p>Create an array of 5 integers, take input from the user, and calculate the sum and average.</p>

//           <h3>Exercise 4</h3>
//           <p>Write a program that finds the largest and smallest number in an array.</p>

//           <hr />

//           <h2>7. Session Challenge</h2>
//           <p>Create a simple **Grade Management System**:</p>
//           <ul>
//             <li>Ask the user how many students (e.g. 5)</li>
//             <li>Take name and marks of each student and store them in arrays</li>
//             <li>Display a report showing:
//               <ul>
//                 <li>Name</li>
//                 <li>Marks</li>
//                 <li>Grade (A/B/C/D/F)</li>
//                 <li>Result (Pass/Fail)</li>
//               </ul>
//             </li>
//             <li>Also show the class average at the end</li>
//           </ul>

//           <hr />

//           <h2>8. Session Quiz</h2>
//           <ol>
//             <li>What is the difference between <code>if-else</code> and <code>switch</code>?</li>
//             <li>When should we use a <code>do-while</code> loop instead of a <code>while</code> loop?</li>
//             <li>What does the <code>break</code> statement do inside a loop?</li>
//             <li>What does the <code>continue</code> statement do?</li>
//             <li>How do you find the length of an array?</li>
//             <li>What is the difference between a single-dimensional and multi-dimensional array?</li>
//             <li>Name any three methods of the <code>Array</code> class.</li>
//             <li>Which loop is best when you want to go through every element of an array?</li>
//           </ol>

//           <hr />

//           <p><strong>Next Session:</strong> Classes and Methods in C#</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
