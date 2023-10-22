import { useState } from 'react'

import * as st from './styles.css'
import { cs } from '~/utils'
import PlayerInfo from '~/ui/molecule/playerInfo'
import PlayPauseBtn from '~/ui/atom/playPauseBtn'

type PodcastId = string

type Podcast = {
  id: PodcastId
  trackNumber: number
  title: string
  author: string
  description: string
  releasedAt: Date
  img: {
    src: string
    alt: string
  }
}

export type Data = {
  podcasts: Record<PodcastId, Podcast>
  playingId?: PodcastId
}

export type Props = {
  data: Data
  className?: string
  onPlayPause: (id: PodcastId) => void
}

function Podcasts({ data: d, ...p }: Props) {

  return (
    <div className={cs(st.container, p.className)}>
    </div>
  )
}

export default Podcasts;
