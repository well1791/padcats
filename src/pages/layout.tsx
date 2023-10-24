import { useState } from 'react'
import { useParams } from 'react-router-dom'

import * as st from './layout.css'
import Header from '~/ui/organism/header'
import Footer from '~/ui/organism/footer'

const time = { hours: 0, minutes: 3, seconds: 43 }
const podcastInfo = {
  title: 'How to make your partner talk more',
  author: 'Ken Adams',
  img: { src: '', alt: '' }
}

type Props = React.PropsWithChildren<{}>

function Layout(p: Props) {
  const { podcastId } = useParams()
  const [isShuffling, setIsShuffling] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [seekValue, setSeekValue] = useState(0)
  const [[currentVol, mutedVol], setVolume] = useState([50, 50])

  const handleSeekedValue = () => {}

  return (
    <>
      <Header className={st.header} showBackLink={Boolean(podcastId)} />

      <main className={st.container}>
        {p.children}
      </main>

      <Footer
        className={st.footer}
        player={{
          info: { data: podcastInfo },
          controls: {
            isPlaying,
            isLooping,
            isShuffling,
            onShuffle: () => setIsShuffling(!isShuffling),
            onPrev: () => {},
            onPlayPause: () => setIsPlaying(!isPlaying),
            onNext: () => {},
            onRepeat: () => setIsLooping(!isLooping),
          },
          seekSlider: {
            data: { seekValue, time },
            onSeekChange: setSeekValue,
            onSeekCommit: handleSeekedValue,
          },
          volumeSlider: {
            data: { volume: currentVol },
            onVolumeChange: (vol) => setVolume([vol, vol === 0 ? 5 : vol]),
            onVolumeMuteUnmute: () => currentVol === 0
              ? setVolume([mutedVol, mutedVol])
              : setVolume([0, currentVol]),
          },
        }}
      />
      <div className={st.footerBackdrop}></div>
    </>
  )
}

export default Layout
