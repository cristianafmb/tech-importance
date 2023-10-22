import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from 'react-redux'

import Header from "./header"
import HeaderMobile from "./headerMobile"
import CTAButtonsMobile from "./CTAButtonsMobile"
import PopUpAlongPage from "./PopUpAlongPage"
import ArrowBackToTop from "./arrowBackToTop"
import CookiesPopup from "./Cookies"
import "./layout.css"


const Layout = ({ children, marcacaoRef, hideFixedFooterPopup, showArrowTop, mobile, location, dataGlobal }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  var allCookies = ''
  var acceptedCookies = false
  if (typeof document !== `undefined`) {
    allCookies = document.cookie;
    acceptedCookies = allCookies.includes('cookie')
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (location)
        if (location.hash !== "" && location.pathname === "/") {
          var swiper = document.getElementsByClassName('swiper')
          swiper[0].swiper.slideTo(2)
          swiper[0].scrollIntoView();
        }
    }
  }, [location]);

  return (
    <>
      {mobile ?
        <>
          <HeaderMobile siteTitle={data.site.siteMetadata?.title || `Title`} marcacaoRef={marcacaoRef} location={location} dataGlobal={dataGlobal}/>
          <div>
            <main>{children}</main>
            <PopUpAlongPage className={hideFixedFooterPopup ? 'hide' : 'show'} mobile marcacaoRef={marcacaoRef} />
            <CTAButtonsMobile location={location} />
            <ArrowBackToTop className={showArrowTop ? 'show' : 'hide'} location={location}/>
          </div>
        </>
        :
        <>
          <Header dataGlobal={dataGlobal} siteTitle={data.site.siteMetadata?.title || `Title`} marcacaoRef={marcacaoRef} location={location}/>
          <div>
            <main>{children}</main>
            <PopUpAlongPage className={hideFixedFooterPopup ? 'hide' : 'show'} />
            <ArrowBackToTop className={showArrowTop ? 'show' : 'hide'} location={location}/>
          </div>
        </>
      }
      {!acceptedCookies &&
        <CookiesPopup />
      }

    </>
  )
}

export default connect(state => ({
  hideFixedFooterPopup: state.app.hideFixedFooterPopup,
  showArrowTop: state.app.showArrowTop
}), null)(Layout)