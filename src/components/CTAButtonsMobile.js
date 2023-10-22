import { connect } from 'react-redux'
import * as React from "react"
import { navigate } from "gatsby"
import { Container } from 'react-bootstrap';
import { HandlePhone } from "../custom/handlePhone"

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

const CTAButtonsMobile = ({ differentColorFirstMenu, location }) => {
    var greyColor = "#717171"
    var whiteColor = "#FFFFFF"

    function swipeToForm() {
        if (typeof document !== 'undefined') {
          if (location) {
            console.log(location)
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
        <div className="main-container-limit container-cta-buttons-mobile w-100 ">
            <Container className="max-width m-auto mb-0">
                <div className="container-reference">
                    <button className={differentColorFirstMenu ? "container-btn-phone color-inverse" : "container-btn-phone"} onClick={() => HandlePhone()}
              rel="noreferrer noopener" >
                        <div className="btn-icon-phone">
                            <Phone color={differentColorFirstMenu ? greyColor : whiteColor} />
                        </div>

                        <div className="btn-text-phone">
                            <span className="fontRegular details-small">Fale Connosco</span>
                        </div>
                    </button >
                    <button style={{ cursor: 'pointer' }}
                        className={differentColorFirstMenu ? "container-btn-form color-inverse" : "container-btn-form"} onClick={() => swipeToForm()}>
                        <div className="btn-icon-form" >
                            <Form color={differentColorFirstMenu ? greyColor : whiteColor} />
                        </div>

                        <div className="btn-text-form">
                            <span className="fontRegular details-small">Mais Informações</span>
                        </div>
                    </button >
                    <div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default connect(state => ({
    differentColorFirstMenu: state.app.differentColorFirstMenu
}), null)(CTAButtonsMobile)