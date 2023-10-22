import {
  ShuffleIcon,
  TrackPreviousIcon,
  TrackNextIcon,
  LoopIcon,
} from '@radix-ui/react-icons'

import * as st from './styles.css'
import { cs } from '~/utils'
import Action from '~/ui/atom/action'
import PlayPauseBtn from '~/ui/atom/playPauseBtn'
import type { Props as PlayPauseBtnProps } from '~/ui/atom/playPauseBtn'

export type Props = PlayPauseBtnProps & {
  className?: string
  isLooping?: boolean
  isShuffling?: boolean
  onShuffle: () => void
  onPrev: () => void
  onNext: () => void
  onRepeat: () => void
}

function PlayerControls(p: Props) {
  return (
    <div className={cs(st.container, p.className)}>
      <Action
        type="button"
        aria-label="shuffle track list"
        className={st.toggleBtn}
        aria-pressed={Boolean(p.isShuffling)}
        onClick={p.onShuffle}
      >
        <ShuffleIcon aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="play previous track"
        onClick={p.onPrev}
      >
        <TrackPreviousIcon aria-hidden="true" />
      </Action>

      <PlayPauseBtn
        isHighlighted
        className={st.playPauseBtn}
        isPlaying={p.isPlaying}
        onPlayPause={p.onPlayPause}
      />

      <Action type="button" aria-label="play next track" onClick={p.onNext}>
        <TrackNextIcon aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="repeat current track"
        className={st.toggleBtn}
        aria-pressed={Boolean(p.isLooping)}
        onClick={p.onRepeat}
      >
        <LoopIcon aria-hidden="true" />
      </Action>
    </div>
  )
}

export default PlayerControls
