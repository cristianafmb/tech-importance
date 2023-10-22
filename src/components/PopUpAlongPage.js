import * as React from "react"
import { connect } from 'react-redux'
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" viewBox="0 0 21 10">
             <path id="Path" d="M20.759,4.429h0L16.472.235a.83.83,0,0,0-1.16,0,.8.8,0,0,0,0,1.14l2.878,2.815H.82a.807.807,0,1,0,0,1.613H18.193L15.315,8.622a.8.8,0,0,0,0,1.14.83.83,0,0,0,1.16,0l4.286-4.194h0A.8.8,0,0,0,20.759,4.429Z" fill="#e30713" />
        </svg>

    )
}
const PopUpAlongPage = ({ mobile, className }) => {

    return (
        <div className={className + " main-container-limit transition-popup"}>
            <Container className="max-width m-auto ">
                <div className="container-trigger">
                    <StaticImage loading="eager" src="../images/lightbulb.png" alt="Lightbulb" />
                </div>
                <div className="container-popup-along-page ">
                    <div className="container-popup-along-page-inner ">
                        <div className="container-show">
                            {mobile ?
                                <>
                                    <p className="fontRegular txt black mb-0">
Coding is a powerful tool that can be used to create anything from simple websites to complex software applications. It is also a creative outlet that allows programmers to express themselves and solve problems in new and innovative ways.</p>
                                    <br />
                                    <a href="https://github.com/cristianafmb" target="_blank">
                                        <div className="container-know-more fontRegular txt red mb-3">
                                            <p className="text">Know more</p>
                                            <Arrow />
                                        </div>
                                    </a>
                                    <br />
                                </>
                                :
                                <>
                                    <p className="fontRegular txt black">
Coding is a powerful tool that can be used to create anything from simple websites to complex software applications. It is also a creative outlet that allows programmers to express themselves and solve problems in new and innovative ways.</p>
                                    <a href="https://github.com/cristianafmb" target="_blank">
                                        <div className="container-know-more fontRegular txt red">
                                            <p className="text red">Know more</p>
                                            <Arrow />
                                        </div>
                                    </a>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default connect()(PopUpAlongPage)