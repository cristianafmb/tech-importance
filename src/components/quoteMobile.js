import React, { useState, useRef } from "react"
import { InView } from 'react-intersection-observer'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from './Images'



const QuoteMobile = ({ dispatch, data }) => {
    //sc-bwzfXH kHluFY

    const ref = useRef(null);

    const [addClass, setAddClass] = useState(false)
    const [atualSlide, setAtualSlide] = useState(0)

    function handleSelect(selectedIndex, e) {
        setTimeout(() => {
            setAtualSlide(selectedIndex)
        }, 50);
    }

    return (
        <div className="section active" >
            <InView as="div" threshold={0.5} onChange={inView => (setAddClass(inView))} 
            className="align-middle d-flex h-100 position-relative bg-black white t-0 section-quote">
                 <Image src={data.imgMobile} alt={data.alt} extraClass="img-quote position-absolute" />
                <Container className="mt-4 position-relative">
                    <div className="d-gridtext-left w-100">
                        <Carousel className="carousel-quote" ref={ref} indicators={true} loop controls={false} interval={null} activeIndex={atualSlide} onSelect={handleSelect}>
                            {data.descriptionMobile.map((desc, index) => (
                                <Carousel.Item>
                                    {index == 0 &&
                                        <h3 className="title-md fontRegular title-slide-quote" >
                                            {data.title}
                                        </h3>
                                    }
                                    <p className="txt-md fontRegular text-justify mb-3 ">
                                        {desc}
                                    </p>

                                    {index == data.descriptionMobile.length - 1 &&
                                        <div className="d-flex container-quote-icon">
                                            <div>
                                                <p className="txt fontRegular mb-1 mt-3 font-weight-bold">
                                                    {data.person}
                                                </p>
                                                <p className="txt fontRegular mb-0 mt-0">
                                                    {data.job}
                                                </p>
                                            </div>
                                            <Image src={data.iconQuoteMobile} alt={data.iconQuoteAlt} extraClass="quote-icon-quote-section mb-0" />
                                        </div>
                                    }
                                </Carousel.Item>
                            ))}

                        </Carousel>
                        <div className="space-slide-quote-indicators"/>
                    </div>
                </Container>
            </InView>
        </div>
    )
}

export default connect()(QuoteMobile)