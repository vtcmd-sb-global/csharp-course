import React from "react";
import Layout from "@theme/Layout";
import CustomLayout from "@site/src/components/Layout/Layout";
import CodeBlock from "@site/src/components/CodeBlock";

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

          <p>
            <strong>Duration:</strong> 2 hours
          </p>

          <p>
            <strong>Focus:</strong> Variables, data types, comments, constants,
            literals, string interpolation, operators, type conversion, user
            input, and basic console output.
          </p>

          <p>
            <strong>Based on:</strong> Official Aptech Book – Session 2
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Understand what variables are and why they are used</li>
            <li>Declare, initialize, and assign values to variables</li>
            <li>Identify and use common C# data types</li>
            <li>Understand literals and their relationship with data types</li>
            <li>
              Use <code>var</code> for implicitly typed variables
            </li>
            <li>
              Write single-line, multi-line, and XML documentation comments
            </li>
            <li>Create and use constants</li>
            <li>Use string concatenation and string interpolation</li>
            <li>Use escape characters inside strings</li>
            <li>
              Understand composite formatting with numbered placeholders ({0},{" "}
              {1}, etc.)
            </li>
            <li>
              Understand arithmetic, assignment, comparison, and logical
              operators
            </li>
            <li>Understand increment and decrement operators</li>
            <li>Understand operator precedence</li>
            <li>
              Take input using <code>Console.ReadLine()</code>
            </li>
            <li>Convert text input into numbers</li>
            <li>
              Understand the difference between integer and decimal division
            </li>
            <li>
              Build small console applications using these concepts together
            </li>
            <li>Follow good naming conventions for variables and constants</li>
            <li>Choose the most appropriate data type for a given situation</li>
            <li>
              Handle user input safely using <code>TryParse</code>
            </li>
            <li>
              Apply operator precedence correctly and use parentheses when
              needed
            </li>
          </ul>

          <p>
            <strong>Why this session matters:</strong> Everything you build in
            C# — whether a simple console tool, a web API, a desktop
            application, or a game — rests on these fundamentals. Variables hold
            your data, data types define how that data is stored and what
            operations are legal, operators transform the data, and input/output
            lets your programs communicate with the outside world. Mastering
            these building blocks early makes every later topic (conditions,
            loops, methods, classes, LINQ, async, etc.) much easier.
          </p>

          <hr />

          <h2>1. Variables and Data Types</h2>

          <h3>What is a Variable?</h3>

          <p>
            A variable is a named storage location used to hold a value in a
            program. The value stored inside a variable can change while the
            program is running.
          </p>

          <p>
            You can think of a variable as a labelled box. The label is the
            variable name, and the value stored inside the box is the variable's
            value.
          </p>

          <p>
            In real programs you will create dozens or hundreds of variables.
            Good variable names make code readable; poor names make even simple
            code hard to understand. Follow these common C# naming conventions:
          </p>

          <ul>
            <li>
              Use <strong>camelCase</strong> for local variables and parameters:{" "}
              <code>studentName</code>, <code>totalMarks</code>,{" "}
              <code>isPassed</code>.
            </li>
            <li>
              Names should be descriptive. Prefer <code>studentAge</code> over{" "}
              <code>a</code> or <code>x</code>.
            </li>
            <li>
              Do not start a variable name with a number. <code>2ndPlace</code>{" "}
              is illegal; <code>secondPlace</code> is fine.
            </li>
            <li>
              Avoid reserved keywords (<code>int</code>, <code>class</code>,{" "}
              <code>string</code>, etc.) as names.
            </li>
            <li>
              Boolean variables often start with <code>is</code>,{" "}
              <code>has</code>, <code>can</code>, or <code>should</code> (e.g.{" "}
              <code>isStudent</code>, <code>hasDiscount</code>).
            </li>
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
            caption="Good vs poor variable naming examples"
          />

          <p>In the first example above:</p>

          <ul>
            <li>
              <code>studentAge</code> stores a whole number.
            </li>
            <li>
              <code>fullName</code> stores text.
            </li>
            <li>
              <code>monthlySalary</code> stores a decimal number.
            </li>
            <li>
              <code>isEnrolled</code> stores either <code>true</code> or{" "}
              <code>false</code>.
            </li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`int age = 20;
string name = "Ali";
double salary = 45000.50;
bool isStudent = true;`}
            caption="Basic variable declarations with different data types"
          />

          <p>In the example above:</p>

          <ul>
            <li>
              <code>age</code> stores a whole number.
            </li>
            <li>
              <code>name</code> stores text.
            </li>
            <li>
              <code>salary</code> stores a decimal number.
            </li>
            <li>
              <code>isStudent</code> stores either <code>true</code> or{" "}
              <code>false</code>.
            </li>
          </ul>

          <h3>Variable Declaration</h3>

          <p>
            Declaration means telling C# that you want to create a variable and
            specifying its data type.
          </p>

          <CodeBlock
            language="csharp"
            code={`int age;`}
            caption="Simple variable declaration (no value yet)"
          />

          <p>
            Here, <code>int</code> is the data type and <code>age</code> is the
            variable name.
          </p>

          <p>
            <strong>Important note about local variables:</strong> In C#, a
            local variable (a variable declared inside a method) must be
            assigned a value before it is used. If you declare{" "}
            <code>int age;</code> and then try to print it without assigning a
            value first, the compiler will give an error: "Use of unassigned
            local variable".
          </p>

          <CodeBlock
            language="csharp"
            code={`int age;               // declared but not initialized
// Console.WriteLine(age); // Error: Use of unassigned local variable 'age'

age = 20;              // now it is safe to use
Console.WriteLine(age);`}
            caption="Local variables must be assigned before they are used"
          />

          <h3>Variable Initialization</h3>

          <p>
            Initialization means giving a variable its first value when it is
            created.
          </p>

          <CodeBlock
            language="csharp"
            code={`int age = 20;`}
            caption="Declaration and initialization in one statement"
          />

          <p>
            This single statement both declares and initializes the variable.
          </p>

          <h3>Assignment</h3>

          <p>
            Assignment means storing a value inside a variable after the
            variable has already been declared.
          </p>

          <CodeBlock
            language="csharp"
            code={`int age;

age = 20;
age = 25;

Console.WriteLine(age);`}
            caption="Assigning and later re-assigning a value to a variable"
          />

          <p>
            <strong>Output:</strong>
          </p>

          <CodeBlock
            language="csharp"
            code={`25`}
            caption="Output after the final assignment"
          />

          <p>
            Notice that the value of <code>age</code> changed from{" "}
            <code>20</code> to
            <code>25</code>. This is why it is called a variable.
          </p>

          <h3>Declaring Multiple Variables</h3>

          <CodeBlock
            language="csharp"
            code={`int a = 10, b = 20, c = 30;

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);`}
            caption="Declaring and initializing multiple variables of the same type"
          />

          <p>
            Although multiple variables can be declared in one statement,
            beginners should usually prefer separate declarations when it
            improves readability.
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
                <td>
                  <code>int</code>
                </td>
                <td>4 bytes</td>
                <td>
                  <code>25</code>
                </td>
                <td>Whole numbers</td>
              </tr>

              <tr>
                <td>
                  <code>long</code>
                </td>
                <td>8 bytes</td>
                <td>
                  <code>1234567890L</code>
                </td>
                <td>Very large whole numbers</td>
              </tr>

              <tr>
                <td>
                  <code>float</code>
                </td>
                <td>4 bytes</td>
                <td>
                  <code>12.5f</code>
                </td>
                <td>Decimal numbers with less precision</td>
              </tr>

              <tr>
                <td>
                  <code>double</code>
                </td>
                <td>8 bytes</td>
                <td>
                  <code>12.5</code>
                </td>
                <td>Decimal numbers with more precision than float</td>
              </tr>

              <tr>
                <td>
                  <code>decimal</code>
                </td>
                <td>16 bytes</td>
                <td>
                  <code>99.99m</code>
                </td>
                <td>
                  High-precision decimal calculations, especially financial
                  values
                </td>
              </tr>

              <tr>
                <td>
                  <code>char</code>
                </td>
                <td>2 bytes</td>
                <td>
                  <code>'A'</code>
                </td>
                <td>A single character</td>
              </tr>

              <tr>
                <td>
                  <code>string</code>
                </td>
                <td>Variable</td>
                <td>
                  <code>"Hello"</code>
                </td>
                <td>Text</td>
              </tr>

              <tr>
                <td>
                  <code>bool</code>
                </td>
                <td>1 byte</td>
                <td>
                  <code>true</code>
                </td>
                <td>True/false values</td>
              </tr>
            </tbody>
          </table>

          <h3>Approximate Ranges of Numeric Types</h3>

          <p>
            Knowing the range helps you choose the correct type and avoid
            overflow.
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
                <td>
                  <code>int</code>
                </td>
                <td>−2,147,483,648 to 2,147,483,647</td>
                <td>Most common choice for whole numbers</td>
              </tr>
              <tr>
                <td>
                  <code>long</code>
                </td>
                <td>−9 × 10¹⁸ to 9 × 10¹⁸</td>
                <td>
                  Use when <code>int</code> is not large enough
                </td>
              </tr>
              <tr>
                <td>
                  <code>float</code>
                </td>
                <td>~ ±1.5 × 10⁻⁴⁵ to ±3.4 × 10³⁸</td>
                <td>
                  ~6–9 digits of precision; suffix <code>f</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>double</code>
                </td>
                <td>~ ±5.0 × 10⁻³²⁴ to ±1.7 × 10³⁰⁸</td>
                <td>~15–17 digits of precision; default for real numbers</td>
              </tr>
              <tr>
                <td>
                  <code>decimal</code>
                </td>
                <td>~ ±1.0 × 10⁻²⁸ to ±7.9 × 10²⁸</td>
                <td>
                  28–29 significant digits; ideal for money; suffix{" "}
                  <code>m</code>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Quick guidance:</strong>
          </p>
          <ul>
            <li>
              Use <code>int</code> for counts, ages, indexes, most whole
              numbers.
            </li>
            <li>
              Use <code>long</code> for very large counts (population, file
              sizes in bytes, etc.).
            </li>
            <li>
              Use <code>double</code> for scientific or general floating-point
              calculations.
            </li>
            <li>
              Use <code>decimal</code> whenever money or high-precision decimal
              arithmetic is involved.
            </li>
            <li>
              Use <code>float</code> only when memory is tight or when
              interoperating with APIs that require it.
            </li>
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
            caption="Examples of common C# data types (int, long, float, double, decimal, char, string, bool)"
          />

          <h3>Important: Character vs String</h3>

          <p>
            A <code>char</code> stores a single character and uses single
            quotes. A <code>string</code> stores text and uses double quotes.
          </p>

          <CodeBlock
            language="csharp"
            code={`char grade = 'A';

string name = "Ali";`}
            caption="char uses single quotes; string uses double quotes"
          />

          <p>This is incorrect:</p>

          <CodeBlock
            language="csharp"
            code={`char grade = "A";`}
            caption="Incorrect: a string literal cannot be assigned to a char"
          />

          <p>
            because <code>"A"</code> is a string, not a character.
          </p>

          <h3>
            Understanding <code>var</code>
          </h3>

          <p>
            C# also provides the <code>var</code> keyword. It allows the
            compiler to determine the variable's type from the value assigned to
            it.
          </p>

          <CodeBlock
            language="csharp"
            code={`var age = 20;
var name = "Ali";
var price = 99.99;`}
            caption="Implicit typing with the var keyword"
          />

          <p>C# determines the types as:</p>

          <ul>
            <li>
              <code>age</code> → <code>int</code>
            </li>
            <li>
              <code>name</code> → <code>string</code>
            </li>
            <li>
              <code>price</code> → <code>double</code>
            </li>
          </ul>

          <p>
            <strong>Important:</strong> <code>var</code> does not mean that the
            variable can change into any type later. The type is fixed at
            compile time based on the right-hand side expression.
          </p>

          <CodeBlock
            language="csharp"
            code={`var age = 20;

// age = "Ali";  // Error — age is permanently an int`}
            caption="The type inferred by var is fixed and cannot later change"
          />

          <p>
            <strong>
              When to use <code>var</code>:
            </strong>
          </p>
          <ul>
            <li>
              When the type is obvious from the right-hand side (e.g.{" "}
              <code>var list = new List&lt;string&gt;();</code>).
            </li>
            <li>
              When the type name is long and repeating it adds no clarity.
            </li>
          </ul>
          <p>
            <strong>When to prefer an explicit type:</strong>
          </p>
          <ul>
            <li>When the type is not immediately clear from the expression.</li>
            <li>
              When writing code for beginners or documentation, explicit types
              are often clearer.
            </li>
          </ul>

          <hr />

          <h2>3. Comments in C#</h2>

          <p>
            Comments are notes written inside source code for programmers. The
            compiler ignores comments when executing the program.
          </p>

          <h3>Single-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`// This is a single-line comment
int age = 20;

// We can also write comments after code
int marks = 85; // Student marks`}
            caption="Single-line comments using //"
          />

          <h3>Multi-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`/*
   This is a multi-line comment.
   It can contain multiple lines.
   The compiler ignores all of it.
*/`}
            caption="Multi-line comments using /* ... */"
          />

          <h3>XML Documentation Comments</h3>

          <p>
            XML documentation comments begin with three forward slashes
            <code>///</code>. They can be used to document classes, methods,
            parameters, and return values.
          </p>

          <CodeBlock
            language="csharp"
            code={`/// <summary>
/// Adds two numbers together.
/// </summary>
/// <param name="a">First number</param>
/// <param name="b">Second number</param>
/// <returns>The sum of the two numbers</returns>
int Add(int a, int b)
{
    return a + b;
}`}
            caption="XML documentation comments (///) for IntelliSense and documentation"
          />

          <p>
            In Visual Studio, XML documentation can help developers understand
            methods and their parameters through IntelliSense.
          </p>

          <h3>Best Practices for Comments</h3>

          <ul>
            <li>
              Write comments that explain <em>why</em>, not just <em>what</em>.
              The code already shows what is happening.
            </li>
            <li>
              Keep comments up to date. Outdated comments are worse than no
              comments.
            </li>
            <li>
              Prefer clear, self-documenting code over excessive comments.
            </li>
            <li>
              Use XML documentation comments on public methods and classes so
              that IntelliSense and documentation generators can pick them up.
            </li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`// Bad comment — restates the obvious
int count = 0; // set count to 0

// Better comment — explains intent
int retryCount = 0; // number of times we will retry a failed network call`}
            caption="Avoid comments that merely restate the obvious"
          />

          <hr />

          <h2>4. Constants and Literals</h2>

          <h3>What is a Constant?</h3>

          <p>
            A constant is a value that cannot be changed after it has been
            defined. Constants are declared using the <code>const</code>{" "}
            keyword.
          </p>

          <CodeBlock
            language="csharp"
            code={`const double PI = 3.14159;
const string CompanyName = "Aptech";`}
            caption="Declaring a constant with the const keyword"
          />

          <p>Trying to change a constant causes a compilation error.</p>

          <CodeBlock
            language="csharp"
            code={`const int MaxMarks = 100;

// MaxMarks = 120; // Error — constants cannot be reassigned`}
            caption="Constants are useful for fixed limits and magic numbers"
          />

          <p>
            Constants must be initialized at the point of declaration and their
            value must be known at compile time. They are useful for values that
            truly never change during the life of the program (mathematical
            constants, fixed configuration limits, magic numbers that should
            have a clear name, etc.).
          </p>

          <CodeBlock
            language="csharp"
            code={`const double Pi = 3.141592653589793;
const int DaysInWeek = 7;
const int MaxLoginAttempts = 3;
const string AppName = "Student Portal";

// Using constants makes the code self-documenting
double circumference = 2 * Pi * radius;
if (attempts >= MaxLoginAttempts)
{
    Console.WriteLine("Account locked.");
}`}
            caption="High-precision constant example (Pi)"
          />

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
                <td>
                  Uses <code>const</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>int age = 20;</code>
                </td>
                <td>
                  <code>const int MaxMarks = 100;</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>What is a Literal?</h3>

          <p>A literal is a value written directly in the source code.</p>

          <CodeBlock
            language="csharp"
            code={`int number = 100;
double price = 99.99;
float rate = 5.5f;
decimal amount = 250.75m;
char grade = 'A';
string message = "Hello";
bool isActive = true;`}
            caption="Integer literal example"
          />

          <p>
            Values such as <code>100</code>, <code>99.99</code>,{" "}
            <code>'A'</code>,<code>"Hello"</code>, and <code>true</code> are
            literals.
          </p>

          <h3>Common Numeric Literal Suffixes</h3>

          <CodeBlock
            language="csharp"
            code={`long population = 8000000000L;
float temperature = 36.5f;
decimal price = 999.99m;`}
            caption="Long literal requires the L suffix"
          />

          <p>The suffix helps C# identify the intended numeric type.</p>

          <hr />

          <h2>5. String Output and String Interpolation</h2>

          <h3>Console.WriteLine()</h3>

          <p>
            <code>Console.WriteLine()</code> displays information on the console
            and moves the cursor to the next line.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.WriteLine("Hello");
Console.WriteLine("Welcome to C#");`}
            caption="Basic Console.WriteLine output"
          />

          <h3>Console.Write()</h3>

          <p>
            <code>Console.Write()</code> displays information without
            automatically moving to the next line.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter your name: ");
Console.Write("Enter your age: ");`}
            caption="Prompting the user and reading input with Console.ReadLine"
          />

          <h3>String Concatenation</h3>

          <p>
            String concatenation means joining strings and values using the
            <code>+</code> operator.
          </p>

          <CodeBlock
            language="csharp"
            interactive={true}
            code={`string name = "Ali";
int age = 21;

Console.WriteLine("Name: " + name);
Console.WriteLine("Age: " + age);`}
            caption="String concatenation using the + operator. Try changing the code and click Run"
          />

          {/* <codapi-snippet
            sandbox="dotnet"
            editor="basic"
            actions="Reset:reset"
            init-delay="500"
          ></codapi-snippet> */}

          <codapi-snippet
            sandbox="dotnet"
            editor="basic"
            actions="Reset:@reset"
            init-delay="500"
          ></codapi-snippet>

          <h3>String Interpolation</h3>

          <p>
            String interpolation provides a clean way to insert variables and
            expressions directly inside a string.
          </p>

          <CodeBlock
            language="csharp"
            code={`string name = "Ali";
int age = 21;

Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");

Console.WriteLine($"Next year you will be {age + 1} years old.");`}
            caption="Preferred modern approach: string interpolation with $"
          />

          <p>
            The <code>$</code> before the string enables interpolation.
            Expressions are placed inside{" "}
            <code>
              {"{"}
              {"}"}
            </code>
            .
          </p>

          <h3>Escape Characters</h3>

          <p>
            Escape characters allow us to represent special characters inside
            strings.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.WriteLine("Hello\\nWorld");
Console.WriteLine("Name:\\tAli");
Console.WriteLine("He said, \\"Hello\\".");`}
            caption="Escape sequences such as \n for a new line"
          />

          <table>
            <thead>
              <tr>
                <th>Escape Sequence</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>\\n</code>
                </td>
                <td>New line</td>
              </tr>

              <tr>
                <td>
                  <code>\\t</code>
                </td>
                <td>Tab</td>
              </tr>

              <tr>
                <td>
                  <code>\\"</code>
                </td>
                <td>Double quotation mark</td>
              </tr>

              <tr>
                <td>
                  <code>\\\\</code>
                </td>
                <td>Backslash</td>
              </tr>
            </tbody>
          </table>

          <h3>Verbatim String Literals</h3>

          <p>
            When a string contains many backslashes (for example a Windows file
            path), escape sequences become hard to read. C# provides{" "}
            <strong>verbatim strings</strong>
            that start with <code>@"..."</code>. Inside a verbatim string,
            backslashes are treated literally and most escape sequences are
            ignored.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Regular string — every backslash must be escaped
string path1 = "C:\\Users\\Ali\\Documents\\file.txt";

// Verbatim string — much cleaner
string path2 = @"C:\Users\Ali\Documents\file.txt";

Console.WriteLine(path1);
Console.WriteLine(path2);`}
            caption="Regular strings require escaping every backslash"
          />

          <p>To include a double quote inside a verbatim string, double it:</p>

          <CodeBlock
            language="csharp"
            code={`string quote = @"He said, ""Hello"".";
Console.WriteLine(quote);  // He said, "Hello".`}
            caption="Verbatim string literal with @ (no escape needed for quotes)"
          />

          <h3>Composite Formatting with Console.WriteLine()</h3>

          <p>
            In addition to string concatenation and string interpolation, C#
            also supports
            <strong>composite formatting</strong>. This is an older but still
            very useful technique for building formatted strings. It uses
            numbered placeholders such as{" "}
            <code>
              {"{"}0{"}"}
            </code>
            ,{" "}
            <code>
              {"{"}1{"}"}
            </code>
            ,{" "}
            <code>
              {"{"}2{"}"}
            </code>
            , etc. inside a format string, and then supplies the corresponding
            values as extra arguments to <code>Console.WriteLine()</code> (or{" "}
            <code>string.Format()</code>).
          </p>

          <p>
            Composite formatting is especially important for beginners to
            understand because:
          </p>
          <ul>
            <li>
              It appears in many older books, tutorials, and existing codebases.
            </li>
            <li>
              It clearly separates the format template from the data values.
            </li>
            <li>
              It teaches how placeholders and arguments are matched by position.
            </li>
          </ul>

          <p>Consider the following complete example:</p>

          <CodeBlock
            language="csharp"
            code={`static void Main(string[] args)
{
    int myInteger;
    string myString;

    myInteger = 17;
    myString = "\\"myInteger\\" is";

    Console.WriteLine("{0} {1}.", myString, myInteger);
}`}
            caption="Example method signature (Main)"
          />

          <p>
            <strong>Output:</strong>
          </p>

          <CodeBlock
            language="text"
            code={`"myInteger" is 17.`}
            caption="Expected console output of the composite formatting example"
          />

          <h4>Step-by-step explanation of the example</h4>

          <p>
            <strong>1. Variable declaration</strong>
          </p>
          <p>The lines</p>
          <CodeBlock
            language="csharp"
            code={`int myInteger;
string myString;`}
            caption="Declaring variables used in composite formatting"
          />
          <p>
            declare two variables. Declaration tells the compiler the name of
            the variable and the type of data it will hold. At this point the
            variables exist but have not yet been given a meaningful value (they
            hold default values: 0 for
            <code>int</code> and <code>null</code> for <code>string</code>).
          </p>

          <p>
            <strong>2. Assigning values after declaration</strong>
          </p>
          <p>The statements</p>
          <CodeBlock
            language="csharp"
            code={`myInteger = 17;
myString = "\\"myInteger\\" is";`}
            caption="Assigning values before using composite formatting"
          />
          <p>
            assign values to the previously declared variables. This is
            different from initialization, which combines declaration and
            assignment in one statement (for example{" "}
            <code>int myInteger = 17;</code>). Separating declaration from
            assignment is completely valid and is sometimes necessary when the
            value is not known at the moment of declaration.
          </p>

          <p>
            <strong>3. String escaping using \\"</strong>
          </p>
          <p>
            Inside the string literal assigned to <code>myString</code>, the
            sequence
            <code>\\"</code> is an escape sequence. It tells the compiler to
            include a literal double-quote character inside the string. Without
            the backslash, the double quote would end the string early and cause
            a syntax error. Therefore the actual content of{" "}
            <code>myString</code> becomes:
          </p>
          <CodeBlock
            language="text"
            code={`"myInteger" is`}
            caption="Partial string shown for illustration"
          />

          <p>
            <strong>4. Purpose of Console.WriteLine()</strong>
          </p>
          <p>
            <code>Console.WriteLine()</code> writes a line of text to the
            console window and then moves the cursor to the next line. When
            given a format string and additional arguments, it performs
            composite formatting before writing the final text.
          </p>

          <p>
            <strong>5. How composite formatting works</strong>
          </p>
          <p>The call</p>
          <CodeBlock
            language="csharp"
            code={`Console.WriteLine("{0} {1}.", myString, myInteger);`}
            caption="Composite formatting with numbered placeholders {0}, {1}"
          />
          <p>works as follows:</p>
          <ul>
            <li>
              The first argument is the <strong>format string</strong>:
              <code>
                "{0} {1}."
              </code>
            </li>
            <li>
              <code>
                {"{"}0{"}"}
              </code>{" "}
              is a placeholder that will be replaced by the
              <em>first</em> additional argument after the format string (which
              is <code>myString</code>).
            </li>
            <li>
              <code>
                {"{"}1{"}"}
              </code>{" "}
              is a placeholder that will be replaced by the
              <em>second</em> additional argument (which is{" "}
              <code>myInteger</code>).
            </li>
            <li>
              The placeholders are numbered starting from zero and are matched
              by position (index), not by name.
            </li>
          </ul>

          <p>
            <strong>6. How the final output is generated</strong>
          </p>
          <p>The runtime performs these substitutions:</p>
          <ol>
            <li>
              Replace{" "}
              <code>
                {"{"}0{"}"}
              </code>{" "}
              with the value of <code>myString</code>→{" "}
              <code>"myInteger" is</code>
            </li>
            <li>Keep the space that appears after the first placeholder.</li>
            <li>
              Replace{" "}
              <code>
                {"{"}1{"}"}
              </code>{" "}
              with the value of <code>myInteger</code>→ <code>17</code>
            </li>
            <li>Keep the period at the end of the format string.</li>
          </ol>
          <p>The resulting text that is written to the console is therefore:</p>
          <CodeBlock
            language="text"
            code={`"myInteger" is 17.`}
            caption="Final output after substitution of the placeholders"
          />

          <p>
            Composite formatting is still fully supported in modern C#. While
            string interpolation (<code>$"..."</code>) is usually preferred for
            new code because it is more readable, understanding{" "}
            <code>
              {"{"}0{"}"}
            </code>
            ,{" "}
            <code>
              {"{"}1{"}"}
            </code>
            and the related formatting features remains valuable for reading
            existing code and for situations that require advanced format
            control.
          </p>

          <hr />

          <h2>6. Operators in C#</h2>

          <p>
            Operators are symbols that perform operations on values and
            variables.
          </p>

          <h3>6.1 Arithmetic Operators</h3>

          <p>
            Arithmetic operators perform basic mathematical calculations. They
            work on numeric types (<code>int</code>, <code>long</code>,{" "}
            <code>float</code>, <code>double</code>, <code>decimal</code>,
            etc.).
          </p>

          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Meaning</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>+</code>
                </td>
                <td>Addition</td>
                <td>
                  <code>10 + 5</code>
                </td>
                <td>15</td>
              </tr>
              <tr>
                <td>
                  <code>-</code>
                </td>
                <td>Subtraction</td>
                <td>
                  <code>10 - 5</code>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <code>*</code>
                </td>
                <td>Multiplication</td>
                <td>
                  <code>10 * 5</code>
                </td>
                <td>50</td>
              </tr>
              <tr>
                <td>
                  <code>/</code>
                </td>
                <td>Division</td>
                <td>
                  <code>10 / 5</code>
                </td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <code>%</code>
                </td>
                <td>Modulus (remainder)</td>
                <td>
                  <code>10 % 3</code>
                </td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <CodeBlock
            language="csharp"
            code={`int x = 17;
int y = 5;

Console.WriteLine(x + y);  // 22
Console.WriteLine(x - y);  // 12
Console.WriteLine(x * y);  // 85
Console.WriteLine(x / y);  // 3   (integer division)
Console.WriteLine(x % y);  // 2   (remainder of 17 ÷ 5)`}
            caption="Arithmetic operators (+ - * / %)"
          />

          <h3>Important: Integer Division vs Real Division</h3>

          <p>
            When both operands of the division operator are integers, C#
            performs
            <strong>integer division</strong>: the fractional part is discarded
            (truncated toward zero). This is a very common source of bugs for
            beginners.
          </p>

          <CodeBlock
            language="csharp"
            code={`int a = 10;
int b = 3;
Console.WriteLine(a / b);     // 3   ← integer division, fractional part lost

// Ways to get a real (floating-point) result:
Console.WriteLine(10.0 / 3);  // 3.333...  (at least one operand is double)
Console.WriteLine((double)a / b); // 3.333...  (cast one operand)
Console.WriteLine(a / 3.0);   // 3.333...`}
            caption="Assignment operators (= += -= *= /=)"
          />

          <p>
            The modulus operator (<code>%</code>) is especially useful for:
          </p>
          <ul>
            <li>
              Checking whether a number is even or odd: <code>n % 2 == 0</code>
            </li>
            <li>Wrapping around (e.g. cycling through an array index)</li>
            <li>
              Extracting the last digit of a number: <code>n % 10</code>
            </li>
          </ul>

          <h3>6.2 Assignment Operators</h3>

          <p>
            The simple assignment operator is <code>=</code>. C# also provides
            compound assignment operators that combine an arithmetic operation
            with assignment. They are shorter and often clearer.
          </p>

          <CodeBlock
            language="csharp"
            code={`int x = 10;

x += 5;   // equivalent to x = x + 5  → 15
x -= 3;   // equivalent to x = x - 3  → 12
x *= 2;   // equivalent to x = x * 2  → 24
x /= 4;   // equivalent to x = x / 4  → 6
x %= 4;   // equivalent to x = x % 4  → 2

Console.WriteLine(x); // 2`}
            caption="Comparison / relational operators"
          />

          <h3>6.3 Increment and Decrement Operators</h3>

          <p>
            The increment (<code>++</code>) and decrement (<code>--</code>)
            operators add or subtract 1 from a variable. There are two forms:
          </p>
          <ul>
            <li>
              <strong>Postfix</strong> (<code>n++</code> / <code>n--</code>):
              use the current value, then change the variable.
            </li>
            <li>
              <strong>Prefix</strong> (<code>++n</code> / <code>--n</code>):
              change the variable first, then use the new value.
            </li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`int n = 5;

Console.WriteLine(n++);  // prints 5, then n becomes 6
Console.WriteLine(n);    // 6

Console.WriteLine(++n);  // n becomes 7, then prints 7
Console.WriteLine(n);    // 7

Console.WriteLine(n--);  // prints 7, then n becomes 6
Console.WriteLine(--n);  // n becomes 5, then prints 5`}
            caption="Increment and decrement operators (prefix and postfix)"
          />

          <p>
            For beginners it is usually safer and clearer to write
            <code>n = n + 1;</code> or <code>n += 1;</code> until you are
            comfortable with the difference between prefix and postfix forms.
          </p>

          <h3>6.4 Comparison (Relational) Operators</h3>

          <p>
            Comparison operators return a <code>bool</code> value (
            <code>true</code> or <code>false</code>). They are the foundation of
            decision-making with <code>if</code> statements and loops.
          </p>

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
                <td>
                  <code>==</code>
                </td>
                <td>Equal to</td>
                <td>
                  <code>a == b</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>!=</code>
                </td>
                <td>Not equal to</td>
                <td>
                  <code>a != b</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;</code>
                </td>
                <td>Less than</td>
                <td>
                  <code>a &lt; b</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&gt;</code>
                </td>
                <td>Greater than</td>
                <td>
                  <code>a &gt; b</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;=</code>
                </td>
                <td>Less than or equal</td>
                <td>
                  <code>a &lt;= b</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&gt;=</code>
                </td>
                <td>Greater than or equal</td>
                <td>
                  <code>a &gt;= b</code>
                </td>
              </tr>
            </tbody>
          </table>

          <CodeBlock
            language="csharp"
            code={`int a = 10, b = 20;

Console.WriteLine(a == b);  // false
Console.WriteLine(a != b);  // true
Console.WriteLine(a < b);   // true
Console.WriteLine(a > b);   // false
Console.WriteLine(a <= 10); // true
Console.WriteLine(a >= 10); // true`}
            caption="Logical operators (&& || !) with two operands"
          />

          <p>
            <strong>Caution:</strong> Do not confuse the assignment operator{" "}
            <code>=</code>
            with the equality operator <code>==</code>. Writing{" "}
            <code>if (a = b)</code>
            is a common mistake and will not compile when <code>
              a
            </code> and <code>b</code>
            are integers (because the assignment expression does not produce a{" "}
            <code>bool</code>).
          </p>

          <h3>6.5 Logical Operators</h3>

          <p>
            Logical operators combine or invert Boolean values. They are used to
            build complex conditions.
          </p>

          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>&amp;&amp;</code>
                </td>
                <td>Logical AND</td>
                <td>true only if both sides are true</td>
              </tr>
              <tr>
                <td>
                  <code>||</code>
                </td>
                <td>Logical OR</td>
                <td>true if at least one side is true</td>
              </tr>
              <tr>
                <td>
                  <code>!</code>
                </td>
                <td>Logical NOT</td>
                <td>inverts the Boolean value</td>
              </tr>
            </tbody>
          </table>

          <CodeBlock
            language="csharp"
            code={`bool isStudent = true;
bool hasId = false;
bool isAdult = true;

Console.WriteLine(isStudent && hasId);   // false  (both must be true)
Console.WriteLine(isStudent || hasId);   // true   (at least one is true)
Console.WriteLine(!isStudent);           // false  (negation)

// Combining multiple conditions
bool canEnter = isStudent && isAdult && hasId;
Console.WriteLine(canEnter);             // false`}
            caption="Boolean variables used in logical expressions"
          />

          <p>
            <strong>Short-circuit evaluation:</strong>
          </p>
          <ul>
            <li>
              With <code>&amp;&amp;</code>, if the left side is{" "}
              <code>false</code>, the right side is not evaluated.
            </li>
            <li>
              With <code>||</code>, if the left side is <code>true</code>, the
              right side is not evaluated.
            </li>
          </ul>
          <p>
            This behaviour is useful and also means you must be careful when the
            right-hand expression has side effects (for example a method call
            that changes state).
          </p>

          <h3>6.6 Operator Precedence</h3>

          <p>
            Operators are evaluated in a specific order. Multiplication,
            division and modulus have higher precedence than addition and
            subtraction. Comparison operators have lower precedence than
            arithmetic operators. Logical AND has higher precedence than logical
            OR. Use parentheses whenever the order might be unclear — clarity is
            more important than saving a few keystrokes.
          </p>

          <CodeBlock
            language="csharp"
            code={`int result = 10 + 5 * 2;      // 20  (5*2 is done first)
int result2 = (10 + 5) * 2;   // 30  (parentheses force addition first)

bool flag = 5 > 3 && 10 < 20; // true  (comparisons first, then &&)
bool flag2 = true || false && false; // true  (&& before ||)
bool flag3 = (true || false) && false; // false`}
            caption="Operator precedence: multiplication is performed before addition"
          />

          <hr />

          <h2>7. User Input and Output</h2>

          <h3>Reading Input with Console.ReadLine()</h3>

          <p>
            <code>Console.ReadLine()</code> reads a whole line of text that the
            user types and presses Enter. It always returns a{" "}
            <code>string</code> (or <code>null</code>
            if the end of the input stream is reached). Even if the user types
            numbers, the value is still a string and must be converted if you
            need a numeric type.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.WriteLine($"Hello, {name}!");`}
            caption="Reading a string value from the user"
          />

          <p>
            <code>Console.Write</code> is preferred for prompts because it keeps
            the cursor on the same line, making the interface look more natural:
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter your age: ");   // cursor stays on the same line
string ageText = Console.ReadLine();
Console.WriteLine($"You entered: {ageText}");`}
            caption="Console.Write keeps the cursor on the same line"
          />

          <hr />

          <h2>8. Type Conversion</h2>

          <p>
            Because <code>Console.ReadLine()</code> always returns a string, you
            frequently need to convert that string into a number. C# provides
            several ways to do this.
          </p>

          <h3>Using Convert</h3>

          <p>
            The <code>Convert</code> class contains methods such as{" "}
            <code>ToInt32</code>,<code>ToDouble</code>, <code>ToDecimal</code>,
            etc. If the conversion fails (for example the user typed "abc"), an
            exception is thrown.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);   // throws if input is not a valid integer
Console.WriteLine($"Age is {age}");`}
            caption="Converting user input from string to int"
          />

          <h3>Converting Decimal Input</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter price: ");
string priceText = Console.ReadLine();
double price = Convert.ToDouble(priceText);
Console.WriteLine($"Price: {price:C}");  // :C formats as currency`}
            caption="Converting user input from string to double or decimal"
          />

          <h3>Using Parse()</h3>

          <p>
            Each numeric type has a static <code>Parse</code> method. It behaves
            similarly to <code>Convert</code> and also throws an exception on
            invalid input.
          </p>

          <CodeBlock
            language="csharp"
            code={`int number = int.Parse("25");
double value = double.Parse("12.5");
decimal money = decimal.Parse("99.99");`}
            caption="Parsing a string to int with int.Parse"
          />

          <h3>Using TryParse() — Recommended for User Input</h3>

          <p>
            <code>TryParse</code> is the safest approach when dealing with user
            input. It never throws an exception. Instead it returns a{" "}
            <code>bool</code> indicating success or failure, and places the
            converted value in an <code>out</code> parameter.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter a whole number: ");
string input = Console.ReadLine();

if (int.TryParse(input, out int result))
{
    Console.WriteLine($"Valid number: {result}");
}
else
{
    Console.WriteLine("Invalid number. Please enter digits only.");
}`}
            caption="Safe conversion using int.TryParse"
          />

          <p>You can use the same pattern for other types:</p>

          <CodeBlock
            language="csharp"
            code={`if (double.TryParse(input, out double price))
{
    Console.WriteLine($"Price accepted: {price}");
}
else
{
    Console.WriteLine("Could not convert to a number.");
}`}
            caption="Safe conversion using double.TryParse"
          />

          <p>
            <strong>Recommendation:</strong> Prefer <code>TryParse</code>{" "}
            whenever the data comes from a human user or from an external source
            that might be malformed. Use <code>Parse</code> or{" "}
            <code>Convert</code> when you are certain the string is already
            valid (for example a string you constructed yourself in code).
          </p>

          <hr />

          <h2>9. Live Coding Examples</h2>

          <h3>Example 1: Simple Calculator</h3>

          <p>
            This program demonstrates reading two integers, performing the four
            basic arithmetic operations, and displaying the results with string
            interpolation. Notice the use of <code>Convert.ToInt32</code> and
            the risk of integer division.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Simple Calculator
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Sum        : {a + b}");
Console.WriteLine($"Difference : {a - b}");
Console.WriteLine($"Product    : {a * b}");
Console.WriteLine($"Quotient   : {a / b}");   // integer division
Console.WriteLine($"Remainder  : {a % b}");
Console.WriteLine($"Real quotient: {(double)a / b}");  // floating-point result`}
            caption="Simple calculator combining input, conversion and arithmetic"
          />

          <p>
            <strong>Sample run</strong> (user types 17 and 5):
          </p>
          <CodeBlock
            language="text"
            code={`Enter first number: 17
Enter second number: 5
Sum        : 22
Difference : 12
Product    : 85
Quotient   : 3
Remainder  : 2
Real quotient: 3.4`}
            caption="Expected console output of the calculator example"
          />

          <h3>Example 2: Student Details</h3>

          <p>
            Collects basic student information and displays it in a neat
            formatted card. This pattern is useful for any data-entry console
            program.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Student Details Card
Console.Write("Enter name: ");
string name = Console.ReadLine();

Console.Write("Enter age: ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter course: ");
string course = Console.ReadLine();

Console.WriteLine();
Console.WriteLine("===== Student Information =====");
Console.WriteLine($"Name   : {name}");
Console.WriteLine($"Age    : {age}");
Console.WriteLine($"Course : {course}");
Console.WriteLine("================================");`}
            caption="Student Details Card complete example"
          />

          <h3>Example 3: Employee Salary</h3>

          <p>
            Demonstrates floating-point arithmetic, percentage calculations, and
            the currency format specifier <code>:C</code> which respects the
            current culture.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Employee Net Salary Calculator
Console.Write("Enter basic salary: ");
double basic = Convert.ToDouble(Console.ReadLine());

const double AllowanceRate = 0.20;   // 20%
const double TaxRate = 0.10;         // 10%

double allowance = basic * AllowanceRate;
double tax = basic * TaxRate;
double net = basic + allowance - tax;

Console.WriteLine();
Console.WriteLine($"Basic     : {basic:C}");
Console.WriteLine($"Allowance : {allowance:C}");
Console.WriteLine($"Tax       : {tax:C}");
Console.WriteLine($"Net Salary: {net:C}");`}
            caption="Employee Net Salary Calculator complete example"
          />

          <h3>Example 4: Personal Information Card</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Full Name: ");
string fullName = Console.ReadLine();

Console.Write("Age: ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("City: ");
string city = Console.ReadLine();

Console.Write("Favorite Subject: ");
string subject = Console.ReadLine();

Console.WriteLine("\n===============================");
Console.WriteLine("       PERSONAL INFORMATION");
Console.WriteLine("===============================");
Console.WriteLine($"Name            : {fullName}");
Console.WriteLine($"Age             : {age}");
Console.WriteLine($"City            : {city}");
Console.WriteLine($"Favorite Subject: {subject}");
Console.WriteLine("===============================");`}
            caption="Collecting full name from the user"
          />

          <h3>Example 5: Safe Number Input with TryParse</h3>

          <p>
            A more robust version of a calculator that refuses invalid input
            instead of crashing.
          </p>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter first number: ");
string input1 = Console.ReadLine();

Console.Write("Enter second number: ");
string input2 = Console.ReadLine();

if (int.TryParse(input1, out int a) && int.TryParse(input2, out int b))
{
    Console.WriteLine($"Sum     : {a + b}");
    Console.WriteLine($"Product : {a * b}");
    if (b != 0)
        Console.WriteLine($"Quotient: {(double)a / b}");
    else
        Console.WriteLine("Cannot divide by zero.");
}
else
{
    Console.WriteLine("Invalid input. Please enter whole numbers only.");
}`}
            caption="Reading two numbers for a calculation"
          />

          <hr />

          <h2>10. Common Beginner Mistakes</h2>

          <h3>Mistake 1: Forgetting the Data Type</h3>
          <CodeBlock
            language="csharp"
            code={`// age = 20;  // Error – age not declared`}
            caption="Error example: using a variable before it is declared"
          />

          <h3>Mistake 2: Using Double Quotes for char</h3>
          <CodeBlock
            language="csharp"
            code={`// char grade = "A";  // Error`}
            caption="Error example: assigning a string literal to a char"
          />

          <h3>Mistake 3: Forgetting Conversion</h3>
          <CodeBlock
            language="csharp"
            code={`// int age = Console.ReadLine();  // Error – string cannot be assigned to int`}
            caption="Error example: assigning Console.ReadLine() result directly to int"
          />

          <h3>Mistake 4: Expecting Decimal Division from Integers</h3>
          <CodeBlock
            language="csharp"
            code={`int a = 5, b = 2;
Console.WriteLine(a / b);  // 2, not 2.5`}
            caption="Integer division truncates; use double for fractional results"
          />

          <h3>Mistake 5: Trying to Change a Constant</h3>
          <CodeBlock
            language="csharp"
            code={`const int Max = 100;
// Max = 200;  // Error`}
            caption="Constants cannot be modified after they are declared"
          />

          <hr />

          <h2>11. Practice Exercises</h2>

          <h3>Exercise 1 — Employee Information</h3>
          <p>
            Declare variables for Employee Name (string), Employee ID (int),
            Salary (decimal), Is Permanent (bool). Take input from the user and
            display the information neatly.
          </p>

          <h3>Exercise 2 — Two Number Calculator</h3>
          <p>
            Write a program that takes two numbers and displays Sum, Product,
            and Average.
          </p>

          <h3>Exercise 3 — Average of Three Numbers</h3>
          <p>Take three numbers and display their average.</p>

          <h3>Exercise 4 — Temperature Converter</h3>
          <p>
            Create a program that asks for temperature in Celsius and converts
            it to Fahrenheit using the formula F = (C * 9/5) + 32.
          </p>

          <h3>Exercise 5 — Rectangle Calculator</h3>
          <p>
            Take length and width of a rectangle and display area and perimeter.
          </p>

          <hr />

          <h2>12. Try it Yourself:</h2>

          <p>
            Create a program called
            <strong>Personal Information Card</strong>
            that asks the user for Full Name, Age, City, Favorite Subject and
            then display the information in a formatted card.
          </p>

          <hr />

          <h2>14. Test Your Knowledege:</h2>

          <ol>
            <li>What is a variable?</li>
            <li>
              What is the difference between <code>int</code> and{" "}
              <code>double</code>?
            </li>
            <li>How do you declare a constant in C#?</li>
            <li>What is string interpolation?</li>
            <li>
              What does the <code>%</code> operator do?
            </li>
            <li>
              What is the difference between <code>&&</code> and <code>||</code>
              ?
            </li>
            <li>Why do we use comments in a program?</li>
            <li>What is the purpose of XML documentation comments?</li>
            <li>
              What is composite formatting and how do the placeholders {0} and{" "}
              {1} work?
            </li>
          </ol>

          <hr />

          <h2>13. Quick Revision</h2>
          <ul>
            <li>Variables store data that can change.</li>
            <li>Use meaningful names and proper data types.</li>
            <li>Constants cannot be changed after declaration.</li>
            <li>
              String interpolation ($"...") is the preferred way to build
              strings.
            </li>
            <li>
              Composite formatting ({0}, {1}) is still useful and appears in
              many older examples.
            </li>
            <li>Always convert user input from string to the required type.</li>
            <li>Use TryParse when the input might be invalid.</li>
          </ul>

          <hr />

          <h2>15. Interview Questions</h2>

          <h3>Basic Concepts</h3>
          <ul>
            <li>What is the difference between a variable and a constant?</li>
            <li>Explain value types vs reference types (briefly).</li>
            <li>
              What is the purpose of the <code>var</code> keyword?
            </li>
          </ul>

          <h3>Comments and Strings</h3>
          <ul>
            <li>What are the different types of comments in C#?</li>
            <li>How do you include a double quote inside a string literal?</li>
          </ul>

          <h3>Operators and Expressions</h3>
          <ul>
            <li>
              What is the difference between <code>++</code> prefix and postfix?
            </li>
            <li>Explain operator precedence with an example.</li>
          </ul>

          <h3>User Input and Type Conversion</h3>
          <ul>
            <li>
              Why do we need to convert the result of{" "}
              <code>Console.ReadLine()</code>?
            </li>
            <li>
              When would you prefer <code>TryParse</code> over{" "}
              <code>Parse</code> or <code>Convert</code>?
            </li>
          </ul>

          <h3>Practical Coding Questions</h3>
          <ul>
            <li>
              Write a program that swaps two numbers without using a third
              variable.
            </li>
            <li>
              Write a program that calculates the area of a circle given the
              radius.
            </li>
          </ul>

          <hr />

          <h2>16. Homework</h2>
          <p>
            Practice all the examples and exercises in this session. Try
            modifying the values and predicting the output before running the
            code.
          </p>

          <hr />

          <p>
            <strong>Next Session:</strong> Programming Constructs and Arrays —
            if/else, switch, loops, and arrays.
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}

// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';
// import CodeBlock from '@site/src/components/CodeBlock';

// export default function Session02() {
//   return (
//     <Layout
//       title="Session 02 — Basic Building Blocks in C#"
//       description="Variables, Data Types, Operators, Comments, Constants, Type Conversion and Input/Output in C#"
//     >
//       <CustomLayout>
//         <article className="session-content">

//           <style>{`
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

//           <p>
//             <strong>Focus:</strong> Variables, data types, comments, constants,
//             literals, string interpolation, operators, type conversion,
//             user input, and basic console output.
//           </p>

//           <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

//           <hr />

//           <h2>Learning Objectives</h2>

//           <p>By the end of this session, you should be able to:</p>

//           <ul>
//             <li>Understand what variables are and why they are used</li>
//             <li>Declare, initialize, and assign values to variables</li>
//             <li>Identify and use common C# data types</li>
//             <li>Understand literals and their relationship with data types</li>
//             <li>Use <code>var</code> for implicitly typed variables</li>
//             <li>Write single-line, multi-line, and XML documentation comments</li>
//             <li>Create and use constants</li>
//             <li>Use string concatenation and string interpolation</li>
//             <li>Use escape characters inside strings</li>
//             <li>Understand composite formatting with numbered placeholders ({0}, {1}, etc.)</li>
//             <li>Understand arithmetic, assignment, comparison, and logical operators</li>
//             <li>Understand increment and decrement operators</li>
//             <li>Understand operator precedence</li>
//             <li>Take input using <code>Console.ReadLine()</code></li>
//             <li>Convert text input into numbers</li>
//             <li>Understand the difference between integer and decimal division</li>
//             <li>Build small console applications using these concepts together</li>
//             <li>Follow good naming conventions for variables and constants</li>
//             <li>Choose the most appropriate data type for a given situation</li>
//             <li>Handle user input safely using <code>TryParse</code></li>
//             <li>Apply operator precedence correctly and use parentheses when needed</li>
//           </ul>

//           <p>
//             <strong>Why this session matters:</strong> Everything you build in C# — whether a simple console tool,
//             a web API, a desktop application, or a game — rests on these fundamentals. Variables hold your data,
//             data types define how that data is stored and what operations are legal, operators transform the data,
//             and input/output lets your programs communicate with the outside world. Mastering these building blocks
//             early makes every later topic (conditions, loops, methods, classes, LINQ, async, etc.) much easier.
//           </p>

//           <hr />

//           <h2>1. Variables and Data Types</h2>

//           <h3>What is a Variable?</h3>

//           <p>
//             A variable is a named storage location used to hold a value in a program.
//             The value stored inside a variable can change while the program is running.
//           </p>

//           <p>
//             You can think of a variable as a labelled box. The label is the variable
//             name, and the value stored inside the box is the variable's value.
//           </p>

//           <p>
//             In real programs you will create dozens or hundreds of variables. Good variable names
//             make code readable; poor names make even simple code hard to understand. Follow these
//             common C# naming conventions:
//           </p>

//           <ul>
//             <li>Use <strong>camelCase</strong> for local variables and parameters: <code>studentName</code>, <code>totalMarks</code>, <code>isPassed</code>.</li>
//             <li>Names should be descriptive. Prefer <code>studentAge</code> over <code>a</code> or <code>x</code>.</li>
//             <li>Do not start a variable name with a number. <code>2ndPlace</code> is illegal; <code>secondPlace</code> is fine.</li>
//             <li>Avoid reserved keywords (<code>int</code>, <code>class</code>, <code>string</code>, etc.) as names.</li>
//             <li>Boolean variables often start with <code>is</code>, <code>has</code>, <code>can</code>, or <code>should</code> (e.g. <code>isStudent</code>, <code>hasDiscount</code>).</li>
//           </ul>

//           <CodeBlock
//               language="csharp"
//             code={`// Good, descriptive names
// int studentAge = 20;
// string fullName = "Ali Khan";
// double monthlySalary = 45000.50;
// bool isEnrolled = true;

// // Avoid cryptic names
// int a = 20;          // unclear
// string n = "Ali";    // unclear
// double s = 45000.50; // unclear`}
// caption="Good vs poor variable naming examples"/>

//           <p>In the first example above:</p>

//           <ul>
//             <li><code>studentAge</code> stores a whole number.</li>
//             <li><code>fullName</code> stores text.</li>
//             <li><code>monthlySalary</code> stores a decimal number.</li>
//             <li><code>isEnrolled</code> stores either <code>true</code> or <code>false</code>.</li>
//           </ul>

//           <CodeBlock
//               language="csharp"
//             code={`int age = 20;
// string name = "Ali";
// double salary = 45000.50;
// bool isStudent = true;`}
// caption="Basic variable declarations with different data types"/>

//           <p>In the example above:</p>

//           <ul>
//             <li><code>age</code> stores a whole number.</li>
//             <li><code>name</code> stores text.</li>
//             <li><code>salary</code> stores a decimal number.</li>
//             <li><code>isStudent</code> stores either <code>true</code> or <code>false</code>.</li>
//           </ul>

//           <h3>Variable Declaration</h3>

//           <p>
//             Declaration means telling C# that you want to create a variable and
//             specifying its data type.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`int age;`}
//             caption="Simple variable declaration (no value yet)"/>

//           <p>
//             Here, <code>int</code> is the data type and <code>age</code> is the variable name.
//           </p>

//           <p>
//             <strong>Important note about local variables:</strong> In C#, a local variable
//             (a variable declared inside a method) must be assigned a value before it is used.
//             If you declare <code>int age;</code> and then try to print it without assigning
//             a value first, the compiler will give an error: "Use of unassigned local variable".
//           </p>

//           <CodeBlock
//             language="csharp"
//             code={`int age;               // declared but not initialized
// // Console.WriteLine(age); // Error: Use of unassigned local variable 'age'

// age = 20;              // now it is safe to use
// Console.WriteLine(age);`}
// caption="Local variables must be assigned before they are used"/>

//           <h3>Variable Initialization</h3>

//           <p>
//             Initialization means giving a variable its first value when it is created.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`int age = 20;`}
//           caption="Declaration and initialization in one statement"/>

//           <p>
//             This single statement both declares and initializes the variable.
//           </p>

//           <h3>Assignment</h3>

//           <p>
//             Assignment means storing a value inside a variable after the variable
//             has already been declared.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`int age;

// age = 20;
// age = 25;

// Console.WriteLine(age);`}
// caption="Assigning and later re-assigning a value to a variable"/>

//           <p><strong>Output:</strong></p>

//           <CodeBlock
//             language="csharp"
//             code={`25`}
//           caption="Output after the final assignment"/>

//           <p>
//             Notice that the value of <code>age</code> changed from <code>20</code> to
//             <code>25</code>. This is why it is called a variable.
//           </p>

//           <h3>Declaring Multiple Variables</h3>

//           <CodeBlock
//             language="csharp"
//             code={`int a = 10, b = 20, c = 30;

// Console.WriteLine(a);
// Console.WriteLine(b);
// Console.WriteLine(c);`}
//           caption="Declaring and initializing multiple variables of the same type"/>

//           <p>
//             Although multiple variables can be declared in one statement, beginners
//             should usually prefer separate declarations when it improves readability.
//           </p>

//           <hr />

//           <h2>2. Common Data Types in C#</h2>

//           <p>
//             A data type tells C# what kind of value a variable can store.
//             Different types are designed for different kinds of information.
//           </p>

//           <table>
//             <thead>
//               <tr>
//                 <th>Data Type</th>
//                 <th>Typical Size</th>
//                 <th>Example</th>
//                 <th>Used For</th>
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
//                 <td><code>1234567890L</code></td>
//                 <td>Very large whole numbers</td>
//               </tr>

//               <tr>
//                 <td><code>float</code></td>
//                 <td>4 bytes</td>
//                 <td><code>12.5f</code></td>
//                 <td>Decimal numbers with less precision</td>
//               </tr>

//               <tr>
//                 <td><code>double</code></td>
//                 <td>8 bytes</td>
//                 <td><code>12.5</code></td>
//                 <td>Decimal numbers with more precision than float</td>
//               </tr>

//               <tr>
//                 <td><code>decimal</code></td>
//                 <td>16 bytes</td>
//                 <td><code>99.99m</code></td>
//                 <td>High-precision decimal calculations, especially financial values</td>
//               </tr>

//               <tr>
//                 <td><code>char</code></td>
//                 <td>2 bytes</td>
//                 <td><code>'A'</code></td>
//                 <td>A single character</td>
//               </tr>

//               <tr>
//                 <td><code>string</code></td>
//                 <td>Variable</td>
//                 <td><code>"Hello"</code></td>
//                 <td>Text</td>
//               </tr>

//               <tr>
//                 <td><code>bool</code></td>
//                 <td>1 byte</td>
//                 <td><code>true</code></td>
//                 <td>True/false values</td>
//               </tr>
//             </tbody>
//           </table>

//           <h3>Approximate Ranges of Numeric Types</h3>

//           <p>
//             Knowing the range helps you choose the correct type and avoid overflow.
//           </p>

//           <table>
//             <thead>
//               <tr>
//                 <th>Type</th>
//                 <th>Approximate Range</th>
//                 <th>Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>int</code></td>
//                 <td>−2,147,483,648 to 2,147,483,647</td>
//                 <td>Most common choice for whole numbers</td>
//               </tr>
//               <tr>
//                 <td><code>long</code></td>
//                 <td>−9 × 10¹⁸ to 9 × 10¹⁸</td>
//                 <td>Use when <code>int</code> is not large enough</td>
//               </tr>
//               <tr>
//                 <td><code>float</code></td>
//                 <td>~ ±1.5 × 10⁻⁴⁵ to ±3.4 × 10³⁸</td>
//                 <td>~6–9 digits of precision; suffix <code>f</code></td>
//               </tr>
//               <tr>
//                 <td><code>double</code></td>
//                 <td>~ ±5.0 × 10⁻³²⁴ to ±1.7 × 10³⁰⁸</td>
//                 <td>~15–17 digits of precision; default for real numbers</td>
//               </tr>
//               <tr>
//                 <td><code>decimal</code></td>
//                 <td>~ ±1.0 × 10⁻²⁸ to ±7.9 × 10²⁸</td>
//                 <td>28–29 significant digits; ideal for money; suffix <code>m</code></td>
//               </tr>
//             </tbody>
//           </table>

//           <p>
//             <strong>Quick guidance:</strong>
//           </p>
//           <ul>
//             <li>Use <code>int</code> for counts, ages, indexes, most whole numbers.</li>
//             <li>Use <code>long</code> for very large counts (population, file sizes in bytes, etc.).</li>
//             <li>Use <code>double</code> for scientific or general floating-point calculations.</li>
//             <li>Use <code>decimal</code> whenever money or high-precision decimal arithmetic is involved.</li>
//             <li>Use <code>float</code> only when memory is tight or when interoperating with APIs that require it.</li>
//           </ul>

//           <h3>Examples of Data Types</h3>

//           <CodeBlock
//               language="csharp"
//             code={`int age = 22;
// long population = 250000000L;

// float temperature = 36.5f;
// double distance = 125.75;

// decimal salary = 75000.50m;

// char grade = 'A';

// string name = "Muhammad";

// bool isLoggedIn = true;`}
//           caption="Examples of common C# data types (int, long, float, double, decimal, char, string, bool)"/>

//           <h3>Important: Character vs String</h3>

//           <p>
//             A <code>char</code> stores a single character and uses single quotes.
//             A <code>string</code> stores text and uses double quotes.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`char grade = 'A';

// string name = "Ali";`}
// caption="char uses single quotes; string uses double quotes"/>

//           <p>
//             This is incorrect:
//           </p>

//           <CodeBlock
//             language="csharp"
//             code={`char grade = "A";`}
//           caption="Incorrect: a string literal cannot be assigned to a char"/>

//           <p>
//             because <code>"A"</code> is a string, not a character.
//           </p>

//           <h3>Understanding <code>var</code></h3>

//           <p>
//             C# also provides the <code>var</code> keyword. It allows the compiler
//             to determine the variable's type from the value assigned to it.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`var age = 20;
// var name = "Ali";
// var price = 99.99;`}
//             caption="Implicit typing with the var keyword"/>

//           <p>
//             C# determines the types as:
//           </p>

//           <ul>
//             <li><code>age</code> → <code>int</code></li>
//             <li><code>name</code> → <code>string</code></li>
//             <li><code>price</code> → <code>double</code></li>
//           </ul>

//           <p>
//             <strong>Important:</strong> <code>var</code> does not mean that the
//             variable can change into any type later. The type is fixed at compile time
//             based on the right-hand side expression.
//           </p>

//           <CodeBlock
//               language="csharp"
//             code={`var age = 20;

// // age = "Ali";  // Error — age is permanently an int`}
//           caption="The type inferred by var is fixed and cannot later change"/>

//           <p>
//             <strong>When to use <code>var</code>:</strong>
//           </p>
//           <ul>
//             <li>When the type is obvious from the right-hand side (e.g. <code>var list = new List<string>();</code>).</li>
//             <li>When the type name is long and repeating it adds no clarity.</li>
//           </ul>
//           <p>
//             <strong>When to prefer an explicit type:</strong>
//           </p>
//           <ul>
//             <li>When the type is not immediately clear from the expression.</li>
//             <li>When writing code for beginners or documentation, explicit types are often clearer.</li>
//           </ul>

//           <hr />

//           <h2>3. Comments in C#</h2>

//           <p>
//             Comments are notes written inside source code for programmers.
//             The compiler ignores comments when executing the program.
//           </p>

//           <h3>Single-Line Comments</h3>

//           <CodeBlock
//             language="csharp"
//             code={`// This is a single-line comment
// int age = 20;

// // We can also write comments after code
// int marks = 85; // Student marks`}
// caption="Single-line comments using //"/>

//           <h3>Multi-Line Comments</h3>

//           <CodeBlock
//             language="csharp"
//             code={`/*
//    This is a multi-line comment.
//    It can contain multiple lines.
//    The compiler ignores all of it.
// */`}
// caption="Multi-line comments using /* ... */"/>

//           <h3>XML Documentation Comments</h3>

//           <CodeBlock
//             language="csharp"
//             code={`/// <summary>
// /// Calculates the sum of two numbers.
// /// </summary>
// /// <param name="a">First number</param>
// /// <param name="b">Second number</param>
// /// <returns>The sum of a and b</returns>
// static int Add(int a, int b)
// {
//     return a + b;
// }`}
// caption="XML documentation comments (///) for IntelliSense and documentation"/>

//           <h3>Bad vs Good Comments</h3>

//           <CodeBlock
//             language="csharp"
//             code={`// Bad comment — restates the obvious
// int age = 20; // set age to 20

// // Good comment — explains why
// int age = 20; // Default age used when the user skips the age field`}
// caption="Avoid comments that merely restate the obvious"/>

//           <hr />

//           <h2>4. Constants</h2>

//           <p>
//             A constant is a value that cannot be changed after it is declared.
//             Use the <code>const</code> keyword.
//           </p>

//           <CodeBlock
//             language="csharp"
//             code={`const double PI = 3.14159;
// const int MaxStudents = 50;`}
// caption="Declaring a constant with the const keyword"/>

//           <CodeBlock
//             language="csharp"
//             code={`const int MaxMarks = 100;
// // MaxMarks = 200; // Error: cannot assign to a constant`}
// caption="Constants are useful for fixed limits and magic numbers"/>

//           <CodeBlock
//             language="csharp"
//             code={`const double Pi = 3.141592653589793;`}
// caption="High-precision constant example (Pi)"/>

//           <hr />

//           <h2>5. Literals</h2>

//           <CodeBlock
//             language="csharp"
//             code={`int number = 100;
// double price = 19.99;
// char letter = 'A';
// string text = "Hello";
// bool flag = true;`}
// caption="Integer literal example"/>

//           <CodeBlock
//             language="csharp"
//             code={`long population = 8000000000L;
// float temperature = 36.5f;
// decimal amount = 99.99m;`}
// caption="Long literal requires the L suffix"/>

//           <hr />

//           <h2>6. Console Output and Input</h2>

//           <CodeBlock
//             language="csharp"
//             code={`Console.WriteLine("Hello");
// Console.WriteLine("World");`}
// caption="Basic Console.WriteLine output"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter your name: ");
// string name = Console.ReadLine();
// Console.WriteLine("Hello, " + name);`}
// caption="Prompting the user and reading input with Console.ReadLine"/>

//           <hr />

//           <h2>7. Strings</h2>

//           <CodeBlock
//             language="csharp"
//             code={`string name = "Ali";
// string message = "Hello " + name;`}
// caption="String concatenation using the + operator"/>

//           <CodeBlock
//             language="csharp"
//             code={`string name = "Ali";
// string message = $"Hello {name}";`}
// caption="Preferred modern approach: string interpolation with $"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.WriteLine("Hello\nWorld");`}
// caption="Escape sequences such as \\n for a new line"/>

//           <CodeBlock
//             language="csharp"
//             code={`// Regular string — every backslash must be escaped
// string path = "C:\\Users\\Ali\\Documents";`}
// caption="Regular strings require escaping every backslash"/>

//           <CodeBlock
//             language="csharp"
//             code={`string quote = @"He said, ""Hello"".";`}
// caption="Verbatim string literal with @ (no escape needed for quotes)"/>

//           <hr />

//           <h2>8. Composite Formatting</h2>

//           <CodeBlock
//             language="csharp"
//             code={`static void Main(string[] args)
// {
//     string myString = "myInteger" is";
//     int myInteger = 17;
//     Console.WriteLine("{0} {1}.", myString, myInteger);
// }`}
// caption="Example method signature (Main)"/>

//           <CodeBlock
//             language="csharp"
//             code={`"myInteger" is 17.`}
// caption="Expected console output of the composite formatting example"/>

//           <CodeBlock
//             language="csharp"
//             code={`int myInteger;
// string myString;`}
// caption="Declaring variables used in composite formatting"/>

//           <CodeBlock
//             language="csharp"
//             code={`myInteger = 17;
// myString = "myInteger" is";`}
// caption="Assigning values before using composite formatting"/>

//           <CodeBlock
//             language="csharp"
//             code={`"myInteger" is`}
// caption="Partial string shown for illustration"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.WriteLine("{0} {1}.", myString, myInteger);`}
// caption="Composite formatting with numbered placeholders {0}, {1}"/>

//           <CodeBlock
//             language="csharp"
//             code={`"myInteger" is 17.`}
// caption="Final output after substitution of the placeholders"/>

//           <hr />

//           <h2>9. Operators</h2>

//           <CodeBlock
//             language="csharp"
//             code={`int x = 17;
// int y = 4;
// Console.WriteLine(x + y);  // 21
// Console.WriteLine(x - y);  // 13
// Console.WriteLine(x * y);  // 68
// Console.WriteLine(x / y);  // 4  (integer division)
// Console.WriteLine(x % y);  // 1`}
// caption="Arithmetic operators (+ - * / %)"/>

//           <CodeBlock
//             language="csharp"
//             code={`int a = 10;
// a += 5;  // a = a + 5 → 15
// a -= 3;  // a = a - 3 → 12
// a *= 2;  // a = a * 2 → 24
// a /= 4;  // a = a / 4 → 6`}
// caption="Assignment operators (= += -= *= /=)"/>

//           <CodeBlock
//             language="csharp"
//             code={`int x = 10;
// int y = 20;
// Console.WriteLine(x == y); // false
// Console.WriteLine(x != y); // true
// Console.WriteLine(x < y);  // true
// Console.WriteLine(x > y);  // false
// Console.WriteLine(x <= y); // true
// Console.WriteLine(x >= y); // false`}
// caption="Comparison / relational operators"/>

//           <CodeBlock
//             language="csharp"
//             code={`int n = 5;
// Console.WriteLine(n++); // 5 (post-increment: use then increase)
// Console.WriteLine(n);   // 6
// Console.WriteLine(++n); // 7 (pre-increment: increase then use)
// Console.WriteLine(n);   // 7`}
// caption="Increment and decrement operators (prefix and postfix)"/>

//           <CodeBlock
//             language="csharp"
//             code={`int a = 10, b = 20;
// Console.WriteLine(a > 5 && b < 30); // true
// Console.WriteLine(a > 15 || b < 30); // true
// Console.WriteLine(!(a > 5));        // false`}
// caption="Logical operators (&& || !) with two operands"/>

//           <CodeBlock
//             language="csharp"
//             code={`bool isStudent = true;
// bool hasScholarship = false;
// Console.WriteLine(isStudent && hasScholarship); // false
// Console.WriteLine(isStudent || hasScholarship); // true`}
// caption="Boolean variables used in logical expressions"/>

//           <CodeBlock
//             language="csharp"
//             code={`int result = 10 + 5 * 2;      // 20  (5*2 is done first)
// int result2 = (10 + 5) * 2;   // 30  (parentheses force order)`}
// caption="Operator precedence: multiplication is performed before addition"/>

//           <hr />

//           <h2>10. Type Conversion and Safe Input</h2>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter your name: ");
// string name = Console.ReadLine();
// Console.WriteLine($"Hello, {name}");`}
// caption="Reading a string value from the user"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter your age: ");   // cursor stays on the same line
// string ageText = Console.ReadLine();
// int age = int.Parse(ageText);`}
// caption="Console.Write keeps the cursor on the same line"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter age: ");
// int age = int.Parse(Console.ReadLine());`}
// caption="Converting user input from string to int"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter price: ");
// double price = double.Parse(Console.ReadLine());`}
// caption="Converting user input from string to double or decimal"/>

//           <CodeBlock
//             language="csharp"
//             code={`int number = int.Parse("25");
// Console.WriteLine(number);`}
// caption="Parsing a string to int with int.Parse"/>

//           <CodeBlock
//             language="csharp"
//             code={`Console.Write("Enter a whole number: ");
// string input = Console.ReadLine();
// if (int.TryParse(input, out int number))
// {
//     Console.WriteLine($"You entered: {number}");
// }
// else
// {
//     Console.WriteLine("Invalid number.");
// }`}
// caption="Safe conversion using int.TryParse"/>

//           <CodeBlock
//             language="csharp"
//             code={`if (double.TryParse(input, out double price))
// {
//     Console.WriteLine($"Price: {price}");
// }
// else
// {
//     Console.WriteLine("Invalid price.");
// }`}
// caption="Safe conversion using double.TryParse"/>

//           <hr />

//           <h2>11. Practice Exercises</h2>

//           <h3>Exercise 1 — Employee Information</h3>
//           <p>Declare variables for Employee Name (string), Employee ID (int), Salary (decimal), Is Permanent (bool). Take input from the user and display the information neatly.</p>

//           <h3>Exercise 2 — Two Number Calculator</h3>
//           <p>Write a program that takes two numbers and displays Sum, Product, and Average.</p>

//           <h3>Exercise 3 — Average of Three Numbers</h3>
//           <p>Take three numbers and display their average.</p>

//           <h3>Exercise 4 — Temperature Converter</h3>
//           <p>Create a program that asks for temperature in Celsius and converts it to Fahrenheit using the formula F = (C * 9/5) + 32.</p>

//           <h3>Exercise 5 — Rectangle Calculator</h3>
//           <p>Take length and width of a rectangle and display area and perimeter.</p>

//           <hr />

//           <h2>12. Session Challenge</h2>
//           <p>Create a program called <strong>Personal Information Card</strong> that asks the user for Full Name, Age, City, Favorite Subject and then display the information in a formatted card.</p>

//           <hr />

//           <h2>13. Quick Revision</h2>
//           <ul>
//             <li>Variables store data that can change.</li>
//             <li>Use meaningful names and proper data types.</li>
//             <li>Constants cannot be changed after declaration.</li>
//             <li>String interpolation ($"...") is the preferred way to build strings.</li>
//             <li>Composite formatting ({0}, {1}) is still useful and appears in many older examples.</li>
//             <li>Always convert user input from string to the required type.</li>
//             <li>Use TryParse when the input might be invalid.</li>
//           </ul>

//           <hr />

//           <h2>14. Session Quiz</h2>
//           <ol>
//             <li>What is a variable?</li>
//             <li>What is the difference between <code>int</code> and <code>double</code>?</li>
//             <li>How do you declare a constant in C#?</li>
//             <li>What is string interpolation?</li>
//             <li>What does the <code>%</code> operator do?</li>
//             <li>What is the difference between <code>&&</code> and <code>||</code>?</li>
//             <li>Why do we use comments in a program?</li>
//             <li>What is the purpose of XML documentation comments?</li>
//             <li>What is composite formatting and how do the placeholders {0} and {1} work?</li>
//           </ol>

//           <hr />

//           <h2>15. Interview Questions</h2>

//           <h3>Basic Concepts</h3>
//           <ul>
//             <li>What is the difference between a variable and a constant?</li>
//             <li>Explain value types vs reference types (briefly).</li>
//             <li>What is the purpose of the <code>var</code> keyword?</li>
//           </ul>

//           <h3>Comments and Strings</h3>
//           <ul>
//             <li>What are the different types of comments in C#?</li>
//             <li>How do you include a double quote inside a string literal?</li>
//           </ul>

//           <h3>Operators and Expressions</h3>
//           <ul>
//             <li>What is the difference between <code>++</code> prefix and postfix?</li>
//             <li>Explain operator precedence with an example.</li>
//           </ul>

//           <h3>User Input and Type Conversion</h3>
//           <ul>
//             <li>Why do we need to convert the result of <code>Console.ReadLine()</code>?</li>
//             <li>When would you prefer <code>TryParse</code> over <code>Parse</code> or <code>Convert</code>?</li>
//           </ul>

//           <h3>Practical Coding Questions</h3>
//           <ul>
//             <li>Write a program that swaps two numbers without using a third variable.</li>
//             <li>Write a program that calculates the area of a circle given the radius.</li>
//           </ul>

//           <hr />

//           <h2>16. Homework</h2>
//           <p>Practice all the examples and exercises in this session. Try modifying the values and predicting the output before running the code.</p>

//           <hr />

//           <h2>17. Key Takeaways</h2>
//           <ul>
//             <li>Variables are named storage locations.</li>
//             <li>Choose the correct data type for the data you want to store.</li>
//             <li>Constants protect values that should never change.</li>
//             <li>String interpolation and composite formatting are both important.</li>
//             <li>Always validate and convert user input carefully.</li>
//             <li>Practice writing small programs every day.</li>
//           </ul>

//           <hr />

//           <p>
//             <strong>Next Session:</strong> Programming Constructs and Arrays
//             — if/else, switch, loops, and arrays.
//           </p>

//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
