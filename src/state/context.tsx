import { createContext, useReducer, useCallback } from 'react'

import { appReducer, AppState, Actions, ActionsMap } from './reducer'

export type Dispatcher = <
  Type extends Actions['type'],
  Payload extends ActionsMap[Type]
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void

type AppContextInterface = readonly [AppState, Dispatcher]

const initialState: AppState = {
  apiCall: {
    status: 'idle',
  },
  podcastsById: {},
  tracksById: {},
  searchText: '',
  player: {
    isPlaying: false,
    isShuffling: false,
    isLooping: false,
  },
  volume: [50, 50],
}

export const AppContext = createContext<AppContextInterface>([
  initialState,
  () => {},
])

export function AppProvider({ children }: React.PropsWithChildren) {
  const [state, _dispatch] = useReducer(appReducer, initialState)
  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions)
  }, [])

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}
