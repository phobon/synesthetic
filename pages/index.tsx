import React, { useEffect } from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const Scape = dynamic(
  () => import('../components/Scape').then((mod) => mod.Scape),
  { ssr: false }
)
const Canvas: any = dynamic(
  () => import('../components/Canvas').then((mod) => mod.Canvas),
  { ssr: false }
)

const IndexPage: NextPage = () => {
  // These props can basically be anything that you want for a particular Scape
  const props = {
    images: ['https://source.unsplash.com/random/1280x1024'],
  }
  return (
    <Canvas>
      <Scape {...props} />
    </Canvas>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  }
}

export default IndexPage
