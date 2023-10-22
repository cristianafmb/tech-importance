import * as React from "react"
import { InView } from 'react-intersection-observer'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from './Images'

const Growth = ({ data }) => {

    return (
        <div className="section active" >
            <InView as="div" threshold={0.7} className="align-bottom d-flex h-100 position-relative">
                <Image src={data.img} alt={data.alt} extraClass="img-growth position-absolute" />
                <div className="container-imgs-growths container m-auto align-middle w-100 h-100 d-flex" >
                    <Col sm="9" md="9" lg="9" className="position-relative ">
                        <Row className="position-relative p-0 align-middle">
                            <Col sm="2" md="2" lg="2" className="p-0">
                                <Image src={data.imgCertificate} alt={data.imgCertificateAlt} extraClass="img-growth-certificate" />
                            </Col>
                            <Col sm="10" md="10" lg="10">
                                <h3 className="title-md fontRegular white ">{data.title}</h3>
                            </Col>
                        </Row>
                        <Row className="position-relative ">
                            <Col sm="12" md="12" lg="12" className="p-0">
                                <p className="txt fontRegular white text-justify mt-3">{data.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Carousel controls={false} interval={5000} className="carousel-icons d-grid align-middle">
                                {console.log(data.icons)}
                                {data.icons.map((atual, index) => (
                                    <Carousel.Item key={'icon-growth-' + index}>
                                        <Stack
                                            direction="horizontal"
                                            className="h-100 justify-content-center align-items-center"
                                            gap={3}
                                        >
                                            <Col sm="4" md="4" lg="4" className="d-grid align-middle two-columns-growth-icons ">
                                                <div>
                                                    <Image src={atual[0].icon} alt={atual[0].iconText} extraClass=" mb-0 icon-slide-sustantable" />
                                                </div>
                                                <h4 className="fontRegular white text-capitalize description mb-0">{atual[0].iconText}</h4>
                                            </Col>
                                            <Col sm="4" md="4" lg="4" className="d-grid align-middle two-columns-growth-icons ">
                                                <div>
                                                    <Image src={atual[1].icon} alt={atual[1].iconText} extraClass=" mb-0 icon-slide-sustantable" />
                                                </div>
                                                <h4 className="fontRegular white text-capitalize description mb-0">{atual[1].iconText}</h4>
                                            </Col>
                                            <Col sm="4" md="4" lg="4" className="d-grid align-middle two-columns-growth-icons ">
                                                <div>
                                                    <Image src={atual[2].icon} alt={atual[2].iconText} extraClass=" mb-0 icon-slide-sustantable" />
                                                </div>
                                                <h4 className="fontRegular white text-capitalize description mb-0">{atual[2].iconText}</h4>
                                            </Col>
                                        </Stack>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Row>
                    </Col>
                </div>
            </InView>
        </div>
    )
}

export default connect()(Growth)