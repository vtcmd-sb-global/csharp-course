import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session13() {
  return (
    <Layout
      title="Session 13 — Building Cross-Platform Mobile Apps Using .NET MAUI"
      description="Introduction to .NET MAUI for building cross-platform mobile applications"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 13 — Building Cross-Platform Mobile Apps Using .NET MAUI</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand .NET MAUI architecture and learn how to build cross-platform mobile applications using C# and XAML.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 13</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Describe the .NET MAUI architecture</li>
            <li>List the key features of .NET MAUI</li>
            <li>Explain the difference between Xamarin.Forms and .NET MAUI</li>
            <li>Install the required workloads for .NET MAUI</li>
            <li>Create a simple .NET MAUI project</li>
            <li>Understand the basic structure of a MAUI application</li>
            <li>Build and run a basic cross-platform app</li>
          </ul>

          <hr />

          <h2>1. What is .NET MAUI?</h2>
          <p><strong>.NET MAUI</strong> stands for <strong>.NET Multi-platform App UI</strong>.</p>
          <p>It is a modern cross-platform framework from Microsoft that allows you to build native mobile and desktop applications using C# and XAML from a single codebase.</p>

          <p>Supported platforms:</p>
          <ul>
            <li>Android</li>
            <li>iOS</li>
            <li>macOS</li>
            <li>Windows</li>
          </ul>

          <pre>
            <code>{`One Codebase  →  Runs on Android, iOS, Windows, and macOS`}</code>
          </pre>

          <hr />

          <h2>2. .NET MAUI Architecture</h2>
          <p>.NET MAUI uses a single project structure. You write UI using XAML (or C#) and business logic in C#.</p>

          <h3>Key Layers</h3>
          <ul>
            <li><strong>Application Layer</strong> – Your app code (Pages, ViewModels, Services)</li>
            <li><strong>.NET MAUI</strong> – Provides controls, layouts, navigation, etc.</li>
            <li><strong>Platform Handlers</strong> – Convert MAUI controls into native controls</li>
            <li><strong>Native Platforms</strong> – Android, iOS, Windows, macOS</li>
          </ul>

          <hr />

          <h2>3. Key Features of .NET MAUI</h2>
          <ul>
            <li>Single project structure</li>
            <li>Hot Reload support</li>
            <li>Rich collection of UI controls</li>
            <li>Support for MVVM pattern</li>
            <li>Access to native device features (Camera, GPS, Sensors, etc.)</li>
            <li>Cross-platform graphics with Microsoft.Maui.Graphics</li>
            <li>Easy deployment to multiple platforms</li>
          </ul>

          <hr />

          <h2>4. Difference: Xamarin.Forms vs .NET MAUI</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Xamarin.Forms</th>
                <th>.NET MAUI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project Structure</td>
                <td>Multiple projects</td>
                <td>Single project</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Good</td>
                <td>Better</td>
              </tr>
              <tr>
                <td>Platform Support</td>
                <td>Mobile mainly</td>
                <td>Mobile + Desktop</td>
              </tr>
              <tr>
                <td>Handlers</td>
                <td>Renderers</td>
                <td>Modern Handlers</td>
              </tr>
              <tr>
                <td>Future Support</td>
                <td>Ended</td>
                <td>Actively developed</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Setting Up the Development Environment</h2>

          <h3>Requirements</h3>
          <ul>
            <li>Visual Studio 2022 (17.3 or later recommended)</li>
            <li>.NET 7 or .NET 8 SDK</li>
            <li>Workloads to install:
              <ul>
                <li>.NET Multi-platform App UI development</li>
                <li>Mobile development with .NET</li>
              </ul>
            </li>
          </ul>

          <h3>Installation Steps</h3>
          <ol>
            <li>Open Visual Studio Installer</li>
            <li>Modify your Visual Studio installation</li>
            <li>Select the workload: <strong>.NET Multi-platform App UI development</strong></li>
            <li>Install</li>
          </ol>

          <hr />

          <h2>6. Creating Your First .NET MAUI App</h2>

          <h3>Steps</h3>
          <ol>
            <li>Open Visual Studio 2022</li>
            <li>Create a new project</li>
            <li>Select <strong>.NET MAUI App</strong></li>
            <li>Give it a name (example: MyFirstMauiApp)</li>
            <li>Choose .NET 8</li>
            <li>Click Create</li>
          </ol>

          <h3>Important Files</h3>
          <ul>
            <li><code>MauiProgram.cs</code> – Entry point of the application</li>
            <li><code>App.xaml</code> / <code>App.xaml.cs</code> – Application level resources and logic</li>
            <li><code>MainPage.xaml</code> / <code>MainPage.xaml.cs</code> – Main user interface</li>
            <li><code>Platforms</code> folder – Platform-specific code</li>
            <li><code>Resources</code> folder – Images, fonts, styles, etc.</li>
          </ul>

          <hr />

          <h2>7. Basic XAML Example</h2>

          <pre>
            <code>{`<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MyFirstMauiApp.MainPage">

    <VerticalStackLayout Padding="30" Spacing="20">

        <Label Text="Welcome to .NET MAUI"
               FontSize="24"
               HorizontalOptions="Center" />

        <Entry x:Name="nameEntry"
               Placeholder="Enter your name" />

        <Button Text="Greet Me"
                Clicked="OnGreetClicked" />

        <Label x:Name="resultLabel"
               FontSize="18"
               HorizontalOptions="Center" />

    </VerticalStackLayout>
</ContentPage>`}</code>
          </pre>

          <h3>Code-Behind</h3>
          <pre>
            <code>{`private void OnGreetClicked(object sender, EventArgs e)
{
    string name = nameEntry.Text;
    resultLabel.Text = $"Hello, {name}! Welcome to .NET MAUI.";
}`}</code>
          </pre>

          <hr />

          <h2>8. Running the Application</h2>
          <ul>
            <li>Select target platform (Windows Machine / Android Emulator / iOS Simulator)</li>
            <li>Press F5 or click the Run button</li>
            <li>The app will build and launch on the selected platform</li>
          </ul>

          <hr />

          <h2>9. Simple Live Example – Counter App</h2>

          <pre>
            <code>{`// MainPage.xaml
<VerticalStackLayout Padding="30" Spacing="25">
    <Label Text="Counter App"
           FontSize="28"
           HorizontalOptions="Center" />

    <Label x:Name="counterLabel"
           Text="0"
           FontSize="48"
           HorizontalOptions="Center" />

    <Button Text="Increase"
            Clicked="OnIncreaseClicked" />

    <Button Text="Reset"
            Clicked="OnResetClicked" />
</VerticalStackLayout>`}</code>
          </pre>

          <pre>
            <code>{`// MainPage.xaml.cs
int count = 0;

private void OnIncreaseClicked(object sender, EventArgs e)
{
    count++;
    counterLabel.Text = count.ToString();
}

private void OnResetClicked(object sender, EventArgs e)
{
    count = 0;
    counterLabel.Text = "0";
}`}</code>
          </pre>

          <hr />

          <h2>10. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a .NET MAUI app that takes two numbers and displays their sum when a button is clicked.</p>

          <h3>Exercise 2</h3>
          <p>Create a simple login page with Username and Password fields. Show a success or failure message.</p>

          <h3>Exercise 3</h3>
          <p>Build a basic Tip Calculator app.</p>

          <hr />

          <h2>11. Session Challenge</h2>
          <p>Create a complete <strong>Student Information App</strong> using .NET MAUI that:</p>
          <ul>
            <li>Has fields for Name, Age, and Course</li>
            <li>Has a Submit button</li>
            <li>Displays the entered information in a clean format</li>
            <li>Uses proper layout (VerticalStackLayout / Grid)</li>
          </ul>

          <hr />

          <h2>12. Session Quiz</h2>
          <ol>
            <li>What does MAUI stand for?</li>
            <li>Which platforms does .NET MAUI support?</li>
            <li>What is the main advantage of .NET MAUI?</li>
            <li>What is the difference between Xamarin.Forms and .NET MAUI?</li>
            <li>Which file is the entry point of a MAUI application?</li>
            <li>What is XAML used for in MAUI?</li>
            <li>Name any three controls available in .NET MAUI.</li>
            <li>What is Hot Reload?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> .NET Development and the Future</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
