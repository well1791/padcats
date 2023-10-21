import * as st from './styles.css'
import Slider from '~/ui/atom/slider'
import TimeLabel from '~/ui/atom/timeLabel'
import type { Props as TimeLabelProps } from '~/ui/atom/timeLabel'
import type { Props as SliderProps } from '~/ui/atom/slider'

type Time = TimeLabelProps['data']['time']

export type Data = {
  time: Time
  seekValue: number
}

export type Props = {
  data: Data
  onSeekChange: SliderProps['onValueChange']
  onSeekCommit: SliderProps['onValueCommit']
}

const secondsToTime = (s: number): Time => {
  const [hours, minutes, seconds] = new Date(s * 1000)
    .toISOString()
    .slice(11, 19)
    .split(':')
    .map(Number);
  return { hours, minutes, seconds }
}

function PlayerSeekSlider({ data: d, ...p }: Props) {
  const { hours, minutes, seconds } = d.time
  const totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds
  const remainingTime = secondsToTime(totalSeconds - d.seekValue)

  return (
    <div className={st.container}>
      <TimeLabel data={d} />
      <Slider
        className={st.slider}
        data={{ max: totalSeconds, value: d.seekValue }}
        onValueChange={p.onSeekChange}
        onValueCommit={p.onSeekCommit}
      />
      <TimeLabel className={st.remainingTime} data={{ time: remainingTime }} />
    </div>
  )
}

export default PlayerSeekSlider
