import React, { useEffect, useState, useRef } from "react"
import { InView } from 'react-intersection-observer'
import { connect } from 'react-redux'
import { toggleDifferentColorFirstMenu } from "../state/app"
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
import { Image } from './Images'
import { Container } from "react-bootstrap";



const GalleryInvolvementMobile = ({ dispatch, data, concept }) => {
    const ref = useRef(null);

    const [showTitle, setShowTitle] = useState(true)
    const [atualSlide, setAtualSlide] = useState(0)


    function handleSelect(selectedIndex, e) {
        setTimeout(() => {
            setAtualSlide(selectedIndex)
        }, 50);
    }
    const onPrevClick = () => {
        setTimeout(() => {
            ref.current.prev();
            setShowTitle(true);
        }, 500);
        setShowTitle(false);
    };
    const onNextClick = () => {
        setTimeout(() => {
            ref.current.next();
            setShowTitle(true);
        }, 500);
        setShowTitle(false);
    };


    const variants = {
        visible: { opacity: 1, y: '0vh', transition: { duration: 0.3, ease: 'linear', delay: 0.8 } },
        hidden: { opacity: 0, y: '-2vh', transition: { duration: 0.3, ease: 'linear' } },
    }


    return (
        <div className="section active" >
            <InView as="div" threshold={0.7} onChange={inView => (dispatch(toggleDifferentColorFirstMenu(inView)))} className=" h-100 position-relative" style={{ backgroundColor: '#F3F3F0' }}>
                <Container className="h-100 p-0">
                    <Image src={data.bg} alt={data.bgAlt} extraClass="bg-img-gallery-involvement" />
                    <Row className="h-100 w-100 gallery-involvement-container ms-0 me-0 p-0 align-middle">
                        <div sm="9" md="9" lg="9" className="container-imgs-involvement p-0 align-middle">
                            <div className={concept ?" container-concept container" : "container"}>
                                <div className="container-title-gallery-involvement">
                                    <motion.div variants={variants} initial="hidden"
                                        animate={showTitle ? 'visible' : 'hidden'}>
                                        <h3 className="title fontRegular black mb-2">{data.gallery[atualSlide].title}</h3>
                                        {data.gallery[atualSlide].icon ?
                                            <div className="container-gallery-involvement-icons align-middle">
                                                <div sm="2" md="2" lg="2">
                                                    <Image src={data.gallery[atualSlide].icon} alt={data.gallery[atualSlide].iconAlt} extraClass="icon-gallery-involvement mb-0" />
                                                </div>
                                                <div sm="10" md="10" lg="10">
                                                    <p className="text-uppercase txt fontRegular black font-weight-bold mb-0">{data.gallery[atualSlide].iconTitle}</p>
                                                    <p className="txt fontRegular black mb-0 ">{data.gallery[atualSlide].iconDescription}</p>
                                                </div>
                                            </div>
                                            :
                                            <div className="d-block align-middle">
                                                <div sm="12" md="12" lg="12">
                                                    <p className="txt fontRegular black mb-0 ">{data.gallery[atualSlide].iconDescription}</p>
                                                </div>
                                            </div>
                                        }
                                    </motion.div>
                                </div>
                                <Row className="container-gallery-involvement-arrow container mr-0 ml-0 p-0">
                                    <svg className="p-0 me-4 svg-arrow" id="Grupo_1088" data-name="Grupo 1088" xmlns="http://www.w3.org/2000/svg" width="78" height="35" onClick={onPrevClick} viewBox="0 0 78 35">
                                        <g id="Arrow" transform="translate(24.673 10.678)">
                                            <path id="Path" d="M.328,6.043h0L6.178.32a1.133,1.133,0,0,1,1.583,0,1.087,1.087,0,0,1,0,1.556L3.83,5.722h23.7a1.1,1.1,0,1,1,0,2.2H3.83l3.927,3.842a1.087,1.087,0,0,1,0,1.556,1.133,1.133,0,0,1-1.583,0L.329,7.6h0A1.088,1.088,0,0,1,.328,6.043Z" transform="translate(0 0)" fill="#000" />
                                        </g>
                                        <g id="Retângulo_1175" data-name="Retângulo 1175" fill="none" stroke="#000" stroke-width="1.5">
                                            <rect width="78" height="35" rx="15" stroke="none" />
                                            <rect x="0.75" y="0.75" width="76.5" height="33.5" rx="14.25" fill="none" />
                                        </g>
                                    </svg>
                                    <svg className="p-0 svg-arrow" xmlns="http://www.w3.org/2000/svg" width="78" height="35" viewBox="0 0 78 35" onClick={onNextClick}>
                                        <g id="Grupo_1088" data-name="Grupo 1088" transform="translate(-185 -693)">
                                            <g id="Arrow" transform="translate(209.674 703.678)">
                                                <path id="Path" d="M28.325,6.043h0L22.476.32a1.133,1.133,0,0,0-1.583,0,1.087,1.087,0,0,0,0,1.556l3.927,3.842H1.119a1.1,1.1,0,1,0,0,2.2h23.7L20.9,11.764a1.087,1.087,0,0,0,0,1.556,1.133,1.133,0,0,0,1.583,0L28.324,7.6h0A1.088,1.088,0,0,0,28.325,6.043Z" fill="#000" />
                                            </g>
                                            <g id="Retângulo_1175" data-name="Retângulo 1175" transform="translate(185 693)" fill="none" stroke="#000" stroke-width="1.5">
                                                <rect width="78" height="35" rx="15" stroke="none" />
                                                <rect x="0.75" y="0.75" width="76.5" height="33.5" rx="14.25" fill="none" />
                                            </g>
                                        </g>
                                    </svg>
                                </Row>
                                <Carousel id="myCarousel" ref={ref} indicators={false} loop controls={false} interval={null} activeIndex={atualSlide} onSelect={handleSelect}>

                                    {data.gallery.map((item, index) => (
                                        <Carousel.Item>
                                            <Row className="container-title-gallery-involvement-space m-0" />
                                            <Row className="container-gallery-involvement-arrow-space m-0" />
                                            <Row className="container-img-gallery-involvement-atual" key={'image-slide-involvement' + index}>
                                                <Image src={item.imageMobile} alt={item.imageAlt} extraClass={concept ? "img-gallery-involvement gallery-concept" : "img-gallery-involvement"} />
                                            </Row>
                                        </Carousel.Item>
                                    ))}


                                </Carousel>
                            </div>
                        </div>
                    </Row>
                </Container>
            </InView>
        </div>
    )
}

export default connect()(GalleryInvolvementMobile)