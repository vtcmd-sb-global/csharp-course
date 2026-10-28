import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session05() {
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
            <li>Define and explain Inheritance using the “is-a” relationship</li>
            <li>Create a base class and derived class and decide what belongs in each</li>
            <li>Use the <code>base</code> keyword correctly for constructors and methods</li>
            <li>Override methods using <code>virtual</code> and <code>override</code> and understand why both are needed</li>
            <li>Understand sealed classes and when to use them</li>
            <li>Explain Polymorphism and write code that uses it effectively</li>
          </ul>

          <hr />

          <h2>1. What is Inheritance?</h2>

          <p>
            Inheritance is one of the four pillars of Object-Oriented Programming.
            It allows you to create a new class based on an existing class so that
            the new class automatically gets the fields, properties, and methods of the existing class.
          </p>

          <p>
            The existing class is called the <strong>base class</strong> (or parent class).<br />
            The new class is called the <strong>derived class</strong> (or child class).
          </p>

          <p>
            The most important idea to remember is the <strong>“is-a” relationship</strong>:
          </p>
          <ul>
            <li>A Student <strong>is a</strong> Person</li>
            <li>A Teacher <strong>is a</strong> Person</li>
            <li>A Dog <strong>is an</strong> Animal</li>
            <li>A Car <strong>is a</strong> Vehicle</li>
          </ul>

          <p>
            If you can say “X is a Y” in normal English, then inheritance is usually the right choice.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Real-world example of the "is-a" relationship
Base Class     →  Person
Derived Classes →  Student, Teacher, Employee`}
            caption="Think in terms of 'is-a' relationships"
          />

          <p><strong>Why do we use Inheritance?</strong></p>
          <ul>
            <li><strong>Code reusability</strong> — Write the common code once in the base class.</li>
            <li><strong>Better organization</strong> — Related classes stay together in a clear hierarchy.</li>
            <li><strong>Easier maintenance</strong> — Fix a bug or add a feature in one place and all derived classes benefit.</li>
            <li><strong>Polymorphism</strong> — Treat different objects in a uniform way (we will see this later).</li>
          </ul>

          <p>
            <strong>Important note for beginners:</strong> Inheritance is powerful, but do not overuse it.
            Only create a base class when there is a real “is-a” relationship and real shared behaviour.
          </p>

          <hr />

          <h2>2. Basic Inheritance Syntax</h2>

          <p>
            In C# we use the colon (<code>:</code>) symbol to show inheritance.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Person                     // Base class
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
}`}
            caption="Basic inheritance: Student inherits everything from Person"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li><code>Person</code> is the base class. It contains the things that are common to all people (Name and Age).</li>
            <li><code>Student : Person</code> means “Student inherits from Person”.</li>
            <li>Because of inheritance, a Student object automatically has <code>Name</code>, <code>Age</code>, and the <code>Display()</code> method.</li>
            <li><code>Course</code> and <code>Study()</code> are extra things that only a Student has, so they stay in the derived class.</li>
          </ul>

          <h3>How to write this yourself</h3>
          <ol>
            <li>Ask: “What is common between these types of objects?” → Put that in the base class.</li>
            <li>Ask: “What is special about each type?” → Put that in the derived classes.</li>
            <li>Write the base class first.</li>
            <li>Then write the derived class using the <code>:</code> symbol.</li>
          </ol>

          <h3>Using the classes</h3>
          <CodeBlock
            language="csharp"
            code={`Student s1 = new Student();
s1.Name = "Ali";          // inherited property
s1.Age = 20;              // inherited property
s1.Course = "C# Programming";  // Student’s own property

s1.Display();   // Inherited method – works automatically
s1.Study();     // Student’s own method`}
            caption="A Student object can use both inherited and its own members"
          />

          <p>
            Notice that we never wrote <code>Name</code>, <code>Age</code>, or <code>Display()</code> inside the <code>Student</code> class.
            Inheritance gave them to us for free.
          </p>

          <hr />

          <h2>3. Calling Base Class Constructor</h2>

          <p>
            Constructors are <strong>not inherited</strong>.  
            When you create a derived object, the base class constructor still needs to run so that the base part of the object is properly initialized.
          </p>

          <p>
            We use the <code>base</code> keyword to call the parent constructor.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Person
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

    // : base(name, age) calls the Person constructor first
    public Student(string name, int age, string course) : base(name, age)
    {
        Course = course;
    }
}

// Usage
Student s1 = new Student("Ali", 21, "C#");`}
            caption="Using base() to initialize the parent part of the object"
          />

          <h3>What actually happens when you write <code>new Student(...)</code></h3>
          <ol>
            <li>Memory is allocated for the whole Student object (which includes the Person part).</li>
            <li>The <code>Person</code> constructor runs first (because of <code>: base(...)</code>).</li>
            <li>Then the <code>Student</code> constructor body runs.</li>
          </ol>

          <p>
            <strong>Common beginner mistake:</strong> Forgetting the <code>: base(...)</code> part.
            If the base class only has a parameterized constructor, the compiler will force you to call it.
          </p>

          <hr />

          <h2>4. Method Overriding (virtual + override)</h2>

          <p>
            Sometimes a derived class needs its <strong>own version</strong> of a method that already exists in the base class.
            This is called <strong>method overriding</strong>.
          </p>

          <p>
            To allow overriding we need two keywords:
          </p>
          <ul>
            <li><code>virtual</code> — written in the base class. It means “this method is allowed to be overridden”.</li>
            <li><code>override</code> — written in the derived class. It means “I am providing a new version of this method”.</li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`public class Person
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
}`}
            caption="virtual in base class + override in derived classes"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The base class decides which methods can be changed by derived classes (<code>virtual</code>).</li>
            <li>Each derived class can choose to keep the original behaviour or provide its own version (<code>override</code>).</li>
            <li>If a derived class does not override a virtual method, it simply uses the base class version.</li>
          </ul>

          <h3>Testing Polymorphism</h3>
          <p>
            Polymorphism means “many forms”.  
            The same method call can behave differently depending on the actual type of the object.
          </p>

          <CodeBlock
            language="csharp"
            code={`Person p1 = new Person { Name = "Sara" };
Person p2 = new Student { Name = "Ali", Course = "C#" };
Person p3 = new Teacher { Name = "Ahmed", Subject = "Mathematics" };

p1.Introduce();   // Hi, I am Sara.
p2.Introduce();   // Hi, I am Ali and I study C#.
p3.Introduce();   // Hello, I am Ahmed, your Mathematics teacher.`}
            caption="Same method call, different behaviour — this is polymorphism"
          />

          <h3>Why this is powerful</h3>
          <p>
            Notice that the variables are all of type <code>Person</code>, yet the correct version of <code>Introduce()</code> is called at runtime.
            This is called <strong>runtime polymorphism</strong> (or dynamic binding).
          </p>
          <p>
            You can write code that works with the base type and it will automatically work with any derived type.
            This is one of the biggest advantages of inheritance.
          </p>

          <hr />

          <h2>5. Using the base Keyword inside an Overridden Method</h2>

          <p>
            Sometimes you want to keep the original behaviour of the base method and then add something extra.
            You can call the base version using <code>base.MethodName()</code>.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student : Person
{
    public string Course { get; set; }

    public override void Introduce()
    {
        base.Introduce();   // Call the original method first
        Console.WriteLine($"I am currently studying {Course}.");
    }
}`}
            caption="Reusing the base method and then adding extra behaviour"
          />

          <p>
            This is a very common and clean pattern.  
            You avoid copying the base code and still get the original behaviour.
          </p>

          <hr />

          <h2>6. Sealed Classes</h2>

          <p>
            A <code>sealed</code> class cannot be inherited by any other class.
            Once a class is sealed, the inheritance chain stops there.
          </p>

          <CodeBlock
            language="csharp"
            code={`public sealed class FinalClass
{
    public void Show()
    {
        Console.WriteLine("This class cannot be inherited.");
    }
}

// This will give a compile-time error
// public class Child : FinalClass { }`}
            caption="Sealed classes stop further inheritance"
          />

          <p><strong>When should you use sealed?</strong></p>
          <ul>
            <li>When you are sure no one should ever create a derived class from it.</li>
            <li>For security or design reasons (you want to protect the exact behaviour of the class).</li>
            <li>Sometimes for a small performance benefit (the compiler can make certain optimizations).</li>
          </ul>

          <p>
            Many classes in the .NET Framework itself are sealed (for example <code>string</code> is sealed).
          </p>

          <hr />

          <h2>7. Complete Live Example</h2>

          <p>
            Let’s put everything together with a classic Animal example.
            Follow the thinking process carefully — this is how you should design class hierarchies yourself.
          </p>

          <h3>Step-by-step thinking</h3>
          <ol>
            <li>What is common? → Every animal has a Name and can MakeSound() and Display().</li>
            <li>What is different? → Dogs have a Breed and bark. Cats meow.</li>
            <li>Which methods should be overridable? → MakeSound() and Display() because different animals behave differently.</li>
            <li>Write the base class first, then the derived classes.</li>
          </ol>

          <CodeBlock
            language="csharp"
            code={`public class Animal
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
        base.Display();                 // reuse the base version
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
a2.Display();`}
            caption="Complete example combining inheritance, constructors, overriding, and polymorphism"
          />

          <p>
            Even though <code>a1</code> and <code>a2</code> are both declared as <code>Animal</code>,
            the correct version of each method is called at runtime. That is polymorphism in action.
          </p>

          <hr />

          <h2>8. Practice Exercises</h2>

          <p>
            Try these yourself. Do not just copy code — follow the thinking steps we used above.
          </p>

          <h3>Exercise 1 — Vehicles</h3>
          <p>
            Create a base class <code>Vehicle</code> with properties <code>Brand</code> and <code>Speed</code>,
            and a virtual method <code>Start()</code>.  
            Then create two derived classes: <code>Car</code> and <code>Motorcycle</code> that override the <code>Start()</code> method
            with different messages.
          </p>
          <p><strong>How to approach it:</strong></p>
          <ol>
            <li>Write the <code>Vehicle</code> class first (Brand, Speed, virtual Start).</li>
            <li>Write <code>Car : Vehicle</code> and override <code>Start()</code>.</li>
            <li>Write <code>Motorcycle : Vehicle</code> and override <code>Start()</code>.</li>
            <li>Create objects using the base type and call <code>Start()</code> to see polymorphism.</li>
          </ol>

          <h3>Exercise 2 — Employees and Bonus</h3>
          <p>Create this hierarchy:</p>
          <ul>
            <li><code>Employee</code> (base) → Name, Salary, virtual method <code>CalculateBonus()</code></li>
            <li><code>Manager</code> → overrides <code>CalculateBonus()</code> to return 20% of salary</li>
            <li><code>Developer</code> → overrides <code>CalculateBonus()</code> to return 10% of salary</li>
          </ul>
          <p>
            Create a few objects, store them in variables of type <code>Employee</code>, and print the bonus for each.
          </p>

          <h3>Exercise 3 — Sealed Class</h3>
          <p>
            Create a sealed class called <code>MathHelper</code> with a static method that calculates the square of a number.
            Try (and fail) to inherit from it so you see the compiler error.
          </p>

          <hr />

          <h2>9. Quick Intro to List{'<'}T{'>'} (needed for the Challenge)</h2>

          <p>
            So far you have used arrays. Arrays have a fixed size.  
            <code>List{'<'}T{'>'}</code> is a flexible collection that can grow and shrink as needed.
            We only need the basics for today’s challenge.
          </p>

          <p><strong>What you need to know right now:</strong></p>
          <ul>
            <li><code>List{'<'}T{'>'}</code> lives in the <code>System.Collections.Generic</code> namespace</li>
            <li>You create it with: <code>List{'<'}Person{'>'} people = new List{'<'}Person{'>'}();</code></li>
            <li><code>Add()</code> – adds an item</li>
            <li><code>foreach</code> – loops through every item (just like an array)</li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`using System.Collections.Generic;   // required for List<>

// Create an empty list that can hold Person objects
List<Person> people = new List<Person>();

// Add objects (Student and Teacher are both Persons)
people.Add(new Student { Name = "Ali", Age = 20, Course = "C#" });
people.Add(new Teacher { Name = "Sara", Age = 35, Subject = "Math" });
people.Add(new Student { Name = "Bilal", Age = 22, Course = "Web" });

// Loop through the list and call the virtual method
foreach (Person p in people)
{
    p.Introduce();   // Polymorphism in action!
}`}
            caption="Minimal List{'<'}Person{'>'} example – this is all you need for the challenge"
          />

          <p>
            This is exactly why polymorphism is useful.  
            We store different types of people in one list and treat them the same way.
            You will learn many more List methods (Remove, Count, Contains, etc.) in Session 09.
          </p>

          <hr />

          <h2>10. Session Challenge</h2>

          <p>Build a simple School System that demonstrates everything you learned today.</p>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Base class: <code>Person</code> (Name, Age, virtual Introduce())</li>
            <li>Derived: <code>Student</code> (RollNo, Course) — override Introduce()</li>
            <li>Derived: <code>Teacher</code> (EmployeeId, Subject) — override Introduce()</li>
          </ul>

          <p>
            Create several Student and Teacher objects, store them all in a <code>List{'<'}Person{'>'}</code>,  
            then loop through the list and call <code>Introduce()</code> on each object.
          </p>

          <p><strong>Suggested order of work:</strong></p>
          <ol>
            <li>Write the <code>Person</code> base class with a virtual <code>Introduce()</code> method.</li>
            <li>Write the <code>Student</code> class and override <code>Introduce()</code>.</li>
            <li>Write the <code>Teacher</code> class and override <code>Introduce()</code>.</li>
            <li>In <code>Main</code>, create a <code>List{'<'}Person{'>'}</code> and add several objects.</li>
            <li>Use a <code>foreach</code> loop to call <code>Introduce()</code> on every item.</li>
          </ol>

          <p>
            If you can complete this challenge without looking at the earlier examples,
            you have understood inheritance and polymorphism well.
          </p>

          <hr />

          <h2>11. Session Quiz</h2>
          <ol>
            <li>What is Inheritance? Explain it using the “is-a” relationship.</li>
            <li>What symbol is used for inheritance in C#?</li>
            <li>Are private members inherited? What about protected members?</li>
            <li>What is the purpose of the <code>virtual</code> keyword?</li>
            <li>What is the purpose of the <code>override</code> keyword?</li>
            <li>What does the <code>base</code> keyword do? Give two different uses.</li>
            <li>What is a sealed class and when would you use one?</li>
            <li>What is Polymorphism? Give one practical example from today’s lesson.</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Abstract Classes and Interfaces</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
