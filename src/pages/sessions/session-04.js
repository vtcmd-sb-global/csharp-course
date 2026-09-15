import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session04() {
  return (
    <Layout
      title="Session 04 — Loops & Iteration"
      description="Loops & Iteration"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 04 — Loops & Iteration</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Making programs repeat work efficiently and safely.</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Understand why loops are essential</li>
            <li>Use <code>for</code>, <code>while</code>, <code>do-while</code>, and <code>foreach</code> correctly</li>
            <li>Choose the right loop for the job</li>
            <li>Control loop flow with <code>break</code> and <code>continue</code></li>
            <li>Work with nested loops</li>
            <li>Avoid infinite loops and common off-by-one errors</li>
            <li>Write clean, readable looping code</li>
            <li>Solve practical problems using loops</li>
          </ul>

          <hr />

          <h2>1. Why Do We Need Loops?</h2>
          <p>Without loops you would have to write the same code many times:</p>
          <pre>
            <code>{`Console.WriteLine("Hello");
Console.WriteLine("Hello");
Console.WriteLine("Hello");
// ... 100 more times`}</code>
          </pre>

          <p>With a loop you write the logic once and control how many times it runs.</p>

          <p>Loops are used for:</p>
          <ul>
            <li>Printing sequences</li>
            <li>Processing arrays and collections</li>
            <li>Reading user input until a condition is met</li>
            <li>Calculating totals, averages, factorials, etc.</li>
            <li>Searching and filtering data</li>
            <li>Building menus and interactive programs</li>
          </ul>

          <hr />

          <h2>2. The for Loop</h2>
          <p>Best when you know exactly how many times you want to repeat something, or when you need an index.</p>

          <h3>Syntax</h3>
          <pre>
            <code>{`for (initialization; condition; increment/decrement)
{
    // code to repeat
}`}</code>
          </pre>

          <h3>Basic Example</h3>
          <pre>
            <code>{`for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Hello {i}");
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>
          <pre>
            <code>{`Hello 1
Hello 2
Hello 3
Hello 4
Hello 5`}</code>
          </pre>

          <h3>How it works step-by-step</h3>
          <ol>
            <li><code>int i = 1</code> → initialization (runs only once)</li>
            <li>Check <code>i &lt;= 5</code></li>
            <li>If true → run the body</li>
            <li>Execute <code>i++</code></li>
            <li>Go back to step 2</li>
            <li>When condition becomes false → exit the loop</li>
          </ol>

          <h3>Counting Down</h3>
          <pre>
            <code>{`for (int i = 10; i >= 1; i--)
{
    Console.WriteLine(i);
}
Console.WriteLine("Blast off!");`}</code>
          </pre>

          <h3>Skipping Values (Step)</h3>
          <pre>
            <code>{`// Print even numbers from 2 to 20
for (int i = 2; i <= 20; i += 2)
{
    Console.Write($"{i} ");
}`}</code>
          </pre>

          <h3>Common Pattern – Sum of Numbers</h3>
          <pre>
            <code>{`int sum = 0;

for (int i = 1; i <= 10; i++)
{
    sum += i;
}

Console.WriteLine($"Sum = {sum}");   // 55`}</code>
          </pre>

          <hr />

          <h2>3. The while Loop</h2>
          <p>Best when you don’t know in advance how many times the loop should run.</p>
          <p>The condition is checked <strong>before</strong> each iteration.</p>

          <h3>Syntax</h3>
          <pre>
            <code>{`while (condition)
{
    // code
}`}</code>
          </pre>

          <h3>Example – Countdown</h3>
          <pre>
            <code>{`int counter = 5;

while (counter > 0)
{
    Console.WriteLine(counter);
    counter--;
}

Console.WriteLine("Done!");`}</code>
          </pre>

          <h3>Example – Keep Asking Until Valid Input</h3>
          <pre>
            <code>{`int age;

Console.Write("Enter your age: ");
while (!int.TryParse(Console.ReadLine(), out age) || age < 0 || age > 120)
{
    Console.Write("Invalid age. Please enter again: ");
}

Console.WriteLine($"Your age is {age}");`}</code>
          </pre>

          <blockquote>
            <strong>Important:</strong> Always make sure the condition will eventually become false, otherwise you create an infinite loop.
          </blockquote>

          <hr />

          <h2>4. The do-while Loop</h2>
          <p>Similar to <code>while</code>, but the body runs <strong>at least once</strong>.</p>
          <p>The condition is checked <strong>after</strong> the body.</p>

          <h3>Syntax</h3>
          <pre>
            <code>{`do
{
    // code
} while (condition);`}</code>
          </pre>

          <h3>Classic Menu Example</h3>
          <pre>
            <code>{`string choice;

do
{
    Console.WriteLine("===== MENU =====");
    Console.WriteLine("1. View Profile");
    Console.WriteLine("2. Settings");
    Console.WriteLine("3. Exit");
    Console.Write("Enter choice: ");
    choice = Console.ReadLine();

    switch (choice)
    {
        case "1":
            Console.WriteLine("Showing profile...");
            break;
        case "2":
            Console.WriteLine("Opening settings...");
            break;
        case "3":
            Console.WriteLine("Goodbye!");
            break;
        default:
            Console.WriteLine("Invalid choice.");
            break;
    }

} while (choice != "3");`}</code>
          </pre>

          <h3>When to use do-while:</h3>
          <ul>
            <li>Menus</li>
            <li>Input validation that must happen at least once</li>
            <li>Any situation where the code must run before checking the condition</li>
          </ul>

          <hr />

          <h2>5. The foreach Loop</h2>
          <p>
            The most common and safest loop when you just want to go through every item in a collection (array, <code>List</code>, etc.).
          </p>
          <p>You do not manage an index.</p>

          <h3>Syntax</h3>
          <pre>
            <code>{`foreach (var item in collection)
{
    // use item
}`}</code>
          </pre>

          <h3>Example with Array</h3>
          <pre>
            <code>{`string[] cities = { "Karachi", "Lahore", "Islamabad", "Peshawar" };

foreach (string city in cities)
{
    Console.WriteLine(city);
}`}</code>
          </pre>

          <h3>Example with List</h3>
          <pre>
            <code>{`List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };

foreach (int num in numbers)
{
    Console.WriteLine(num * 2);
}`}</code>
          </pre>

          <h3>Important Rules of foreach</h3>
          <ul>
            <li>You cannot change the collection size while looping (add/remove)</li>
            <li>You should not modify the current item in a way that breaks the iteration</li>
            <li>Prefer <code>foreach</code> when you only need to read the elements</li>
          </ul>

          <hr />

          <h2>6. break and continue</h2>

          <h3>break – Exit the loop immediately</h3>
          <pre>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i == 6)
    {
        break;          // stop the loop completely
    }
    Console.WriteLine(i);
}
// Output: 1 2 3 4 5`}</code>
          </pre>

          <h3>continue – Skip the rest of the current iteration</h3>
          <pre>
            <code>{`for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        continue;       // skip even numbers
    }
    Console.WriteLine(i);
}
// Output: 1 3 5 7 9`}</code>
          </pre>

          <hr />

          <h2>7. Nested Loops</h2>
          <p>A loop inside another loop.</p>

          <h3>Example – Multiplication Table</h3>
          <pre>
            <code>{`for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= 10; j++)
    {
        Console.Write($"{i * j,4}");   // ,4 means width of 4
    }
    Console.WriteLine();
}`}</code>
          </pre>

          <h3>Example – Pattern Printing (Stars)</h3>
          <pre>
            <code>{`// Right-angled triangle
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write("* ");
    }
    Console.WriteLine();
}`}</code>
          </pre>

          <p><strong>Output:</strong></p>
          <pre>
            <code>{`* 
* * 
* * * 
* * * * 
* * * * *`}</code>
          </pre>

          <hr />

          <h2>8. Common Mistakes & Best Practices</h2>
          <table>
            <thead>
              <tr>
                <th>Mistake</th>
                <th>Better Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Infinite loop (<code>while(true)</code> without exit)</td>
                <td>Always have a clear exit condition or use <code>break</code> carefully</td>
              </tr>
              <tr>
                <td>Off-by-one errors</td>
                <td>Be careful with array indexes (0-based)</td>
              </tr>
              <tr>
                <td>Modifying a collection inside <code>foreach</code></td>
                <td>Use <code>for</code> loop or create a new collection</td>
              </tr>
              <tr>
                <td>Using <code>for</code> when <code>foreach</code> is clearer</td>
                <td>Prefer <code>foreach</code> for simple iteration</td>
              </tr>
              <tr>
                <td>Deeply nested loops (3+ levels)</td>
                <td>Consider extracting methods or using LINQ later</td>
              </tr>
              <tr>
                <td>Not using braces</td>
                <td>Always use <code>{ }</code> even for single-line bodies</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>9. Practical Mini Projects</h2>

          <h3>Mini Project 1 – Number Guessing Game</h3>
          <pre>
            <code>{`Random random = new Random();
int secret = random.Next(1, 101);
int guess;
int attempts = 0;

Console.WriteLine("Guess the number between 1 and 100");

do
{
    Console.Write("Your guess: ");
    guess = int.Parse(Console.ReadLine());
    attempts++;

    if (guess < secret)
        Console.WriteLine("Too low!");
    else if (guess > secret)
        Console.WriteLine("Too high!");
    else
        Console.WriteLine($"Correct! You took {attempts} attempts.");

} while (guess != secret);`}</code>
          </pre>

          <h3>Mini Project 2 – Simple ATM with Loop</h3>
          <pre>
            <code>{`decimal balance = 50000;
bool running = true;

while (running)
{
    Console.WriteLine("\\n===== ATM =====");
    Console.WriteLine("1. Check Balance");
    Console.WriteLine("2. Deposit");
    Console.WriteLine("3. Withdraw");
    Console.WriteLine("4. Exit");
    Console.Write("Choice: ");

    string input = Console.ReadLine();

    switch (input)
    {
        case "1":
            Console.WriteLine($"Balance: {balance:C}");
            break;

        case "2":
            Console.Write("Amount to deposit: ");
            if (decimal.TryParse(Console.ReadLine(), out decimal deposit) && deposit > 0)
            {
                balance += deposit;
                Console.WriteLine($"New Balance: {balance:C}");
            }
            else
                Console.WriteLine("Invalid amount.");
            break;

        case "3":
            Console.Write("Amount to withdraw: ");
            if (decimal.TryParse(Console.ReadLine(), out decimal withdraw) && withdraw > 0)
            {
                if (withdraw <= balance)
                {
                    balance -= withdraw;
                    Console.WriteLine($"New Balance: {balance:C}");
                }
                else
                    Console.WriteLine("Insufficient funds.");
            }
            else
                Console.WriteLine("Invalid amount.");
            break;

        case "4":
            running = false;
            Console.WriteLine("Thank you for using our ATM.");
            break;

        default:
            Console.WriteLine("Invalid option.");
            break;
    }
}`}</code>
          </pre>

          <hr />

          <h2>10. Session 4 Challenge</h2>
          <h3>Challenge: Student Marks Analyzer</h3>
          <p>Write a program that:</p>
          <ol>
            <li>Asks how many students are in the class.</li>
            <li>For each student, asks for their name and marks (0–100).</li>
            <li>Validates that marks are between 0 and 100.</li>
            <li>After all data is entered, displays:</li>
          </ol>
          <ul>
            <li>List of all students with their marks and grade</li>
            <li>Highest marks + student name</li>
            <li>Lowest marks + student name</li>
            <li>Class average</li>
            <li>Number of students who passed (≥ 50) and failed</li>
          </ul>

          <p><strong>Grading:</strong></p>
          <ul>
            <li><strong>80–100</strong> → A+</li>
            <li><strong>70–79</strong> → A</li>
            <li><strong>60–69</strong> → B</li>
            <li><strong>50–59</strong> → C</li>
            <li><strong>Below 50</strong> → F</li>
          </ul>

          <hr />

          <h2>11. Exercises</h2>

          <h3>Exercise 1 (Beginner)</h3>
          <p>Print numbers from 1 to 50 using a <code>for</code> loop.</p>
          <p>Print only the even numbers using <code>continue</code>.</p>

          <h3>Exercise 2 (Beginner)</h3>
          <p>Ask the user for a number <code>n</code> and print the multiplication table of <code>n</code> (1 to 10).</p>

          <h3>Exercise 3 (Intermediate)</h3>
          <p>Write a program that calculates the factorial of a number using a <code>for</code> loop.</p>

          <h3>Exercise 4 (Intermediate)</h3>
          <p>Print the following pattern:</p>
          <pre>
            <code>{`1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}</code>
          </pre>

          <h3>Exercise 5 (Intermediate)</h3>
          <p>Ask the user to enter numbers until they enter 0.</p>
          <p>Then display the sum and average of all entered numbers (excluding 0).</p>

          <h3>Exercise 6 (Advanced)</h3>
          <p>Write a program that finds all prime numbers between 1 and 100 using nested loops.</p>

          <hr />

          <h2>12. Session 4 Quiz</h2>
          <ol>
            <li>When should you prefer a <code>for</code> loop over a <code>while</code> loop?</li>
            <li>What is the main difference between <code>while</code> and <code>do-while</code>?</li>
            <li>Why is <code>foreach</code> usually safer than a classic <code>for</code> loop when reading a collection?</li>
            <li>What does <code>break</code> do inside a loop?</li>
            <li>What does <code>continue</code> do?</li>
            <li>What is an infinite loop and how can you avoid it?</li>
            <li>Can you modify the size of a <code>List</code> while using <code>foreach</code>? Why or why not?</li>
            <li>Write a simple <code>for</code> loop that prints numbers from 10 down to 1.</li>
            <li>What is a nested loop? Give one real-world example.</li>
            <li>Which loop is best for building a menu that should keep showing until the user chooses Exit?</li>
          </ol>
          <hr />

          <p><strong>Next up (Session 05):</strong> Methods, Parameters & Recursions.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
