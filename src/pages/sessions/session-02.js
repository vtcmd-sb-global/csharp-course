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
            <li>Understand arithmetic, assignment, comparison, and logical operators</li>
            <li>Understand increment and decrement operators</li>
            <li>Understand operator precedence</li>
            <li>Take input using <code>Console.ReadLine()</code></li>
            <li>Convert text input into numbers</li>
            <li>Understand the difference between integer and decimal division</li>
            <li>Build small console applications using these concepts together</li>
          </ul>

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

          <pre style={codeBlockStyle}>
            <code>{`int age = 20;
string name = "Ali";
double salary = 45000.50;
bool isStudent = true;`}</code>
          </pre>

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

          <pre style={codeBlockStyle}>
            <code>{`int age;`}</code>
          </pre>

          <p>
            Here, <code>int</code> is the data type and <code>age</code> is the variable name.
          </p>

          <h3>Variable Initialization</h3>

          <p>
            Initialization means giving a variable its first value when it is created.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 20;`}</code>
          </pre>

          <p>
            This single statement both declares and initializes the variable.
          </p>

          <h3>Assignment</h3>

          <p>
            Assignment means storing a value inside a variable after the variable
            has already been declared.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age;

age = 20;
age = 25;

Console.WriteLine(age);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`25`}</code>
          </pre>

          <p>
            Notice that the value of <code>age</code> changed from <code>20</code> to
            <code>25</code>. This is why it is called a variable.
          </p>

          <h3>Declaring Multiple Variables</h3>

          <pre style={codeBlockStyle}>
            <code>{`int a = 10, b = 20, c = 30;

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);`}</code>
          </pre>

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

          <h3>Examples of Data Types</h3>

          <pre style={codeBlockStyle}>
            <code>{`int age = 22;
long population = 250000000L;

float temperature = 36.5f;
double distance = 125.75;

decimal salary = 75000.50m;

char grade = 'A';

string name = "Muhammad";

bool isLoggedIn = true;`}</code>
          </pre>

          <h3>Important: Character vs String</h3>

          <p>
            A <code>char</code> stores a single character and uses single quotes.
            A <code>string</code> stores text and uses double quotes.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`char grade = 'A';

string name = "Ali";`}</code>
          </pre>

          <p>
            This is incorrect:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`char grade = "A";`}</code>
          </pre>

          <p>
            because <code>"A"</code> is a string, not a character.
          </p>

          <h3>Understanding <code>var</code></h3>

          <p>
            C# also provides the <code>var</code> keyword. It allows the compiler
            to determine the variable's type from the value assigned to it.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`var age = 20;
var name = "Ali";
var price = 99.99;`}</code>
          </pre>

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
            variable can change into any type later.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`var age = 20;

// age = "Ali";  // Error`}</code>
          </pre>

          <hr />

          <h2>3. Comments in C#</h2>

          <p>
            Comments are notes written inside source code for programmers.
            The compiler ignores comments when executing the program.
          </p>

          <h3>Single-Line Comments</h3>

          <pre style={codeBlockStyle}>
            <code>{`// This is a single-line comment
int age = 20;

// We can also write comments after code
int marks = 85; // Student marks`}</code>
          </pre>

          <h3>Multi-Line Comments</h3>

          <pre style={codeBlockStyle}>
            <code>{`/*
   This is a multi-line comment.
   It can contain multiple lines.
   The compiler ignores all of it.
*/`}</code>
          </pre>

          <h3>XML Documentation Comments</h3>

          <p>
            XML documentation comments begin with three forward slashes
            <code>///</code>. They can be used to document classes, methods,
            parameters, and return values.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`/// <summary>
/// Adds two numbers together.
/// </summary>
/// <param name="a">First number</param>
/// <param name="b">Second number</param>
/// <returns>The sum of the two numbers</returns>
int Add(int a, int b)
{
    return a + b;
}`}</code>
          </pre>

          <p>
            In Visual Studio, XML documentation can help developers understand
            methods and their parameters through IntelliSense.
          </p>

          <hr />

          <h2>4. Constants and Literals</h2>

          <h3>What is a Constant?</h3>

          <p>
            A constant is a value that cannot be changed after it has been defined.
            Constants are declared using the <code>const</code> keyword.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`const double PI = 3.14159;
const string CompanyName = "Aptech";`}</code>
          </pre>

          <p>
            Trying to change a constant causes a compilation error.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`const int MaxMarks = 100;

// MaxMarks = 120; // Error`}</code>
          </pre>

          <h3>Variable vs Constant</h3>

          <table>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Constant</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Value can change</td>
                <td>Value cannot change</td>
              </tr>

              <tr>
                <td>Declared normally</td>
                <td>Uses <code>const</code></td>
              </tr>

              <tr>
                <td><code>int age = 20;</code></td>
                <td><code>const int MaxMarks = 100;</code></td>
              </tr>
            </tbody>
          </table>

          <h3>What is a Literal?</h3>

          <p>
            A literal is a value written directly in the source code.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int number = 100;
double price = 99.99;
float rate = 5.5f;
decimal amount = 250.75m;
char grade = 'A';
string message = "Hello";
bool isActive = true;`}</code>
          </pre>

          <p>
            Values such as <code>100</code>, <code>99.99</code>, <code>'A'</code>,
            <code>"Hello"</code>, and <code>true</code> are literals.
          </p>

          <h3>Common Numeric Literal Suffixes</h3>

          <pre style={codeBlockStyle}>
            <code>{`long population = 8000000000L;
float temperature = 36.5f;
decimal price = 999.99m;`}</code>
          </pre>

          <p>
            The suffix helps C# identify the intended numeric type.
          </p>

          <hr />

          <h2>5. String Output and String Interpolation</h2>

          <h3>Console.WriteLine()</h3>

          <p>
            <code>Console.WriteLine()</code> displays information on the console
            and moves the cursor to the next line.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine("Hello");
Console.WriteLine("Welcome to C#");`}</code>
          </pre>

          <h3>Console.Write()</h3>

          <p>
            <code>Console.Write()</code> displays information without automatically
            moving to the next line.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your name: ");
Console.Write("Enter your age: ");`}</code>
          </pre>

          <h3>String Concatenation</h3>

          <p>
            String concatenation means joining strings and values using the
            <code>+</code> operator.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`string name = "Ali";
int age = 21;

Console.WriteLine("Name: " + name);
Console.WriteLine("Age: " + age);`}</code>
          </pre>

          <h3>String Interpolation</h3>

          <p>
            String interpolation provides a clean way to insert variables and
            expressions directly inside a string.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`string name = "Ali";
int age = 21;

Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");

Console.WriteLine($"Next year you will be {age + 1} years old.");`}</code>
          </pre>

          <p>
            The <code>$</code> before the string enables interpolation.
            Expressions are placed inside <code>{'{'}{'}'}</code>.
          </p>

          <h3>Escape Characters</h3>

          <p>
            Escape characters allow us to represent special characters inside strings.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine("Hello\\nWorld");
Console.WriteLine("Name:\\tAli");
Console.WriteLine("He said, \\"Hello\\".");`}</code>
          </pre>

          <table>
            <thead>
              <tr>
                <th>Escape Sequence</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>\\n</code></td>
                <td>New line</td>
              </tr>

              <tr>
                <td><code>\\t</code></td>
                <td>Tab</td>
              </tr>

              <tr>
                <td><code>\\"</code></td>
                <td>Double quotation mark</td>
              </tr>

              <tr>
                <td><code>\\\\</code></td>
                <td>Backslash</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>6. Operators in C#</h2>

          <p>
            Operators are symbols that perform operations on values and variables.
          </p>

          <h3>6.1 Arithmetic Operators</h3>

          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>+</code></td>
                <td>Addition</td>
                <td><code>10 + 3</code></td>
              </tr>

              <tr>
                <td><code>-</code></td>
                <td>Subtraction</td>
                <td><code>10 - 3</code></td>
              </tr>

              <tr>
                <td><code>*</code></td>
                <td>Multiplication</td>
                <td><code>10 * 3</code></td>
              </tr>

              <tr>
                <td><code>/</code></td>
                <td>Division</td>
                <td><code>10 / 3</code></td>
              </tr>

              <tr>
                <td><code>%</code></td>
                <td>Remainder</td>
                <td><code>10 % 3</code></td>
              </tr>
            </tbody>
          </table>

          <pre style={codeBlockStyle}>
            <code>{`int a = 10;
int b = 3;

Console.WriteLine(a + b); // 13
Console.WriteLine(a - b); // 7
Console.WriteLine(a * b); // 30
Console.WriteLine(a / b); // 3
Console.WriteLine(a % b); // 1`}</code>
          </pre>

          <h3>Important: Integer Division</h3>

          <p>
            When both operands are integers, C# performs integer division.
            The decimal portion is discarded.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine(10 / 3);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`3`}</code>
          </pre>

          <p>
            If you want a decimal result, at least one value should be a
            decimal-compatible type.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.WriteLine(10.0 / 3);
Console.WriteLine(10.0m / 3);`}</code>
          </pre>

          <p><strong>Example output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`3.33333333333333
3.3333333333333333333333333333`}</code>
          </pre>

          <h3>6.2 Assignment Operators</h3>

          <pre style={codeBlockStyle}>
            <code>{`int x = 10;

x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4

Console.WriteLine(x);`}</code>
          </pre>

          <p>
            These operators provide a shorter way to update an existing variable.
          </p>

          <h3>6.3 Increment and Decrement Operators</h3>

          <p>
            The increment operator <code>++</code> increases a value by 1.
            The decrement operator <code>--</code> decreases a value by 1.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int count = 5;

count++;
Console.WriteLine(count); // 6

count--;
Console.WriteLine(count); // 5`}</code>
          </pre>

          <p>
            These operators are especially common in loops, which you will study
            in a later session.
          </p>

          <h3>6.4 Comparison Operators</h3>

          <p>
            Comparison operators compare two values and return a Boolean result:
            <code>true</code> or <code>false</code>.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int a = 10;
int b = 20;

Console.WriteLine(a == b); // false
Console.WriteLine(a != b); // true
Console.WriteLine(a > b);  // false
Console.WriteLine(a < b);  // true
Console.WriteLine(a >= b); // false
Console.WriteLine(a <= b); // true`}</code>
          </pre>

          <h3>6.5 Logical Operators</h3>

          <p>
            Logical operators are used to combine or reverse Boolean conditions.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`bool isStudent = true;
bool hasIdCard = false;

Console.WriteLine(isStudent && hasIdCard); // false
Console.WriteLine(isStudent || hasIdCard); // true
Console.WriteLine(!isStudent);             // false`}</code>
          </pre>

          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>&&</code></td>
                <td>AND — both conditions must be true</td>
              </tr>

              <tr>
                <td><code>||</code></td>
                <td>OR — at least one condition must be true</td>
              </tr>

              <tr>
                <td><code>!</code></td>
                <td>NOT — reverses true/false</td>
              </tr>
            </tbody>
          </table>

          <h3>6.6 Operator Precedence</h3>

          <p>
            When an expression contains multiple operators, C# follows a specific
            order when evaluating the expression.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int result = 10 + 5 * 2;

Console.WriteLine(result);`}</code>
          </pre>

          <p><strong>Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`20`}</code>
          </pre>

          <p>
            Multiplication is performed before addition:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`10 + (5 * 2)
10 + 10
20`}</code>
          </pre>

          <p>
            Parentheses can be used when you want to control the order.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int result = (10 + 5) * 2;

Console.WriteLine(result); // 30`}</code>
          </pre>

          <hr />

          <h2>7. User Input and Output</h2>

          <h3>Reading Input with Console.ReadLine()</h3>

          <p>
            <code>Console.ReadLine()</code> waits for the user to type something
            and press Enter.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your name: ");

string name = Console.ReadLine();

Console.WriteLine($"Hello, {name}!");`}</code>
          </pre>

          <p>
            An important point for beginners is that <code>Console.ReadLine()</code>
            reads the user's input as text.
          </p>

          <p>
            Therefore, if the user enters <code>25</code>, the input initially
            comes into the program as text rather than as an integer.
          </p>

          <hr />

          <h2>8. Type Conversion</h2>

          <p>
            Type conversion means changing a value from one data type into another
            compatible type.
          </p>

          <h3>Using Convert</h3>

          <p>
            The <code>Convert</code> class is commonly used when working with
            console input.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your age: ");

int age = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Your age is {age}.");`}</code>
          </pre>

          <p>
            The process is:
          </p>

          <ol>
            <li><code>Console.ReadLine()</code> receives text.</li>
            <li><code>Convert.ToInt32()</code> converts that text into an integer.</li>
            <li>The converted value is stored in <code>age</code>.</li>
          </ol>

          <h3>Converting Decimal Input</h3>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your salary: ");

decimal salary = Convert.ToDecimal(Console.ReadLine());

Console.WriteLine($"Salary = {salary}");`}</code>
          </pre>

          <h3>Using Parse()</h3>

          <p>
            Another common approach is the <code>Parse()</code> method.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your age: ");

int age = int.Parse(Console.ReadLine());

Console.WriteLine($"Age = {age}");`}</code>
          </pre>

          <p>
            <code>Parse()</code> expects the text to contain a valid value.
            If the user enters invalid text, an exception can occur.
          </p>

          <h3>Using TryParse()</h3>

          <p>
            <code>TryParse()</code> is useful when you want to check whether
            conversion succeeded instead of immediately causing an exception.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your age: ");

bool success = int.TryParse(Console.ReadLine(), out int age);

Console.WriteLine($"Conversion successful: {success}");

if (success)
{
    Console.WriteLine($"Your age is {age}");
}
else
{
    Console.WriteLine("Please enter a valid number.");
}`}</code>
          </pre>

          <p>
            <strong>Note:</strong> <code>if</code> statements are introduced here
            only to demonstrate safe input conversion. They will be studied in
            detail in the next session.
          </p>

          <hr />

          <h2>9. Live Coding Examples</h2>

          <h3>Example 1: Simple Calculator</h3>

          <p>
            This example combines variables, user input, type conversion,
            arithmetic operators, and string interpolation.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter first number: ");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter second number: ");
double num2 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine();
Console.WriteLine("----- Calculator Result -----");

Console.WriteLine($"Sum        = {num1 + num2}");
Console.WriteLine($"Difference = {num1 - num2}");
Console.WriteLine($"Product    = {num1 * num2}");
Console.WriteLine($"Quotient   = {num1 / num2}");`}</code>
          </pre>

          <p><strong>Example Input:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`Enter first number: 20
Enter second number: 5`}</code>
          </pre>

          <p><strong>Example Output:</strong></p>

          <pre style={codeBlockStyle}>
            <code>{`----- Calculator Result -----
Sum        = 25
Difference = 15
Product    = 100
Quotient   = 4`}</code>
          </pre>

          <h3>Example 2: Student Details</h3>

          <p>
            This example demonstrates text input, integer conversion,
            variables, and formatted output.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter student name: ");
string name = Console.ReadLine();

Console.Write("Enter student age: ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter marks in C#: ");
int marks = Convert.ToInt32(Console.ReadLine());

Console.WriteLine();
Console.WriteLine("----- Student Report -----");

Console.WriteLine($"Name  : {name}");
Console.WriteLine($"Age   : {age}");
Console.WriteLine($"Marks : {marks}");`}</code>
          </pre>

          <h3>Example 3: Employee Salary</h3>

          <p>
            This example demonstrates the <code>decimal</code> data type
            for financial values.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter employee name: ");
string name = Console.ReadLine();

Console.Write("Enter monthly salary: ");
decimal salary = Convert.ToDecimal(Console.ReadLine());

decimal annualSalary = salary * 12;

Console.WriteLine();
Console.WriteLine("----- Employee Salary -----");
Console.WriteLine($"Employee      : {name}");
Console.WriteLine($"Monthly Salary: {salary}");
Console.WriteLine($"Annual Salary : {annualSalary}");`}</code>
          </pre>

          <h3>Example 4: Personal Information Card</h3>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter your full name: ");
string name = Console.ReadLine();

Console.Write("Enter your age: ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter your city: ");
string city = Console.ReadLine();

Console.Write("Enter your favorite subject: ");
string subject = Console.ReadLine();

Console.WriteLine();
Console.WriteLine("===============================");
Console.WriteLine("       PERSONAL INFORMATION");
Console.WriteLine("===============================");
Console.WriteLine($"Name            : {name}");
Console.WriteLine($"Age             : {age}");
Console.WriteLine($"City            : {city}");
Console.WriteLine($"Favorite Subject: {subject}");
Console.WriteLine("===============================");`}</code>
          </pre>

          <hr />

          <h2>10. Common Beginner Mistakes</h2>

          <h3>Mistake 1: Forgetting the Data Type</h3>

          <pre style={codeBlockStyle}>
            <code>{`age = 20; // Error if age has not been declared`}</code>
          </pre>

          <p>
            Correct:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age = 20;`}</code>
          </pre>

          <h3>Mistake 2: Using Double Quotes for char</h3>

          <pre style={codeBlockStyle}>
            <code>{`char grade = "A"; // Incorrect`}</code>
          </pre>

          <p>
            Correct:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`char grade = 'A';`}</code>
          </pre>

          <h3>Mistake 3: Forgetting Conversion</h3>

          <pre style={codeBlockStyle}>
            <code>{`Console.Write("Enter age: ");

int age = Console.ReadLine(); // Incorrect`}</code>
          </pre>

          <p>
            Correct:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`int age = Convert.ToInt32(Console.ReadLine());`}</code>
          </pre>

          <h3>Mistake 4: Expecting Decimal Division from Integers</h3>

          <pre style={codeBlockStyle}>
            <code>{`int a = 5;
int b = 2;

Console.WriteLine(a / b);`}</code>
          </pre>

          <p>
            The result is <code>2</code>, not <code>2.5</code>, because both
            operands are integers.
          </p>

          <h3>Mistake 5: Trying to Change a Constant</h3>

          <pre style={codeBlockStyle}>
            <code>{`const int MaxMarks = 100;

// MaxMarks = 90; // Error`}</code>
          </pre>

          <hr />

          <h2>11. Practice Exercises</h2>

          <h3>Exercise 1 — Employee Information</h3>

          <p>Declare variables for:</p>

          <ul>
            <li>Employee Name — <code>string</code></li>
            <li>Employee ID — <code>int</code></li>
            <li>Salary — <code>decimal</code></li>
            <li>Is Permanent — <code>bool</code></li>
          </ul>

          <p>
            Take the values from the user and display the employee information
            neatly.
          </p>

          <h3>Exercise 2 — Two Number Calculator</h3>

          <p>
            Write a program that asks the user for two numbers and displays:
          </p>

          <ul>
            <li>Sum</li>
            <li>Difference</li>
            <li>Product</li>
            <li>Quotient</li>
            <li>Remainder</li>
          </ul>

          <h3>Exercise 3 — Average of Three Numbers</h3>

          <p>
            Ask the user for three numbers and calculate their average.
          </p>

          <p>
            Make sure that your result can contain decimal values.
          </p>

          <h3>Exercise 4 — Temperature Converter</h3>

          <p>
            Ask the user for a temperature in Celsius and convert it to Fahrenheit
            using the formula:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`F = (C * 9 / 5) + 32`}</code>
          </pre>

          <h3>Exercise 5 — Rectangle Calculator</h3>

          <p>
            Ask the user for the length and width of a rectangle.
            Calculate and display:
          </p>

          <ul>
            <li>Area</li>
            <li>Perimeter</li>
          </ul>

          <p>Use these formulas:</p>

          <pre style={codeBlockStyle}>
            <code>{`Area = length × width

Perimeter = 2 × (length + width)`}</code>
          </pre>

          <hr />

          <h2>12. Session Challenge</h2>

          <h3>Challenge — Student Result Card</h3>

          <p>
            Create a console application called
            <strong> Student Result Card</strong>.
          </p>

          <p>The program should ask the user for:</p>

          <ul>
            <li>Student Name</li>
            <li>Student ID</li>
            <li>Marks in C#</li>
            <li>Marks in SQL</li>
            <li>Marks in HTML</li>
          </ul>

          <p>Then calculate:</p>

          <ul>
            <li>Total Marks</li>
            <li>Average Marks</li>
          </ul>

          <p>
            Finally, display the information in a neat format.
          </p>

          <p>Example format:</p>

          <pre style={codeBlockStyle}>
            <code>{`====================================
          STUDENT RESULT CARD
====================================
Student Name : Ali Khan
Student ID   : 101
C# Marks     : 85
SQL Marks    : 78
HTML Marks   : 90
------------------------------------
Total Marks  : 253
Average      : 84.33
====================================`}</code>
          </pre>

          <p>
            <strong>Bonus:</strong> Add a constant called
            <code>MaximumMarks</code> with a value of <code>100</code>.
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
                <td>Variable</td>
                <td>A named storage location whose value can change</td>
              </tr>

              <tr>
                <td>Data Type</td>
                <td>Defines what kind of value a variable can store</td>
              </tr>

              <tr>
                <td>Constant</td>
                <td>A value that cannot be changed after definition</td>
              </tr>

              <tr>
                <td>Literal</td>
                <td>A value written directly in source code</td>
              </tr>

              <tr>
                <td>Comment</td>
                <td>Code documentation ignored by the compiler</td>
              </tr>

              <tr>
                <td>Interpolation</td>
                <td>Inserting variables/expressions into strings using <code>$</code></td>
              </tr>

              <tr>
                <td>Arithmetic Operators</td>
                <td>Perform mathematical operations</td>
              </tr>

              <tr>
                <td>Comparison Operators</td>
                <td>Compare values and return <code>true</code> or <code>false</code></td>
              </tr>

              <tr>
                <td>Logical Operators</td>
                <td>Combine or reverse Boolean conditions</td>
              </tr>

              <tr>
                <td>Console.ReadLine()</td>
                <td>Reads user input as text</td>
              </tr>

              <tr>
                <td>Convert</td>
                <td>Converts values from one type to another</td>
              </tr>

              <tr>
                <td>Parse</td>
                <td>Converts valid text into a specified type</td>
              </tr>

              <tr>
                <td>TryParse</td>
                <td>Attempts conversion and reports whether it succeeded</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>14. Session Quiz</h2>

          <ol>
            <li>What is a variable?</li>

            <li>
              What is the difference between declaration, initialization,
              and assignment?
            </li>

            <li>
              What is the difference between <code>int</code>,
              <code>double</code>, and <code>decimal</code>?
            </li>

            <li>
              What is the difference between <code>char</code> and
              <code>string</code>?
            </li>

            <li>
              What is the purpose of the <code>var</code> keyword?
            </li>

            <li>
              What is a constant and how do you declare one?
            </li>

            <li>
              What is a literal?
            </li>

            <li>
              What is string interpolation?
            </li>

            <li>
              What is the difference between <code>Console.Write()</code>
              and <code>Console.WriteLine()</code>?
            </li>

            <li>
              What does <code>Console.ReadLine()</code> return?
            </li>

            <li>
              Why do we need to convert user input before storing it in
              an <code>int</code> variable?
            </li>

            <li>
              What is the difference between <code>Convert.ToInt32()</code>
              and <code>int.Parse()</code>?
            </li>

            <li>
              What is <code>TryParse()</code> used for?
            </li>

            <li>
              What does the <code>%</code> operator return?
            </li>

            <li>
              What is the difference between <code>++</code> and
              <code>--</code>?
            </li>

            <li>
              What is the difference between <code>&&</code> and
              <code>||</code>?
            </li>

            <li>
              What does the <code>!</code> operator do?
            </li>

            <li>
              Why does <code>10 / 3</code> produce <code>3</code> when
              both values are integers?
            </li>

            <li>
              What is the purpose of parentheses in an expression?
            </li>

            <li>
              Why are comments useful in a program?
            </li>
          </ol>

          <hr />

          <h2>15. Interview Questions</h2> 
          <p> Review the following interview questions to test your understanding of the basic building blocks of C#. 
                Try to answer each question in your own words and write code examples wherever required. </p> 
          <h3>Basic Concepts</h3> 
          <ol> 
            <li>What is a variable in C#?</li> 
            <li>What is the difference between variable declaration, initialization, and assignment?</li> 
            <li>What is a data type, and why do we use data types in C#?</li> 
            <li>What is the difference between <code>int</code>, <code>float</code>, <code>double</code>, and <code>decimal</code>?</li> 
            <li>What is the difference between <code>char</code> and <code>string</code>?</li> 
            <li>What is the purpose of the <code>var</code> keyword? Can a variable declared with <code>var</code> change its data type later?</li> 
            <li>What is the difference between a variable and a constant?</li> 
            <li>What is a literal in C#? Give three examples.</li> 
          </ol> 
                
          <h3>Comments and Strings</h3> 
          <ol start="9"> 
            <li>What are comments, and why are they useful in programming?</li> 
            <li>What is the difference between single-line, multi-line, and XML documentation comments?</li> 
            <li>What is string concatenation?</li> 
            <li>What is string interpolation, and how does the <code>$</code> symbol work in an interpolated string?</li> 
            <li>What are escape characters? Explain <code>\\n</code>, <code>\\t</code>, and <code>\\"</code>.</li> 
            <li>What is the difference between <code>Console.Write()</code> and <code>Console.WriteLine()</code>?</li> 
          </ol> 
                
          <h3>Operators and Expressions</h3> 
          <ol start="15"> 
            <li>What are arithmetic operators? Name the arithmetic operators available in C#.</li> 
            <li>What is the difference between the <code>/</code> and <code>%</code> operators?</li> 
            <li>What is the difference between <code>++</code> and <code>--</code>?</li> 
            <li>What are assignment operators? Explain <code>+=</code> and <code>-=</code> with examples.</li> 
            <li>What are comparison operators, and what type of result do they return?</li> 
            <li>What is the difference between the logical AND (<code>&amp;&amp;</code>) and logical OR (<code>||</code>) operators?</li> 
            <li>What does the logical NOT (<code>!</code>) operator do?</li> <li>What is operator precedence in C#?</li> 
            <li>What will be the output of <code>10 + 5 * 2</code>, and why?</li> 
            <li>What is the difference between <code>10 / 3</code> and <code>10.0 / 3</code>?</li> 
          </ol> 
          
          <h3>User Input and Type Conversion</h3> 
            <ol start="25"> 
              <li>What is the purpose of <code>Console.ReadLine()</code>?</li> 
              <li>What data type does <code>Console.ReadLine()</code> return?</li> 
              <li>Why do we need type conversion when taking numeric input from the user?</li> 
              <li>What is the difference between <code>Convert.ToInt32()</code> and <code>int.Parse()</code>?</li> 
              <li>What is <code>TryParse()</code>, and why is it useful when handling user input?</li> 
              <li>What happens if a user enters invalid text when the program expects an integer using <code>int.Parse()</code>?</li> 
            </ol> 
          
          <h3>Practical Coding Questions</h3> 
            <ol start="31"> 
              <li>Write a C# program that declares variables of different data types and displays their values.</li> 
              <li>Write a program that asks the user for their name and age, then displays both using string interpolation.</li> 
              <li>Write a program that takes two numbers from the user and displays their sum, difference, product, quotient, and remainder.</li> 
              <li>Write a program that calculates the average of three numbers and displays the result with decimal precision.</li> 
              <li>Write a program that demonstrates the difference between integer division and decimal division.</li> 
              <li>Write a program that uses <code>int.TryParse()</code> to validate numeric input from the user.</li> 
              <li>Write a program that calculates an employee's annual salary using their monthly salary.</li> 
              <li>Write a program that accepts a student's name, ID, and marks in three subjects, then displays a formatted Student Result Card with total and average marks.</li> 
          </ol> 
          
          <p> <strong>Interview Preparation Tip:</strong> Do not only memorize definitions. Practise explaining each concept in your own words, predicting program output, and writing small C# programs without looking at the guide. </p>

          <hr />

          <h2>16. Homework</h2>

          <p>
            Complete the following programs and submit your source code:
          </p>

          <ol>
            <li>
              <strong>Employee Information System</strong> —
              Take employee information and display a formatted report.
            </li>

            <li>
              <strong>Shopping Bill</strong> —
              Ask for product name, quantity, and price. Calculate the total bill.
            </li>

            <li>
              <strong>Simple Interest Calculator</strong> —
              Ask for principal, rate, and time and calculate simple interest.
            </li>

            <li>
              <strong>Student Marks Calculator</strong> —
              Take marks for five subjects and calculate total and average.
            </li>
          </ol>

          <hr />

          <h2>17. Key Takeaways</h2>

          <ul>
            <li>Variables store values that can change.</li>
            <li>Data types determine what kind of value a variable stores.</li>
            <li>Constants store values that should not change.</li>
            <li>Literals are values written directly in source code.</li>
            <li>Comments help explain and document code.</li>
            <li>String interpolation makes formatted output easier to read.</li>
            <li>Operators allow us to perform calculations and comparisons.</li>
            <li><code>Console.ReadLine()</code> receives user input as text.</li>
            <li>Input often needs to be converted before mathematical operations.</li>
            <li>Integer division behaves differently from decimal division.</li>
            <li><code>TryParse()</code> can be used when input may be invalid.</li>
          </ul>

          <hr />

          <p>
            <strong>Next Session:</strong> Programming Constructs and Arrays
            — if/else, switch, loops, and arrays.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}








// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session02() {
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
//       title="Session 02 — Basic Building Blocks in C#"
//       description="Variables, Data Types, Operators, Comments, Constants and Input/Output in C#"
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
//           <h1>Session 02 — Basic Building Blocks in C#</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Master variables, data types, operators, comments, constants, and basic input/output.</p>
//           <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should be able to:</p>
//           <ul>
//             <li>Declare and use variables</li>
//             <li>Identify and use different data types in C#</li>
//             <li>Write single-line and multi-line comments</li>
//             <li>Use XML documentation comments</li>
//             <li>Work with constants and literals</li>
//             <li>Use string interpolation</li>
//             <li>Apply different types of operators</li>
//             <li>Handle basic input and output</li>
//           </ul>

//           <hr />

//           <h2>1. Variables and Data Types</h2>

//           <h3>What is a Variable?</h3>
//           <p>A variable is a named storage location in memory that holds a value. The value can change during program execution.</p>

//           <pre style={codeBlockStyle}>
//             <code>{`int age = 20;
// string name = "Ali";
// double salary = 45000.50;
// bool isStudent = true;`}</code>
//           </pre>

//           <h3>Common Data Types</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Data Type</th>
//                 <th>Size</th>
//                 <th>Example</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>int</code></td>
//                 <td>4 bytes</td>
//                 <td><code>25</code></td>
//                 <td>Whole numbers</td>
//               </tr>
//               <tr>
//                 <td><code>long</code></td>
//                 <td>8 bytes</td>
//                 <td><code>1234567890</code></td>
//                 <td>Large whole numbers</td>
//               </tr>
//               <tr>
//                 <td><code>float</code></td>
//                 <td>4 bytes</td>
//                 <td><code>12.5f</code></td>
//                 <td>Decimal numbers (less precision)</td>
//               </tr>
//               <tr>
//                 <td><code>double</code></td>
//                 <td>8 bytes</td>
//                 <td><code>12.5</code></td>
//                 <td>Decimal numbers (more precision)</td>
//               </tr>
//               <tr>
//                 <td><code>decimal</code></td>
//                 <td>16 bytes</td>
//                 <td><code>99.99m</code></td>
//                 <td>High precision (money)</td>
//               </tr>
//               <tr>
//                 <td><code>char</code></td>
//                 <td>2 bytes</td>
//                 <td><code>'A'</code></td>
//                 <td>Single character</td>
//               </tr>
//               <tr>
//                 <td><code>string</code></td>
//                 <td>—</td>
//                 <td><code>"Hello"</code></td>
//                 <td>Text</td>
//               </tr>
//               <tr>
//                 <td><code>bool</code></td>
//                 <td>1 byte</td>
//                 <td><code>true / false</code></td>
//                 <td>Boolean value</td>
//               </tr>
//             </tbody>
//           </table>

//           <h3>Declaring Variables</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`// Method 1
// int age;
// age = 22;

// // Method 2 (Recommended)
// int age = 22;

// // Multiple variables
// int a = 10, b = 20, c = 30;`}</code>
//           </pre>

//           <hr />

//           <h2>2. Comments in C#</h2>

//           <h3>Single-line Comment</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`// This is a single-line comment
// int age = 20; // age of the student`}</code>
//           </pre>

//           <h3>Multi-line Comment</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`/*
//   This is a multi-line comment.
//   It can span multiple lines.
// */`}</code>
//           </pre>

//           <h3>XML Documentation Comment</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`/// <summary>
// /// This method adds two numbers
// /// </summary>
// /// <param name="a">First number</param>
// /// <param name="b">Second number</param>
// /// <returns>Sum of a and b</returns>
// int Add(int a, int b)
// {
//     return a + b;
// }`}</code>
//           </pre>

//           <hr />

//           <h2>3. Constants and Literals</h2>

//           <h3>Constant</h3>
//           <p>A constant is a value that cannot be changed after it is assigned.</p>

//           <pre style={codeBlockStyle}>
//             <code>{`const double PI = 3.14159;
// const string CompanyName = "Aptech";

// // PI = 3.14;  // Error! Cannot modify a constant`}</code>
//           </pre>

//           <h3>Literals</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int number = 100;          // Integer literal
// double price = 99.99;      // Double literal
// float rate = 5.5f;         // Float literal
// decimal amount = 250.75m;  // Decimal literal
// char grade = 'A';          // Character literal
// string message = "Hello";  // String literal
// bool isActive = true;      // Boolean literal`}</code>
//           </pre>

//           <hr />

//           <h2>4. String Interpolation</h2>
//           <p>Modern and preferred way to format strings.</p>

//           <pre style={codeBlockStyle}>
//             <code>{`string name = "Ali";
// int age = 21;

// // Old way
// Console.WriteLine("Name: " + name + ", Age: " + age);

// // Modern way (String Interpolation)
// Console.WriteLine($"Name: {name}, Age: {age}");
// Console.WriteLine($"Next year you will be {age + 1} years old.");`}</code>
//           </pre>

//           <hr />

//           <h2>5. Operators in C#</h2>

//           <h3>Arithmetic Operators</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int a = 10, b = 3;

// Console.WriteLine(a + b);  // 13
// Console.WriteLine(a - b);  // 7
// Console.WriteLine(a * b);  // 30
// Console.WriteLine(a / b);  // 3
// Console.WriteLine(a % b);  // 1 (remainder)`}</code>
//           </pre>

//           <h3>Assignment Operators</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int x = 10;
// x += 5;   // x = x + 5  → 15
// x -= 3;   // x = x - 3  → 12
// x *= 2;   // x = x * 2  → 24
// x /= 4;   // x = x / 4  → 6`}</code>
//           </pre>

//           <h3>Comparison Operators</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`int a = 10, b = 20;

// Console.WriteLine(a == b);  // false
// Console.WriteLine(a != b);  // true
// Console.WriteLine(a > b);   // false
// Console.WriteLine(a < b);   // true
// Console.WriteLine(a >= b);  // false
// Console.WriteLine(a <= b);  // true`}</code>
//           </pre>

//           <h3>Logical Operators</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`bool isStudent = true;
// bool hasIdCard = false;

// Console.WriteLine(isStudent && hasIdCard);  // false (AND)
// Console.WriteLine(isStudent || hasIdCard);  // true  (OR)
// Console.WriteLine(!isStudent);              // false (NOT)`}</code>
//           </pre>

//           <hr />

//           <h2>6. Live Coding Examples</h2>

//           <h3>Example 1: Simple Calculator</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`Console.Write("Enter first number: ");
// double num1 = Convert.ToDouble(Console.ReadLine());

// Console.Write("Enter second number: ");
// double num2 = Convert.ToDouble(Console.ReadLine());

// Console.WriteLine($"Sum = {num1 + num2}");
// Console.WriteLine($"Difference = {num1 - num2}");
// Console.WriteLine($"Product = {num1 * num2}");
// Console.WriteLine($"Quotient = {num1 / num2}");`}</code>
//           </pre>

//           <h3>Example 2: Student Details</h3>
//           <pre style={codeBlockStyle}>
//             <code>{`Console.Write("Enter student name: ");
// string name = Console.ReadLine();

// Console.Write("Enter marks in C#: ");
// int marks = Convert.ToInt32(Console.ReadLine());

// Console.WriteLine();
// Console.WriteLine("----- Student Report -----");
// Console.WriteLine($"Name  : {name}");
// Console.WriteLine($"Marks : {marks}");
// Console.WriteLine($"Result: {(marks >= 50 ? "Pass" : "Fail")}");`}</code>
//           </pre>

//           <hr />

//           <h2>7. Practice Exercises</h2>

//           <h3>Exercise 1</h3>
//           <p>Declare variables for:</p>
//           <ul>
//             <li>Employee Name (string)</li>
//             <li>Employee ID (int)</li>
//             <li>Salary (decimal)</li>
//             <li>Is Permanent (bool)</li>
//           </ul>
//           <p>Take input from the user and display the information neatly.</p>

//           <h3>Exercise 2</h3>
//           <p>Write a program that takes two numbers and displays:</p>
//           <ul>
//             <li>Sum</li>
//             <li>Product</li>
//             <li>Average</li>
//           </ul>

//           <h3>Exercise 3</h3>
//           <p>Create a program that asks for temperature in Celsius and converts it to Fahrenheit using the formula:</p>
//           <pre style={codeBlockStyle}>
//             <code>{`F = (C * 9/5) + 32`}</code>
//           </pre>

//           <hr />

//           <h2>8. Session Challenge</h2>
//           <p>Create a program called <strong>Personal Information Card</strong> that asks the user for:</p>
//           <ul>
//             <li>Full Name</li>
//             <li>Age</li>
//             <li>City</li>
//             <li>Favorite Subject</li>
//           </ul>
//           <p>Then display the information in this format:</p>

//           <pre style={codeBlockStyle}>
//             <code>{`===============================
//        PERSONAL INFORMATION
// ===============================
// Name            : Ali Khan
// Age             : 20
// City            : Karachi
// Favorite Subject: C# Programming
// ===============================`}</code>
//           </pre>

//           <hr />

//           <h2>9. Session Quiz</h2>
//           <ol>
//             <li>What is a variable?</li>
//             <li>What is the difference between <code>int</code> and <code>double</code>?</li>
//             <li>How do you declare a constant in C#?</li>
//             <li>What is string interpolation?</li>
//             <li>What does the <code>%</code> operator do?</li>
//             <li>What is the difference between <code>&&</code> and <code>||</code>?</li>
//             <li>Why do we use comments in a program?</li>
//             <li>What is the purpose of XML documentation comments?</li>
//           </ol>

//           <hr />

//           <p><strong>Next Session:</strong> Programming Constructs and Arrays (if-else, switch, loops, and arrays)</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
