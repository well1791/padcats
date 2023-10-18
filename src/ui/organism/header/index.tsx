import { CaretLeftIcon } from '@radix-ui/react-icons'

import * as st from './index.css'
import { cx } from '~/utils'
import Action from '~/ui/atom/action'
import SearchBox, { type Props as SearchBoxProps } from '~/ui/molecule/searchBox'

export type Props = {
  className?: string
  showBackLink?: boolean
  searchBoxProps?: SearchBoxProps
}

function Header(p: Props) {
  return (
    <header className={cx([st.container, p.className])}>
      {p.showBackLink && (
        <Action to="/" className={st.backLink}>
          <CaretLeftIcon width="1.9rem" height="1.9rem" aria-hidden />
        </Action>
      )}
      <SearchBox {...p.searchBoxProps} />
    </header>
  )
}

export default Header
