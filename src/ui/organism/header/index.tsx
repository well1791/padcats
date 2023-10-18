import { Link } from 'react-router-dom'

import * as st from './index.css'
import { cx } from '~/utils'

export type Props = {
  className?: string
  showBackLink: boolean
}

function Header(p: Props) {
  return (
    <header className={cx([st.container, p.className])}>
      {p.showBackLink && (
        <Link to="/">back</Link>
      )}
      <span> search bar here</span>
    </header>
  )
}

export default Header
