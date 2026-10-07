import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session01() {
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
      title="Session 01 — Getting Started with C#"
      description="Getting Started with C# — .NET Framework, Visual Studio, and your first C# program"
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

          <pre style="codeBlockStyle">
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
          <pre style="codeBlockStyle">
            <code>{`// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");`}</code>
          </pre>

          <h3>Traditional Style (Older)</h3>
          <pre style="codeBlockStyle">
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
          <pre style="codeBlockStyle">
            <code>{`Console.WriteLine("Welcome to C# Programming");
Console.Write("This stays on the same line");
Console.WriteLine(" → now it moves to next line");`}</code>
          </pre>

          <h3>Input</h3>
          <pre style="codeBlockStyle">
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

          <pre style="codeBlockStyle">
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

          <pre style="codeBlockStyle">
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
