import * as React from "react"
import { InView } from 'react-intersection-observer'
import { toggleHideFixedFooterPopup, toggleShowArrowTop } from "../state/app"
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from './Images'
import Form from './form'


const SlideFormMobile = ({ dispatch, data, form }) => {

    return (
        <div className="section active" id="form">
            <InView as="div" threshold={0.7} onChange={inView => (dispatch(toggleHideFixedFooterPopup(inView)), dispatch(toggleShowArrowTop(inView)))}
                className="align-middle d-flex  position-relative" style={{ height: '100%' }}>

                <Image src={data.imgFormMobile} alt={data.alt} extraClass="bg-contacts" />

                <div className="main-container-limit max-width t-0 position-absolute container container-contacts-centered h-100vh">
                    <Container className="position-relative ">
                        <Row className="mb-5 pb-5 pt-5">
                            <Col xs="0" md="6" lg="6"></Col>
                            <Col xs="12" md="6" lg="6">
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

export default connect()(SlideFormMobile)