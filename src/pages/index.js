import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import Homepage from '@site/src/components/Homepage/home';

export default function Home() {
  return (
    <Layout
      title="Proficient Programming with C#"
      description="C# Course from Beginner to Advanced">
      {/* <Homepage /> */}

      <CustomLayout>
        <Homepage />
      </CustomLayout>
    </Layout>
  );
}