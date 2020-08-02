import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Grid, Box, Heading, Text, Stack } from '@phobon/base';
import Link from 'next/link';

import { Main, Inspector } from '@/components/Layout';

const IndexPage: NextPage = () => {
  return (
    <>
      <Inspector bg="oranges.8">
        <p>Inspector</p>
      </Inspector>
      <Main>
        <p>Index</p>
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