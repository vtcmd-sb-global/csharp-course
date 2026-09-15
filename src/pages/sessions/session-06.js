import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session06() {
  return (
    <Layout
      title="Session 06 — Arrays & Strings"
      description="Arrays & Strings"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 06 — Arrays & Strings</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Storing and working with collections of data using arrays, and mastering essential string operations.</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Declare, initialize, and use one-dimensional arrays</li>
            <li>Access and modify array elements safely</li>
            <li>Loop through arrays using <code>for</code> and <code>foreach</code></li>
            <li>Perform common operations (sum, average, min, max, search, reverse)</li>
            <li>Work with multidimensional (2D) arrays</li>
            <li>Understand jagged arrays at a basic level</li>
            <li>Use important <code>Array</code> class methods</li>
            <li>Perform essential string operations</li>
            <li>Avoid <code>IndexOutOfRangeException</code> and other common mistakes</li>
            <li>Solve practical problems using arrays and strings</li>
          </ul>

          <hr />

          <h2>1. What is an Array?</h2>
          <p>An <strong>array</strong> is a fixed-size collection of elements of the <strong>same type</strong>.</p>

          <pre>
            <code>{`// An array of 5 integers
int[] numbers = new int[5];`}</code>
          </pre>

          <p><strong>Key characteristics:</strong></p>
          <ul>
            <li>Fixed size (cannot grow or shrink after creation)</li>
            <li>Zero-based indexing (first element is at index 0)</li>
            <li>All elements must be of the same type</li>
            <li>Stored in contiguous memory (fast access)</li>
          </ul>

          <hr />

          <h2>2. Declaring and Initializing Arrays</h2>

          <h3>Different ways to create arrays</h3>
          <pre>
            <code>{`// 1. Declare size only (all elements get default value)
int[] marks = new int[5];               // all values = 0

// 2. Declare and initialize
int[] numbers = new int[] { 10, 20, 30, 40, 50 };

// 3. Short form (most common)
int[] scores = { 85, 90, 78, 92, 88 };

// 4. Using var
var cities = new string[] { "Karachi", "Lahore", "Islamabad" };`}</code>
          </pre>

          <h3>Default values</h3>
          <ul>
            <li><code>int</code>, <code>double</code>, etc. → 0</li>
            <li><code>bool</code> → false</li>
            <li><code>string</code> / reference types → null</li>
          </ul>

          <hr />

          <h2>3. Accessing and Modifying Elements</h2>
          <pre>
            <code>{`int[] numbers = { 10, 20, 30, 40, 50 };

Console.WriteLine(numbers[0]);   // 10 (first element)
Console.WriteLine(numbers[4]);   // 50 (last element)

numbers[2] = 35;                 // change value at index 2`}</code>
          </pre>

          <h3>Getting the Length</h3>
          <pre>
            <code>{`Console.WriteLine(numbers.Length);   // 5`}</code>
          </pre>

          <blockquote>
            <strong>Important:</strong> Valid indexes are from <code>0</code> to <code>Length - 1</code>.
          </blockquote>

          <hr />

          <h2>4. Looping Through Arrays</h2>

          <h3>Using <code>for</code> loop (when you need the index)</h3>
          <pre>
            <code>{`int[] numbers = { 10, 20, 30, 40, 50 };

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"Index {i}: {numbers[i]}");
}`}</code>
          </pre>

          <h3>Using <code>foreach</code> (preferred when you only need values)</h3>
          <pre>
            <code>{`foreach (int num in numbers)
{
    Console.WriteLine(num);
}`}</code>
          </pre>

          <hr />

          <h2>5. Common Array Operations</h2>

          <h3>Sum and Average</h3>
          <pre>
            <code>{`int[] marks = { 80, 90, 75, 85, 95 };
int sum = 0;

foreach (int mark in marks)
{
    sum += mark;
}

double average = (double)sum / marks.Length;
Console.WriteLine($"Sum = {sum}, Average = {average}");`}</code>
          </pre>

          <h3>Finding Minimum and Maximum</h3>
          <pre>
            <code>{`int min = marks[0];
int max = marks[0];

for (int i = 1; i < marks.Length; i++)
{
    if (marks[i] < min) min = marks[i];
    if (marks[i] > max) max = marks[i];
}

Console.WriteLine($"Min = {min}, Max = {max}");`}</code>
          </pre>

          <h3>Searching for a Value</h3>
          <pre>
            <code>{`int search = 85;
bool found = false;

for (int i = 0; i < marks.Length; i++)
{
    if (marks[i] == search)
    {
        Console.WriteLine($"Found at index {i}");
        found = true;
        break;
    }
}

if (!found)
    Console.WriteLine("Not found");`}</code>
          </pre>

          <hr />

          <h2>6. Useful Array Class Methods</h2>
          <pre>
            <code>{`int[] numbers = { 50, 20, 40, 10, 30 };

Array.Sort(numbers);                     // sorts in ascending order
Array.Reverse(numbers);                  // reverses the array
int index = Array.IndexOf(numbers, 40);  // returns index or -1
bool exists = Array.Exists(numbers, n => n > 25);`}</code>
          </pre>

          <hr />

          <h2>7. Multidimensional Arrays (2D Arrays)</h2>
          <p>A 2D array is like a table (rows and columns).</p>

          <h3>Declaration</h3>
          <pre>
            <code>{`// 3 rows, 4 columns
int[,] matrix = new int[3, 4];

// Initialize
int[,] matrix = {
    { 1, 2, 3, 4 },
    { 5, 6, 7, 8 },
    { 9, 10, 11, 12 }
};`}</code>
          </pre>

          <h3>Accessing Elements</h3>
          <pre>
            <code>{`Console.WriteLine(matrix[1, 2]);   // 7 (row 1, column 2)
matrix[0, 0] = 100;`}</code>
          </pre>

          <h3>Getting Dimensions</h3>
          <pre>
            <code>{`int rows = matrix.GetLength(0);    // 3
int cols = matrix.GetLength(1);    // 4`}</code>
          </pre>

          <h3>Looping Through a 2D Array</h3>
          <pre>
            <code>{`for (int i = 0; i < matrix.GetLength(0); i++)
{
    for (int j = 0; j < matrix.GetLength(1); j++)
    {
        Console.Write($"{matrix[i, j],4}");
    }
    Console.WriteLine();
}`}</code>
          </pre>

          <hr />

          <h2>8. Jagged Arrays (Array of Arrays)</h2>
          <p>Each row can have a different length.</p>

          <pre>
            <code>{`int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5, 6 };
jagged[2] = new int[] { 7 };`}</code>
          </pre>

          <hr />

          <h2>9. Working with Strings</h2>
          <p>In C#, a string is a sequence of characters (immutable).</p>

          <h3>Common String Operations</h3>
          <pre>
            <code>{`string name = "Muhammad Ali";

Console.WriteLine(name.Length);              // 12
Console.WriteLine(name.ToUpper());           // MUHAMMAD ALI
Console.WriteLine(name.ToLower());           // muhammad ali
Console.WriteLine(name.Contains("Ali"));     // true
Console.WriteLine(name.StartsWith("Muh"));   // true
Console.WriteLine(name.EndsWith("Ali"));     // true
Console.WriteLine(name.IndexOf("Ali"));      // 9
Console.WriteLine(name.Replace("Ali", "Ahmed"));
Console.WriteLine(name.Substring(0, 8));     // Muhammad
Console.WriteLine(name.Trim());              // removes leading/trailing spaces

string[] parts = name.Split(' ');            // ["Muhammad", "Ali"]
string joined = string.Join("-", parts);     // Muhammad-Ali`}</code>
          </pre>

          <h3>Strings are Immutable</h3>
          <pre>
            <code>{`string original = "Hello";
string modified = original.Replace("H", "J");

Console.WriteLine(original);   // Hello (unchanged)
Console.WriteLine(modified);   // Jello`}</code>
          </pre>

          <hr />

          <h2>10. Practical Mini Projects</h2>

          <h3>Mini Project 1 – Student Marks Analyzer</h3>
          <pre>
            <code>{`Console.Write("How many students? ");
int n = int.Parse(Console.ReadLine());

string[] names = new string[n];
int[] marks = new int[n];

for (int i = 0; i < n; i++)
{
    Console.Write($"Enter name of student {i + 1}: ");
    names[i] = Console.ReadLine();
    Console.Write($"Enter marks of {names[i]}: ");
    marks[i] = int.Parse(Console.ReadLine());
}

// Display report
int total = 0;
int max = marks[0], min = marks[0];
string topStudent = names[0], lowStudent = names[0];

for (int i = 0; i < n; i++)
{
    total += marks[i];
    if (marks[i] > max) { max = marks[i]; topStudent = names[i]; }
    if (marks[i] < min) { min = marks[i]; lowStudent = names[i]; }
}

Console.WriteLine($"\\nClass Average: {(double)total / n:F2}");
Console.WriteLine($"Highest: {topStudent} ({max})");
Console.WriteLine($"Lowest : {lowStudent} ({min})");`}</code>
          </pre>

          <h3>Mini Project 2 – Simple Matrix Addition</h3>
          <pre>
            <code>{`int[,] a = { { 1, 2 }, { 3, 4 } };
int[,] b = { { 5, 6 }, { 7, 8 } };
int[,] result = new int[2, 2];

for (int i = 0; i < 2; i++)
{
    for (int j = 0; j < 2; j++)
    {
        result[i, j] = a[i, j] + b[i, j];
    }
}`}</code>
          </pre>

          <hr />

          <h2>11. Session 6 Challenge</h2>
          <h3>Challenge: Classroom Seat Manager + String Analyzer</h3>

          <h4>Part A — Seat Manager</h4>
          <p>Create a 5x5 classroom seating chart (2D array of strings) and allow the user to:</p>
          <ul>
            <li>Assign a student to a seat (row, column)</li>
            <li>Display the full seating chart</li>
            <li>Search for a student by name and show their seat</li>
            <li>Count how many seats are empty</li>
          </ul>

          <h4>Part B — String Analyzer</h4>
          <p>Create a method that takes a sentence and displays:</p>
          <ul>
            <li>Number of characters (excluding spaces)</li>
            <li>Number of words</li>
            <li>Number of vowels</li>
            <li>The sentence in reverse</li>
            <li>Whether it is a palindrome (ignoring spaces and case)</li>
          </ul>

          <hr />

          <h2>12. Exercises</h2>

          <h3>Beginner</h3>
          <ol>
            <li>Create an array of 10 integers and print them in reverse order.</li>
            <li>Find the sum and average of an array of numbers entered by the user.</li>
            <li>Count how many even and odd numbers are in an array.</li>
          </ol>

          <h3>Intermediate</h3>
          <ol>
            <li>Write a program to find the second largest number in an array.</li>
            <li>Reverse an array without using <code>Array.Reverse()</code>.</li>
            <li>Merge two sorted arrays into one sorted array.</li>
            <li>Count the frequency of each element in an array.</li>
          </ol>

          <h3>Advanced</h3>
          <ol>
            <li>Work with a 3x3 matrix: calculate the sum of each row and each column.</li>
            <li>Implement a simple search (linear search) method that returns the index.</li>
            <li>Given a string, count the frequency of each character.</li>
          </ol>

          <hr />

          <h2>13. Session 6 Quiz</h2>
          <ol>
            <li>What is the index of the first element in an array?</li>
            <li>What happens if you access an invalid index?</li>
            <li>What is the difference between <code>for</code> and <code>foreach</code> when working with arrays?</li>
            <li>How do you get the number of rows and columns in a 2D array?</li>
            <li>What is a jagged array?</li>
            <li>Are strings mutable in C#?</li>
            <li>What does <code>Array.Sort()</code> do?</li>
            <li>How do you find the length of a string?</li>
            <li>What is the difference between <code>IndexOf</code> and <code>Contains</code>?</li>
            <li>Why do we usually prefer <code>foreach</code> when we only need to read values?</li>
          </ol>
          <hr />

          <p><strong>Next up (Session 07):</strong> Advanced Parameters, Tuple & Exception Handling.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
