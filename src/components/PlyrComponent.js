import React, { useRef } from 'react'
import 'video.js/dist/video-js.css';
import { connect } from 'react-redux'

import Plyr from 'plyr-react'

import posterImage from '../../static/YouTube_Capa.jpg'

const PlyrComponent2 = ({ dispatch }) => {
  const videoOptions = {
    muted: true,
    volume: 0,
    autoplay: true,
    loop: {
      active: true, loop: { active: true }
    },
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    i18n: {
      restart: 'Ver novamente',
      rewind: 'Recuar {seektime}s',
      play: 'Play',
      pause: 'Pausa',
      fastForward: 'Avançar {seektime}s',
      seek: 'Procurar',
      seekLabel: '{currentTime} de {duration}',
      played: 'A ver',
      buffered: 'Buffered',
      currentTime: 'Tempo atual',
      duration: 'Duração',
      volume: 'Volume',
      mute: 'Sem som',
      unmute: 'Com som',
      enableCaptions: 'Ativar legendas',
      disableCaptions: 'Desativar legendas',
      download: 'Download',
      enterFullscreen: 'Entrar modo fullscreen',
      exitFullscreen: 'Sair do modo fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Legendas',
      settings: 'Configurações',
      menuBack: 'Voltar ao menu anterior',
      speed: 'Velocidade',
      normal: 'Normal',
      quality: 'Qualidade',
      loop: 'Loop',
    },
    poster: posterImage
  };
  const ref = useRef(null)
  const plyrVideo = (typeof document !== 'undefined') ? (
    <Plyr
      ref={ref}
      source={{
        type: "video",
        sources: [
          {
            src: 'https://cdn.pixabay.com/vimeo/361092012/grass-26790.mp4?width=640&hash=008f7da602bcfdab8b7d366cb554d32a1bd4eb15',
            type: 'video/mp4',
            size: 1080,
          }
        ]
      }}
      options={videoOptions}
    />
  ) : null
  return (
    <div className='container-bg-video' style={{opacity: '0.8', filter: 'brightness(0.6)'}}>
      {plyrVideo}
    </div>
  )
}

export default connect()(PlyrComponent2)