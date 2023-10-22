import * as React from "react"
import { InView } from 'react-intersection-observer'
import { toggleHideFixedFooterPopup, toggleShowArrowTop } from "../state/app"
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from './Images'

import { HandlePhone } from "../custom/handlePhone"
import LivroReclamacoes from '../images/livro_de_reclamacoes.svg'
import Form from './form'

const Slide3 = ({ dispatch, data, form }) => {


    return (
        <div className="section active" id="form">
            <InView as="div" threshold={0.7} onChange={inView => (dispatch(toggleHideFixedFooterPopup(inView)), dispatch(toggleShowArrowTop(inView)))}
                className="align-middle d-flex slide3 position-relative" style={{ height: '100%' }}>
                <Image src={data.img} alt={data.alt} extraClass="bg-contacts" />

                <div className="main-container-limit max-width t-0 position-absolute container container-contacts-centered h-100vh">
                    <Container className="position-relative ">
                        <Row>
                            <Col xs="0" md="6" lg="6" className="d-grid align-middle">
                                <Container className="position-relative ">
                                    <Row className="mb-5 ">
                                        <Col>
                                            <p className="fontRegular white description  text-uppercase mb-1">{data.mobile.titleEmail}</p>
                                            <a href="mailto:cbaiorte@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none mb-3">
                                                <p className="fontRegular white title-small mb-4 ">cbaiorte@gmail.com</p>
                                            </a>
                                            <p className="fontRegular white description  text-uppercase mb-1">{data.mobile.titleTel}</p>
                                            <div onClick={() => HandlePhone()}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    borderColor: 'transparent'
                                                }}
                                                rel="noreferrer noopener" target="_blank" className="text-decoration-none">
                                                <p className="fontRegular white title-small  mb-0">
                                                    +351 912 992 834
                                                </p>
                                                <p className="fontRegular white title-small mb-0 ">
                                                    <small className="description">{data.mobile.titleTelInfo}</small>
                                                </p>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row className="mb-2 ">
                                        <Col>
                                            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                                <img src={LivroReclamacoes} alt={'Livro de Reclamações'} className="img-livro-reclamacoes" />
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row className="">
                                        <Col className="text-left">
                                            <a href="/politica-de-privacidade" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                                <p className="fontRegular white description mb-0 text-uppercase">{data.mobile.titlePols}</p>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row className="">
                                        <Col className="text-left mt-5">
                                            <a href="https://github.com/cristianafmb" target="_blank" rel="noreferrer" className="text-decoration-none ">
                                                <p className="fontRegular white txt-created-by mb-0">CREATED BY: @cristianafmb</p>
                                            </a>
                                        </Col>
                                    </Row>


                                </Container>
                            </Col>
                            <Col xs="12" md="6" lg="6" className="align-middle">
                                <h2 className="title-small fontRegular white mb-0">
                                    {data.title}
                                </h2>
                                <h1 className="title-md fontRegular white mb-4">
                                    {data.subtitle}
                                </h1>
                                <Form data={form} />
                            </Col>
                        </Row>

                    </Container>

                </div>

            </InView>
        </div>
    )
}

export default connect()(Slide3)