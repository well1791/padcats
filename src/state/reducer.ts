export function appReducer(state: AppState, action: Actions): AppState {
  switch(action.type) {
    // SEARCH
    case 'search.set':
      return ((clonedState) => {
        clonedState.searchText = action.payload
        return clonedState
      })(structuredClone(state))

    // PLAYER
    case 'player.setTrackId':
      return ((clonedState) => {
        clonedState.player.currentTrackId = action.payload
        clonedState.player.isPlaying = true
        return clonedState
      })(structuredClone(state))

    case 'player.togglePlay':
      return ((clonedState) => {
        const { currentTrackId } = state.player
        clonedState.player.isPlaying = Boolean(currentTrackId)
          && !state.player.isPlaying
        return clonedState
      })(structuredClone(state))

    case 'player.toggleShuffle':
      return ((clonedState) => {
        clonedState.player.isShuffling = !state.player.isShuffling
        return clonedState
      })(structuredClone(state))

    case 'player.toggleLoop':
      return ((clonedState) => {
        clonedState.player.isLooping = !state.player.isLooping
        return clonedState
      })(structuredClone(state))

    // VOLUME
    case 'volume.toggle':
      return ((clonedState) => {
        const [currentVol, mutedVol] = state.volume
        clonedState.volume = currentVol === 0
          ? [mutedVol, mutedVol]
          : [0, currentVol]
        return clonedState
      })(structuredClone(state))

    case 'volume.set':
      return ((clonedState) => {
        const vol = action.payload
        clonedState.volume = [vol, vol === 0 ? 5 : vol]
        return clonedState
      })(structuredClone(state))
  }
}

export type ApiCall = {
  status: 'idle' | 'loading' | 'error' | 'success'
  error?: string
}

type Info = {
  title: string
  author: string
  img: {
    src: string
    alt?: string
  }
}

type PodcastId = string
type Podcast = Info & { id: PodcastId }

type TrackId = `${string}.${PodcastId}`
type Track = Info & { id: TrackId }

export type PodcastsById = Record<PodcastId, Podcast>
export type TracksById = Record<TrackId, Track>

export type SearchText = string

export type Player = {
  currentTrackId?: TrackId
  isPlaying: boolean
  isShuffling: boolean
  isLooping: boolean
}

type CurrentVolume = number
type MutedVolume = number
export type Volume = [CurrentVolume, MutedVolume]

export type AppState = {
  apiCall: ApiCall
  podcastsById: PodcastsById
  tracksById: TracksById
  searchText: SearchText
  player: Player
  volume: Volume
}

export type ActionsMap = {
  'search.set': string

  'player.setTrackId': TrackId
  'player.togglePlay': undefined
  'player.toggleShuffle': undefined
  'player.toggleLoop': undefined

  'volume.toggle': undefined
  'volume.set': number
}

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key
    payload: ActionsMap[Key]
  }
}[keyof ActionsMap]
