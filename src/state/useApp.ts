// source: https://medium.com/@DcKesler/typescript-for-createcontext-and-usereducer-in-react-with-custom-hooks-bc3b19a4b942
import { useContext } from 'react'

import { AppContext } from './context'

export function useApp() {
  const [state, dispatch] = useContext(AppContext)

  return { ...state, dispatch }
}
