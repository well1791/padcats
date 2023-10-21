import * as st from './styles.css'
import { cs } from '~/utils'

import PlayerBar, { type Props as PlayerProps } from '~/ui/organism/playerBar'

export type Props = {
  className?: string
  player: PlayerProps
}

function Footer(p: Props) {
  return (
    <footer className={cs(st.container, p.className)}>
      <PlayerBar className={st.playerBar} {...p.player} />
    </footer>
  )
}


export default Footer;
