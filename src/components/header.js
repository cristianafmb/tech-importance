import React, { useState } from "react"
import { navigate, Link } from "gatsby"
import { connect } from 'react-redux'
import { HandlePhone } from "../custom/handlePhone"
import Container from 'react-bootstrap/Container';

const Github = ({ color }) => {
  return (<svg width="22.05" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={color == whiteColor ? 'whiteLogo' : 'hoverLogo'}>
<path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
 fill={color}/>
<path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
 fill={color}/>
</svg>
  )
}
const LinkedIn = ({ color }) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.05" height="22" viewBox="0 0 22.05 22"
    className={color == whiteColor ? 'whiteLogo' : 'hoverLogo'}>
    <g id="Grupo_550" data-name="Grupo 550" clipPath="url(#clipPath)">
      <path id="Caminho_7197" data-name="Caminho 7197" d="M.364,7.3H4.939V22H.364ZM2.652,0A2.649,2.649,0,1,1,0,2.647,2.649,2.649,0,0,1,2.652,0M7.805,22h4.566V14.73c0-1.917.363-3.773,2.741-3.773,2.341,0,2.374,2.192,2.374,3.9V22H22.05V13.94c0-3.958-.853-7-5.478-7a4.8,4.8,0,0,0-4.326,2.374h-.06V7.3H7.805Z"
        transform="translate(0 0)" fill={color} />
    </g>
  </svg>
  )
}
const Logo = ({ color }) => {
  return (<svg width="800px" height="800px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" className={color == whiteColor ? 'whiteLogo mh-logo' : 'hoverLogo mh-logo'}>
    <path 
    d="M16 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H13.6C13.0399 3 12.7599 3 12.546 3.10899C12.3578 3.20487 12.2049 3.35785 12.109 3.54601C12 3.75992 12 4.03995 12 4.6V6M10 18V21M7 21H13M6.2 18H13.8C14.9201 18 15.4802 18 15.908 17.782C16.2843 17.5903 16.5903 17.2843 16.782 16.908C17 16.4802 17 15.9201 17 14.8V9.2C17 8.0799 17 7.51984 16.782 7.09202C16.5903 6.71569 16.2843 6.40973 15.908 6.21799C15.4802 6 14.9201 6 13.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
     stroke={color}  stroke-width="2" stroke-linecap="round"/>
    </svg>)
}
const Form = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
      <g id="Grupo_596" data-name="Grupo 596" transform="translate(0 0.096)">
        <g id="Grupo_595" data-name="Grupo 595" transform="translate(0 -0.096)" clipPath="url(#clipPath)">
          <path id="Caminho_7209" data-name="Caminho 7209" d="M7.434,76.724c-.235-.157-.391-.235-.626-.391a2.7,2.7,0,0,0,.548-1.565A2.623,2.623,0,0,0,4.7,72.185a2.623,2.623,0,0,0-2.661,2.583,2.911,2.911,0,0,0,.548,1.565A4.644,4.644,0,0,0,0,80.559a.739.739,0,0,0,.782.783H8.608a.739.739,0,0,0,.782-.783,4.783,4.783,0,0,0-1.956-3.835" transform="translate(0 -59.341)" fill={color} />
          <path id="Caminho_7210" data-name="Caminho 7210" d="M37.012,0H25.273a3.14,3.14,0,0,0-3.13,3.13v8.139a2.668,2.668,0,0,1,.783-.078,4.192,4.192,0,0,1,4.226,4.148,4.578,4.578,0,0,1-.157,1.017,6.362,6.362,0,0,1,2.191,4.7,2.314,2.314,0,0,1-.156.782h7.982a3.139,3.139,0,0,0,3.13-3.13V3.13A3.139,3.139,0,0,0,37.012,0M35.447,14.869H29.969a.783.783,0,1,1,0-1.565h5.478a.783.783,0,1,1,0,1.565m0-3.13H28.4a.783.783,0,1,1,0-1.565h7.043a.783.783,0,1,1,0,1.565m0-3.13H26.839a.739.739,0,0,1-.783-.782.74.74,0,0,1,.783-.783h8.608a.74.74,0,0,1,.783.783.739.739,0,0,1-.783.782m0-3.13H26.839a.739.739,0,0,1-.783-.783.739.739,0,0,1,.783-.782h8.608a.739.739,0,0,1,.783.782.739.739,0,0,1-.783.783"
            transform="translate(-18.23 0.088)" fill={color} />
        </g>
      </g>
    </svg>

  )
}
const Phone = ({ color }) => {
  return (
    <svg id="Grupo_594" data-name="Grupo 594" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20.373" height="20.395" viewBox="0 0 20.373 20.395">
      <g id="Grupo_560" data-name="Grupo 560" clipPath="url(#clipPath)">
        <path id="Caminho_7204" data-name="Caminho 7204" d="M4.235.022,4.45.137l.7.667A5.7,5.7,0,0,1,6.107,2.08c.535,1.4,1.915,2.479,1.634,4.187-.024.143-.186.26-.275.4-.386.587-.814,1.153-1.14,1.772-.459.87.062,1.637.5,2.3a10.3,10.3,0,0,0,1.768,1.963,3.86,3.86,0,0,0,4.65.472,3.356,3.356,0,0,1,3.869.25l.816.573c.6.474,1.221.917,1.783,1.428.835.759.832,1.345.271,2.316a5.557,5.557,0,0,1-4.455,2.649,4.076,4.076,0,0,1-1.729-.36,16.125,16.125,0,0,1-5.7-3.052l-.886-.661c-.516-.42-1.047-.825-1.546-1.264A18.992,18.992,0,0,1,.256,6.853,5.832,5.832,0,0,1,2.8.229,4.014,4.014,0,0,1,3.863,0l.373.023"
          transform="translate(0 0.001)" fill={color} />
      </g>
    </svg>
  )
}

var greyColor = "#717171"
var whiteColor = "#FFFFFF"

const Header = ({ differentColorFirstMenu, location, dataGlobal }) => {

  function swipeToForm() {
    if (typeof document !== 'undefined') {
      if (location) {
        if (location.pathname === "/") {
          var swiper = document.getElementsByClassName('swiper')
          swiper[0].swiper.slideTo(8)
          swiper[0].scrollIntoView();
        }
        else if (location.pathname !== "/") {
          navigate("/#form")
        }
      }
    }
  }

  return (
    <header className="main-container-limit">
      <Container className="max-width  position-relative m-auto overflow-visible">
        <div className="first-table">
         
          <a
            href="https://github.com/cristianafmb"
            style={{
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
            target="_blank"
          >
            <Github color={differentColorFirstMenu ? greyColor : whiteColor} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristiana-baiorte-9591881b4/"
            style={{
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
            target="_blank"
          >
            <LinkedIn color={differentColorFirstMenu ? greyColor : whiteColor} />
          </a>
         
        </div>
        <div className="second-table">
          <Link to="/" >
            <Logo color={differentColorFirstMenu ? greyColor : whiteColor} />
          </Link>
        </div>
        <div className="third-table">
          <div className="container-reference" id='#myMenu'>
            <button onClick={() => HandlePhone()}
              rel="noreferrer noopener" className={differentColorFirstMenu ? "container-btn-phone color-inverse" : "container-btn-phone"} >
              <div className="btn-icon-phone">
                <Phone color={differentColorFirstMenu ? greyColor : whiteColor} />
              </div>

              <div className="btn-text-phone">
                <span className="fontRegular details-small">Let's talk</span>
              </div>
            </button >
            <button style={{ cursor: 'pointer' }}
              className={differentColorFirstMenu ? "container-btn-form color-inverse" : "container-btn-form"} onClick={() => swipeToForm()}>
              <div className="btn-icon-form" >
                <Form color={differentColorFirstMenu ? greyColor : whiteColor} />
              </div>
              <div className="btn-text-form">
                <span className="fontRegular details-small">More Information</span>
              </div>
            </button >
            <div>
            </div>
          </div>
        </div>
      </Container>
    </header >
  )
}

export default connect(state => ({
  differentColorFirstMenu: state.app.differentColorFirstMenu
}), null)(Header)