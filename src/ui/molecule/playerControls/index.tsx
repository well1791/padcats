import {
  ShuffleIcon,
  TrackPreviousIcon,
  PlayIcon,
  PauseIcon,
  TrackNextIcon,
  LoopIcon,
} from '@radix-ui/react-icons'

import * as st from './index.css'
import Action from '~/ui/atom/action'

export type Props = {
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
  const iconSize = '24rem'

  return (
    <div className={st.container}>
      <Action
        type="button"
        aria-label="shuffle the track list"
        className={st.activableBtn}
        data-is-active={Boolean(p.isShuffling)}
        onClick={p.onShuffle}
      >
        <ShuffleIcon width={iconSize} height={iconSize} aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="play previous track"
        onClick={p.onPrev}
      >
        <TrackPreviousIcon width={iconSize} height={iconSize} aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="play/pause"
        className={st.playPauseBtn}
        onClick={p.onPlayPause}
      >
        {p.isPlaying ? (
          <PauseIcon width={iconSize} height={iconSize} aria-hidden="true" />
        ) : (
          <PlayIcon width={iconSize} height={iconSize} aria-hidden="true" />
        )}
      </Action>

      <Action
        type="button"
        aria-label="play next track"
        onClick={p.onNext}
      >
        <TrackNextIcon width={iconSize} height={iconSize} aria-hidden="true" />
      </Action>

      <Action
        type="button"
        aria-label="repeat the current track"
        className={st.activableBtn}
        data-is-active={Boolean(p.isLooping)}
        onClick={p.onRepeat}
      >
        <LoopIcon width={iconSize} height={iconSize} aria-hidden="true" />
      </Action>
    </div>
  )
}

export default PlayerControls
