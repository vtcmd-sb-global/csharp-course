import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session02() {
  return (
    <Layout
      title="Session 02 — Basic Building Blocks in C#"
      description="Variables, Data Types, Operators, Comments, Constants, Type Conversion and Input/Output in C#"
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

          <h1>Session 02 — Basic Building Blocks in C#</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Variables, data types, comments, constants,
            literals, string interpolation, operators, type conversion,
            user input, and basic console output.
          </p>

          <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Understand what variables are and why they are used</li>
            <li>Declare, initialize, and assign values to variables</li>
            <li>Identify and use common C# data types</li>
            <li>Understand literals and their relationship with data types</li>
            <li>Use <code>var</code> for implicitly typed variables</li>
            <li>Write single-line, multi-line, and XML documentation comments</li>
            <li>Create and use constants</li>
            <li>Use string concatenation and string interpolation</li>
            <li>Use escape characters inside strings</li>
            <li>Understand composite formatting with numbered placeholders ({0}, {1}, etc.)</li>
            <li>Understand arithmetic, assignment, comparison, and logical operators</li>
            <li>Understand increment and decrement operators</li>
            <li>Understand operator precedence</li>
            <li>Take input using <code>Console.ReadLine()</code></li>
            <li>Convert text input into numbers</li>
            <li>Understand the difference between integer and decimal division</li>
            <li>Build small console applications using these concepts together</li>
          </ul>

          <hr />

          <p>
            <strong>Note:</strong> The full detailed content of this session is temporarily
            reduced to restore a successful Docusaurus build. The complete enhanced version
            is ready and will be restored shortly.
          </p>

          <p>
            <strong>Next Session:</strong> Programming Constructs and Arrays
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
