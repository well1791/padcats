import { createBrowserRouter } from 'react-router-dom'

import RootPage from '~/routes'
import PodcastPage from '~/routes/[podcastId]/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: ':podcastId',
        element: <PodcastPage />,
      },
    ],
  },
])

export default router
