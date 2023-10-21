import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import * as st from './styles.css'
import Input from '~/ui/atom/input'

export type Props = {
  className?: string
  name?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (text: string) => void
}

function SearchBox(p: Props) {

  return (
    <label className={st.container}>
      <VisuallyHidden>Type to search podcasts</VisuallyHidden>
      <MagnifyingGlassIcon aria-hidden="true" />
      <Input
        autoFocus={p.autoFocus}
        className={st.input}
        name={p.name}
        placeholder={p.placeholder ?? 'podcast'}
        onChange={(e) => p.onChange?.call(null, e.currentTarget.value)}
      />
    </label>
  )
}

export default SearchBox
