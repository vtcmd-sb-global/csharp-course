import React from "react";
import Link from "@docusaurus/Link";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header / Nav can be handled by your layout */}
      <main>
        <h1>Proficient Programming with C#</h1>

        <p>
          Welcome to the <strong>C# (C-Sharp) Course</strong>.
        </p>

        <p>
          This course takes you from C# fundamentals to advanced C# and
          professional application development.
        </p>

        {/* Course Levels */}
        <section>
          <h2>Course Levels</h2>

          <h3>Beginner</h3>
          <ul>
            <li>C# Fundamentals</li>
            <li>Variables</li>
            <li>Data Types</li>
            <li>Operators</li>
            <li>Conditions</li>
            <li>Loops</li>
            <li>Methods</li>
            <li>Arrays</li>
            <li>Collections</li>
          </ul>

          <h3>Intermediate</h3>
          <ul>
            <li>Classes</li>
            <li>Objects</li>
            <li>Constructors</li>
            <li>Properties</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Interfaces</li>
          </ul>

          <h3>Advanced</h3>
          <ul>
            <li>Generics</li>
            <li>Delegates</li>
            <li>Lambda Expressions</li>
            <li>LINQ</li>
            <li>Exception Handling</li>
            <li>JSON</li>
            <li>Async/Await</li>
            <li>SQL Server</li>
            <li>ASP.NET Core Web API</li>
            <li>Dependency Injection</li>
            <li>SOLID Principles</li>
          </ul>
        </section>

        <hr />

        {/* Sessions */}
        <section>
          <h2>Sessions</h2>
          <p>Start with:</p>
          <ul>
            <li>
              <Link to="/sessions/session-01">
                Session 01 — C# Fundamentals
              </Link>
            </li>

            <li>
              <Link to="/sessions/session-02">
                Session 02 — Variables &amp; Data Types
              </Link>
            </li>

            <li>
              <Link to="/sessions/session-03">
                Session 03 — Conditions
              </Link>
            </li>

            <li>
              <Link to="/sessions/session-04">
                Session 04 — Loops &amp; Iterations
              </Link>
            </li>

            <li>
              <Link to="/sessions/session-05">
                Session 05 — Methods, Parameters &amp; Recursion
              </Link>
            </li>
          <li>
              <Link to="/sessions/session-06">
                Session 06 — Array & Strings
              </Link>
            </li>
          <li>
              <Link to="/sessions/session-07">
                Session 07 — Advanced Parameters, Tuples & Exception Handling
              </Link>
          </li>
          <li>
              <Link to="/sessions/session-08">
                Session 08 — Classes, Objects, Fields, Properties, Constructors & Encapsulation
              </Link>
          </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
