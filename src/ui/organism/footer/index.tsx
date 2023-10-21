import * as st from './styles.css'
import { cx } from '~/utils'

import PlayerBar, { type Props as PlayerProps } from '~/ui/organism/playerBar'

export type Props = {
  className?: string
  player: PlayerProps
}

function Footer(p: Props) {
  return (
    <footer className={cx(st.container, p.className)}>
      <PlayerBar {...p.player} />
    </footer>
  )
}


export default Footer;
