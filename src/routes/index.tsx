import { useOutlet } from 'react-router-dom';

import Layout from './layout';
import Podcasts from '~/ui/template/podcasts';

function RootPage() {
  const outlet = useOutlet()

  return (
    <Layout>
      {outlet || <Podcasts data={{ podcasts: {
        'asd': {
          id: 'asd',
          trackNumber: 0,
          title: 'How to start a podcast',
          author: 'Ken Adams',
          description: "Discovering your true passion is an art you don't have asdlkj skdjjsaod ijsa diojoaisjd oijd doijasd oiajsd oiasjd aksdl kasjd lk j akasdlad jasldkj",
          releasedAt: new Date(2023, 5, 12),
          img: {
            src: 'asd',
            alt: 'dsa',
          }
        },
        'adfd': {
          id: 'aghsd',
          trackNumber: 0,
          title: 'How to start a podcast with people that dont know how to start a podcast with people that start a podcast',
          author: 'Ken Adams',
          description: "Discovering your true passion is an art you don't have asdlkj skdjjsaod ijsa diojoaisjd oijd doijasd oiajsd oiasjd aksdl kasjd lk j akasdlad jasldkj",
          releasedAt: new Date(2021, 2, 1),
          img: {
            src: 'asd',
            alt: 'dsa',
          }
        },
      }}}
        onPlayPause={() => {}}
      />}
    </Layout>
  );
}

export default RootPage;
