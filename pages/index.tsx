import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Grid, Box, Heading, Text, Stack } from '@phobon/base';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Main, Inspector } from '@/components/Layout';
import { useTextures } from '@/hooks/useTextures';

const Scape = dynamic(() => 
  import('../components/Scape').then((mod) => mod.Scape),
  { ssr: false },
);
const VerticalLerpPlane = dynamic(() => 
  import('../components/Planes').then((mod) => mod.VerticalLerpPlane),
  { ssr: false },
);
const userTextures = dynamic(() => 
  import('../hooks/useTextures').then((mod) => mod.useTextures),
  { ssr: false },
);

const IndexPage: NextPage = () => {
  const [img] = useTextures(['https://source.unsplash.com/random/1280x1024']);
  return (
    <>
      <Inspector>
        <p>Inspector</p>
      </Inspector>
      <Main>
        <Scape>
          <VerticalLerpPlane map={img} args={[1, 1, 32, 32]} size={size} scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} frustumCulled={false} />
        </Scape>
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