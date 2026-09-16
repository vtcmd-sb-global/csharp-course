import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session14() {
  return (
    <Layout
      title="Session 14 — .NET Development and the Future"
      description=".NET Core, Modern .NET, .NET 8 and the Future of .NET Development"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 14 — .NET Development and the Future</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand the evolution of .NET, modern .NET platform, and future directions.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 14</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what .NET Core is</li>
            <li>Understand the history and evolution of .NET</li>
            <li>Identify differences between .NET Framework and modern .NET</li>
            <li>Describe key features of .NET 7 and .NET 8</li>
            <li>Create a simple application using modern .NET</li>
            <li>Understand the future direction of .NET development</li>
          </ul>

          <hr />

          <h2>1. Introduction to .NET Core</h2>
          <p>.NET Core is an open-source, cross-platform, and high-performance framework developed by Microsoft. It was designed to overcome the limitations of the old .NET Framework.</p>

          <p>Key goals of .NET Core:</p>
          <ul>
            <li>Cross-platform support (Windows, Linux, macOS)</li>
            <li>High performance</li>
            <li>Open-source development</li>
            <li>Side-by-side versioning</li>
            <li>Modern cloud and microservices support</li>
          </ul>

          <hr />

          <h2>2. History of .NET</h2>

          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Version</th>
                <th>Key Highlight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2002</td>
                <td>.NET Framework 1.0</td>
                <td>First release</td>
              </tr>
              <tr>
                <td>2005–2019</td>
                <td>.NET Framework 2.0 to 4.8</td>
                <td>Windows-only, mature ecosystem</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>.NET Core 1.0</td>
                <td>Cross-platform begins</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>.NET Core 3.1</td>
                <td>Long-term support (LTS)</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>.NET 5</td>
                <td>Unification starts</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>.NET 6</td>
                <td>LTS + major improvements</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>.NET 7</td>
                <td>Performance focus</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>.NET 8</td>
                <td>Current LTS version</td>
              </tr>
              <tr>
                <td>2024–2025</td>
                <td>.NET 9 / 10</td>
                <td>Future releases</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. .NET Framework vs Modern .NET</h2>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>.NET Framework</th>
                <th>Modern .NET (.NET 5+)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platform</td>
                <td>Windows only</td>
                <td>Windows, Linux, macOS</td>
              </tr>
              <tr>
                <td>Open Source</td>
                <td>Limited</td>
                <td>Fully open source</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Good</td>
                <td>Much better</td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>Framework dependent</td>
                <td>Self-contained possible</td>
              </tr>
              <tr>
                <td>Side-by-side</td>
                <td>Difficult</td>
                <td>Easy</td>
              </tr>
              <tr>
                <td>Future Development</td>
                <td>Stopped</td>
                <td>Actively developed</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Key Features of Modern .NET (.NET 7 & .NET 8)</h2>

          <h3>.NET 7 Highlights</h3>
          <ul>
            <li>Major performance improvements</li>
            <li>Better support for cloud-native applications</li>
            <li>Improvements in minimal APIs</li>
            <li>Enhanced Native AOT (Ahead-of-Time compilation)</li>
          </ul>

          <h3>.NET 8 Highlights (Current LTS)</h3>
          <ul>
            <li>Long-Term Support (LTS) until November 2026</li>
            <li>Significant performance gains</li>
            <li>Improved ASP.NET Core and Blazor</li>
            <li>Better container support</li>
            <li>Enhanced .NET MAUI</li>
            <li>New AI and cloud features</li>
            <li>Better tooling in Visual Studio 2022</li>
          </ul>

          <hr />

          <h2>5. Creating an Application with Modern .NET</h2>

          <h3>Using Visual Studio 2022</h3>
          <ol>
            <li>Open Visual Studio 2022</li>
            <li>Create a new project</li>
            <li>Select <strong>Console App</strong> or <strong>ASP.NET Core Web API</strong></li>
            <li>Choose .NET 8</li>
            <li>Click Create</li>
          </ol>

          <h3>Using Command Line</h3>
          <pre>
            <code>{`# Create a new console application
dotnet new console -n MyApp

# Move into the folder
cd MyApp

# Run the application
dotnet run

# Create a Web API
dotnet new webapi -n MyWebApi`}</code>
          </pre>

          <hr />

          <h2>6. Self-Contained Deployment</h2>
          <p>Modern .NET allows you to publish an application as self-contained so that the target machine does not need .NET installed.</p>

          <pre>
            <code>{`dotnet publish -c Release -r win-x64 --self-contained true`}</code>
          </pre>

          <hr />

          <h2>7. The Future of .NET</h2>
          <p>Microsoft continues to invest heavily in .NET. Future directions include:</p>

          <ul>
            <li>Even better performance</li>
            <li>Stronger focus on cloud and AI integration</li>
            <li>Improved support for microservices and containers</li>
            <li>Better cross-platform desktop and mobile development (.NET MAUI)</li>
            <li>More features for Blazor and full-stack web development</li>
            <li>Continued open-source collaboration</li>
          </ul>

          <p><strong>Recommendation for students:</strong></p>
          <ul>
            <li>Always prefer modern .NET (.NET 8 or later) for new projects</li>
            <li>Learn ASP.NET Core for web development</li>
            <li>Explore .NET MAUI for mobile/desktop</li>
            <li>Practice cloud deployment (Azure)</li>
          </ul>

          <hr />

          <h2>8. Complete Course Summary</h2>
          <p>Throughout this course you have learned:</p>
          <ul>
            <li>C# Fundamentals</li>
            <li>Object-Oriented Programming</li>
            <li>Inheritance, Polymorphism, Interfaces</li>
            <li>Properties, Indexers, Records</li>
            <li>Exception Handling & Namespaces</li>
            <li>Delegates, Events, Collections</li>
            <li>Generics and Iterators</li>
            <li>Windows Forms + SQL Server Connectivity</li>
            <li>Advanced C# features (Lambda, LINQ, Extension Methods)</li>
            <li>.NET MAUI for cross-platform apps</li>
            <li>Modern .NET platform and its future</li>
          </ul>

          <hr />

          <h2>9. Practice & Recommendations</h2>
          <ul>
            <li>Build small projects using Console, Windows Forms, and ASP.NET Core</li>
            <li>Practice database connectivity with SQL Server</li>
            <li>Explore Blazor and .NET MAUI</li>
            <li>Learn basic Git and GitHub</li>
            <li>Stay updated with official Microsoft .NET documentation</li>
          </ul>

          <hr />

          <h2>10. Session Quiz</h2>
          <ol>
            <li>What is .NET Core?</li>
            <li>What is the main difference between .NET Framework and modern .NET?</li>
            <li>Which version of .NET is the current LTS?</li>
            <li>What does LTS mean?</li>
            <li>Can modern .NET applications run on Linux?</li>
            <li>What is self-contained deployment?</li>
            <li>Name any three features of .NET 8.</li>
            <li>Why should new projects use modern .NET instead of .NET Framework?</li>
          </ol>

          <hr />

          <h2>Congratulations!</h2>
          <p>You have successfully completed the complete C# and .NET course based on the official Aptech curriculum.</p>

          <p>Keep practicing, build projects, and continue learning. The journey of a developer never ends.</p>

          <p><strong>Best of luck for your future!</strong></p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
