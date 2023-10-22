import { useOutlet } from 'react-router-dom';

import Layout from './layout';
import Podcasts from '~/ui/template/podcasts';

function RootPage() {
  const outlet = useOutlet()

  return (
    <Layout>
      {outlet || <Podcasts data={{ podcasts: [{
          id: 'asd',
          trackNumber: 0,
          title: 'How to start a podcast',
          author: 'Ken Adams',
          description: "Discovering your true passion is an art you don't have",
          releasedAt: new Date(),
          img: {
            src: '',
            alt: '',
          }
      }] }} />}
    </Layout>
  );
}

export default RootPage;
