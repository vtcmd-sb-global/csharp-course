import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session06() {
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
            <li>Define and create abstract classes and understand when they are useful</li>
            <li>Create and implement abstract methods</li>
            <li>Define interfaces and implement them in classes</li>
            <li>Clearly explain the difference between abstract classes and interfaces</li>
            <li>Decide when to use an abstract class and when to use an interface</li>
            <li>Implement multiple interfaces in a single class</li>
          </ul>

          <hr />

          <h2>1. Abstract Classes</h2>

          <p>
            An <strong>abstract class</strong> is a special kind of base class that cannot be instantiated directly.
            You cannot write <code>new Animal()</code> if <code>Animal</code> is abstract.
            Its purpose is to provide a common foundation for related classes while forcing derived classes to fill in the missing pieces.
          </p>

          <p>
            Think of an abstract class as a partially completed form.  
            Some fields are already filled (normal methods and properties), and some fields are left blank on purpose (abstract methods).  
            Every class that inherits from it must complete those blank fields.
          </p>

          <CodeBlock
            language="csharp"
            code={`public abstract class Animal
{
    public string Name { get; set; }

    // Normal method – already has a body. Derived classes can use it as-is.
    public void Sleep()
    {
        Console.WriteLine($"{Name} is sleeping.");
    }

    // Abstract method – no body. Derived classes MUST provide their own version.
    public abstract void MakeSound();
}`}
            caption="Abstract class with both a normal method and an abstract method"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The class itself is marked <code>abstract</code>. This prevents anyone from creating a plain <code>Animal</code> object.</li>
            <li><code>Sleep()</code> is a normal method. It has a complete body, so every derived class automatically gets this behaviour.</li>
            <li><code>MakeSound()</code> is marked <code>abstract</code> and has no curly braces or body. This is a promise that every concrete derived class will provide its own implementation.</li>
          </ul>

          <h3>Key Points about Abstract Classes</h3>
          <ul>
            <li>Declared using the <code>abstract</code> keyword on the class.</li>
            <li>You <strong>cannot</strong> create an object of an abstract class.</li>
            <li>It can contain both normal methods (with body) and abstract methods (without body).</li>
            <li>Abstract methods must be overridden in every non-abstract derived class.</li>
            <li>A class can inherit from only <strong>one</strong> abstract class (C# does not support multiple class inheritance).</li>
            <li>Abstract classes can have constructors, fields, properties, and access modifiers just like normal classes.</li>
          </ul>

          <h3>Implementing an Abstract Class</h3>
          <p>
            When a class inherits from an abstract class, it must either:
          </p>
          <ul>
            <li>Implement every abstract method, or</li>
            <li>Also be declared abstract itself.</li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`public class Dog : Animal
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
dog.Sleep();       // Buddy is sleeping.`}
            caption="Concrete classes that complete the abstract method"
          />

          <h3>How to write this yourself</h3>
          <ol>
            <li>Ask: “What is common to all these types?” → Put shared properties and methods in the abstract base class.</li>
            <li>Ask: “What must every derived type do differently?” → Make those methods abstract.</li>
            <li>Write the abstract class first.</li>
            <li>Then write each derived class and use <code>override</code> for every abstract method.</li>
            <li>Test by creating objects through the abstract type (polymorphism).</li>
          </ol>

          <p>
            <strong>Common beginner mistake:</strong> Forgetting the <code>override</code> keyword when implementing an abstract method.
            The compiler will give a clear error if you miss it.
          </p>

          <hr />

          <h2>2. Interfaces</h2>

          <p>
            An <strong>interface</strong> is a pure contract.  
            It tells a class <em>what</em> it must be able to do, but it never tells the class <em>how</em> to do it.
          </p>

          <p>
            Think of an interface like a job description:
          </p>
          <ul>
            <li>The job description says: “You must be able to CalculateArea and CalculatePerimeter.”</li>
            <li>It does not care whether you are a Circle, Rectangle, or Triangle — as long as you can perform those two tasks.</li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`public interface IShape
{
    double CalculateArea();
    double CalculatePerimeter();
}`}
            caption="A simple interface that defines a contract"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>Interfaces are declared with the <code>interface</code> keyword.</li>
            <li>By convention, interface names start with a capital <code>I</code> (IShape, IPrintable, IComparable, etc.).</li>
            <li>Methods inside an interface have no access modifier and no body — they are just signatures.</li>
            <li>In modern C# you can also add properties, events, and even default method implementations, but for this course we focus on the classic pure contract style.</li>
          </ul>

          <h3>Key Points about Interfaces</h3>
          <ul>
            <li>Declared using the <code>interface</code> keyword.</li>
            <li>Cannot contain implementation in the classic sense (only method/property signatures).</li>
            <li>All members are public by default — you never write <code>public</code> inside the interface.</li>
            <li>A class can implement <strong>multiple</strong> interfaces (this is how C# supports a form of multiple inheritance).</li>
            <li>Interfaces cannot have instance fields or constructors.</li>
          </ul>

          <h3>Implementing an Interface</h3>
          <p>
            When a class implements an interface, it must provide a public method for every member of the interface.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Circle : IShape
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
}`}
            caption="Two different classes fulfilling the same IShape contract"
          />

          <h3>Using the Interface (Polymorphism)</h3>
          <p>
            Just like with abstract classes, you can treat different objects through the interface type.
            This is extremely useful when you want to write code that works with “anything that can calculate an area”.
          </p>

          <CodeBlock
            language="csharp"
            code={`IShape shape1 = new Circle(5);
IShape shape2 = new Rectangle(4, 6);

Console.WriteLine($"Circle Area: {shape1.CalculateArea():F2}");
Console.WriteLine($"Rectangle Area: {shape2.CalculateArea():F2}");`}
            caption="Working with different shapes through the same interface type"
          />

          <h3>How to write this yourself</h3>
          <ol>
            <li>Ask: “What capability do these different classes all need to have?” → That becomes the interface.</li>
            <li>Write the interface with only the method signatures.</li>
            <li>In each class write <code>: IShape</code> (or whatever the interface is called).</li>
            <li>Implement every method from the interface.</li>
            <li>Use the interface type when you want to treat the objects uniformly.</li>
          </ol>

          <hr />

          <h2>3. Abstract Class vs Interface</h2>

          <p>
            Students often ask: “When should I use an abstract class and when should I use an interface?”  
            The table below and the guidelines after it will help you decide.
          </p>

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
                <td>Only method signatures (no body in classic style)</td>
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
                <td>When classes are closely related and share code</td>
                <td>When classes only need to share a common capability</td>
              </tr>
            </tbody>
          </table>

          <h3>Simple decision guide</h3>
          <ul>
            <li>Use an <strong>abstract class</strong> when:
              <ul>
                <li>The classes are closely related (they form an “is-a” hierarchy).</li>
                <li>You want to share actual code (normal methods, fields, constructors).</li>
                <li>You want to force derived classes to implement certain methods while still giving them common behaviour.</li>
              </ul>
            </li>
            <li>Use an <strong>interface</strong> when:
              <ul>
                <li>You only care about a capability (“can be printed”, “can be saved”, “can calculate area”).</li>
                <li>The classes may not be related in an inheritance hierarchy.</li>
                <li>You need a class to support multiple different contracts at the same time.</li>
              </ul>
            </li>
          </ul>

          <p>
            In real projects you will often use both together — an abstract class for the shared core, and interfaces for additional capabilities.
          </p>

          <hr />

          <h2>4. Multiple Interface Implementation</h2>

          <p>
            One of the biggest advantages of interfaces is that a single class can implement many of them.
            This is how C# achieves a flexible form of multiple inheritance.
          </p>

          <CodeBlock
            language="csharp"
            code={`public interface IPrintable
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
}`}
            caption="One class implementing two different interfaces"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The class lists all interfaces after the colon, separated by commas.</li>
            <li>It must provide a public implementation for every method from every interface.</li>
            <li>You can still treat the object as <code>IPrintable</code> or as <code>ISaveable</code> depending on what you need.</li>
          </ul>

          <hr />

          <h2>5. Complete Live Example</h2>

          <p>
            Let’s combine everything we have learned into one realistic example.
            Follow the thinking process carefully — this is how you should design similar systems yourself.
          </p>

          <h3>Step-by-step thinking</h3>
          <ol>
            <li>What is common to every employee? → Name, Salary, a way to display info, and a way to calculate bonus.  
                Some of these can be shared code, some must be different → Abstract class.</li>
            <li>What extra capability do we want? → The ability to check leave balance.  
                This is a separate concern → Interface.</li>
            <li>Write the abstract class first, then the interface, then the concrete classes.</li>
          </ol>

          <CodeBlock
            language="csharp"
            code={`// Abstract class – shared core for all employees
public abstract class Employee
{
    public string Name { get; set; }
    public double Salary { get; set; }

    public Employee(string name, double salary)
    {
        Name = name;
        Salary = salary;
    }

    // Every employee must calculate bonus, but the formula differs
    public abstract double CalculateBonus();

    // Shared behaviour that every employee already has
    public void Display()
    {
        Console.WriteLine($"Name: {Name}, Salary: {Salary:C}");
    }
}

// Interface – an extra capability
public interface ILeave
{
    int GetLeaveBalance();
}

// Concrete classes that inherit the abstract class AND implement the interface
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
Console.WriteLine($"Leave Balance: {((ILeave)emp2).GetLeaveBalance()} days");`}
            caption="Abstract class + interface working together"
          />

          <p>
            Notice how cleanly the design separates concerns:
          </p>
          <ul>
            <li>The abstract class handles the “what every employee has in common”.</li>
            <li>The interface adds an extra capability without forcing it into the inheritance hierarchy.</li>
          </ul>

          <hr />

          <h2>6. Practice Exercises</h2>

          <p>
            Try these yourself. Follow the same thinking steps we used above.
          </p>

          <h3>Exercise 1 — Shapes with Abstract Class</h3>
          <p>
            Create an abstract class <code>Shape</code> with an abstract method <code>CalculateArea()</code>.  
            Then create two classes: <code>Circle</code> and <code>Rectangle</code> that inherit from it and implement the method.
          </p>
          <p><strong>How to approach it:</strong></p>
          <ol>
            <li>Write the abstract <code>Shape</code> class with the abstract method.</li>
            <li>Write <code>Circle : Shape</code> and override <code>CalculateArea()</code>.</li>
            <li>Write <code>Rectangle : Shape</code> and override <code>CalculateArea()</code>.</li>
            <li>Create objects using the <code>Shape</code> type and call the method to see polymorphism.</li>
          </ol>

          <h3>Exercise 2 — Vehicles with Interface</h3>
          <p>
            Create an interface <code>IVehicle</code> with methods <code>Start()</code> and <code>Stop()</code>.  
            Implement it in classes <code>Car</code> and <code>Bike</code>.
          </p>
          <p><strong>How to approach it:</strong></p>
          <ol>
            <li>Write the interface first (only the method signatures).</li>
            <li>Write each class with <code>: IVehicle</code>.</li>
            <li>Implement both methods in each class with different messages.</li>
            <li>Store both objects in variables of type <code>IVehicle</code> and call the methods.</li>
          </ol>

          <h3>Exercise 3 — Bank Accounts</h3>
          <p>
            Create an abstract class <code>BankAccount</code> with abstract methods <code>Deposit</code> and <code>Withdraw</code>.  
            Then create <code>SavingsAccount</code> and <code>CurrentAccount</code> classes that provide different rules for those operations.
          </p>
          <p>
            (For example, SavingsAccount might not allow withdrawal if the balance would go below a minimum.)
          </p>

          <hr />

          <h2>7. Session Challenge</h2>

          <p>Design a simple notification system that demonstrates the power of interfaces.</p>

          <p><strong>Requirements:</strong></p>
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

          <p><strong>Suggested order of work:</strong></p>
          <ol>
            <li>Write the <code>INotification</code> interface.</li>
            <li>Write each of the three classes and implement <code>Send</code>.</li>
            <li>In <code>Main</code>, create an array or list of <code>INotification</code>.</li>
            <li>Loop through the list and call <code>Send</code> on every item with the same message.</li>
          </ol>

          <p>
            If you can complete this challenge cleanly, you understand why interfaces are so useful for writing flexible code.
          </p>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is an abstract class and why can’t we create an object of it?</li>
            <li>What is an abstract method? Must it be overridden?</li>
            <li>What is an interface? How is it different from a class?</li>
            <li>Can a class inherit multiple abstract classes? Why or why not?</li>
            <li>Can a class implement multiple interfaces?</li>
            <li>What is the main practical difference between an abstract class and an interface?</li>
            <li>When should we prefer an interface over an abstract class?</li>
            <li>When should we prefer an abstract class over an interface?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Properties, Indexers, and Record Types</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
