import React, { useState, useRef } from "react"
import { InView } from 'react-intersection-observer'
import { connect } from 'react-redux'
import { toggleDifferentColorFirstMenu } from "../state/app"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Image } from './Images'
import { motion } from "framer-motion"


const Quote = ({ dispatch, data }) => {
    //sc-bwzfXH kHluFY

    const ref = useRef(null);

    const [addClass, setAddClass] = useState(false)
    const [atualSlide, setAtualSlide] = useState(0)

    function handleSelect(selectedIndex, e) {
        setTimeout(() => {
            setAtualSlide(selectedIndex)
        }, 50);
    }
    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    const variants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } },
        hidden: { opacity: 0, x: "-10%" }
    };

    return (
        <div className="section active" >
            <InView as="div" threshold={0.7} onChange={inView => (dispatch(toggleDifferentColorFirstMenu(inView)), setAddClass(inView))} className="align-middle d-flex h-100 position-relative">
                <Container className="mt-4">
                    <Row>
                        <Col lg="6" md="6" className="d-flex position-relative align-middle  pr-3 pl-3 ">
                            <Image src={data.img} alt={data.alt} extraClass="img-quote" />
                        </Col>
                        <Col lg="6" md="6" className="d-grid align-middle pr-0 pl-5">

                            <motion.div
                                animate={addClass ? "visible" : "hidden"}
                                initial="hidden"
                                variants={variants}
                                className="square"
                            >
                                <h3 className="title-md fontRegular title-slide-quote mb-2" >
                                    {data.title}
                                </h3>
                            </motion.div>
                            <Carousel className="carousel-quote" ref={ref} indicators={false} loop controls={false} interval={null} activeIndex={atualSlide} onSelect={handleSelect}>
                                {data.description.map((desc, index) => (
                                    <Carousel.Item>
                                        <p className="txt fontRegular text-justify mb-2 ">
                                            {desc}
                                        </p>

                                        {index == data.description.length - 1 &&
                                            <div className="d-flex">
                                                <div>
                                                    <p className="txt fontRegular mb-1 mt-2 font-weight-bold">
                                                        {data.person}
                                                    </p>
                                                    <p className="txt fontRegular mb-0 mt-0">
                                                        {data.job}
                                                    </p>
                                                </div>
                                                <Image src={data.iconQuote} alt={data.iconQuoteAlt} extraClass="quote-icon-quote-section mb-0" />
                                            </div>
                                        }
                                    </Carousel.Item>
                                ))}

                            </Carousel>
                            <div className="container-slide-quote-arrow">
                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17 " onClick={onPrevClick}>
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="8.5" cy="8.5" r="8.5" opacity={atualSlide === 0 ? '1' : '0.3'} />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17 " onClick={onNextClick}>
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="8.5" cy="8.5" r="8.5" opacity={atualSlide === 1 ? '1' : '0.3'} />
                                </svg>
                            </div>
                            <Button variant="dark" className="button-know-more-red mt-4" href={data.btnLink} target="_blank">
                                <p className="fontRegular txt text-uppercase me-2 ms-2 mb-0">
                                    {data.btnText}
                                </p>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </InView>
        </div>
    )
}

export default connect()(Quote)