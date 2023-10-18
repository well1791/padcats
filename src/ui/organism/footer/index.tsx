import { cx } from '~/utils'

import * as st from './index.css'

export type Props = {
  className?: string
}

function Footer(p: Props) {
  return (
    <footer className={cx([st.container, p.className])}>
      <div className={st.content}>
        play bar here
      </div>
    </footer>
  )
}


export default Footer;
