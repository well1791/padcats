import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import * as st from './index.css'
import Input from '~/ui/atom/input'

type Props = {
  className?: string
  name?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (text: string) => void
}

function SearchBox(p: Props) {
  return (
    <label className={st.container}>
      <VisuallyHidden.Root>Type to search podcasts</VisuallyHidden.Root>
      <MagnifyingGlassIcon height="1.25rem" width="1.25rem" aria-hidden />
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
