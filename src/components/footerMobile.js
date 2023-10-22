import * as React from "react"
import { InView } from 'react-intersection-observer'
import { toggleHideFixedFooterPopup, toggleShowArrowTop } from "../state/app"
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from './Images'

import Github from '../images/github.svg'
import LinkedIn from '../images/linkedIn_white.svg'
import { HandlePhone } from "../custom/handlePhone"

const FooterMobile = ({ dispatch, data }) => {


    return (
        <div className="section active">
            <InView as="div" threshold={0.7} onChange={inView => (dispatch(toggleHideFixedFooterPopup(inView)), dispatch(toggleShowArrowTop(inView)))}
                className="align-middle d-flex  position-relative" style={{ height: '100%' }}>

                <Image src={data.imgMobile} alt={data.alt} extraClass="bg-contacts" />

                <div className="main-container-limit max-width t-0  text-center position-absolute container container-contacts-centered h-100vh">
                    <Container className="position-relative ">
                        
                        <Row className="mb-2 w-75 m-auto">
                            <Col lg="2" md="2" sm="2" className="m-auto text-center w-25">
                                <a href="https://github.com/cristianafmb"
                                    className="text-decoration-none"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={Github} alt={'Github @cristianafmb'} />
                                </a>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="m-auto text-center w-25">
                                <a href="https://www.linkedin.com/in/cristiana-baiorte-9591881b4/"
                                    className="text-decoration-none"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={LinkedIn} alt={'LinkedIn Cristiana Baiorte'} />
                                </a>
                            </Col>
                        </Row>
                        <Row className="mb-2 ">
                            <Col>
                                <p className="fontRegular white description text-uppercase mb-1">{data.mobile.titleTel}</p>
                                <div onClick={() => HandlePhone()}
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'transparent'
                                    }}
                                    rel="noreferrer noopener" target="_blank" className="text-decoration-none">
                                    <p className="fontRegular white description ">
                                    +351 912 992 834
                                        <br />
                                        <small>{data.mobile.titleTelInfo}</small>
                                    </p>
                                </div>
                                <p className="fontRegular white description text-uppercase mb-1">{data.mobile.titleEmail}</p>
                                <a href="mailto:cbaiorte@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                    <p className="fontRegular white description ">cbaiorte@gmail.com</p>
                                </a>
                            </Col>
                        </Row>
                        <Row className="mb-2 ">
                            <Col>
                                <a href="/politica-de-privacidade" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                    <p className="fontRegular white description mb-0">{data.mobile.titlePols}</p>
                                </a>
                            </Col>
                        </Row>
                        <Row className="mb-2 ">
                            <Col>
                                <a href="https://github.com/cristianafmb" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                    <p className="fontRegular white description mb-0">CREATED BY: @cristianafmb</p>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </InView>
        </div>
    )
}

export default connect()(FooterMobile)