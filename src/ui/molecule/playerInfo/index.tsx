import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import * as st from './styles.css'
import { cs } from '~/utils'

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
  className?: string
}

function PlayerInfo({ data: d, ...p }: Props) {
  return (
    <article className={cs(st.container, p.className)}>
      <img className={st.thumbnail} src={d.img.src} alt={d.img.alt} />
      <div>
        <p className={st.title} title={d.title}>
          <VisuallyHidden>title: </VisuallyHidden>
          {d.title}
        </p>
        <p className={st.author}>
          <VisuallyHidden>author: </VisuallyHidden>
          {d.author}
        </p>
      </div>
    </article>
  )
}

export default PlayerInfo
