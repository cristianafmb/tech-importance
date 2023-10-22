import React from "react"
import CookieConsent from "react-cookie-consent";
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'

const CookiesComponent = () => {

    return (
        <div className="position-absolute container-cookies title-small fontRegular white">
            <div className="container-cookies-inner">
                <CookieConsent
                    location='bottom'
                    buttonText='Aceitar'
                    cookieName='cookie'
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    contentStyle={{
                        maxWidth: 'fit-content',
                        textAlign: 'justify'
                    }}
                    expires={31}
                >
                    <span className="cookie-text">Este site utiliza cookies para permitir uma melhor experiência por parte do utilizador. Ao navegar no site estará a consentir a sua utilização.
                    </span>

                </CookieConsent>
            </div>
        </div>
    )
}

export default connect()(CookiesComponent)