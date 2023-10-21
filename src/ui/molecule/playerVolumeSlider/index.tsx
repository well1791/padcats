import {
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerQuietIcon,
  SpeakerOffIcon,
} from '@radix-ui/react-icons'

import * as st from './styles.css'
import Action from '~/ui/atom/action'
import Slider from '~/ui/atom/slider'
import type { Props as SliderProps } from '~/ui/atom/slider'

export type Data = {
  volume: number
}

export type Props = {
  data: Data
  onVolumeChange: SliderProps['onValueChange']
  onVolumeMuteUnmute: () => void
}

function PlayerVolumeSlider({ data: d, ...p }: Props) {
  const iconSize = '24rem'

  return (
    <div className={st.container}>
      <Action
        type="button"
        aria-label="control volume mute/unmute"
        onClick={p.onVolumeMuteUnmute}
      >
        {d.volume < 1 ? (
          <SpeakerOffIcon width={iconSize} height={iconSize} aria-hidden="true" />
        ): d.volume < 30 ? (
          <SpeakerQuietIcon width={iconSize} height={iconSize} aria-hidden="true" />
        ): d.volume < 70 ? (
          <SpeakerModerateIcon width={iconSize} height={iconSize} aria-hidden="true" />
        ) : (
          <SpeakerLoudIcon width={iconSize} height={iconSize} aria-hidden="true" />
        )}
      </Action>

      <Slider
        className={st.slider}
        data={{ max: 100, value: d.volume }}
        onValueChange={p.onVolumeChange}
      />
    </div>
  )
}

export default PlayerVolumeSlider
