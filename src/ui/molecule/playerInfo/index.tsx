import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import * as st from './styles.css'
import { cx } from '~/utils'

export type Data = {
  title: string
  author: string
  img: {
    src: string
    alt: string
  }
}

export type Props = {
  data: Data
}

function PlayerInfo({ data: d, ...p }: Props) {
  return (
    <article className={st.container}>
      <img className={st.thumbnail} src={d.img.src} alt={d.img.alt} />
      <div>
        <p className={st.title}>
          <VisuallyHidden>title: </VisuallyHidden>
          {d.title}
        </p>
        <p className={cx(st.description, st.title)}>
          <VisuallyHidden>author: </VisuallyHidden>
          {d.author}
        </p>
      </div>
    </article>
  )
}

export default PlayerInfo
