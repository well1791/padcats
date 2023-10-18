import type { Button as ButtonT } from '~/types/dom'

export type Props = ButtonT

function Action({ ...p }: Props) {
  return (
    <button { ...p } type={p.type ?? "button"}>
      {p.children}
    </button>
  )
}

export default Action
