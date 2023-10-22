import {
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerQuietIcon,
  SpeakerOffIcon,
} from '@radix-ui/react-icons'

import * as st from './styles.css'
import { cs } from '~/utils'
import Action from '~/ui/atom/action'
import Slider from '~/ui/atom/slider'
import type { Props as SliderProps } from '~/ui/atom/slider'

export type Data = {
  volume: number
}

export type Props = {
  className?: string
  data: Data
  onVolumeChange: SliderProps['onValueChange']
  onVolumeMuteUnmute: () => void
}

function PlayerVolumeSlider({ data: d, ...p }: Props) {
  return (
    <div className={cs(st.container, p.className)}>
      <Action
        type="button"
        aria-label="control volume mute/unmute"
        onClick={p.onVolumeMuteUnmute}
      >
        {d.volume < 1 ? (
          <SpeakerOffIcon aria-hidden="true" />
        ): d.volume < 30 ? (
          <SpeakerQuietIcon aria-hidden="true" />
        ): d.volume < 70 ? (
          <SpeakerModerateIcon aria-hidden="true" />
        ) : (
          <SpeakerLoudIcon aria-hidden="true" />
        )}
      </Action>

      <Slider
        data={{ max: 100, value: d.volume }}
        onValueChange={p.onVolumeChange}
      />
    </div>
  )
}

export default PlayerVolumeSlider