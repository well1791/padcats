import { useOutlet } from 'react-router-dom';

import Layout from './layout';
import Podcasts from '~/ui/template/podcasts';

function RootPage() {
  const outlet = useOutlet()

  return (
    <Layout>
      {outlet || <Podcasts data={{ podcasts: [] }} />}
    </Layout>
  );
}

export default RootPage;
