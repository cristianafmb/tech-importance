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
import BannerTop from "../components/bannerTop"
import GalleryGeneral from "../components/galleryGeneral"
import GalleryGeneralMobile from "../components/galleryGeneralMobile"
import IconsSlide from "../components/iconsSlide"
import IconsSlideMobile from "../components/iconsSlideMobile"
import GalleryInvolvement from "../components/galleryInvolvement"
import GalleryInvolvementMobile from "../components/galleryInvolvementMobile"
import Quote from "../components/quote"
import QuoteMobile from "../components/quoteMobile"
import SlideForm from "../components/slideForm"
import SlideFormMobile from "../components/slideFormMobile"
import FooterMobile from "../components/footerMobile"
import '../styles/homepage.scss'
import Growth from "../components/growth"
import GrowthMobile from "../components/growthMobile"


const IndexPage = ({ location }) => {

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
        paginationClickable={true}
        spaceBetween={30}
        mousewheelControl={true}
        mousewheelSensitivity={0}
        mousewheelReleaseOnEdges={true}
        mousewheel={{
          enable: true,
          thresholdDelta: 25,
          releaseOnEdges: true
        }}
        parallax={true}
        speed={600}

        modules={[Mousewheel, Pagination]}
        className="mySwiper position-absolute"

      >
        {mobile
          ?
          <>
            <SwiperSlide  >
              <BannerTop mobile data={t("homepage", { returnObjects: true })['bannerTop']['mobile']} popup={t("homepage", { returnObjects: true })['bannerTop']['popup']} />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryInvolvementMobile data={t("homepage", { returnObjects: true })['galleryConcept']} concept />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryGeneralMobile data={t("homepage", { returnObjects: true })['galleryGeneral']} />
            </SwiperSlide>
            <SwiperSlide  >
              <IconsSlideMobile data={t("homepage", { returnObjects: true })['icons']} location={location} />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryInvolvementMobile data={t("homepage", { returnObjects: true })['galleryInvolvement']} />
            </SwiperSlide>
            <SwiperSlide  >
              <GrowthMobile mobile data={t("homepage", { returnObjects: true })['growth']} />
            </SwiperSlide>
            <SwiperSlide  >
              <QuoteMobile data={t("homepage", { returnObjects: true })['quoteSection']} />
            </SwiperSlide>
            <SwiperSlide  >
              <SlideFormMobile data={t("global", { returnObjects: true })['contacts']} form={t("global", { returnObjects: true })['form']} />
            </SwiperSlide>
            <SwiperSlide  >
              <FooterMobile data={t("global", { returnObjects: true })['contacts']} />
            </SwiperSlide>

          </>
          :
          <>
            <SwiperSlide  >
              <BannerTop data={t("homepage", { returnObjects: true })['bannerTop']['desktop']} popup={t("homepage", { returnObjects: true })['bannerTop']['popup']} />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryInvolvement data={t("homepage", { returnObjects: true })['galleryConcept']} concept />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryGeneral data={t("homepage", { returnObjects: true })['galleryGeneral']} />
            </SwiperSlide>
            <SwiperSlide  >
              <IconsSlide data={t("homepage", { returnObjects: true })['icons']} location={location} />
            </SwiperSlide>
            <SwiperSlide  >
              <GalleryInvolvement data={t("homepage", { returnObjects: true })['galleryInvolvement']} />
            </SwiperSlide>
            <SwiperSlide  >
              <Growth data={t("homepage", { returnObjects: true })['growth']} />
            </SwiperSlide>
            <SwiperSlide  >
              <Quote data={t("homepage", { returnObjects: true })['quoteSection']} />
            </SwiperSlide>
            <SwiperSlide  >
              <SlideForm data={t("global", { returnObjects: true })['contacts']} form={t("global", { returnObjects: true })['form']} />
            </SwiperSlide>

          </>
        }
      </Swiper>
    </Layout >
  )
}

export const Head = () => <Seo title="Home" />

export default connect()(IndexPage)


export const QueryHomepagePT = graphql`
  query($language: String!) {
    locales: allLocale(filter: { ns: { in: ["homepage", "global"] }, language: { eq: $language } }) {
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