import { createContext } from 'react'
import type { Dispatch } from 'react'
import { PlaybackOrder } from './PodcastPlayerProvider'

export const PodcastPlayerContext = createContext<{
  currentEpisode: any
  setCurrentEpisode: Dispatch<any>
  playbackOrder: PlaybackOrder
  setPlaybackOrder: Dispatch<any>
  startTime?: number
  currentTime: number
  isPlaying: boolean
  isEnded: boolean
  getAudioBuffer: () => AudioBuffer | null
  getAudioBufferSourceNode: () => AudioBufferSourceNode | null
}>({
  currentEpisode: null,
  setCurrentEpisode: (value: any) => undefined,
  playbackOrder: PlaybackOrder.ASC,
  setPlaybackOrder: (value: any) => undefined,
  startTime: undefined,
  currentTime: 0,
  isPlaying: false,
  isEnded: false,
  getAudioBuffer: () => null,
  getAudioBufferSourceNode: () => null,
})