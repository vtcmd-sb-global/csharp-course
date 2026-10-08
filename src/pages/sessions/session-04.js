import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session04() {
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
      title="Session 04 — Classes and Methods in C#"
      description="Classes, Objects, Methods, Access Modifiers, Method Overloading, Constructors and Destructors in C#"
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
          <h1>Session 04 — Classes and Methods in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand Object-Oriented Programming basics — Classes, Objects, Methods, Constructors and Access Modifiers.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 4</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what a class and an object are</li>
            <li>Create a class and instantiate objects</li>
            <li>Define and call methods</li>
            <li>Use different access modifiers</li>
            <li>Perform method overloading</li>
            <li>Create and use constructors</li>
            <li>Understand the concept of destructors</li>
          </ul>

          <hr />

          <h2>1. Introduction to Object-Oriented Programming (OOP)</h2>
          <p>C# is a fully object-oriented programming language. In OOP, we model real-world things using <strong>classes</strong> and <strong>objects</strong>.</p>

          <ul>
            <li><strong>Class</strong> → Blueprint / Template</li>
            <li><strong>Object</strong> → Real instance created from the class</li>
          </ul>

          <pre style={codeBlockStyle}>
            <code>{`// Real-world example
Class   →  Car Blueprint
Objects →  Car1 (Toyota), Car2 (Honda), Car3 (Suzuki)`}</code>
          </pre>

          <hr />

          <h2>2. Creating a Class and Object</h2>
          <p> A class defines the structure and behavior of an object. It can contain fields, properties, and methods. An object is an actual instance of a class created using the new keyword. In this example, the Student class stores student information and provides a method to display it.</p>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    // Fields (data)
    public string Name;
    public int Age;
    public string Course;

    // Method (behavior)
    public void DisplayInfo()
    {
        Console.WriteLine($"Name   : {Name}");
        Console.WriteLine($"Age    : {Age}");
        Console.WriteLine($"Course : {Course}");
    }
}`}</code>
          </pre>

          <h3>Creating and Using Objects</h3>
  <p>After defining a class, we can create objects from it and use those objects to access the class members. Here, a Student object is created, values are assigned to its fields, and the DisplayInfo() method is called to show the student's information.</p>
          <pre style={codeBlockStyle}>
            <code>{`// Create object
Student s1 = new Student();

// Assign values
s1.Name = "Ali Khan";
s1.Age = 20;
s1.Course = "C# Programming";

// Call method
s1.DisplayInfo();`}</code>
          </pre>

          <hr />

          <h2>3. Methods in C#</h2>
          
  <p>A method is a block of code that performs a specific task. Methods help organize programs into smaller, reusable pieces of code. A method can accept input through parameters and may return a result.</p>
          
  <h3>3.1 Method with No Parameters and No Return Value</h3>

  <p>This type of method does not require any input and does not return a value. It simply performs an action when it is called.</p>
          <pre style={codeBlockStyle}>
            <code>{`public void Greet()
{
    Console.WriteLine("Welcome to Aptech!");
}`}</code>
          </pre>

          <h3>3.2 Method with Parameters</h3>

  <p>A method can receive values through parameters. Parameters allow the same method to perform its task using different input values.</p>
          <pre style={codeBlockStyle}>
            <code>{`public void Greet(string name)
{
    Console.WriteLine($"Welcome {name}!");
}`}</code>
          </pre>

          <h3>3.3 Method with Return Value</h3>
<p>A method can perform a calculation or operation and return the result to the code that called it. The return type specifies the type of value the method will return.</p>
  
          <pre style={codeBlockStyle}>
            <code>{`public int Add(int a, int b)
{
    return a + b;
}

// Usage
int result = Add(10, 20);
Console.WriteLine(result);   // 30`}</code>
          </pre>

  <hr />
  <table>
  <thead>
    <tr>
      <th>Part</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>public</code></td>
      <td>Access modifier</td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>Return type</td>
    </tr>
    <tr>
      <td><code>Add</code></td>
      <td>Method name</td>
    </tr>
    <tr>
      <td><code>int a</code></td>
      <td>First parameter</td>
    </tr>
    <tr>
      <td><code>int b</code></td>
      <td>Second parameter</td>
    </tr>
    <tr>
      <td><code>return</code></td>
      <td>Sends a value back</td>
    </tr>
  </tbody>
</table>
  
          <hr />

          <h2>4. Access Modifiers</h2>
   
  <p>Access modifiers control where classes and their members can be accessed from. They are an important part of encapsulation because they help protect data and control how other parts of a program interact with a class.</p>
  
  <table>
            <thead>
              <tr>
                <th>Modifier</th>
                <th>Accessible From</th>
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
                <td>Same class + derived classes</td>
              </tr>
              <tr>
                <td><code>internal</code></td>
                <td>Same assembly (project)</td>
              </tr>
            </tbody>
          </table>

          <pre style={codeBlockStyle}>
            <code>{`public class BankAccount
{
    private double balance;          // only accessible inside this class

    public void Deposit(double amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public double GetBalance()
    {
        return balance;
    }
}`}</code>
          </pre>

          <hr />

          <h2>5. Method Overloading</h2>
  
  <p>Method overloading allows a class to have multiple methods with the <strong>same name</strong> as long as their parameter lists are different. This makes it possible to perform similar operations with different types or numbers of inputs.
  
  </p>
  
          <pre style={codeBlockStyle}>
            <code>{`public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public double Add(double a, double b)
    {
        return a + b;
    }

    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}

// Usage
Calculator calc = new Calculator();
Console.WriteLine(calc.Add(5, 10));        // 15
Console.WriteLine(calc.Add(5.5, 10.2));    // 15.7
Console.WriteLine(calc.Add(1, 2, 3));      // 6`}</code>
          </pre>

          <hr />

          <h2>6. Constructors</h2>
  
  <p>A constructor is a special member of a class that is used to initialize an object. It has the same name as the class and is automatically executed when an object is created using new.</p>

  Constructor initializes an object.
  <ul>
  <li>Its name is the same as the class.</li>
  <li>It has no return type.</li>
  <li>It runs automatically when new creates an object.</li>
  <li>It can accept parameters.</li>
  </ul>
          <h3>6.1 Default Constructor</h3>
  <p>A default constructor is a constructor that does not require any parameters. It can be used to assign initial or default values to an object's fields when the object is created.</p>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name;
    public int Age;

    // Default constructor
    public Student()
    {
        Name = "Unknown";
        Age = 0;
        Console.WriteLine("Default constructor called");
    }
}`}</code>
          </pre>

          <h3>6.2 Parameterized Constructor</h3>
  <p>A parameterized constructor accepts values as parameters and uses them to initialize an object. This allows an object to be created with specific data from the beginning.</p>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name;
    public int Age;
    public string Course;

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }
}

// Usage
Student s1 = new Student("Ali", 21, "C#");`}</code>
          </pre>

          <h3>6.3 Constructor Overloading</h3>
  <p>Just like methods, constructors can be overloaded. A class can have multiple constructors with different parameter lists, allowing objects to be initialized in different ways.</p>
          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public string Name;
    public int Age;

    public Student()
    {
        Name = "Unknown";
        Age = 0;
    }

    public Student(string name)
    {
        Name = name;
        Age = 0;
    }

    public Student(string name, int age)
    {
        Name = name;
        Age = age;
    }
}`}</code>
          </pre>

          <hr />

          <h2>7. Destructor</h2>
          <p>A <strong>destructor</strong> in C# is a special member of a class that can be used for cleanup when an object is being reclaimed by the <strong>Garbage Collector</strong>.

Unlike a constructor, a destructor is <strong>not called when we create an object</strong>. It is associated with the cleanup of an object that is no longer being used.</p>

    <h2>Important: Destructors Are Rarely Used</h2>

    <p>In modern C#, you normally <strong>do not need to write a destructor</strong> for ordinary classes.</p>
    <p>C# has a Garbage Collector (GC) that automatically manages memory. When an object is no longer reachable by the program, the Garbage Collector can eventually reclaim the memory used by that object.

The important thing to remember is:</p>
    <code>We cannot predict exactly when the Garbage Collector will run or when a destructor will execute.</code>

    <h2>Destructor Syntax</h2>
    <p>A destructor uses the class name preceded by the <code>~</code> symbol:</p>
          <pre style={codeBlockStyle}>
            <code>{`
            public class Student 
            { 
            
              public string Name; 
            
              public Student(string name) 
              { 
                Name = name; 
                Console.WriteLine($"Object created for {Name}"); 
              } 
              // Destructor 
              ~Student() 
              { 
                Console.WriteLine($"Destructor called for {Name}"); 
              } 
            }
          `}</code>
          </pre>

          <hr />

    <h2> 1. Constructor</h2>

    <pre style={codeBlockStyle}>
      <code>
          {`
          public Student(string name) 
          { 
            Name = name; 
            Console.WriteLine($"Object created for {Name}"); 
          }
        `}
      </code>
    </pre>

        <p>The constructor runs when we create the object:</p>

        <pre style={codeBlockStyle}>
          <code>
            {`
              Student s1 = new Student("Ali");
            `}
          </code>
        </pre>

            <p>The object is created and its <code>Name</code> field is initialized.</p>

            <h2>2. Destructor</h2>

            <pre style={codeBlockStyle}>
            <code>
          {`
            ~Student() 
            { 
              Console.WriteLine($"Destructor called for {Name}"); 
            }
          `}
            </code>
            </pre>

              <p>The destructor is associated with the cleanup of the object.</p>

              <p>However, we <strong>cannot do this:</strong>

<code>s1.~Student();</code>  (this is Not valid in C#)

A destructor cannot be called manually like a normal method.

The Garbage Collector determines when the object can be reclaimed.</p>

  <h2>Constructor vs Destructor</h2>
  <table>
  <thead>
    <tr>
      <th>Constructor</th>
      <th>Destructor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Uses the class name</td>
      <td>Uses <code>~</code> followed by the class name</td>
    </tr>
    <tr>
      <td>Runs when an object is created</td>
      <td>May run when the object is being finalized</td>
    </tr>
    <tr>
      <td>Used to initialize an object</td>
      <td>Associated with cleanup/finalization</td>
    </tr>
    <tr>
      <td>Can accept parameters</td>
      <td>Cannot accept parameters</td>
    </tr>
    <tr>
      <td>Commonly used</td>
      <td>Rarely used in modern C#</td>
    </tr>
    <tr>
      <td>Called as part of <code>new</code></td>
      <td>Timing is controlled by the Garbage Collector</td>
    </tr>
  </tbody>
</table>

  For this course, remember:
<pre style={codeBlockStyle}>
  <code>
    Constructor → initializes an object.
    Destructor → is associated with cleanup when the Garbage Collector finalizes an object.
  </code>
  </pre>

  <p>You normally do not use destructors in everyday C# programming. They are mainly important to understand as part of the C# language and object lifecycle.

Important: Do not rely on a destructor running immediately after an object is no longer needed.</p>
  
          <h2>8. Complete Live Example</h2>
    
          <pre style={codeBlockStyle}>
            <code>{`
            public class Employee
{
    public string Name;
    public int Id;
    public double Salary;

    // Constructor
    public Employee(string name, int id, double salary)
    {
        Name = name;
        Id = id;
        Salary = salary;

        Console.WriteLine($"Employee object created for {Name}");
    }

    // Method
    public void Display()
    {
        Console.WriteLine("----- Employee Details -----");
        Console.WriteLine($"ID     : {Id}");
        Console.WriteLine($"Name   : {Name}");
        Console.WriteLine($"Salary : {Salary:C}");
        Console.WriteLine("----------------------------");
    }

    // Method with return value
    public double CalculateAnnualSalary()
    {
        return Salary * 12;
    }

    // Destructor (Finalizer)
    ~Employee()
    {
        Console.WriteLine($"Destructor called for {Name}");
    }
}

// Testing
Employee emp1 = new Employee("Ali Khan", 101, 75000);

emp1.Display();

Console.WriteLine(
    $"Annual Salary: {emp1.CalculateAnnualSalary():C}"
);

// The destructor is NOT called manually.
// The Garbage Collector determines when the object is finalized.
`
}
</code>
          </pre>

          <hr />

          <h2>9. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a class <code>Book</code> with fields: Title, Author, Price.  
Add a method <code>Display()</code> and a parameterized constructor.</p>

          <h3>Exercise 2</h3>
          <p>Create a class <code>Calculator</code> with overloaded methods for:</p>
          <ul>
            <li>Adding two integers</li>
            <li>Adding three integers</li>
            <li>Adding two doubles</li>
          </ul>

          <h3>Exercise 3</h3>
          <p>Create a class <code>BankAccount</code> with:</p>
          <ul>
            <li>Private field balance</li>
            <li>Public methods: Deposit, Withdraw, GetBalance</li>
            <li>A constructor to set initial balance</li>
          </ul>

          <hr />

          <h2>10. Session Challenge</h2>
          <p>Create a complete <strong>Student Management</strong> class with:</p>
          <ul>
            <li>Fields: Name, RollNo, Marks</li>
            <li>Parameterized constructor</li>
            <li>Method to calculate grade</li>
            <li>Method to display full student report</li>
          </ul>
          <p>Create 3 student objects and display their reports.</p>

          <hr />

          <h2>11. Session Quiz</h2>
          <ol>
            <li>What is the difference between a class and an object?</li>
            <li>What is a method?</li>
            <li>What is method overloading?</li>
            <li>What is a constructor? When is it called?</li>
            <li>What is the difference between a default and parameterized constructor?</li>
            <li>What does the <code>private</code> access modifier do?</li>
            <li>Can a class have more than one constructor?</li>
            <li>What is a destructor?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Inheritance and Polymorphism</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
