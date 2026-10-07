import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session07() {
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
      title="Session 07 — Properties, Indexers, and Record Types"
      description="Properties, Indexers, init-only setters and Record Types in C#"
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
          <h1>Session 07 — Properties, Indexers, and Record Types</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Master Properties, Indexers and modern Record Types for clean and safe data handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 7</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and use Properties in C#</li>
            <li>Create read-only, write-only and read-write properties</li>
            <li>Use auto-implemented properties</li>
            <li>Apply validation inside properties</li>
            <li>Create and use Indexers</li>
            <li>Understand init-only setters</li>
            <li>Work with Record Types</li>
          </ul>

          <hr />

          <h2>1. Properties in C#</h2>
          <p>Properties are members that provide a flexible way to read, write or compute the value of a private field. They are preferred over public fields.</p>

          <h3>1.1 Full Property (with backing field)</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    private string name;          // backing field

    public string Name            // Property
    {
        get { return name; }
        set { name = value; }
    }
}`}</code>
          </pre>

          <h3>1.2 Auto-Implemented Property (Most Common)</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }
}`}</code>
          </pre>

          <h3>1.3 Property with Validation</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 15 || value > 60)
                throw new ArgumentException("Age must be between 15 and 60");
            age = value;
        }
    }
}`}</code>
          </pre>

          <h3>1.4 Read-only Property</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name { get; }           // can only be set in constructor

    public Student(string name)
    {
        Name = name;
    }
}`}</code>
          </pre>

          <h3>1.5 Expression-bodied Property</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Rectangle
{
    public double Length { get; set; }
    public double Width { get; set; }

    public double Area => Length * Width;
    public double Perimeter => 2 * (Length + Width);
}`}</code>
          </pre>

          <hr />

          <h2>2. Indexers</h2>
          <p>An indexer allows an object to be indexed like an array.</p>

          <pre style={codeBlockStyle}>
            <code>{`public class StudentList
{
    private string[] names = new string[5];

    // Indexer
    public string this[int index]
    {
        get
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            return names[index];
        }
        set
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            names[index] = value;
        }
    }
}

// Usage
StudentList list = new StudentList();
list[0] = "Ali";
list[1] = "Sara";
list[2] = "Ahmed";

Console.WriteLine(list[0]);   // Ali
Console.WriteLine(list[1]);   // Sara`}</code>
          </pre>

          <hr />

          <h2>3. init-only Setters (C# 9+)</h2>
          <p>With <code>init</code>, a property can be set only during object initialization (using object initializer or constructor).</p>

          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name { get; init; }
    public int Age { get; init; }
}

// Correct usage
Student s1 = new Student
{
    Name = "Ali",
    Age = 20
};

// This will give an error
// s1.Name = "Ahmed";   // Cannot modify after initialization`}</code>
          </pre>

          <hr />

          <h2>4. Record Types (C# 9+)</h2>
          <p>Records are a special type designed for storing data. They provide built-in support for immutability and value-based equality.</p>

          <h3>4.1 Simple Record</h3>
          <pre style={codeBlockStyle}>
            <code>{`public record Student(string Name, int Age, string Course);

// Usage
Student s1 = new Student("Ali", 20, "C#");
Student s2 = new Student("Ali", 20, "C#");

Console.WriteLine(s1);                 // Student { Name = Ali, Age = 20, Course = C# }
Console.WriteLine(s1 == s2);           // True (value-based equality)`}</code>
          </pre>

          <h3>4.2 Record with Extra Members</h3>
          <pre style={codeBlockStyle}>
            <code>{`public record Student
{
    public string Name { get; init; }
    public int Age { get; init; }
    public string Course { get; init; }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }

    public void Display()
    {
        Console.WriteLine($"{Name} is {Age} years old and studies {Course}");
    }
}`}</code>
          </pre>

          <h3>4.3 with Expression (Non-destructive mutation)</h3>
          <pre style={codeBlockStyle}>
            <code>{`Student s1 = new Student("Ali", 20, "C#");
Student s2 = s1 with { Age = 21 };     // Creates a new copy with Age changed

Console.WriteLine(s1.Age);   // 20
Console.WriteLine(s2.Age);   // 21`}</code>
          </pre>

          <hr />

          <h2>5. Complete Live Example</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class BankAccount
{
    private double balance;

    public string AccountNumber { get; init; }
    public string AccountHolder { get; set; }

    public double Balance
    {
        get { return balance; }
        private set
        {
            if (value < 0)
                throw new ArgumentException("Balance cannot be negative");
            balance = value;
        }
    }

    public BankAccount(string accountNumber, string accountHolder, double initialBalance)
    {
        AccountNumber = accountNumber;
        AccountHolder = accountHolder;
        Balance = initialBalance;
    }

    public void Deposit(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive");
        Balance += amount;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdraw amount must be positive");
        if (amount > Balance)
            throw new InvalidOperationException("Insufficient balance");
        Balance -= amount;
    }

    public void Display()
    {
        Console.WriteLine($"Account: {AccountNumber}");
        Console.WriteLine($"Holder : {AccountHolder}");
        Console.WriteLine($"Balance: {Balance:C}");
    }
}

// Testing
BankAccount acc = new BankAccount("PK-12345", "Ali Khan", 50000);
acc.Display();

acc.Deposit(15000);
acc.Withdraw(8000);
acc.Display();`}</code>
          </pre>

          <hr />

          <h2>6. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a class <code>Product</code> with properties: Name, Price, Quantity.  
Add validation so that Price and Quantity cannot be negative.</p>

          <h3>Exercise 2</h3>
          <p>Create a class <code>Library</code> that uses an indexer to store and retrieve book titles by index.</p>

          <h3>Exercise 3</h3>
          <p>Create a record called <code>Employee</code> with properties Name, Id and Department.  
Demonstrate the <code>with</code> expression.</p>

          <hr />

          <h2>7. Session Challenge</h2>
          <p>Create a complete <strong>Student Record System</strong> using:</p>
          <ul>
            <li>A class or record for Student (Name, RollNo, Marks)</li>
            <li>Property validation for Marks (0–100)</li>
            <li>An indexer-based class to store multiple students</li>
            <li>Methods to add student, display all students, and find student by roll number</li>
          </ul>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is a property in C#?</li>
            <li>What is the advantage of using properties instead of public fields?</li>
            <li>What is an auto-implemented property?</li>
            <li>What is an indexer?</li>
            <li>What does the <code>init</code> keyword do?</li>
            <li>What is a record type?</li>
            <li>What is the main difference between a class and a record?</li>
            <li>What does the <code>with</code> expression do in records?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Namespaces and Exception Handling</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
