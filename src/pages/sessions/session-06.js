import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session06() {
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
      title="Session 06 — Abstract Classes and Interfaces"
      description="Abstract Classes, Interfaces and their comparison in C#"
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
          <h1>Session 06 — Abstract Classes and Interfaces</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn Abstract Classes and Interfaces — two powerful tools for designing flexible and maintainable code.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 6</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and create abstract classes</li>
            <li>Create abstract methods</li>
            <li>Define and implement interfaces</li>
            <li>Understand the difference between abstract classes and interfaces</li>
            <li>Decide when to use an abstract class vs an interface</li>
          </ul>

          <hr />

          <h2>1. Abstract Classes</h2>
          <p>An <strong>abstract class</strong> is a class that cannot be instantiated. It is designed to be a base class for other classes.</p>

          <pre style={codeBlockStyle}>
            <code>{`public abstract class Animal
{
    public string Name { get; set; }

    // Normal method
    public void Sleep()
    {
        Console.WriteLine($"{Name} is sleeping.");
    }

    // Abstract method (no body)
    public abstract void MakeSound();
}`}</code>
          </pre>

          <h3>Key Points about Abstract Classes</h3>
          <ul>
            <li>Declared using the <code>abstract</code> keyword</li>
            <li>Cannot create an object of an abstract class</li>
            <li>Can contain both normal methods and abstract methods</li>
            <li>Abstract methods have no body and must be overridden in derived classes</li>
            <li>A class can inherit only <strong>one</strong> abstract class</li>
          </ul>

          <h3>Implementing Abstract Class</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof! Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Usage
Animal dog = new Dog { Name = "Buddy" };
Animal cat = new Cat { Name = "Whiskers" };

dog.MakeSound();   // Woof! Woof!
cat.MakeSound();   // Meow!
dog.Sleep();`}</code>
          </pre>

          <hr />

          <h2>2. Interfaces</h2>
          <p>An <strong>interface</strong> is a contract. It defines what a class must do, but not how it does it.</p>

          <pre style={codeBlockStyle}>
            <code>{`public interface IShape
{
    double CalculateArea();
    double CalculatePerimeter();
}`}</code>
          </pre>

          <h3>Key Points about Interfaces</h3>
          <ul>
            <li>Declared using the <code>interface</code> keyword</li>
            <li>Cannot contain implementation (only method signatures)</li>
            <li>All methods are public by default</li>
            <li>A class can implement <strong>multiple</strong> interfaces</li>
            <li>Interfaces support multiple inheritance</li>
          </ul>

          <h3>Implementing an Interface</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class Circle : IShape
{
    public double Radius { get; set; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    public double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }

    public double CalculatePerimeter()
    {
        return 2 * Math.PI * Radius;
    }
}

public class Rectangle : IShape
{
    public double Length { get; set; }
    public double Width { get; set; }

    public Rectangle(double length, double width)
    {
        Length = length;
        Width = width;
    }

    public double CalculateArea()
    {
        return Length * Width;
    }

    public double CalculatePerimeter()
    {
        return 2 * (Length + Width);
    }
}`}</code>
          </pre>

          <h3>Using the Interface</h3>
          <pre style={codeBlockStyle}>
            <code>{`IShape shape1 = new Circle(5);
IShape shape2 = new Rectangle(4, 6);

Console.WriteLine($"Circle Area: {shape1.CalculateArea():F2}");
Console.WriteLine($"Rectangle Area: {shape2.CalculateArea():F2}");`}</code>
          </pre>

          <hr />

          <h2>3. Abstract Class vs Interface</h2>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Abstract Class</th>
                <th>Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Instantiation</td>
                <td>Cannot create object</td>
                <td>Cannot create object</td>
              </tr>
              <tr>
                <td>Methods</td>
                <td>Can have normal + abstract methods</td>
                <td>Only method signatures (no body)</td>
              </tr>
              <tr>
                <td>Fields</td>
                <td>Can have fields</td>
                <td>Cannot have instance fields</td>
              </tr>
              <tr>
                <td>Access Modifiers</td>
                <td>Can use any access modifier</td>
                <td>All members are public</td>
              </tr>
              <tr>
                <td>Multiple Inheritance</td>
                <td>No (only one abstract class)</td>
                <td>Yes (multiple interfaces)</td>
              </tr>
              <tr>
                <td>Constructor</td>
                <td>Can have constructor</td>
                <td>Cannot have constructor</td>
              </tr>
              <tr>
                <td>When to use</td>
                <td>When classes are closely related</td>
                <td>When classes share common behavior</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Multiple Interface Implementation</h2>

          <pre style={codeBlockStyle}>
            <code>{`public interface IPrintable
{
    void Print();
}

public interface ISaveable
{
    void Save();
}

public class Report : IPrintable, ISaveable
{
    public string Title { get; set; }

    public void Print()
    {
        Console.WriteLine($"Printing report: {Title}");
    }

    public void Save()
    {
        Console.WriteLine($"Saving report: {Title}");
    }
}`}</code>
          </pre>

          <hr />

          <h2>5. Complete Live Example</h2>

          <pre style={codeBlockStyle}>
            <code>{`// Abstract class
public abstract class Employee
{
    public string Name { get; set; }
    public double Salary { get; set; }

    public Employee(string name, double salary)
    {
        Name = name;
        Salary = salary;
    }

    public abstract double CalculateBonus();

    public void Display()
    {
        Console.WriteLine($"Name: {Name}, Salary: {Salary:C}");
    }
}

// Interface
public interface ILeave
{
    int GetLeaveBalance();
}

// Implementing both
public class Manager : Employee, ILeave
{
    public Manager(string name, double salary) : base(name, salary) { }

    public override double CalculateBonus()
    {
        return Salary * 0.20;   // 20% bonus
    }

    public int GetLeaveBalance()
    {
        return 20;
    }
}

public class Developer : Employee, ILeave
{
    public Developer(string name, double salary) : base(name, salary) { }

    public override double CalculateBonus()
    {
        return Salary * 0.10;   // 10% bonus
    }

    public int GetLeaveBalance()
    {
        return 15;
    }
}

// Testing
Employee emp1 = new Manager("Ali", 100000);
Employee emp2 = new Developer("Sara", 80000);

emp1.Display();
Console.WriteLine($"Bonus: {emp1.CalculateBonus():C}");
Console.WriteLine($"Leave Balance: {((ILeave)emp1).GetLeaveBalance()} days");

Console.WriteLine();

emp2.Display();
Console.WriteLine($"Bonus: {emp2.CalculateBonus():C}");
Console.WriteLine($"Leave Balance: {((ILeave)emp2).GetLeaveBalance()} days");`}</code>
          </pre>

          <hr />

          <h2>6. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create an abstract class <code>Shape</code> with an abstract method <code>CalculateArea()</code>.  
Then create two classes: <code>Circle</code> and <code>Rectangle</code> that inherit from it.</p>

          <h3>Exercise 2</h3>
          <p>Create an interface <code>IVehicle</code> with methods <code>Start()</code> and <code>Stop()</code>.  
Implement it in classes <code>Car</code> and <code>Bike</code>.</p>

          <h3>Exercise 3</h3>
          <p>Create an abstract class <code>BankAccount</code> with abstract methods <code>Deposit</code> and <code>Withdraw</code>.  
Then create <code>SavingsAccount</code> and <code>CurrentAccount</code> classes.</p>

          <hr />

          <h2>7. Session Challenge</h2>
          <p>Design a simple notification system:</p>
          <ul>
            <li>Create an interface <code>INotification</code> with a method <code>Send(string message)</code></li>
            <li>Implement it in three classes:
              <ul>
                <li><code>EmailNotification</code></li>
                <li><code>SMSNotification</code></li>
                <li><code>PushNotification</code></li>
              </ul>
            </li>
            <li>Write a program that sends the same message using all three notification types</li>
          </ul>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is an abstract class?</li>
            <li>Can we create an object of an abstract class?</li>
            <li>What is an abstract method?</li>
            <li>What is an interface?</li>
            <li>Can a class inherit multiple abstract classes?</li>
            <li>Can a class implement multiple interfaces?</li>
            <li>What is the main difference between abstract class and interface?</li>
            <li>When should we prefer an interface over an abstract class?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Properties, Indexers, and Record Types</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
