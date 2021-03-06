import React from 'react'
import { Grid } from '~primitives'

import { Inspector } from '~components/Inspector'
import { Status } from '~components/Status'
import { Timeline } from '~components/Timeline'
import { Main } from './Main'

import { useScapeStore } from '~store'

export const Layout = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const src = useScapeStore((state) => state.src)

  return (
    <>
      <Main>{children}</Main>

      {/* UI Layer */}
      <Grid
        as='section'
        css={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          gridTemplateRows: '8rem 1fr 8rem',
          gridTemplateColumns: 'minmax(45rem, 20%) 1fr auto',
          gridTemplateAreas: `"inspector . status"
                              "inspector . ."
                              "timeline timeline timeline"`,
          gridGap: '$5',
          left: 0,
          top: 0,
          pointerEvents: 'none',
        }}
        {...props}
      >
        <Inspector />
        <Status />
        <Timeline src={src} />
      </Grid>
    </>
  )
}
