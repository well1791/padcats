import { Link } from 'react-router-dom'
import { CaretLeftIcon } from '@radix-ui/react-icons'

import * as st from './index.css'
import { cx } from '~/utils'
import SearchBox from '~/ui/molecule/searchBox'

export type Props = {
  className?: string
  showBackLink?: boolean
}

function Header(p: Props) {
  return (
    <header className={cx([st.container, p.className])}>
      {p.showBackLink && (
        <Link to="/" className={st.backLink}>
          <CaretLeftIcon height="1.25rem" width="1.25rem" />
        </Link>
      )}
      <SearchBox />
    </header>
  )
}

export default Header
