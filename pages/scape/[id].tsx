import { NextPage, GetStaticProps } from 'next'

import { Main } from '~components/Layout'

interface ScenePageProps {
  scene: any
}

const ScenePage: NextPage<ScenePageProps> = ({ scene }) => {
  return (
    <Main>
      <p>{scene.name}</p>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      scene: {
        name: 'This is a scene',
      },
    },
  }
}

export default ScenePage
