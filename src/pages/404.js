import React, { useRef } from "react"
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Block404 from "../components/block404"

import '../styles/homepage.scss'


const NotFoundPage = ({ location }) => {

  const marcacaoRef = useRef(null);
  const breakpoints = useBreakpoint();
  var mobile = breakpoints.md
  const { t } = useTranslation()


  return (
    <Layout marcacaoRef={marcacaoRef} mobile={mobile} location={location} dataGlobal={t("global", { returnObjects: true })}>

      <Swiper
        effect="fade"
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper position-absolute"
      >

        <SwiperSlide  >
          <Block404 data={t("global", { returnObjects: true })['404']}/>
        </SwiperSlide>

      </Swiper>
    </Layout >
  )
}

export const Head = () => <Seo title="404" />

export default connect()(NotFoundPage)


export const QueryHomepagePT = graphql`
  query($language: String!) {
    locales: allLocale(filter: { ns: { in: [ "global"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`