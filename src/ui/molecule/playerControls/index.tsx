import {
  ShuffleIcon,
  TrackPreviousIcon,
  PlayIcon,
  PauseIcon,
  TrackNextIcon,
  LoopIcon,
} from '@radix-ui/react-icons'

import * as st from './styles.css'
import { cs } from '~/utils'
import Action from '~/ui/atom/action'

export type Props = {
  className?: string
  isPlaying?: boolean
  isLooping?: boolean
  isShuffling?: boolean
  onShuffle: () => void
  onPrev: () => void
  onPlayPause: () => void
  onNext: () => void
  onRepeat: () => void
}

function PlayerControls(p: Props) {
  return (
    <div className={cs(st.container, p.className)}>
      <Action
        type="button"
        aria-label="shuffle the track list"
        className={st.activableBtn}
        data-is-active={Boolean(p.isShuffling)}
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

      <Action
        type="button"
        aria-label="play/pause"
        className={st.playPauseBtn}
        onClick={p.onPlayPause}
      >
        {p.isPlaying ? (
          <PauseIcon aria-hidden="true" />
        ) : (
          <PlayIcon aria-hidden="true" />
        )}
      </Action>

      <Action
        type="button"
        aria-label="play next track"
        onClick={p.onNext}
      >
        <TrackNextIcon aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="repeat the current track"
        className={st.activableBtn}
        data-is-active={Boolean(p.isLooping)}
        onClick={p.onRepeat}
      >
        <LoopIcon aria-hidden="true" />
      </Action>
    </div>
  )
}

export default PlayerControls
