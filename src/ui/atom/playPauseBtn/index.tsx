import { PlayIcon, PauseIcon } from '@radix-ui/react-icons'

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
    <button
      type="button"
      className={cs(st.container, p.className)}
      aria-label="play/pause"
      aria-pressed={Boolean(p.isPlaying)}
      data-is-highlighted={Boolean(p.isHighlighted)}
      onClick={p.onPlayPause}
    >
      {p.isPlaying ? (
        <PauseIcon className={st.icon} aria-hidden="true" />
      ) : (
        <PlayIcon className={st.icon} aria-hidden="true" />
      )}
    </button>
  )
}

export default PlayPauseBtn
