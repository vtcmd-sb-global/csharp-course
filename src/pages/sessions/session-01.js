import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session01() {
  return (
    <Layout
      title="Session 01 — Getting Started with C#"
      description="Getting Started with C# — .NET Framework, Visual Studio, and your first C# program"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 01 — Getting Started with C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand .NET, set up the development environment, and write your first C# programs.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 1</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and describe the .NET Framework</li>
            <li>Explain the main components of .NET</li>
            <li>Understand the difference between .NET Framework and modern .NET</li>
            <li>Identify different editions of Visual Studio</li>
            <li>Create and run a C# console application</li>
            <li>Understand the basic structure of a C# program</li>
            <li>Use <code>Console.WriteLine()</code> and <code>Console.ReadLine()</code></li>
          </ul>

          <hr />

          <h2>1. What is .NET?</h2>
          <p>.NET is a free, open-source, cross-platform development platform created by Microsoft. It is used to build many types of applications:</p>
          <ul>
            <li>Console applications</li>
            <li>Desktop applications (Windows Forms, WPF)</li>
            <li>Web applications (ASP.NET Core)</li>
            <li>Mobile applications (.NET MAUI)</li>
            <li>Cloud and microservices</li>
            <li>Games, IoT, and more</li>
          </ul>

          <pre>
            <code>{`C#     = Programming Language
.NET   = Platform / Runtime / Libraries that run the C# code`}</code>
          </pre>

          <h3>Important Versions</h3>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.NET Framework 4.8</td>
                <td>Old Windows-only version (still used in many companies)</td>
              </tr>
              <tr>
                <td>.NET 6 / 7 / 8 / 9</td>
                <td>Modern, cross-platform version (recommended)</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>2. Visual Studio 2022</h2>
          <p>Visual Studio is the main IDE (Integrated Development Environment) used for C# development.</p>

          <h3>Common Editions</h3>
          <ul>
            <li><strong>Community</strong> – Free for students and individual developers</li>
            <li><strong>Professional</strong> – Paid</li>
            <li><strong>Enterprise</strong> – Paid (full features)</li>
          </ul>

          <p>For this course we will use <strong>Visual Studio 2022 Community</strong>.</p>

          <hr />

          <h2>3. Creating Your First C# Application</h2>

          <h3>Steps in Visual Studio</h3>
          <ol>
            <li>Open Visual Studio 2022</li>
            <li>Click <strong>Create a new project</strong></li>
            <li>Select <strong>Console App</strong></li>
            <li>Choose language: <strong>C#</strong></li>
            <li>Give a name (example: <code>FirstProgram</code>)</li>
            <li>Select a recent .NET version (preferably .NET 8)</li>
            <li>Click <strong>Create</strong></li>
          </ol>

          <h3>Modern Program.cs (Default)</h3>
          <pre>
            <code>{`// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");`}</code>
          </pre>

          <h3>Traditional Style (Older)</h3>
          <pre>
            <code>{`using System;

namespace FirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`}</code>
          </pre>

          <p>Both styles work. Modern C# uses <strong>top-level statements</strong> (no need to write <code>Main</code> method explicitly).</p>

          <hr />

          <h2>4. Basic Input and Output</h2>

          <h3>Output</h3>
          <pre>
            <code>{`Console.WriteLine("Welcome to C# Programming");
Console.Write("This stays on the same line");
Console.WriteLine(" → now it moves to next line");`}</code>
          </pre>

          <h3>Input</h3>
          <pre>
            <code>{`Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.WriteLine("Hello " + name);
// or better
Console.WriteLine($"Hello {name}");`}</code>
          </pre>

          <hr />

          <h2>5. Live Coding Practice</h2>

          <h3>Exercise 1 – Simple Introduction</h3>
          <p>Write a program that asks for:</p>
          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>City</li>
          </ul>
          <p>Then displays a nice message.</p>

          <pre>
            <code>{`Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.Write("Enter your age: ");
string age = Console.ReadLine();

Console.Write("Enter your city: ");
string city = Console.ReadLine();

Console.WriteLine();
Console.WriteLine("===== Student Information =====");
Console.WriteLine($"Name : {name}");
Console.WriteLine($"Age  : {age}");
Console.WriteLine($"City : {city}");
Console.WriteLine("================================");`}</code>
          </pre>

          <hr />

          <h2>6. Session Challenge</h2>
          <p>Create a program that:</p>
          <ol>
            <li>Asks the user for their full name</li>
            <li>Asks for their favorite programming language</li>
            <li>Displays a welcome message in this format:</li>
          </ol>

          <pre>
            <code>{`Welcome Ali!
You are learning C#.
Have a great journey in programming!`}</code>
          </pre>

          <hr />

          <h2>7. Session Quiz</h2>
          <ol>
            <li>What is .NET?</li>
            <li>What is the difference between .NET Framework and modern .NET?</li>
            <li>Which edition of Visual Studio is free for students?</li>
            <li>What does <code>Console.WriteLine()</code> do?</li>
            <li>What does <code>Console.ReadLine()</code> return?</li>
            <li>What is a top-level statement?</li>
            <li>Why do modern C# projects often have only <code>Program.cs</code>?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Basic Building Blocks in C# (Variables, Data Types, Operators, Comments)</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}



// import React from 'react';
// import Layout from '@theme/Layout';
// import CustomLayout from '@site/src/components/Layout/Layout';

// export default function Session01() {
//   return (
//     <Layout
//       title="Session 01 — C# Fundamentals"
//       description="C# & .NET Fundamentals"
//     >
//       <CustomLayout>
//         <article className="session-content">
//           <h1>Session 01 — C# Fundamentals</h1>

//           <p><strong>Duration:</strong> 2 hours</p>
//           <p><strong>Focus:</strong> Getting comfortable creating and running your first C# programs.</p>

//           <hr />

//           <h2>Learning Objectives</h2>
//           <p>By the end of this session, you should understand:</p>
//           <ul>
//             <li>What C# is</li>
//             <li>What .NET is</li>
//             <li>What a console application is</li>
//             <li>Basic C# program structure</li>
//             <li>Project files and folders you get when you create a new project</li>
//             <li>Why older projects had Startup.cs + Program.cs and modern ones usually have only Program.cs</li>
//             <li>Why modern Program.cs has no explicit Main() method</li>
//             <li>using</li>
//             <li>Classes</li>
//             <li>Main() (and the modern alternative)</li>
//             <li>Statements</li>
//             <li>Comments</li>
//             <li>Console.WriteLine()</li>
//             <li>Console.ReadLine()</li>
//             <li>Basic input and output</li>
//           </ul>

//           <hr />

//           <h2>1. What is C#?</h2>
//           <p>
//             C# (pronounced <strong>C Sharp</strong>) is a modern, strongly typed,
//             object-oriented programming language developed by Microsoft.
//           </p>

//           <p>C# is commonly used for:</p>
//           <ul>
//             <li>Web applications</li>
//             <li>Desktop applications</li>
//             <li>REST APIs</li>
//             <li>Enterprise software</li>
//             <li>Games</li>
//             <li>Cloud applications</li>
//             <li>Automation tools</li>
//             <li>Backend systems</li>
//           </ul>

//           <p>Examples of technologies commonly used with C# include:</p>
//           <ul>
//             <li>.NET</li>
//             <li>ASP.NET Core</li>
//             <li>Entity Framework Core</li>
//             <li>SQL Server</li>
//             <li>Blazor</li>
//             <li>MAUI</li>
//           </ul>

//           <hr />

//           <h2>2. What is .NET?</h2>
//           <p>
//             .NET is the development platform/runtime used to build and run
//             applications written in languages such as C#.
//           </p>

//           <p>A simple way to explain it:</p>
//           <pre>
//             <code>{`C#   = Programming Language
// .NET = Platform that provides the tools/runtime/libraries to build and run applications`}</code>
//           </pre>

//           <p>You do <strong>not</strong> need to memorize the internal architecture yet.</p>

//           <hr />

//           <h2>3. Create Your First Console Application</h2>

//           <h3>Using Visual Studio</h3>
//           <ol>
//             <li>Open Visual Studio.</li>
//             <li>Select <strong>Create a new project</strong>.</li>
//             <li>Select <strong>Console App</strong>.</li>
//             <li>Choose <strong>C#</strong>.</li>
//             <li>
//               Give the project a name such as:
//               <pre><code>CSharpSession1</code></pre>
//             </li>
//           </ol>

//           <p><strong>On the Additional information screen:</strong></p>
//           <ul>
//             <li>Choose a recent .NET version (e.g., .NET 8 or .NET 9 / 10).</li>
//             <li>Leave “Do not use top-level statements” <strong>unchecked</strong> (this is the modern default).</li>
//             <li>Click <strong>Create</strong>.</li>
//             <li>Run the application (green play button or <code>Ctrl + F5</code>).</li>
//           </ul>

//           <h3>What files and folders do you get?</h3>
//           <p>
//             When Visual Studio (or the <code>dotnet new console</code> command) creates a modern console project, you typically see a structure like this:
//           </p>

//           <pre>
//             <code>{`CSharpSession1/                  ← Solution folder
// │
// ├── CSharpSession1.sln           ← Solution file (groups one or more projects)
// │
// └── CSharpSession1/              ← Project folder
//     ├── CSharpSession1.csproj    ← Project file (settings, target framework, packages)
//     ├── Program.cs               ← Your main source code file
//     ├── bin/                     ← Compiled output (created when you build/run)
//     └── obj/                     ← Temporary build files (created when you build/run)`}</code>
//           </pre>

//           <h3>Quick explanation of the important items</h3>
//           <ul>
//             <li><code>.sln</code> → Solution file. A solution can contain multiple projects.</li>
//             <li><code>.csproj</code> → Project file. Tells the compiler which .NET version to use, which packages to include, etc.</li>
//             <li><code>Program.cs</code> → The file that contains the code that runs when you start the program.</li>
//             <li><code>bin/</code> and <code>obj/</code> → Automatically generated folders. You almost never edit these by hand.</li>
//           </ul>

//           <p>You will also see some settings enabled by default in modern projects:</p>
//           <ul>
//             <li><strong>Implicit usings</strong> – common namespaces like <code>System</code> are imported automatically.</li>
//             <li><strong>Nullable reference types</strong> – helps catch null-related bugs earlier.</li>
//           </ul>

//           <hr />

//           <h2>Older style vs Modern style (very important)</h2>

//           <h3>Older C# / .NET (before .NET 6)</h3>
//           <p>Program.cs looked roughly like this:</p>
//           <pre>
//             <code>{`using System;

// namespace CSharpSession1
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             Console.WriteLine("Hello, World!");
//         }
//     }
// }`}</code>
//           </pre>

//           <ul>
//             <li>There is an explicit class called <code>Program</code>.</li>
//             <li>There is an explicit entry-point method called <code>Main()</code>.</li>
//             <li>The program always starts executing from <code>Main()</code>.</li>
//           </ul>

//           <h3>Modern C# (.NET 6 and later – the default today)</h3>
//           <p>Program.cs now looks like this:</p>
//           <pre>
//             <code>{`// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");`}</code>
//           </pre>

//           <p>or simply:</p>
//           <pre>
//             <code>{`Console.WriteLine("Hello, World!");`}</code>
//           </pre>

//           <h3>What happened to Main() and the class?</h3>
//           <p>
//             C# 9 introduced <strong>top-level statements</strong>.
//             The compiler automatically generates a hidden <code>Program</code> class and a <code>Main</code> method for you.
//             You only write the code that would have been inside <code>Main()</code>.
//           </p>
//           <p>
//             This removes a lot of “boilerplate” so beginners can start writing useful code faster.
//             Both styles still work. The modern style is just shorter and is the default today.
//           </p>

//           <hr />

//           <h2>What about Startup.cs?</h2>
//           <p>
//             You may have seen older tutorials or projects that had two files:
//           </p>
//           <ul>
//             <li><code>Program.cs</code></li>
//             <li><code>Startup.cs</code></li>
//           </ul>

//           <p>
//             This was common in <strong>ASP.NET Core web applications</strong> (not pure console apps) before .NET 6.
//           </p>

//           <p>Starting with .NET 6, Microsoft introduced the <strong>minimal hosting model</strong>:</p>
//           <ul>
//             <li>Everything is now written in a single <code>Program.cs</code> file using top-level statements.</li>
//             <li><code>Startup.cs</code> is no longer generated by default.</li>
//           </ul>

//           <hr />

//           <h2>4. Hello World</h2>

//           <p>A traditional (older-style) C# console application looks like this:</p>
//           <pre>
//             <code>{`using System;

// class Program
// {
//     static void Main()
//     {
//         Console.WriteLine("Hello World");
//     }
// }`}</code>
//           </pre>

//           <p>A modern C# console application (what Visual Studio creates by default) looks like this:</p>
//           <pre>
//             <code>{`Console.WriteLine("Hello World");`}</code>
//           </pre>

//           <p>Both produce exactly the same result.</p>

//           <h3>Explanation</h3>
//           <ul>
//             <li><code>using System;</code> → Imports the System namespace so we can use classes such as Console.</li>
//             <li><code>class Program</code> → Defines a class called Program (older style only).</li>
//             <li><code>static void Main()</code> → This is the entry point of the traditional console application.</li>
//             <li><code>Console.WriteLine()</code> → Displays text on the console and moves the cursor to the next line.</li>
//           </ul>

//           <hr />

//           <h2>5. Printing Multiple Lines</h2>
//           <pre>
//             <code>{`Console.WriteLine("Welcome to C#");
// Console.WriteLine("My name is Ali");
// Console.WriteLine("I am learning programming");`}</code>
//           </pre>

//           <p><strong>Output:</strong></p>
//           <pre>
//             <code>{`Welcome to C#
// My name is Ali
// I am learning programming`}</code>
//           </pre>

//           <hr />

//           <h2>6. Write vs WriteLine</h2>

//           <h3>WriteLine</h3>
//           <pre>
//             <code>{`Console.WriteLine("Hello");
// Console.WriteLine("World");`}</code>
//           </pre>
//           <p><strong>Output:</strong></p>
//           <pre>
//             <code>{`Hello
// World`}</code>
//           </pre>

//           <h3>Write</h3>
//           <pre>
//             <code>{`Console.Write("Hello ");
// Console.Write("World");`}</code>
//           </pre>
//           <p><strong>Output:</strong></p>
//           <pre>
//             <code>{`Hello World`}</code>
//           </pre>

//           <hr />

//           <h2>7. Comments</h2>
//           <p>Comments are always ignored by the compiler.</p>

//           <h3>Single-line comment</h3>
//           <pre>
//             <code>{`// This is a comment
// Console.WriteLine("Hello");`}</code>
//           </pre>

//           <h3>Multi-line comment</h3>
//           <pre>
//             <code>{`/*
//     This is a
//     multi-line comment
// */
// Console.WriteLine("Hello");`}</code>
//           </pre>

//           <blockquote>
//             <strong>Tip:</strong> Use comments to explain <em>why</em> something is done, not every obvious line.
//           </blockquote>

//           <hr />

//           <h2>8. Taking Input</h2>
//           <p><code>Console.ReadLine()</code> reads input entered by the user.</p>

//           <pre>
//             <code>{`Console.Write("Enter your name: ");
// string name = Console.ReadLine();
// Console.WriteLine("Hello " + name);`}</code>
//           </pre>

//           <p><strong>Example:</strong></p>
//           <pre>
//             <code>{`Enter your name: Ali
// Hello Ali`}</code>
//           </pre>

//           <hr />

//           <h2>9. String Interpolation</h2>
//           <p>Instead of:</p>
//           <pre>
//             <code>{`Console.WriteLine("Hello " + name);`}</code>
//           </pre>

//           <p>we can use:</p>
//           <pre>
//             <code>{`Console.WriteLine($"Hello {name}");`}</code>
//           </pre>

//           <p>This is called <strong>string interpolation</strong>.</p>

//           <pre>
//             <code>{`string name = "Ali";
// int age = 20;
// Console.WriteLine($"My name is {name} and I am {age} years old.");`}</code>
//           </pre>

//           <p><strong>Output:</strong></p>
//           <pre>
//             <code>{`My name is Ali and I am 20 years old.`}</code>
//           </pre>

//           <hr />

//           <h2>10. Basic Student Exercise</h2>
//           <p>Create a program that asks the user for:</p>
//           <ul>
//             <li>Name</li>
//             <li>Age</li>
//             <li>City</li>
//             <li>Course</li>
//           </ul>

//           <p>Then display:</p>
//           <pre>
//             <code>{`===== Student Information =====
// Name: Ali
// Age: 20
// City: Karachi
// Course: C#
// ================================`}</code>
//           </pre>

//           <hr />

//           <h2>11. Session 1 Challenge</h2>
//           <p>Create a simple Introduction Program.</p>

//           <p><strong>Input:</strong></p>
//           <pre>
//             <code>{`Enter your name:
// Enter your age:
// Enter your favorite programming language:
// Enter your city:`}</code>
//           </pre>

//           <p><strong>Output:</strong></p>
//           <pre>
//             <code>{`My name is Ali.
// I am 20 years old.
// My favorite programming language is C#.
// I live in Karachi.`}</code>
//           </pre>

//           <hr />

//           <h2>Session 1 Quiz</h2>
//           <ol>
//             <li>What is C#?</li>
//             <li>What is .NET?</li>
//             <li>What does Console.WriteLine() do?</li>
//             <li>What does Console.ReadLine() do?</li>
//             <li>What is a class?</li>
//             <li>What is the purpose of Main()? (And what replaced it in modern C#?)</li>
//             <li>What is a comment?</li>
//             <li>What is the difference between Write() and WriteLine()?</li>
//             <li>What is string interpolation?</li>
//             <li>What symbol is used for a single-line comment?</li>
//             <li>Name the main files/folders you get when you create a new console project.</li>
//             <li>Why do modern projects often have only Program.cs instead of both Program.cs and Startup.cs?</li>
//           </ol>
          
//           <hr />

//           <p><strong>Next up (Session 02):</strong> Variables & Datatypes.</p>
//         </article>
//       </CustomLayout>
//     </Layout>
//   );
// }
