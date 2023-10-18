import { Link, type LinkProps } from 'react-router-dom'
import type { Button as ButtonT } from '~/types/dom'

export type Props = ButtonT | LinkProps

const isLink = (props: Props): props is LinkProps => 'to' in props

function Action(p: Props) {
  return isLink(p) ? (
    <Link {...p} />
  ) : (
    <button {...p} />
  )
}

export default Action
