import type { Input as InputT } from '~/types/dom';

export type Props = InputT

export default function Input({ ...p }: Props) {
  return (
    <input {...p} type={p.type ?? "text"} />
  )
}
