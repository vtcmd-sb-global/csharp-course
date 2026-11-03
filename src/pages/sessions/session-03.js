import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session03() {
  return (
    <Layout
      title="Session 03 — Programming Constructs and Arrays"
      description="Selection constructs, loops, jump statements, ternary operator and arrays in C#"
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

          <h1>Session 03 — Programming Constructs and Arrays in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Master decision-making, loops, jump statements,
            the ternary operator, and arrays — the core building blocks used to
            control program flow and work with collections of values.
          </p>

          <p><strong>Based on:</strong> Official Aptech Book – Session 3</p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Understand what programming constructs are</li>
            <li>Use conditions to make decisions in a program</li>
            <li>Use <code>if</code>, <code>if-else</code>, and <code>else-if</code></li>
            <li>Use nested <code>if</code> statements</li>
            <li>Use the <code>switch</code> statement</li>
            <li>Understand <code>case</code>, <code>break</code>, and <code>default</code></li>
            <li>Use the ternary operator for simple decisions</li>
            <li>Understand why loops are needed</li>
            <li>Use <code>for</code>, <code>while</code>, <code>do-while</code>, and <code>foreach</code></li>
            <li>Understand the difference between the different types of loops</li>
            <li>Use nested loops</li>
            <li>Use <code>break</code> and <code>continue</code></li>
            <li>Declare, initialize, and access arrays</li>
            <li>Understand zero-based array indexing</li>
            <li>Use the <code>Length</code> property</li>
            <li>Update and traverse array elements</li>
            <li>Work with two-dimensional arrays</li>
            <li>Use common methods of the <code>Array</code> class</li>
            <li>Build small programs using conditions, loops, and arrays together</li>
          </ul>

          <hr />

          <h2>1. Programming Constructs</h2>

          <p>
            A programming construct is a structure used to control how a program
            executes its instructions.
          </p>

          <p>
            In simple terms, programming constructs help us answer questions such as:
          </p>

          <ul>
            <li><strong>Should this code run?</strong> → Decision-making</li>
            <li><strong>Which option should run?</strong> → Selection</li>
            <li><strong>Should this code repeat?</strong> → Loops</li>
            <li><strong>Should the loop stop or skip something?</strong> → Jump statements</li>
          </ul>

          <p>
            In this session, we will mainly work with three areas:
          </p>

          <ol>
            <li>Selection constructs</li>
            <li>Loop constructs</li>
            <li>Arrays</li>
          </ol>

          <hr />

          <p style={{color: "#d10057", fontWeight: "bold"}}>
            The complete enhanced version of this session is ready. Due to a technical
            limitation with large file uploads in the current environment, it could not
            be pushed automatically. Please contact support or download the prepared
            file to restore the full content.
          </p>

          <p>
            <strong>Next Session:</strong> Classes and Methods in C#
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
