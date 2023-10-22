import * as st from './styles.css'
import { cs } from '~/utils'
import PlayerInfo from '~/ui/molecule/playerInfo'
import PlayerControls from '~/ui/molecule/playerControls'
import PlayerSeekSlider from '~/ui/molecule/playerSeekSlider'
import PlayerVolumeSlider from '~/ui/molecule/playerVolumeSlider'
import type { Props as PlayerInfoProps } from '~/ui/molecule/playerInfo'
import type { Props as ControlsProps } from '~/ui/molecule/playerControls'
import type { Props as SeekSliderProps } from '~/ui/molecule/playerSeekSlider'
import type { Props as VolumeSliderProps } from '~/ui/molecule/playerVolumeSlider'

export type Props = {
  className?: string
  info: PlayerInfoProps
  controls: ControlsProps
  seekSlider: SeekSliderProps
  volumeSlider: VolumeSliderProps
}

function PlayerBar(p: Props) {
  return (
    <div className={cs(st.container, p.className)}>
      <PlayerInfo
        {...p.info}
        className={cs(st.playerInfo, p.info.className)}
      />

      <section className={st.playerParts} aria-label="media player controls">
        <PlayerControls {...p.controls} />
        <PlayerSeekSlider
          {...p.seekSlider}
          className={cs(st.playerSeeker, p.seekSlider.className)}
          />
        <PlayerVolumeSlider
          {...p.volumeSlider}
          className={cs(st.playerVolume, p.volumeSlider.className)}
        />
      </section>
    </div>
  )
}

export default PlayerBar
