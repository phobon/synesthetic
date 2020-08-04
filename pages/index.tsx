import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Grid, Box, Heading, Text, Stack } from '@phobon/base';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicScape = dynamic(() => 
  import('../components/Scape').then((mod) => mod.Scape),
  { ssr: false },
);

import { Main, Inspector } from '@/components/Layout';

const IndexPage: NextPage = () => {
  return (
    <>
      <Inspector>
        <p>Inspector</p>
      </Inspector>
      <Main>
        <DynamicScape />
      </Main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//   };
// };

export default IndexPage;