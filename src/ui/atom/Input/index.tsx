import type { Input as InputT } from '~/types/dom';

export type Props = InputT

export default function Input({ type, ...p }: Props) {
  return (
    <input {...p} type={type ?? "text"} />
  )
}
