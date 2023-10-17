import { useParams } from 'react-router-dom'

import st from './layout.module.css'
import Header from '~/ui/organism/header'
import Footer from '~/ui/organism/footer'

type Props = React.PropsWithChildren<{}>

function Layout({ ...p }: Props) {
  const { podcastId } = useParams()

  return (
    <>
      <Header
        className={st.header}
        showBackLink={Boolean(podcastId)}
      />
      <main className={st.container}>
        {p.children}
      </main>
      <Footer className={st.footer} />
    </>
  )
}

export default Layout
