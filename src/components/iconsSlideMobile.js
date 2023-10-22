import * as React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { InView } from 'react-intersection-observer'
import { toggleDifferentColorFirstMenu } from "../state/app"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
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
                        <div className="container-title-icons-slide">
                            <h1 className="mb-0 fontRegular white title-large">{data.title[0]}</h1>
                            <h1 className="mb-0 fontRegular white title-large ml-5">{data.title[1]}</h1>
                        </div>
                        <div className="container-table-icons-slide">
                            <Carousel controls={false} interval={null} className="carousel-icons-slide d-grid align-middle">
                                {data.iconsMobile.map((atual, index) => (
                                    <Carousel.Item key={'icon-slide-' + index}>
                                        <Stack style={{ height: '10vh'}}
                                            direction="horizontal"
                                            className="justify-content-center "
                                            gap={3}
                                        >
                                            <Col sm="6" md="6" lg="6" className="d-grid align-middle two-columns-growth-icons ">
                                                <Image src={atual[0].image} alt={atual[0].description} extraClass="icon-icons-slide" />
                                                <div className="container-description-icons-slide">
                                                    <p className="description black fontRegular mb-0">{atual[0].description}</p>
                                                </div>
                                            </Col>
                                            <Col sm="6" md="6" lg="6" className="d-grid align-middle two-columns-growth-icons ">
                                                <Image src={atual[1].image} alt={atual[1].description} extraClass="icon-icons-slide" />
                                                <div className="container-description-icons-slide">
                                                    <p className="description black fontRegular mb-0">{atual[1].description}</p>
                                                </div>
                                            </Col>

                                        </Stack>
                                        <Stack style={{ height: '10vh'}}
                                            direction="horizontal"
                                            className="justify-content-center "
                                            gap={3}
                                        >
                                            <Col sm="6" md="6" lg="6" className="d-grid align-middle two-columns-growth-icons ">
                                                {atual[2] ?
                                                    <>
                                                        <Image src={atual[2].image} alt={atual[2].description} extraClass="icon-icons-slide" />
                                                        <div className="container-description-icons-slide">
                                                            <p className="description black fontRegular mb-0">{atual[2].description}</p>
                                                        </div>
                                                    </>
                                                    :
                                                    <div className="container-description-icons-slide">
                                                        <p className="icon-icons-slide"></p>
                                                        <p className="description black fontRegular mb-0"></p>
                                                    </div>
                                                }
                                            </Col>
                                            <Col sm="6" md="6" lg="6" className="d-grid align-middle two-columns-growth-icons ">
                                                {atual[3] ?
                                                    <>
                                                        <Image src={atual[3].image} alt={atual[3].description} extraClass="icon-icons-slide" />
                                                        <div className="container-description-icons-slide">
                                                            <p className="description black fontRegular mb-0">{atual[3].description}</p>
                                                        </div>
                                                    </>
                                                    : <div className="container-description-icons-slide">
                                                        <p className="icon-icons-slide"></p>
                                                        <p className="description black fontRegular mb-0"></p>
                                                    </div>
                                                }
                                            </Col>

                                        </Stack>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <Button variant="outline-dark" className='btn-icon-slide mt-5 ml-auto mr-auto' onClick={() => swipeToForm()} target="_self">
                                <p className='fontRegular txt black text-uppercase mb-0'>{data.btnText}</p>
                            </Button>
                    </Row>
                </div>
            </InView>
        </div>
    )
}

export default connect()(IconsSlide)