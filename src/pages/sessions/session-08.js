import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session08() {
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
      title="Session 08 — Namespaces and Exception Handling"
      description="Namespaces and Exception Handling in C#"
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
          <h1>Session 08 — Namespaces and Exception Handling</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Organize code using Namespaces and write crash-proof programs using Exception Handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 8</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and use namespaces</li>
            <li>Create nested namespaces</li>
            <li>Understand the purpose of the <code>using</code> directive</li>
            <li>Handle exceptions using <code>try</code>, <code>catch</code>, and <code>finally</code></li>
            <li>Use multiple catch blocks</li>
            <li>Throw exceptions using <code>throw</code></li>
            <li>Create custom exception classes</li>
            <li>Apply best practices for exception handling</li>
          </ul>

          <hr />

          <h2>1. Namespaces in C#</h2>
          <p>A namespace is used to organize classes and avoid name conflicts.</p>

          <h3>1.1 Declaring a Namespace</h3>
          <pre style={codeBlockStyle}>
            <code>{`namespace Aptech.Training
{
    public class Student
    {
        public string Name { get; set; }
    }
}`}</code>
          </pre>

          <h3>1.2 Nested Namespaces</h3>
          <pre style={codeBlockStyle}>
            <code>{`namespace Aptech
{
    namespace Training
    {
        namespace CSharp
        {
            public class Course
            {
                public string Title { get; set; }
            }
        }
    }
}

// Fully qualified name
Aptech.Training.CSharp.Course course = new Aptech.Training.CSharp.Course();`}</code>
          </pre>

          <h3>1.3 using Directive</h3>
          <pre style={codeBlockStyle}>
            <code>{`using Aptech.Training.CSharp;

Course course = new Course();
course.Title = "Programming in C#";`}</code>
          </pre>

          <h3>1.4 Why Namespaces are Important</h3>
          <ul>
            <li>Prevent name conflicts</li>
            <li>Organize large projects</li>
            <li>Make code more readable and maintainable</li>
          </ul>

          <hr />

          <h2>2. Exception Handling</h2>
          <p>An exception is an unexpected error that occurs during program execution. If not handled, the program crashes.</p>

          <h3>2.1 Basic try-catch</h3>
          <pre style={codeBlockStyle}>
            <code>{`try
{
    Console.Write("Enter a number: ");
    int number = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine($"You entered: {number}");
}
catch (FormatException)
{
    Console.WriteLine("Invalid input! Please enter a valid number.");
}`}</code>
          </pre>

          <h3>2.2 Multiple catch Blocks</h3>
          <pre style={codeBlockStyle}>
            <code>{`try
{
    Console.Write("Enter first number: ");
    int a = Convert.ToInt32(Console.ReadLine());

    Console.Write("Enter second number: ");
    int b = Convert.ToInt32(Console.ReadLine());

    int result = a / b;
    Console.WriteLine($"Result: {result}");
}
catch (FormatException)
{
    Console.WriteLine("Please enter valid numbers only.");
}
catch (DivideByZeroException)
{
    Console.WriteLine("Cannot divide by zero.");
}
catch (Exception ex)          // General catch (must be last)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
}`}</code>
          </pre>

          <h3>2.3 finally Block</h3>
          <p>The <code>finally</code> block always executes — whether an exception occurs or not.</p>

          <pre style={codeBlockStyle}>
            <code>{`try
{
    Console.WriteLine("Opening file...");
    // code that may throw exception
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
finally
{
    Console.WriteLine("This will always run (cleanup code).");
}`}</code>
          </pre>

          <hr />

          <h2>3. Throwing Exceptions</h2>

          <pre style={codeBlockStyle}>
            <code>{`public void SetAge(int age)
{
    if (age < 0 || age > 120)
    {
        throw new ArgumentException("Age must be between 0 and 120");
    }
    Console.WriteLine($"Age set to {age}");
}

// Usage
try
{
    SetAge(150);
}
catch (ArgumentException ex)
{
    Console.WriteLine(ex.Message);
}`}</code>
          </pre>

          <hr />

          <h2>4. Custom Exception Classes</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class InvalidAgeException : Exception
{
    public InvalidAgeException(string message) : base(message)
    {
    }
}

public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 15 || value > 60)
                throw new InvalidAgeException("Student age must be between 15 and 60");
            age = value;
        }
    }
}

// Usage
try
{
    Student s = new Student();
    s.Age = 10;
}
catch (InvalidAgeException ex)
{
    Console.WriteLine($"Custom Error: {ex.Message}");
}`}</code>
          </pre>

          <hr />

          <h2>5. Common Exception Types</h2>
          <table>
            <thead>
              <tr>
                <th>Exception</th>
                <th>When it occurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>FormatException</code></td>
                <td>Invalid format (e.g. converting "abc" to int)</td>
              </tr>
              <tr>
                <td><code>DivideByZeroException</code></td>
                <td>Division by zero</td>
              </tr>
              <tr>
                <td><code>IndexOutOfRangeException</code></td>
                <td>Accessing invalid array index</td>
              </tr>
              <tr>
                <td><code>NullReferenceException</code></td>
                <td>Using a null object</td>
              </tr>
              <tr>
                <td><code>ArgumentException</code></td>
                <td>Invalid argument passed to a method</td>
              </tr>
              <tr>
                <td><code>FileNotFoundException</code></td>
                <td>File does not exist</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>6. Best Practices</h2>
          <ul>
            <li>Always catch specific exceptions first</li>
            <li>Never use empty catch blocks</li>
            <li>Use <code>finally</code> for cleanup (closing files, connections, etc.)</li>
            <li>Throw meaningful exceptions with clear messages</li>
            <li>Prefer <code>TryParse</code> over <code>Parse</code> for user input</li>
          </ul>

          <pre style={codeBlockStyle}>
            <code>{`// Recommended way for user input
Console.Write("Enter age: ");
if (int.TryParse(Console.ReadLine(), out int age))
{
    Console.WriteLine($"Age: {age}");
}
else
{
    Console.WriteLine("Invalid age entered.");
}`}</code>
          </pre>

          <hr />

          <h2>7. Complete Live Example</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class BankAccount
{
    public string AccountHolder { get; set; }
    public double Balance { get; private set; }

    public BankAccount(string holder, double initialBalance)
    {
        if (initialBalance < 0)
            throw new ArgumentException("Initial balance cannot be negative");

        AccountHolder = holder;
        Balance = initialBalance;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdrawal amount must be positive");

        if (amount > Balance)
            throw new InvalidOperationException("Insufficient balance");

        Balance -= amount;
        Console.WriteLine($"Withdrawn: {amount:C}. Remaining: {Balance:C}");
    }
}

// Testing
try
{
    BankAccount acc = new BankAccount("Ali Khan", 10000);
    acc.Withdraw(3000);
    acc.Withdraw(9000);   // This will throw exception
}
catch (ArgumentException ex)
{
    Console.WriteLine($"Argument Error: {ex.Message}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Operation Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"General Error: {ex.Message}");
}
finally
{
    Console.WriteLine("Transaction process completed.");
}`}</code>
          </pre>

          <hr />

          <h2>8. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Write a program that takes two numbers from the user and performs division. Handle <code>FormatException</code> and <code>DivideByZeroException</code>.</p>

          <h3>Exercise 2</h3>
          <p>Create a custom exception called <code>InsufficientBalanceException</code> and use it in a BankAccount class.</p>

          <h3>Exercise 3</h3>
          <p>Create a namespace <code>Aptech.Students</code> and place a <code>Student</code> class inside it. Use the class from the main program.</p>

          <hr />

          <h2>9. Session Challenge</h2>
          <p>Create a complete program that:</p>
          <ul>
            <li>Asks the user for student name, age, and marks</li>
            <li>Validates the input using exceptions</li>
            <li>Throws a custom exception if marks are not between 0 and 100</li>
            <li>Displays a proper error message and continues running until valid data is entered</li>
          </ul>

          <hr />

          <h2>10. Session Quiz</h2>
          <ol>
            <li>What is a namespace?</li>
            <li>Why do we use namespaces?</li>
            <li>What is an exception?</li>
            <li>What is the purpose of the <code>try</code> block?</li>
            <li>What is the purpose of the <code>finally</code> block?</li>
            <li>Can we have multiple <code>catch</code> blocks?</li>
            <li>How do you create a custom exception?</li>
            <li>Why is <code>int.TryParse()</code> preferred over <code>int.Parse()</code>?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Events, Delegates, and Collections</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
