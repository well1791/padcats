import { Link, type LinkProps } from 'react-router-dom'

import * as st from './styles.css'
import { cx } from '~/utils'
import type { Button as ButtonT } from '~/types/dom'

export type Props = ButtonT | LinkProps

const isLink = (props: Props): props is LinkProps => 'to' in props

function Action(p: Props) {
  return isLink(p) ? (
    <Link {...p} className={cx(st.container, p.className)} />
  ) : (
    <button {...p} className={cx(st.container, p.className)} />
  )
}

export default Action
