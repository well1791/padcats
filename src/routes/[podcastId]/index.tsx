import { useParams } from 'react-router-dom';

import Podcast from '~/ui/template/podcast'

function PodcastPage() {
  const { podcastId } = useParams()

  return (
    <Podcast data={{ id: podcastId ?? 'noid' }} />
  )
}

export default PodcastPage
