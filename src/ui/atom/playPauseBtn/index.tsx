import { PlayIcon, PauseIcon } from '@radix-ui/react-icons'

import * as st from './styles.css'
import { cs } from '~/utils'
import Icon from '~/ui/atom/icon'

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
      <Icon Component={p.isPlaying ? PauseIcon : PlayIcon} />
    </button>
  )
}

export default PlayPauseBtn
