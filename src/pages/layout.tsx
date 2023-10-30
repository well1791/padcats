import { useState } from 'react'
import { useParams } from 'react-router-dom'

import * as st from './layout.css'
import Header from '~/ui/organism/header'
import Footer from '~/ui/organism/footer'
import { useApp } from '~/state'

type Props = React.PropsWithChildren<{}>

function Layout(p: Props) {
  const params = useParams()
  const {
    tracksById,
    player,
    searchText,
    volume: [currentVol],
    dispatch,
  } = useApp()

  const { currentTrackId } = player
  const trackInfo = currentTrackId
    ? tracksById[currentTrackId]
    : undefined
  const [seekValue, setSeekValue] = useState(0)

  return (
    <>
      <Header
        searchBoxProps={{
          searchText,
          onChange: (text) => dispatch('search.set', text),
        }}
        className={st.header}
        showBackLink={Boolean(params.podcastId)}
      />

      <main className={st.container}>
        {p.children}
      </main>

      <Footer
        className={st.footer}
        player={{
          info: { data: trackInfo },
          controls: {
            ...player,
            onShuffle: () => dispatch('player.toggleShuffle'),
            onPrev: () => {},
            onPlayPause: () => dispatch('player.togglePlay'),
            onNext: () => {},
            onRepeat: () => dispatch('player.toggleLoop'),
          },
          seekSlider: {
            data: { seekValue },
            onSeekChange: setSeekValue,
            onSeekCommit: () => {},
          },
          volumeSlider: {
            data: { volume: currentVol },
            onVolumeChange: (vol) => dispatch('volume.set', vol),
            onVolumeMuteUnmute: () => dispatch('volume.toggle'),
          },
        }}
      />
      <div className={st.footerBackdrop}></div>
    </>
  )
}

export default Layout
