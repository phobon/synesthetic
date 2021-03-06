import * as React from 'react'
import { useState } from 'react'
import { useRef, useEffect, useCallback } from 'react'

import { useTimelineStore } from '~store/useTimelineStore'

import { css } from '~design'

export type TimelineControllerProps = {
  src?: string
  options?: AnalyserOptions
}

const audioStyles = css({
  opacity: 0,
  position: 'absolute',
  left: -99999,
  height: 1,
  width: 1,
})

export const TimelineController = ({
  src,
  options = { fftSize: 2048, smoothingTimeConstant: 0.9 },
}: TimelineControllerProps) => {
  const audioRef = useRef<HTMLAudioElement>()
  const analyserFunctionRef = useRef<number>(0)

  const [analyser, setAnalyser] = useState<AnalyserNode>(null)
  const [data, setLocalData] = useState<Uint8Array>(null)

  const isPlaying = useTimelineStore((state) => state.isPlaying)
  const [setData, setMetaData, setCurrentTime] = useTimelineStore((state) => [
    state.setData,
    state.setMetaData,
    state.setCurrentTime,
  ])

  useEffect(() => {
    const context = new AudioContext()
    const audioAnalyser = context.createAnalyser()

    // Apply options to analyser
    for (const o in options) {
      audioAnalyser[o] = options[o]
    }

    const source = context.createMediaElementSource(audioRef.current)

    source.connect(audioAnalyser)
    source.connect(context.destination)

    setAnalyser(audioAnalyser)
    setLocalData(new Uint8Array(audioAnalyser.frequencyBinCount))

    return () => {
      context.close()
      audioAnalyser.disconnect()
      source.disconnect()
    }
  }, [src])

  // Determine BPM
  useEffect(() => {
    // We need to lazy import this for nextjs
    import('web-audio-beat-detector').then(({ analyze }) => {
      const offlineAudioContext = new OfflineAudioContext(1, 1, 44100)
      fetch(src)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => offlineAudioContext.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          analyze(audioBuffer)
            .then((tempo) => {
              setMetaData({ bpm: tempo, duration: audioBuffer.duration })
            })
            .catch((err) => {
              throw `wtf ${err}`
            })
        })
    })
  }, [src])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      const getByteFrequencyData = () => {
        analyserFunctionRef.current = requestAnimationFrame(
          getByteFrequencyData
        )

        // Analyse byte data and set it here, we want this to go to our state store.
        analyser.getByteFrequencyData(data)
        setData(data)
      }

      getByteFrequencyData()
    } else {
      if (analyserFunctionRef.current) {
        cancelAnimationFrame(analyserFunctionRef.current)
      }

      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    useTimelineStore.subscribe<number>(
      (seekTime) => {
        audioRef.current.currentTime = seekTime
      },
      (state) => state.seekTime
    )

    return () => {
      useTimelineStore.destroy()
    }
  }, [])

  const onLoadedMetadata = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      console.log('metadata:', e)
      // e.timeStamp
    },
    []
  )

  const onTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      console.log('timeupdate:', e.currentTarget.currentTime)
      setCurrentTime(Math.floor(e.currentTarget.currentTime))
    },
    []
  )

  return (
    <audio
      className={audioStyles()}
      src={src}
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
    ></audio>
  )
}
