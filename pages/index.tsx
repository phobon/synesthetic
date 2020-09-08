import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { Inspector, Status } from '@/components/Layout';

const Scape = dynamic(() => 
  import('../components/Scape').then((mod) => mod.Scape),
  { ssr: false },
);
const Journey = dynamic(() => 
  import('../components/Scape/Journey').then((mod) => mod.Journey),
  { ssr: false },
);

const IndexPage: NextPage = () => {
  // These props can basically be anything that you want for a particular Scape
  const props = {
    images: ['https://source.unsplash.com/random/1280x1024'],
  };
  return (
    <Scape>
      <Journey {...props} />
    </Scape>
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