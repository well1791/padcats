import * as RadixSlider from '@radix-ui/react-slider';

import * as st from './styles.css'
import { cx } from '~/utils'

export type Data = {
  max: number
  value: number
}

export type Props = {
  data: Data
  className?: string
  onValueChange: (value: number) => void
  onValueCommit?: (value: number) => void
}

function Slider({ data: d, ...p }: Props) {
  return (
    <RadixSlider.Root
      className={cx(st.root, p.className)}
      max={d.max}
      value={[d.value]}
      step={1}
      onValueChange={([value]) => p.onValueChange(value)}
      onValueCommit={([value]) => p.onValueCommit && p.onValueCommit(value)}
    >
      <RadixSlider.Track className={st.track}>
        <RadixSlider.Range className={st.range} />
      </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider
