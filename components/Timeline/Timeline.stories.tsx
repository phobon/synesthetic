import React from 'react'

import { Timeline } from './Timeline'

export default {
  component: Timeline,
  title: 'Components/Timeline',
}

export const withTrack = () => <Timeline fullWidth src='/track.mp3' />
