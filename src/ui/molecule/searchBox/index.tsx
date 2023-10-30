import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import * as st from './styles.css'
import Icon from '~/ui/atom/icon'
import Input from '~/ui/atom/input'

export type Props = {
  className?: string
  name?: string
  placeholder?: string
  autoFocus?: boolean
  searchText: string
  onChange?: (text: string) => void
}

function SearchBox(p: Props) {

  return (
    <label className={st.container}>
      <VisuallyHidden>Type to search podcasts</VisuallyHidden>
      <Icon Component={MagnifyingGlassIcon} />
      <Input
        autoFocus={p.autoFocus}
        className={st.input}
        name={p.name ?? 'search-box'}
        value={p.searchText}
        placeholder={p.placeholder ?? 'podcast'}
        onChange={(e) => p.onChange?.call(null, e.currentTarget.value)}
      />
    </label>
  )
}

export default SearchBox
