import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import PodcastsPage from '~/pages/podcasts'
import PodcastPage from '~/pages/podcast'

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <PodcastsPage />,
    children: [
      {
        path: ':podcastId',
        element: <PodcastPage />,
      },
    ],
  },
]

function Router() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
}

export default Router
