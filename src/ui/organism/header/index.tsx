import { CaretLeftIcon } from '@radix-ui/react-icons'

import * as st from './styles.css'
import { cx } from '~/utils'
import Action from '~/ui/atom/action'
import SearchBox, { type Props as SearchBoxProps } from '~/ui/molecule/searchBox'

export type Props = {
  className?: string
  showBackLink?: boolean
  searchBoxProps?: SearchBoxProps
}

function Header(p: Props) {
  const iconSize = '24rem'

  return (
    <header className={cx(st.container, p.className)}>
      {p.showBackLink && (
        <Action
          to="/"
          className={st.backLink}
          aria-label="go to the main page"
        >
          <CaretLeftIcon width={iconSize} height={iconSize} aria-hidden="true" />
        </Action>
      )}
      <SearchBox {...p.searchBoxProps} />
    </header>
  )
}

export default Header
