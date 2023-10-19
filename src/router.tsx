import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'


import RootPage from '~/routes'
import PodcastPage from '~/routes/[podcastId]/index'

const routes: Array<RouteObject> = [
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
]

function Router() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
}

export default Router
