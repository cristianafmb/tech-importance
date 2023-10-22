import * as React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { InView } from 'react-intersection-observer'
import { toggleDifferentColorFirstMenu } from "../state/app"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Image } from './Images'

const IconsSlide = ({ dispatch, data, location }) => {

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
        <div className="section active align-middle d-grid icons-slide" >
            <InView as="div" threshold={0.5} onChange={inView => dispatch(toggleDifferentColorFirstMenu(inView))}
                className=" position-relative h-100vh align-middle d-grid">
                <Image src={data.bg} alt={data.bgAlt} extraClass="bg-icons-slide" />
                <Image src={data.bigImage} alt={data.bigImageAlt} extraClass="big-image-icons-slide" />
                <div className="align-middle container d-grid position-relative ">
                    <Row className="align-middle position-relative">
                        <Col sm="6" md="6" lg="6">
                            <div className="container-title-icons-slide">
                                <h1 className="mb-0 fontRegular black title-md">{data.title[0]}</h1>
                                <h1 className="mb-5 fontRegular black title-md ml-5">{data.title[1]}</h1>
                            </div>
                        </Col>
                        <Col sm="6" md="6" lg="6">
                            <div className="container-table-icons-slide">
                                {data.icons.map((item, index) =>
                                    <div>
                                        <Image src={item.image} alt={item.description} extraClass="icon-icons-slide" />
                                        <p className="description black fontRegular mb-0">{item.description}</p>
                                    </div>
                                )}

                            </div>
                            <Button variant="outline-dark" className='btn-icon-slide mt-5' onClick={() => swipeToForm()} target="_self">
                                <p className='fontRegular txt black text-uppercase mb-0'>{data.btnText}</p>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </InView>
        </div>
    )
}

export default connect()(IconsSlide)