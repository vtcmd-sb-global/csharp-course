import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session02() {
  return (
    <Layout
      title="Session 02 — Basic Building Blocks in C#"
      description="Variables, Data Types, Operators, Comments, Constants, Type Conversion and Input/Output in C#"
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

          <p>
            <strong>Focus:</strong> Variables, data types, comments, constants,
            literals, string interpolation, operators, type conversion,
            user input, and basic console output.
          </p>

          <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Understand what variables are and why they are used</li>
            <li>Declare, initialize, and assign values to variables</li>
            <li>Identify and use common C# data types</li>
            <li>Understand literals and their relationship with data types</li>
            <li>Use <code>var</code> for implicitly typed variables</li>
            <li>Write single-line, multi-line, and XML documentation comments</li>
            <li>Create and use constants</li>
            <li>Use string concatenation and string interpolation</li>
            <li>Use escape characters inside strings</li>
            <li>Understand composite formatting with numbered placeholders ({0}, {1}, etc.)</li>
            <li>Understand arithmetic, assignment, comparison, and logical operators</li>
            <li>Understand increment and decrement operators</li>
            <li>Understand operator precedence</li>
            <li>Take input using <code>Console.ReadLine()</code></li>
            <li>Convert text input into numbers</li>
            <li>Understand the difference between integer and decimal division</li>
            <li>Build small console applications using these concepts together</li>
            <li>Follow good naming conventions for variables and constants</li>
            <li>Choose the most appropriate data type for a given situation</li>
            <li>Handle user input safely using <code>TryParse</code></li>
            <li>Apply operator precedence correctly and use parentheses when needed</li>
          </ul>

          <p>
            <strong>Why this session matters:</strong> Everything you build in C# — whether a simple console tool,
            a web API, a desktop application, or a game — rests on these fundamentals. Variables hold your data,
            data types define how that data is stored and what operations are legal, operators transform the data,
            and input/output lets your programs communicate with the outside world. Mastering these building blocks
            early makes every later topic (conditions, loops, methods, classes, LINQ, async, etc.) much easier.
          </p>

          <hr />

          <h2>1. Variables and Data Types</h2>

          <h3>What is a Variable?</h3>

          <p>
            A variable is a named storage location used to hold a value in a program.
            The value stored inside a variable can change while the program is running.
          </p>

          <p>
            You can think of a variable as a labelled box. The label is the variable
            name, and the value stored inside the box is the variable's value.
          </p>

          <p>
            In real programs you will create dozens or hundreds of variables. Good variable names
            make code readable; poor names make even simple code hard to understand. Follow these
            common C# naming conventions:
          </p>

          <ul>
            <li>Use <strong>camelCase</strong> for local variables and parameters: <code>studentName</code>, <code>totalMarks</code>, <code>isPassed</code>.</li>
            <li>Names should be descriptive. Prefer <code>studentAge</code> over <code>a</code> or <code>x</code>.</li>
            <li>Do not start a variable name with a number. <code>2ndPlace</code> is illegal; <code>secondPlace</code> is fine.</li>
            <li>Avoid reserved keywords (<code>int</code>, <code>class</code>, <code>string</code>, etc.) as names.</li>
            <li>Boolean variables often start with <code>is</code>, <code>has</code>, <code>can</code>, or <code>should</code> (e.g. <code>isStudent</code>, <code>hasDiscount</code>).</li>
          </ul>

          <CodeBlock
              language="csharp"
            code={`// Good, descriptive names
int studentAge = 20;
string fullName = "Ali Khan";
double monthlySalary = 45000.50;
bool isEnrolled = true;

// Avoid cryptic names
int a = 20;          // unclear
string n = "Ali";    // unclear
double s = 45000.50; // unclear`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>In the first example above:</p>

          <ul>
            <li><code>studentAge</code> stores a whole number.</li>
            <li><code>fullName</code> stores text.</li>
            <li><code>monthlySalary</code> stores a decimal number.</li>
            <li><code>isEnrolled</code> stores either <code>true</code> or <code>false</code>.</li>
          </ul>

          <CodeBlock
              language="csharp"
            code={`int age = 20;
string name = "Ali";
double salary = 45000.50;
bool isStudent = true;`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>In the example above:</p>

          <ul>
            <li><code>age</code> stores a whole number.</li>
            <li><code>name</code> stores text.</li>
            <li><code>salary</code> stores a decimal number.</li>
            <li><code>isStudent</code> stores either <code>true</code> or <code>false</code>.</li>
          </ul>

          <h3>Variable Declaration</h3>

          <p>
            Declaration means telling C# that you want to create a variable and
            specifying its data type.
          </p>

          <CodeBlock
              language="csharp"
            code={`int age;`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Here, <code>int</code> is the data type and <code>age</code> is the variable name.
          </p>

          <p>
            <strong>Important note about local variables:</strong> In C#, a local variable
            (a variable declared inside a method) must be assigned a value before it is used.
            If you declare <code>int age;</code> and then try to print it without assigning
            a value first, the compiler will give an error: "Use of unassigned local variable".
          </p>

          <CodeBlock
            language="csharp"
            code={`int age;               // declared but not initialized
// Console.WriteLine(age); // Error: Use of unassigned local variable 'age'

age = 20;              // now it is safe to use
Console.WriteLine(age);`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Variable Initialization</h3>

          <p>
            Initialization means giving a variable its first value when it is created.
          </p>

          <CodeBlock
              language="csharp"
            code={`int age = 20;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            This single statement both declares and initializes the variable.
          </p>

          <h3>Assignment</h3>

          <p>
            Assignment means storing a value inside a variable after the variable
            has already been declared.
          </p>

          <CodeBlock
              language="csharp"
            code={`int age;

age = 20;
age = 25;

Console.WriteLine(age);`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p><strong>Output:</strong></p>

          <CodeBlock
            language="csharp"
            code={`25`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Notice that the value of <code>age</code> changed from <code>20</code> to
            <code>25</code>. This is why it is called a variable.
          </p>

          <h3>Declaring Multiple Variables</h3>

          <CodeBlock
            language="csharp"
            code={`int a = 10, b = 20, c = 30;

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Although multiple variables can be declared in one statement, beginners
            should usually prefer separate declarations when it improves readability.
          </p>

          <hr />

          <h2>2. Common Data Types in C#</h2>

          <p>
            A data type tells C# what kind of value a variable can store.
            Different types are designed for different kinds of information.
          </p>

          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Typical Size</th>
                <th>Example</th>
                <th>Used For</th>
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
                <td><code>1234567890L</code></td>
                <td>Very large whole numbers</td>
              </tr>

              <tr>
                <td><code>float</code></td>
                <td>4 bytes</td>
                <td><code>12.5f</code></td>
                <td>Decimal numbers with less precision</td>
              </tr>

              <tr>
                <td><code>double</code></td>
                <td>8 bytes</td>
                <td><code>12.5</code></td>
                <td>Decimal numbers with more precision than float</td>
              </tr>

              <tr>
                <td><code>decimal</code></td>
                <td>16 bytes</td>
                <td><code>99.99m</code></td>
                <td>High-precision decimal calculations, especially financial values</td>
              </tr>

              <tr>
                <td><code>char</code></td>
                <td>2 bytes</td>
                <td><code>'A'</code></td>
                <td>A single character</td>
              </tr>

              <tr>
                <td><code>string</code></td>
                <td>Variable</td>
                <td><code>"Hello"</code></td>
                <td>Text</td>
              </tr>

              <tr>
                <td><code>bool</code></td>
                <td>1 byte</td>
                <td><code>true</code></td>
                <td>True/false values</td>
              </tr>
            </tbody>
          </table>

          <h3>Approximate Ranges of Numeric Types</h3>

          <p>
            Knowing the range helps you choose the correct type and avoid overflow.
          </p>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Approximate Range</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>int</code></td>
                <td>−2,147,483,648 to 2,147,483,647</td>
                <td>Most common choice for whole numbers</td>
              </tr>
              <tr>
                <td><code>long</code></td>
                <td>−9 × 10¹⁸ to 9 × 10¹⁸</td>
                <td>Use when <code>int</code> is not large enough</td>
              </tr>
              <tr>
                <td><code>float</code></td>
                <td>~ ±1.5 × 10⁻⁴⁵ to ±3.4 × 10³⁸</td>
                <td>~6–9 digits of precision; suffix <code>f</code></td>
              </tr>
              <tr>
                <td><code>double</code></td>
                <td>~ ±5.0 × 10⁻³²⁴ to ±1.7 × 10³⁰⁸</td>
                <td>~15–17 digits of precision; default for real numbers</td>
              </tr>
              <tr>
                <td><code>decimal</code></td>
                <td>~ ±1.0 × 10⁻²⁸ to ±7.9 × 10²⁸</td>
                <td>28–29 significant digits; ideal for money; suffix <code>m</code></td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Quick guidance:</strong>
          </p>
          <ul>
            <li>Use <code>int</code> for counts, ages, indexes, most whole numbers.</li>
            <li>Use <code>long</code> for very large counts (population, file sizes in bytes, etc.).</li>
            <li>Use <code>double</code> for scientific or general floating-point calculations.</li>
            <li>Use <code>decimal</code> whenever money or high-precision decimal arithmetic is involved.</li>
            <li>Use <code>float</code> only when memory is tight or when interoperating with APIs that require it.</li>
          </ul>

          <h3>Examples of Data Types</h3>

          <CodeBlock
              language="csharp"
            code={`int age = 22;
long population = 250000000L;

float temperature = 36.5f;
double distance = 125.75;

decimal salary = 75000.50m;

char grade = 'A';

string name = "Muhammad";

bool isLoggedIn = true;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Important: Character vs String</h3>

          <p>
            A <code>char</code> stores a single character and uses single quotes.
            A <code>string</code> stores text and uses double quotes.
          </p>

          <CodeBlock
              language="csharp"
            code={`char grade = 'A';

string name = "Ali";`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            This is incorrect:
          </p>

          <CodeBlock
            language="csharp"
            code={`char grade = "A";`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            because <code>"A"</code> is a string, not a character.
          </p>

          <h3>Understanding <code>var</code></h3>

          <p>
            C# also provides the <code>var</code> keyword. It allows the compiler
            to determine the variable's type from the value assigned to it.
          </p>

          <CodeBlock
              language="csharp"
            code={`var age = 20;
var name = "Ali";
var price = 99.99;`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            C# determines the types as:
          </p>

          <ul>
            <li><code>age</code> → <code>int</code></li>
            <li><code>name</code> → <code>string</code></li>
            <li><code>price</code> → <code>double</code></li>
          </ul>

          <p>
            <strong>Important:</strong> <code>var</code> does not mean that the
            variable can change into any type later. The type is fixed at compile time
            based on the right-hand side expression.
          </p>

          <CodeBlock
              language="csharp"
            code={`var age = 20;

// age = "Ali";  // Error — age is permanently an int`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            <strong>When to use <code>var</code>:</strong>
          </p>
          <ul>
            <li>When the type is obvious from the right-hand side (e.g. <code>var list = new List<string>();</code>).</li>
            <li>When the type name is long and repeating it adds no clarity.</li>
          </ul>
          <p>
            <strong>When to prefer an explicit type:</strong>
          </p>
          <ul>
            <li>When the type is not immediately clear from the expression.</li>
            <li>When writing code for beginners or documentation, explicit types are often clearer.</li>
          </ul>

          <hr />

          <h2>3. Comments in C#</h2>

          <p>
            Comments are notes written inside source code for programmers.
            The compiler ignores comments when executing the program.
          </p>

          <h3>Single-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`// This is a single-line comment`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Multi-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`/* This is a
   multi-line comment */`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>XML Documentation Comments</h3>

          <CodeBlock
            language="csharp"
            code={`/// <summary>
/// This is an XML documentation comment.
/// </summary>`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>4. Constants</h2>

          <p>
            A constant is a value that cannot be changed after it is declared.
            Use the <code>const</code> keyword.
          </p>

          <CodeBlock
            language="csharp"
            code={`const double PI = 3.14159;
const int MAX_STUDENTS = 50;`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>5. String Interpolation and Formatting</h2>

          <CodeBlock
            language="csharp"
            code={`string name = "Ali";
int age = 22;

// String interpolation (preferred)
Console.WriteLine($"Name: {name}, Age: {age}");

// Composite formatting
Console.WriteLine("Name: {0}, Age: {1}", name, age);`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>6. Operators</h2>

          <h3>Arithmetic Operators</h3>
          <CodeBlock
            language="csharp"
            code={`int a = 10, b = 3;
Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3 (integer division)
Console.WriteLine(a % b);  // 1 (remainder)`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Assignment Operators</h3>
          <CodeBlock
            language="csharp"
            code={`int x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Comparison and Logical Operators</h3>
          <CodeBlock
            language="csharp"
            code={`int age = 20;
bool isAdult = age >= 18;          // true
bool canVote = age >= 18 && age < 100;
bool isTeen = age >= 13 || age <= 19;`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>7. Type Conversion and Input</h2>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = int.Parse(input);          // or Convert.ToInt32(input)

// Safer way
if (int.TryParse(input, out int safeAge))
{
    Console.WriteLine($"Age is {safeAge}");
}
else
{
    Console.WriteLine("Invalid number");
}`} 
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>8. Practice Exercises</h2>

          <h3>Exercise 1 — Employee Information</h3>
          <p>Declare variables for Employee Name (string), Employee ID (int), Salary (decimal), Is Permanent (bool). Take input from the user and display the information neatly.</p>

          <h3>Exercise 2 — Two Number Calculator</h3>
          <p>Write a program that takes two numbers and displays Sum, Product, and Average.</p>

          <h3>Exercise 3 — Average of Three Numbers</h3>
          <p>Take three numbers and display their average.</p>

          <h3>Exercise 4 — Temperature Converter</h3>
          <p>Create a program that asks for temperature in Celsius and converts it to Fahrenheit using the formula F = (C * 9/5) + 32.</p>

          <h3>Exercise 5 — Rectangle Calculator</h3>
          <p>Take length and width of a rectangle and display area and perimeter.</p>

          <hr />

          <h2>Try It Yourself</h2>
          <p>Create a program called <strong>Personal Information Card</strong> that asks the user for Full Name, Age, City, Favorite Subject and then display the information in a formatted card.</p>

          <hr />

          <h2>Quick Revision</h2>
          <ul>
            <li>Variables store data that can change.</li>
            <li>Use meaningful names and proper data types.</li>
            <li>Constants cannot be changed after declaration.</li>
            <li>String interpolation ($"...") is the preferred way to build strings.</li>
            <li>Composite formatting ({0}, {1}) is still useful and appears in many older examples.</li>
            <li>Always convert user input from string to the required type.</li>
            <li>Use TryParse when the input might be invalid.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is a variable?</li>
            <li>What is the difference between <code>int</code> and <code>double</code>?</li>
            <li>How do you declare a constant in C#?</li>
            <li>What is string interpolation?</li>
            <li>What does the <code>%</code> operator do?</li>
            <li>What is the difference between integer division and decimal division?</li>
            <li>Why should we prefer <code>TryParse</code> over <code>Parse</code> when reading user input?</li>
            <li>What is the difference between <code>const</code> and a normal variable?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Programming Constructs and Arrays</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
