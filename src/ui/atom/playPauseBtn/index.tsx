import { PlayIcon, PauseIcon } from '@radix-ui/react-icons'

import Action from '~/ui/atom/action'

import * as st from './styles.css'
import { cs } from '~/utils'

export type Props = {
  className?: string
  isPlaying?: boolean
  isHighlighted?: boolean
  onPlayPause: () => void
}

function PlayPauseBtn(p: Props) {
  return (
    <Action
      type="button"
      className={cs(st.container, p.className)}
      aria-label="play/pause"
      aria-pressed={Boolean(p.isPlaying)}
      data-is-highlighted={Boolean(p.isHighlighted)}
      onClick={p.onPlayPause}
    >
      {p.isPlaying ? (
        <PauseIcon aria-hidden="true" />
      ) : (
        <PlayIcon aria-hidden="true" />
      )}
    </Action>
  )
}

export default PlayPauseBtn
