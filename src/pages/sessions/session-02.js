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
            variable can change into any type later.
          </p>

          <CodeBlock
              language="csharp"
            code={`var age = 20;

// age = "Ali";  // Error`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>3. Comments in C#</h2>

          <p>
            Comments are notes written inside source code for programmers.
            The compiler ignores comments when executing the program.
          </p>

          <h3>Single-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`// This is a single-line comment
int age = 20;

// We can also write comments after code
int marks = 85; // Student marks`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Multi-Line Comments</h3>

          <CodeBlock
            language="csharp"
            code={`/*
   This is a multi-line comment.
   It can contain multiple lines.
   The compiler ignores all of it.
*/`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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

          <CodeBlock
              language="csharp"
            code={`const double PI = 3.14159;
const string CompanyName = "Aptech";`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>
  
          <p>
            Trying to change a constant causes a compilation error.
          </p>

          <CodeBlock
            language="csharp"
            code={`const int MaxMarks = 100;

// MaxMarks = 120; // Error`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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

          <CodeBlock
            language="csharp"
            code={`int number = 100;
double price = 99.99;
float rate = 5.5f;
decimal amount = 250.75m;
char grade = 'A';
string message = "Hello";
bool isActive = true;`}
caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>
          

          <p>
            Values such as <code>100</code>, <code>99.99</code>, <code>'A'</code>,
            <code>"Hello"</code>, and <code>true</code> are literals.
          </p>

          <h3>Common Numeric Literal Suffixes</h3>

          <CodeBlock
            language="csharp"
            code={`long population = 8000000000L;
float temperature = 36.5f;
decimal price = 999.99m;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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

          <CodeBlock
              language="csharp"
            code={`Console.WriteLine("Hello");
Console.WriteLine("Welcome to C#");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Console.Write()</h3>

          <p>
            <code>Console.Write()</code> displays information without automatically
            moving to the next line.
          </p>

          <CodeBlock
              language="csharp"
            code={`Console.Write("Enter your name: ");
Console.Write("Enter your age: ");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>String Concatenation</h3>

          <p>
            String concatenation means joining strings and values using the
            <code>+</code> operator.
          </p>

          <CodeBlock
            language="csharp"
            code={`string name = "Ali";
int age = 21;

Console.WriteLine("Name: " + name);
Console.WriteLine("Age: " + age);`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            The <code>$</code> before the string enables interpolation.
            Expressions are placed inside <code>{'{'}{'}'}</code>.
          </p>

          <h3>Escape Characters</h3>

          <p>
            Escape characters allow us to represent special characters inside strings.
          </p>

          <CodeBlock
              language="csharp"
            code={`Console.WriteLine("Hello\\nWorld");
Console.WriteLine("Name:\\tAli");
Console.WriteLine("He said, \\"Hello\\".");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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

          <h3>Composite Formatting with Console.WriteLine()</h3>

          <p>
            In addition to string concatenation and string interpolation, C# also supports
            <strong>composite formatting</strong>. This is an older but still very useful
            technique for building formatted strings. It uses numbered placeholders
            such as <code>{'{'}0{'}'}</code>, <code>{'{'}1{'}'}</code>, <code>{'{'}2{'}'}</code>, etc.
            inside a format string, and then supplies the corresponding values as extra
            arguments to <code>Console.WriteLine()</code> (or <code>string.Format()</code>).
          </p>

          <p>
            Composite formatting is especially important for beginners to understand because:
          </p>
          <ul>
            <li>It appears in many older books, tutorials, and existing codebases.</li>
            <li>It clearly separates the format template from the data values.</li>
            <li>It teaches how placeholders and arguments are matched by position.</li>
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
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p><strong>Output:</strong></p>

          <CodeBlock
            language="text"
            code={`"myInteger" is 17.`}
            caption="Expected console output"
          />

          <h4>Step-by-step explanation of the example</h4>

          <p><strong>1. Variable declaration</strong></p>
          <p>
            The lines
          </p>
          <CodeBlock
            language="csharp"
            code={`int myInteger;
string myString;`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />
          <p>
            declare two variables. Declaration tells the compiler the name of the variable
            and the type of data it will hold. At this point the variables exist but have
            not yet been given a meaningful value (they hold default values: 0 for
            <code>int</code> and <code>null</code> for <code>string</code>).
          </p>

          <p><strong>2. Assigning values after declaration</strong></p>
          <p>
            The statements
          </p>
          <CodeBlock
            language="csharp"
            code={`myInteger = 17;
myString = "\\"myInteger\\" is";`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />
          <p>
            assign values to the previously declared variables. This is different from
            initialization, which combines declaration and assignment in one statement
            (for example <code>int myInteger = 17;</code>). Separating declaration from
            assignment is completely valid and is sometimes necessary when the value
            is not known at the moment of declaration.
          </p>

          <p><strong>3. String escaping using \\"</strong></p>
          <p>
            Inside the string literal assigned to <code>myString</code>, the sequence
            <code>\\"</code> is an escape sequence. It tells the compiler to include a
            literal double-quote character inside the string. Without the backslash,
            the double quote would end the string early and cause a syntax error.
            Therefore the actual content of <code>myString</code> becomes:
          </p>
          <CodeBlock
            language="text"
            code={`"myInteger" is`}
            caption="The resulting string value"
          />

          <p><strong>4. Purpose of Console.WriteLine()</strong></p>
          <p>
            <code>Console.WriteLine()</code> writes a line of text to the console window
            and then moves the cursor to the next line. When given a format string and
            additional arguments, it performs composite formatting before writing the
            final text.
          </p>

          <p><strong>5. How composite formatting works</strong></p>
          <p>
            The call
          </p>
          <CodeBlock
            language="csharp"
            code={`Console.WriteLine("{0} {1}.", myString, myInteger);`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />
          <p>
            works as follows:
          </p>
          <ul>
            <li>
              The first argument is the <strong>format string</strong>:
              <code>"{0} {1}."</code>
            </li>
            <li>
              <code>{'{'}0{'}'}</code> is a placeholder that will be replaced by the
              <em>first</em> additional argument after the format string
              (which is <code>myString</code>).
            </li>
            <li>
              <code>{'{'}1{'}'}</code> is a placeholder that will be replaced by the
              <em>second</em> additional argument (which is <code>myInteger</code>).
            </li>
            <li>
              The placeholders are numbered starting from zero and are matched by
              position (index), not by name.
            </li>
          </ul>

          <p><strong>6. How the final output is generated</strong></p>
          <p>
            The runtime performs these substitutions:
          </p>
          <ol>
            <li>
              Replace <code>{'{'}0{'}'}</code> with the value of <code>myString</code>
              → <code>"myInteger" is</code>
            </li>
            <li>
              Keep the space that appears after the first placeholder.
            </li>
            <li>
              Replace <code>{'{'}1{'}'}</code> with the value of <code>myInteger</code>
              → <code>17</code>
            </li>
            <li>
              Keep the period at the end of the format string.
            </li>
          </ol>
          <p>
            The resulting text that is written to the console is therefore:
          </p>
          <CodeBlock
            language="text"
            code={`"myInteger" is 17.`}
            caption="Final output after substitution"
          />

          <p>
            Composite formatting is still fully supported in modern C#. While string
            interpolation (<code>$"..."</code>) is usually preferred for new code because
            it is more readable, understanding <code>{'{'}0{'}'}</code>, <code>{'{'}1{'}'}</code>
            and the related formatting features remains valuable for reading existing
            code and for situations that require advanced format control.
          </p>

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
                <td><code>10 + 5</code> → 15</td>
              </tr>
              <tr>
                <td><code>-</code></td>
                <td>Subtraction</td>
                <td><code>10 - 5</code> → 5</td>
              </tr>
              <tr>
                <td><code>*</code></td>
                <td>Multiplication</td>
                <td><code>10 * 5</code> → 50</td>
              </tr>
              <tr>
                <td><code>/</code></td>
                <td>Division</td>
                <td><code>10 / 5</code> → 2</td>
              </tr>
              <tr>
                <td><code>%</code></td>
                <td>Modulus (remainder)</td>
                <td><code>10 % 3</code> → 1</td>
              </tr>
            </tbody>
          </table>

          <h3>Important: Integer Division</h3>

          <CodeBlock
            language="csharp"
            code={`int a = 10;
int b = 3;
Console.WriteLine(a / b);   // 3 (integer division)
Console.WriteLine(10.0 / 3); // 3.333...`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>6.2 Assignment Operators</h3>

          <CodeBlock
            language="csharp"
            code={`int x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 4;   // x = x % 4 → 2`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>6.3 Increment and Decrement Operators</h3>

          <CodeBlock
            language="csharp"
            code={`int n = 5;
Console.WriteLine(n++);  // 5 (post-increment)
Console.WriteLine(n);    // 6
Console.WriteLine(++n);  // 7 (pre-increment)
Console.WriteLine(n);    // 7`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>6.4 Comparison Operators</h3>

          <CodeBlock
            language="csharp"
            code={`int a = 10, b = 20;
Console.WriteLine(a == b); // false
Console.WriteLine(a != b); // true
Console.WriteLine(a < b);  // true
Console.WriteLine(a > b);  // false
Console.WriteLine(a <= 10); // true
Console.WriteLine(a >= 10); // true`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>6.5 Logical Operators</h3>

          <CodeBlock
            language="csharp"
            code={`bool isStudent = true;
bool hasId = false;

Console.WriteLine(isStudent && hasId); // false
Console.WriteLine(isStudent || hasId); // true
Console.WriteLine(!isStudent);         // false`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>6.6 Operator Precedence</h3>

          <p>
            Operators are evaluated in a specific order. Multiplication and division
            have higher precedence than addition and subtraction. Use parentheses to
            control the order of evaluation.
          </p>

          <CodeBlock
            language="csharp"
            code={`int result = 10 + 5 * 2;     // 20 (not 30)
int result2 = (10 + 5) * 2;  // 30`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>7. User Input and Output</h2>

          <h3>Reading Input with Console.ReadLine()</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.WriteLine($"Hello, {name}!");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>8. Type Conversion</h2>

          <h3>Using Convert</h3>

          <CodeBlock
            language="csharp"
            code={`string input = Console.ReadLine();
int age = Convert.ToInt32(input);`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Converting Decimal Input</h3>

          <CodeBlock
            language="csharp"
            code={`string priceText = Console.ReadLine();
double price = Convert.ToDouble(priceText);`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Using Parse()</h3>

          <CodeBlock
            language="csharp"
            code={`int number = int.Parse("25");
double value = double.Parse("12.5");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Using TryParse()</h3>

          <CodeBlock
            language="csharp"
            code={`string input = Console.ReadLine();
if (int.TryParse(input, out int result))
{
    Console.WriteLine($"Valid number: {result}");
}
else
{
    Console.WriteLine("Invalid number");
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>9. Live Coding Examples</h2>

          <h3>Example 1: Simple Calculator</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Sum: {a + b}");
Console.WriteLine($"Difference: {a - b}");
Console.WriteLine($"Product: {a * b}");
Console.WriteLine($"Quotient: {a / b}");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Example 2: Student Details</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter name: ");
string name = Console.ReadLine();

Console.Write("Enter age: ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter course: ");
string course = Console.ReadLine();

Console.WriteLine("\n===== Student Information =====");
Console.WriteLine($"Name   : {name}");
Console.WriteLine($"Age    : {age}");
Console.WriteLine($"Course : {course}");
Console.WriteLine("================================");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Example 3: Employee Salary</h3>

          <CodeBlock
            language="csharp"
            code={`Console.Write("Enter basic salary: ");
double basic = Convert.ToDouble(Console.ReadLine());

double allowance = basic * 0.2;
double tax = basic * 0.1;
double net = basic + allowance - tax;

Console.WriteLine($"Basic     : {basic:C}");
Console.WriteLine($"Allowance : {allowance:C}");
Console.WriteLine($"Tax       : {tax:C}");
Console.WriteLine($"Net Salary: {net:C}");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

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
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>10. Common Beginner Mistakes</h2>

          <h3>Mistake 1: Forgetting the Data Type</h3>
          <CodeBlock
            language="csharp"
            code={`// age = 20;  // Error – age not declared`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Mistake 2: Using Double Quotes for char</h3>
          <CodeBlock
            language="csharp"
            code={`// char grade = "A";  // Error`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Mistake 3: Forgetting Conversion</h3>
          <CodeBlock
            language="csharp"
            code={`// int age = Console.ReadLine();  // Error – string cannot be assigned to int`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Mistake 4: Expecting Decimal Division from Integers</h3>
          <CodeBlock
            language="csharp"
            code={`int a = 5, b = 2;
Console.WriteLine(a / b);  // 2, not 2.5`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Mistake 5: Trying to Change a Constant</h3>
          <CodeBlock
            language="csharp"
            code={`const int Max = 100;
// Max = 200;  // Error`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>11. Practice Exercises</h2>

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

          <h2>12. Session Challenge</h2>
          <p>Create a program called <strong>Personal Information Card</strong> that asks the user for Full Name, Age, City, Favorite Subject and then display the information in a formatted card.</p>

          <hr />

          <h2>13. Quick Revision</h2>
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

          <h2>14. Session Quiz</h2>
          <ol>
            <li>What is a variable?</li>
            <li>What is the difference between <code>int</code> and <code>double</code>?</li>
            <li>How do you declare a constant in C#?</li>
            <li>What is string interpolation?</li>
            <li>What does the <code>%</code> operator do?</li>
            <li>What is the difference between <code>&&</code> and <code>||</code>?</li>
            <li>Why do we use comments in a program?</li>
            <li>What is the purpose of XML documentation comments?</li>
            <li>What is composite formatting and how do the placeholders {0} and {1} work?</li>
          </ol>

          <hr />

          <h2>15. Interview Questions</h2>

          <h3>Basic Concepts</h3>
          <ul>
            <li>What is the difference between a variable and a constant?</li>
            <li>Explain value types vs reference types (briefly).</li>
            <li>What is the purpose of the <code>var</code> keyword?</li>
          </ul>

          <h3>Comments and Strings</h3>
          <ul>
            <li>What are the different types of comments in C#?</li>
            <li>How do you include a double quote inside a string literal?</li>
          </ul>

          <h3>Operators and Expressions</h3>
          <ul>
            <li>What is the difference between <code>++</code> prefix and postfix?</li>
            <li>Explain operator precedence with an example.</li>
          </ul>

          <h3>User Input and Type Conversion</h3>
          <ul>
            <li>Why do we need to convert the result of <code>Console.ReadLine()</code>?</li>
            <li>When would you prefer <code>TryParse</code> over <code>Parse</code> or <code>Convert</code>?</li>
          </ul>

          <h3>Practical Coding Questions</h3>
          <ul>
            <li>Write a program that swaps two numbers without using a third variable.</li>
            <li>Write a program that calculates the area of a circle given the radius.</li>
          </ul>

          <hr />

          <h2>16. Homework</h2>
          <p>Practice all the examples and exercises in this session. Try modifying the values and predicting the output before running the code.</p>

          <hr />

          <h2>17. Key Takeaways</h2>
          <ul>
            <li>Variables are named storage locations.</li>
            <li>Choose the correct data type for the data you want to store.</li>
            <li>Constants protect values that should never change.</li>
            <li>String interpolation and composite formatting are both important.</li>
            <li>Always validate and convert user input carefully.</li>
            <li>Practice writing small programs every day.</li>
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
