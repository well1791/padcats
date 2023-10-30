import { create } from 'apisauce'

const api = create({
  baseURL: 'https://api.allorigins.win/get?url=',
})

export const fetchPodcasts = async () => {
  const resp = await api.get(encodeURIComponent(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  ))

  return resp
}

export const getTracksByPodcastId = async (id: string) => {
  const resp = api.get(encodeURIComponent(
    'https://itunes.apple.com/lookup' +
    `?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  ))

  return resp
}
