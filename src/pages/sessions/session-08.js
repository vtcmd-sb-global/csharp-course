import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session08() {
  return (
    <Layout
      title="Session 08 — Classes, Objects, Fields, Properties, Constructors & Encapsulation"
      description="Introduction to Object-Oriented Programming in C# — Classes, Objects, Fields, Properties, Constructors and Encapsulation"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 08 — Classes, Objects, Fields, Properties, Constructors &amp; Encapsulation</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Move from procedural code to Object-Oriented Programming. Learn how to model real-world things using classes and objects.</p>
          <p><strong>Prerequisite:</strong> Sessions 01–07 (especially methods, parameters, tuples and exception handling).</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what a class and an object are</li>
            <li>Declare a class with fields and methods</li>
            <li>Create objects using the <code>new</code> keyword</li>
            <li>Understand the difference between fields and properties</li>
            <li>Write auto-implemented properties and full properties with validation</li>
            <li>Use constructors (default, parameterized, and overloaded)</li>
            <li>Apply encapsulation with <code>private</code> fields and public properties</li>
            <li>Understand access modifiers (<code>public</code>, <code>private</code>)</li>
            <li>Build a small real-world class (Student, BankAccount, Product, etc.)</li>
          </ul>

          <hr />

          <h2>1. Why Object-Oriented Programming?</h2>
          <p>Until now you wrote programs as a list of instructions (procedural style). That works for small programs, but becomes hard to manage when the program grows.</p>
          <p><strong>Object-Oriented Programming (OOP)</strong> lets you group related data and behavior together into a single unit called a <strong>class</strong>.</p>

          <table>
            <thead>
              <tr>
                <th>Procedural (what you did before)</th>
                <th>Object-Oriented (what you will do now)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Separate variables and methods</td>
                <td>Data + methods live together inside a class</td>
              </tr>
              <tr>
                <td>Hard to reuse code</td>
                <td>Easy to create many objects from one class</td>
              </tr>
              <tr>
                <td>Difficult to protect data</td>
                <td>Encapsulation protects data</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>2. Class vs Object</h2>

          <h3>Class = Blueprint</h3>
          <p>A class is a template that describes the data and behavior of something.</p>

          <h3>Object = Instance</h3>
          <p>An object is a concrete thing created from that blueprint.</p>

          <pre>
            <code>{`// Real-world analogy
Class  →  House Blueprint
Object →  An actual house built from that blueprint`}</code>
          </pre>

          <p>You can create many objects from the same class:</p>
          <pre>
            <code>{`Student s1 = new Student();   // first student
Student s2 = new Student();   // second student
Student s3 = new Student();   // third student`}</code>
          </pre>

          <hr />

          <h2>3. Creating Your First Class</h2>

          <pre>
            <code>{`public class Student
{
    // Fields (data)
    public string Name;
    public int Age;
    public string Course;

    // Method (behavior)
    public void DisplayInfo()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Age: {Age}");
        Console.WriteLine($"Course: {Course}");
    }
}`}</code>
          </pre>

          <h3>How to use the class</h3>
          <pre>
            <code>{`// Create an object
Student s1 = new Student();

// Set values
s1.Name = "Ali";
s1.Age = 20;
s1.Course = "C#";

// Call the method
s1.DisplayInfo();`}</code>
          </pre>

          <p><strong>Output:</strong></p>
          <pre>
            <code>{`Name: Ali
Age: 20
Course: C#`}</code>
          </pre>

          <hr />

          <h2>4. Fields</h2>
          <p>Fields are variables declared inside a class. They store the state (data) of an object.</p>

          <pre>
            <code>{`public class Car
{
    public string Brand;      // field
    public string Model;      // field
    public int Year;          // field
    public double Price;      // field
}`}</code>
          </pre>

          <p><strong>Important rules:</strong></p>
          <ul>
            <li>Fields should almost always be <code>private</code> (we will see why later).</li>
            <li>Naming convention: either <code>camelCase</code> or starting with underscore <code>_name</code>.</li>
          </ul>

          <hr />

          <h2>5. Properties — The Preferred Way to Expose Data</h2>
          <p>In modern C# we almost never expose fields as <code>public</code>. Instead we use <strong>properties</strong>.</p>

          <h3>5.1 Auto-Implemented Properties (most common)</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }
}`}</code>
          </pre>

          <p>This is short and clean. The compiler automatically creates a hidden private field behind the scenes.</p>

          <h3>5.2 Full Property (when you need validation)</h3>
          <pre>
            <code>{`public class Student
{
    private int age;   // private backing field

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 0 || value > 120)
                throw new ArgumentException("Age must be between 0 and 120");
            age = value;
        }
    }
}`}</code>
          </pre>

          <h3>5.3 Read-only Property</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; }          // can only be set in constructor
    public DateTime CreatedAt { get; } = DateTime.Now;
}`}</code>
          </pre>

          <h3>5.4 Expression-bodied Properties</h3>
          <pre>
            <code>{`public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    public double Area => Width * Height;           // read-only calculated property
    public double Perimeter => 2 * (Width + Height);
}`}</code>
          </pre>

          <hr />

          <h2>6. Constructors</h2>
          <p>A constructor is a special method that runs automatically when you create an object with <code>new</code>.</p>

          <h3>6.1 Default Constructor</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // Default constructor (no parameters)
    public Student()
    {
        Name = "Unknown";
        Age = 0;
    }
}`}</code>
          </pre>

          <h3>6.2 Parameterized Constructor</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }
}

// Usage
Student s1 = new Student("Ali", 20, "C#");`}</code>
          </pre>

          <h3>6.3 Constructor Overloading</h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }

    // Constructor 1
    public Student()
    {
        Name = "Unknown";
        Age = 0;
        Course = "Not Assigned";
    }

    // Constructor 2
    public Student(string name)
    {
        Name = name;
        Age = 0;
        Course = "Not Assigned";
    }

    // Constructor 3
    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }
}`}</code>
          </pre>

          <h3>6.4 Constructor Chaining with <code>this</code></h3>
          <pre>
            <code>{`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }

    public Student() : this("Unknown", 0, "Not Assigned")
    {
    }

    public Student(string name) : this(name, 0, "Not Assigned")
    {
    }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }
}`}</code>
          </pre>

          <hr />

          <h2>7. Encapsulation — Protecting Your Data</h2>
          <p>Encapsulation means hiding the internal data of a class and controlling how it is accessed.</p>

          <h3>Bad example (no encapsulation)</h3>
          <pre>
            <code>{`public class BankAccount
{
    public double Balance;   // anyone can change it directly!
}

BankAccount acc = new BankAccount();
acc.Balance = -5000;         // dangerous!`}</code>
          </pre>

          <h3>Good example (with encapsulation)</h3>
          <pre>
            <code>{`public class BankAccount
{
    private double balance;          // hidden

    public double Balance            // controlled access
    {
        get { return balance; }
        private set { balance = value; }   // only the class can set it
    }

    public void Deposit(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive");
        balance += amount;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdraw amount must be positive");
        if (amount > balance)
            throw new InvalidOperationException("Insufficient funds");
        balance -= amount;
    }
}`}</code>
          </pre>

          <p><strong>Now the only way to change the balance is through Deposit and Withdraw methods</strong> — this is encapsulation.</p>

          <hr />

          <h2>8. Access Modifiers</h2>
          <table>
            <thead>
              <tr>
                <th>Modifier</th>
                <th>Visible to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>public</code></td>
                <td>Everywhere</td>
              </tr>
              <tr>
                <td><code>private</code></td>
                <td>Only inside the same class</td>
              </tr>
              <tr>
                <td><code>protected</code></td>
                <td>Same class + derived classes (Session 09/10)</td>
              </tr>
              <tr>
                <td><code>internal</code></td>
                <td>Same assembly/project</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Rule of thumb for beginners:</strong></p>
          <ul>
            <li>Fields → almost always <code>private</code></li>
            <li>Properties and methods that the outside world needs → <code>public</code></li>
          </ul>

          <hr />

          <h2>9. Live Coding — Complete Student Class</h2>

          <pre>
            <code>{`public class Student
{
    // Private fields
    private string name;
    private int age;
    private string course;

    // Properties with validation
    public string Name
    {
        get { return name; }
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Name cannot be empty");
            name = value.Trim();
        }
    }

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

    public string Course
    {
        get { return course; }
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Course cannot be empty");
            course = value.Trim();
        }
    }

    // Constructors
    public Student()
    {
        Name = "Unknown";
        Age = 18;
        Course = "Not Assigned";
    }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }

    // Methods
    public void DisplayInfo()
    {
        Console.WriteLine("===== Student Information =====");
        Console.WriteLine($"Name   : {Name}");
        Console.WriteLine($"Age    : {Age}");
        Console.WriteLine($"Course : {Course}");
        Console.WriteLine("================================");
    }

    public bool IsAdult() => Age >= 18;
}`}</code>
          </pre>

          <h3>Using the class</h3>
          <pre>
            <code>{`try
{
    Student s1 = new Student("Ali Khan", 21, "C# Programming");
    s1.DisplayInfo();

    Console.WriteLine($"Is adult? {s1.IsAdult()}");

    // This will throw an exception
    // s1.Age = 10;
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}`}</code>
          </pre>

          <hr />

          <h2>10. Practice Exercises</h2>

          <h3>Exercise 1 — Product Class</h3>
          <p>Create a <code>Product</code> class with:</p>
          <ul>
            <li>Properties: <code>Name</code>, <code>Price</code>, <code>Quantity</code></li>
            <li>A constructor that takes all three values</li>
            <li>A method <code>CalculateTotal()</code> that returns <code>Price * Quantity</code></li>
            <li>A method <code>Display()</code> that prints all information</li>
          </ul>

          <h3>Exercise 2 — BankAccount Class</h3>
          <p>Create a fully encapsulated <code>BankAccount</code> class:</p>
          <ul>
            <li>Private field for balance</li>
            <li>Read-only property for Balance</li>
            <li>Methods: <code>Deposit</code>, <code>Withdraw</code>, <code>DisplayBalance</code></li>
            <li>Proper validation and exceptions</li>
          </ul>

          <h3>Exercise 3 — Rectangle Class</h3>
          <p>Create a <code>Rectangle</code> class with Width and Height properties (with validation that they must be positive). Add calculated properties for Area and Perimeter.</p>

          <hr />

          <h2>11. Session 08 Challenge</h2>
          <p>Build a simple <strong>Library Book</strong> management class:</p>
          <ul>
            <li>Properties: Title, Author, ISBN, IsAvailable</li>
            <li>Constructor that sets Title, Author and ISBN (IsAvailable starts as true)</li>
            <li>Methods:
              <ul>
                <li><code>BorrowBook()</code> — sets IsAvailable to false (only if currently available)</li>
                <li><code>ReturnBook()</code> — sets IsAvailable to true</li>
                <li><code>DisplayInfo()</code></li>
              </ul>
            </li>
          </ul>
          <p>Create 2–3 book objects and demonstrate borrowing and returning.</p>

          <hr />

          <h2>12. Session 08 Quiz</h2>
          <ol>
            <li>What is the difference between a class and an object?</li>
            <li>What keyword is used to create an object?</li>
            <li>Why should fields usually be private?</li>
            <li>What is a property in C#?</li>
            <li>What is the difference between an auto-property and a full property?</li>
            <li>When does a constructor run?</li>
            <li>Can a class have more than one constructor? What is that called?</li>
            <li>What does encapsulation mean?</li>
            <li>What access modifier makes a member visible only inside its own class?</li>
            <li>Why is it better to use properties instead of public fields?</li>
          </ol>

          <hr />

          <p><strong>Next up (Session 09):</strong> Inheritance, base classes, derived classes, method overriding, and the <code>protected</code> access modifier.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
