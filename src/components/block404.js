import { connect } from 'react-redux'
import * as React from "react"
import "../styles/404.scss"

import { Image } from './Images';

const Block404Component = ({ data }) => {
    console.log(data)
    return (
        <div className="section section-404">
            <div className="max-width m-auto mb-0">
                <Image src={data.bg} alt={data.bgAlt} extraClass=" bg-404 " />

                <div className='position-relative w-100 h-100'>
                    <div>
                        <div className="starsec"></div>
                        <div className="starthird"></div>
                        <div className="starfourth"></div>
                        <div className="starfifth"></div>
                    </div>


                    <div className="lamp__wrap">
                        <div className="lamp">
                            <div className="cable"></div>
                            <div className="cover"></div>
                            <div className="in-cover">
                                <div className="bulb"></div>
                            </div>
                            <div className="light"></div>
                        </div>
                    </div>
                    <section className="error">
                        <div className="error__content">
                            <div className="error__message message">
                                <h1 className="message__title fontRegular white title-small text-uppercase">Page Not Found</h1>
                                <p className="message__text fontRegular white description" >We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                            </div>
                            <div className="error__nav e-nav">
                                <a href="/" target="_self" className="e-nav__link fontRegular white description"></a>
                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </div>
    )
}

export default connect()(Block404Component)