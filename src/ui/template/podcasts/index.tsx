// TODO: segregate code into lower level components
import { formatDistanceToNow } from 'date-fns'

import * as st from './styles.css'
import { cs } from '~/utils'
import PlayerInfo from '~/ui/molecule/playerInfo'
import PlayPauseBtn from '~/ui/atom/playPauseBtn'

type PodcastId = string

type Podcast = {
  id: PodcastId
  trackNumber: number
  title: string
  author: string
  description: string
  releasedAt: Date
  img: {
    src: string
    alt: string
  }
}

export type Data = {
  podcasts: Record<PodcastId, Podcast>
  playingPodcastId?: PodcastId
}

export type Props = {
  data: Data
  className?: string
  onPlayPause: (id: PodcastId) => void
}

function Podcasts({ data: d, ...p }: Props) {
  const columns = [
    { title: '#' },
    { title: 'Name' },
    { title: 'Description' },
    { title: 'Released' },
  ]

  return (
    <table className={cs(st.table, p.className)}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={`header-${col.title}`} className={st.th}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(d.podcasts).map((podcast) => (
          <tr key={podcast.id}>
            <td className={st.colPlayPauseBtn}>
              <PlayPauseBtn
                isPlaying={podcast.id === d.playingPodcastId}
                isHighlighted={podcast.id === d.playingPodcastId}
                onPlayPause={() => {}}
              />
            </td>
            <td className={st.colPlayerInfo}>
              <PlayerInfo data={podcast} />
            </td>
            <td className={st.colDescription} title={podcast.description}>
              {podcast.description}
            </td>
            <td className={st.colReleasedAt}>
              {formatDistanceToNow(podcast.releasedAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Podcasts;
