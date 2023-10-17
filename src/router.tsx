import { createBrowserRouter } from 'react-router-dom';

import Root from '~/routes/index'
// import Podcast from '~/routes/[podcastId]/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // children: [
    //   {
    //     path: ":podcastId",
    //     element: <Podcast />,
    //   },
    // ],
  },
]);

export default router
