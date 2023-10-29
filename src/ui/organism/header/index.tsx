import { CaretLeftIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

import * as st from './styles.css'
import { cs } from '~/utils'
import Icon from '~/ui/atom/icon'
import SearchBox, { type Props as SearchBoxProps } from '~/ui/molecule/searchBox'

export type Props = {
  className?: string
  showBackLink?: boolean
  searchBoxProps?: SearchBoxProps
}

function Header(p: Props) {
  return (
    <header className={cs(st.container, p.className)}>
      {p.showBackLink && (
        <Link
          to="/"
          className={st.backLink}
          aria-label="go to the main page"
        >
          <Icon Component={CaretLeftIcon} />
        </Link>
      )}
      <SearchBox {...p.searchBoxProps} />
    </header>
  )
}

export default Header
