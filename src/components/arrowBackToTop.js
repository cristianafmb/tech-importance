import * as React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
            <g id="Grupo_1939" data-name="Grupo 1939" transform="translate(-1712 -944)">
                <g id="Arrow" transform="translate(1734 987.652) rotate(-90)">
                    <path id="Path" d="M28.325,6.043h0L22.476.32a1.133,1.133,0,0,0-1.583,0,1.087,1.087,0,0,0,0,1.556l3.927,3.842H1.119a1.1,1.1,0,1,0,0,2.2h23.7L20.9,11.764a1.087,1.087,0,0,0,0,1.556,1.133,1.133,0,0,0,1.583,0L28.324,7.6h0A1.088,1.088,0,0,0,28.325,6.043Z" fill="#fff" />
                </g>
                <g id="Elipse_32" data-name="Elipse 32" transform="translate(1712 944)" fill="none" stroke="#fff" stroke-width="2">
                    <circle cx="29" cy="29" r="29" stroke="none" />
                    <circle cx="29" cy="29" r="28" fill="none" />
                </g>
            </g>
        </svg>

    )
}
const ArrowBackToTop = ({ mobile, className, location }) => {


    function backToTop() {
        if (typeof document !== 'undefined') {
            if (location) {
                if (location.pathname === "/" || location.pathname == '/en/') {
                    var swiper = document.getElementsByClassName('swiper')
                    swiper[0].swiper.slideTo(0)
                    swiper[0].scrollIntoView();
                }
            }
        }
    }

    return (
        <div className={className + " container-arrow-back-to-top"}>
            <Container className="max-width m-auto align-middle d-flex">
                <div className="container-arrow-top-trigger" onClick={() => backToTop()}>
                    <Arrow />
                </div>
            </Container>
        </div>
    )
}

export default connect()(ArrowBackToTop)