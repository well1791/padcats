import { useParams } from 'react-router-dom'

import * as st from './layout.css'
import Header from '~/ui/organism/header'
import Footer from '~/ui/organism/footer'

type Props = React.PropsWithChildren<{}>

function Layout({ ...p }: Props) {
  const { podcastId } = useParams()

  return (
    <>
      <Header showBackLink={Boolean(podcastId)} />
      <main className={st.container}>
        {p.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
