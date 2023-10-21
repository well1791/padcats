import * as st from './styles.css'

import { cx } from '~/utils'

export type Data = {
  time: {
    hours: number
    minutes: number
    seconds: number
  }
}

export type Props = {
  className?: string
  data: Data
}

const formatUnit = (n: number): string => String(n).padStart(2, '0')

function TimeLabel({ data: d, ...p }: Props) {
  const { hours, minutes, seconds } = d.time

  return (
    <span className={cx(st.container, p.className)}>
      {hours > 0 ?? `${formatUnit(hours)}:`}
      {`${formatUnit(minutes)}:${formatUnit(seconds)}`}
    </span>
  )
}

export default TimeLabel
