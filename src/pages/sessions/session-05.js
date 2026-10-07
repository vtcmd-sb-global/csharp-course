import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session05() {
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
      title="Session 05 — Inheritance and Polymorphism"
      description="Inheritance, Method Overriding, Sealed Classes and Polymorphism in C#"
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
          <h1>Session 05 — Inheritance and Polymorphism</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn how classes can inherit from other classes and how polymorphism allows objects to behave differently.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 5</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and explain Inheritance</li>
            <li>Create a base class and derived class</li>
            <li>Use the <code>base</code> keyword</li>
            <li>Override methods using <code>virtual</code> and <code>override</code></li>
            <li>Understand sealed classes</li>
            <li>Explain and demonstrate Polymorphism</li>
          </ul>

          <hr />

          <h2>1. What is Inheritance?</h2>
          <p>Inheritance is the process of creating a new class from an existing class. The new class (derived/child class) inherits the members of the existing class (base/parent class).</p>

          <pre style={codeBlockStyle}>
            <code>{`// Real-world example
Base Class     →  Person
Derived Classes →  Student, Teacher, Employee`}</code>
          </pre>

          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Code reusability</li>
            <li>Better organization</li>
            <li>Easier maintenance</li>
          </ul>

          <hr />

          <h2>2. Basic Inheritance Syntax</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class Person                     // Base class
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Display()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}

public class Student : Person           // Derived class
{
    public string Course { get; set; }

    public void Study()
    {
        Console.WriteLine($"{Name} is studying {Course}");
    }
}`}</code>
          </pre>

          <h3>Using the classes</h3>
          <pre style={codeBlockStyle}>
            <code>{`Student s1 = new Student();
s1.Name = "Ali";
s1.Age = 20;
s1.Course = "C# Programming";

s1.Display();   // Inherited method
s1.Study();     // Own method`}</code>
          </pre>

          <hr />

          <h2>3. Calling Base Class Constructor</h2>
          <p>Constructors are not inherited. We use the <code>base</code> keyword to call the parent constructor.</p>

          <pre style={codeBlockStyle}>
            <code>{`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

public class Student : Person
{
    public string Course { get; set; }

    public Student(string name, int age, string course) : base(name, age)
    {
        Course = course;
    }
}

// Usage
Student s1 = new Student("Ali", 21, "C#");`}</code>
          </pre>

          <hr />

          <h2>4. Method Overriding (virtual + override)</h2>
          <p>When a derived class wants to provide its own version of a method that exists in the base class, we use method overriding.</p>

          <pre style={codeBlockStyle}>
            <code>{`public class Person
{
    public string Name { get; set; }

    // Mark method as virtual so it can be overridden
    public virtual void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}.");
    }
}

public class Student : Person
{
    public string Course { get; set; }

    // Override the method
    public override void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name} and I study {Course}.");
    }
}

public class Teacher : Person
{
    public string Subject { get; set; }

    public override void Introduce()
    {
        Console.WriteLine($"Hello, I am {Name}, your {Subject} teacher.");
    }
}`}</code>
          </pre>

          <h3>Testing Polymorphism</h3>
          <pre style={codeBlockStyle}>
            <code>{`Person p1 = new Person { Name = "Sara" };
Person p2 = new Student { Name = "Ali", Course = "C#" };
Person p3 = new Teacher { Name = "Ahmed", Subject = "Mathematics" };

p1.Introduce();   // Hi, I am Sara.
p2.Introduce();   // Hi, I am Ali and I study C#.
p3.Introduce();   // Hello, I am Ahmed, your Mathematics teacher.`}</code>
          </pre>

          <hr />

          <h2>5. Using the base Keyword inside Overridden Method</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class Student : Person
{
    public string Course { get; set; }

    public override void Introduce()
    {
        base.Introduce();   // Call the original method first
        Console.WriteLine($"I am currently studying {Course}.");
    }
}`}</code>
          </pre>

          <hr />

          <h2>6. Sealed Classes</h2>
          <p>A <code>sealed</code> class cannot be inherited by any other class.</p>

          <pre style={codeBlockStyle}>
            <code>{`public sealed class FinalClass
{
    public void Show()
    {
        Console.WriteLine("This class cannot be inherited.");
    }
}

// This will give an error
// public class Child : FinalClass { }`}</code>
          </pre>

          <p><strong>When to use sealed:</strong></p>
          <ul>
            <li>When you want to prevent further inheritance</li>
            <li>For security or design reasons</li>
          </ul>

          <hr />

          <h2>7. Complete Live Example</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class Animal
{
    public string Name { get; set; }

    public Animal(string name)
    {
        Name = name;
    }

    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic animal sound");
    }

    public virtual void Display()
    {
        Console.WriteLine($"Animal Name: {Name}");
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }

    public Dog(string name, string breed) : base(name)
    {
        Breed = breed;
    }

    public override void MakeSound()
    {
        Console.WriteLine("Woof! Woof!");
    }

    public override void Display()
    {
        base.Display();
        Console.WriteLine($"Breed: {Breed}");
    }
}

public class Cat : Animal
{
    public Cat(string name) : base(name) { }

    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Testing
Animal a1 = new Dog("Buddy", "German Shepherd");
Animal a2 = new Cat("Whiskers");

a1.MakeSound();
a1.Display();

Console.WriteLine();

a2.MakeSound();
a2.Display();`}</code>
          </pre>

          <hr />

          <h2>8. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a base class <code>Vehicle</code> with properties Brand and Speed, and a virtual method <code>Start()</code>.  
Then create two derived classes: <code>Car</code> and <code>Motorcycle</code> that override the <code>Start()</code> method.</p>

          <h3>Exercise 2</h3>
          <p>Create a class hierarchy:</p>
          <ul>
            <li><code>Employee</code> (base) → Name, Salary, virtual method CalculateBonus()</li>
            <li><code>Manager</code> → overrides CalculateBonus() (20% of salary)</li>
            <li><code>Developer</code> → overrides CalculateBonus() (10% of salary)</li>
          </ul>

          <h3>Exercise 3</h3>
          <p>Create a sealed class called <code>MathHelper</code> with a static method to calculate the square of a number.</p>

          <hr />

          <h2>9. Session Challenge</h2>
          <p>Build a simple School System:</p>
          <ul>
            <li>Base class: <code>Person</code> (Name, Age, virtual Introduce())</li>
            <li>Derived: <code>Student</code> (RollNo, Course)</li>
            <li>Derived: <code>Teacher</code> (EmployeeId, Subject)</li>
          </ul>
          <p>Create objects of both types and store them in a <code>List&lt;Person&gt;</code>.  
Loop through the list and call <code>Introduce()</code> on each object.</p>

          <hr />

          <h2>10. Session Quiz</h2>
          <ol>
            <li>What is Inheritance?</li>
            <li>What symbol is used for inheritance in C#?</li>
            <li>Are private members inherited?</li>
            <li>What is the purpose of the <code>virtual</code> keyword?</li>
            <li>What is the purpose of the <code>override</code> keyword?</li>
            <li>What does the <code>base</code> keyword do?</li>
            <li>What is a sealed class?</li>
            <li>What is Polymorphism? Give one example.</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Abstract Classes and Interfaces</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
