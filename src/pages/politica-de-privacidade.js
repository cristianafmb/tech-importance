import React, { useRef } from "react"
import { InView } from 'react-intersection-observer'
import { toggleDifferentColorFirstMenu } from "../state/app"
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { connect } from 'react-redux'
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper';

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/homepage.scss'


const PoliticaPage = ({ dispatch, location }) => {
  const { t } = useTranslation()
  const marcacaoRef = useRef(null);
  const breakpoints = useBreakpoint();
  var mobile = breakpoints.md

  var textMobile = [
    {
      "title": "1 – Introduction",
      "description": [
        "We are committed to respecting the privacy and confidentiality of the personal data made available to you and therefore in this Privacy Policy you will find information on how they are treated in accordance with the General Data Protection Regulation.",
        "We have adopted administrative and technological measures to comply with the new General Data Protection Regulation.",
      ]
    },
    {
      "title": "",
      "description": [
        "The use of this website is governed by the terms and conditions set out below, which the user is obliged to fully respect. The user should not use this website if they do not agree with these terms and conditions."
      ]
    },
    {
      "title": "2 – Your consent",
      "description": [
        "By using our website and our platforms, you agree to our Privacy Policy."
      ]
    },
    {
      "title": "3 – Why do we process personal data?",
      "description": [
        "The personal data collected is primarily intended to respond to requests for information and contact, contractual management, the provision of services and the communication of changes to subscribed products and services, but may, however, with your consent, also be used in the dissemination of new products and services and news about the company, in carrying out evaluation surveys and in legally mandatory information actions."
      ]
    },
    {
      "title": "4 – What personal data is collected?",
      "description": [
        "Normally, the personal data collected is limited to Name, Address, Telephone/Mobile Number, Taxpayer Number, Email Address, but other data necessary for the provision of products or services may be collected.",
        "Additionally, when emails are sent, statistical data is collected that allows us to know the behavior of each subscriber in relation to the email received."
      ]
    },
    {
      "title": "5 – How are personal data collected?",
      "description": [
        "In general, personal data is collected when subscribing to one of our products or services, and some personal data is mandatory to provide the service.", 
        "We also collect your data when you subscribe to newsletters, to respond to your messages and requests for information, to analyze and formalize your application as a partner or collaborator, for the operations and management of the website, to prevent fraud and to maintain a record of your contact details."
      ]
    },
    {
      "title": "",
      "description": [
        "We always respect your right to privacy and do not collect any personal information about you without your prior and explicit consent. Your personal data will not be reused for other purposes that are previously identified or that have no relationship with those purposes for which they were initially collected.",
        "However, the provision of incorrect or inaccurate data is your sole responsibility."
      ]
    },
    {
      "title": "6 – Minors' data",
      "description": [
        "The website is not aimed at minors under the age of 16, so we ask that minors do not use the website or provide us with personal data through it."
      ]
    },
    {
      "title": " 7 – Sensitive data",
      "description": [
        "We expressly request that you do not send us or make us aware of any sensitive personal data, that is, information that reveals racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic information, biometric information, data relating to health or data relating to a natural person's sexual life or sexual orientation. Such personal data will be immediately deleted."
      ]
    },
    {
      "title": "8 – What is the retention period for personal data?",
      "description": [
        "It is important to note that the personal data you provide to us will be kept for a maximum period of ten years. <br />However, in certain cases we may retain data for longer periods, particularly when the law requires it."
      ]
    },
    {
      "title": "9 – Right to access, rectify and update data",
      "description": [
        "Under applicable legislation, you are guaranteed, as data subject, the right, at any time, to access your personal data, request its rectification or addition, oppose the processing of data, with the exception of strictly necessary to provide the service and/or request data portability, request the deletion of your data for marketing or telemarketing purposes or inclusion in subscriber lists and information services.<br />"
      ]
    },
    {
      "title": "",
      "description": [
        "You can request any of the actions mentioned above through our contact page on the website, using the most convenient and accessible method for your needs, establishing communication with us via our address, telephone or email.",
        "If you ask us to delete some or all of your personal data, some of the services requested may not be provided to you, retaining the personal data necessary to comply with our legal obligations.<br />We reserve the right to request access to identifying elements of the author of the request in order to prove their identity."
      ]
    },
    {
      "title": "10 – Disclosure of information to third parties",
      "description": [
        "We do not sell or commercialize your data.<br />As part of our activity, we may use third parties to provide certain services, which may involve access, by these entities, to the personal data of our users and customers.",
        "When this happens, we take all appropriate precautions, contractually imposing on these entities to put in place appropriate technical and organizational measures to prevent any illicit processing of data and to ensure its availability, integrity and confidentiality."
      ]
    },
    {
      "title": "",
      "description": [
        "Personal data may also be made available to courts and other competent authorities, in strict compliance with the provisions of the law, particularly when they are necessary for the resolution of disputes relating to billing and for activities relating to the protection of public safety, defense and security of the State and the prevention, investigation or detection of criminal offenses."
      ]
    },
    {
      "title": "11 – Security",
      "description": [
        "Ensuring the confidentiality, integrity and availability of data is a commitment we make to all our customers and users.",
        "In this sense, we follow the best information security management practices, requiring our employees to strictly comply with strict standards, ensuring the security of personal data communicated to us, and not being able to use such data for any purposes other than those defined in the contract. , nor correlate them with other data that are available."
      ]
    },
    {
      "title": "",
      "description": [
        "We draw attention to the fact that data circulating on the Internet is not fully protected against possible misuse, and the communication of access passwords, passwords, confidential codes and any sensitive information is carried out under your sole responsibility."
      ]
    },
    {
      "title": "12 – Cookies",
      "description": [
        "We use cookies on this website. A cookie is a small text file that identifies your computer on our server. Cookies themselves do not identify the individual user, only the computer used. Cookies are not used to collect personal information.",
        "This website uses cookies to help determine the usefulness, interest and number of visits to the website, allowing faster and more efficient browsing, eliminating the need to repeatedly enter the same information.<br />The use of cookies This site will always require your prior consent."
      ]
    },
    {
      "title": "",
      "description": [
        " The cookies we use:<br />PHPSESSID: cookie that allows the website to respond to any action that the User performs on the website, such as completing a survey form. The website will not function properly if this cookie is not used."
      ]
    },
    {
      "title": "",
      "description": [
        " xms_user: cookie used by backoffice users. The website works correctly if this cookie is not used.<br />__utma, __utmb, __utmc, __utmz: __ utmz cookies starting “__utm” enable the function of analysis software (analytics).",
        "This software helps analyze website visitors and provide anonymous information, such as browsers used, return visitors and response to marketing activities.<br /> __atuvc: The _atuvc cookie is created and read by the website's JavaScript that allows sharing of content on social networks “AddThis”."
      ]
    },
    {
      "title": "",
      "description": [
        "All browsers allow the User to accept, refuse or delete cookies, namely by selecting the appropriate settings in the respective browser. You can configure cookies in the “settings” or “preferences” menu of your browser.",
        "To find out more about cookies, including how to see what cookies have been created and how to manage and delete them, visit www.allaboutcookies.org which includes information on how to manage your settings for the various browser providers.<br />"
      ]
    },
    {
      "title": "",
      "description": [
        " Please note, however, that disabling cookies may partially or completely affect your browsing experience on the website.<br />Google Analytics browser opt-out",
        "To provide visitors with greater choice about how their data is collected by Google Analytics, Google has developed the Google Analytics Browser Opt-out Add-on. The add-on communicates with the Google Analytics JavaScript (ga.js) to indicate that site visit information should not be sent to Google Analytics.",
        "The Google Analytics Browser Opt-out extra does not prevent information from being sent to the website itself or to other web analytics services. Learn more about the Google Analytics Brower Opt-out extra."
      ]
    },
    {
      "title": "13 – Links to third party websites",
      "description": [
        "The links on this website may lead to other websites. We are not responsible for, approve or in any way support or subscribe to the content of these websites, nor of the websites linked to or referred to in them."
      ]
    },
    {
      "title": "14 – Changes to the privacy policy",
      "description": [
        "We reserve the right to modify this privacy policy at any time, so we advise you to consult it regularly.<br />All changes will come into effect immediately upon publication on the website.",
        "If you object to changes to our privacy policy, you must stop using our services, including the website."
      ]
    },
    {
      "title": "15 – General provisions",
      "description": [
        "We are not responsible for damages resulting from viruses that may infect the user's computer or network, or other property, due to access to our website with the transfer of content from it to the user's computer or network."
      ]
    },
    {
      "title": "16 – Contacts, doubts and questions",
      "description": [
        "If you have any questions or concerns, or if you wish to update, delete or change any personal information we hold relating to you, or if you have a concern about the way we deal with any privacy issue, please contact us via our contact page on the website, using the most convenient and accessible means to meet your needs, establishing communication with us via our address, telephone or email"
      ]
    },
    {
      "title": "17 – Disclaimer",
      "description": [
        "While we strive to keep information up to date and correct, we make no warranties of any kind, express or implied, about the completeness, size, accuracy, reliability, suitability, delivery times or availability of any property. described on this website."
      ]
    },
    {
      "title": "",
      "description": [
        "The same applies to the extent the availability or completeness of any related services or facilities or their use for any purpose.",
        "Any reliance placed on such information will be strictly at your own risk; In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from reliance placed on this website."
      ]
    },
  ]

  var textDesktop = [
    [
      {
        "title": "1 – Introduction",
        "description": "We are committed to respecting the privacy and confidentiality of the personal data made available to you and therefore in this Privacy Policy you will find information on how they are treated in accordance with the General Data Protection Regulation. We have adopted administrative and technological measures to comply with the new General Data Protection Regulation."
      },
      {
        "title": "",
        "description": "The use of this website is governed by the terms and conditions set out below, which the user is obliged to fully respect. The user should not use this website if they do not agree with these terms and conditions."
      },
      {
        "title": "2 – Your consent",
        "description": "By using our website and our platforms, you agree to our Privacy Policy."
      },
      {
        "title": "3 – Why do we process personal data?",
        "description": "The personal data collected is primarily intended to respond to requests for information and contact, contractual management, the provision of services and the communication of changes to subscribed products and services, but may, however, with your consent, also be used in the dissemination of new products and services and news about the company, in carrying out evaluation surveys and in legally mandatory information actions."
      },
      {
        "title": " 4 – What personal data is collected?",
        "description": "Normally, the personal data collected is limited to Name, Address, Telephone/Mobile Number, Taxpayer Number, Email Address, but other data necessary for the provision of products or services may be collected."
      },
      {
        "title": "",
        "description": "Additionally, when emails are sent, statistical data is collected that allows us to know the behavior of each subscriber in relation to the email received."
      },
    ],
    [
      {
        "title": "5 – How are personal data collected?",
        "description": "In general, personal data is collected when subscribing to one of our products or services, with some personal data being mandatory for the provision of the service.<br />We also collect your data when you subscribe to sending newsletters , to respond to your messages and requests for information, to analyze and formalize your application for partner or collaborator, for website operations and management, for fraud prevention and to keep a record of your contact details."
      },
      {
        "title": "",
        "description": "We always respect your right to privacy and do not collect any personal information about you without your prior and explicit consent. Your personal data will not be reused for other purposes that are previously identified or that have no relation to those purposes for which they were initially collected.<br />However, the provision of incorrect or inaccurate data is your sole responsibility."
      },
      {
        "title": " 6 – Minors' data",
        "description": "The website is not aimed at minors under the age of 16, so we ask that minors do not use the website or provide us with personal data through it."
      },
      {
        "title": "7 – Sensitive data",
        "description": "We expressly request that you do not send us or make us aware of any sensitive personal data, that is, information that reveals racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic information, biometric information, data relating to health or data relating to a natural person's sexual life or sexual orientation. Such personal data will be immediately deleted."
      },
    ],
    [
      {
        "title": "8 – What is the retention period for personal data?",
        "description": " It is important to note that the personal data you provide to us will be kept for a maximum period of ten years. <br /> However, in certain cases we may retain data for longer periods, particularly when the law requires it."
      },
      {
        "title": "9 – Right to access, rectify and update data",
        "description": "Under applicable legislation, you are guaranteed, as data subject, the right, at any time, to access your personal data, request its rectification or addition, oppose the processing of data, with the exception of strictly necessary to provide the service and/or request data portability, request the deletion of your data for marketing or telemarketing purposes or inclusion in subscriber lists and information services."
      },
      {
        "title": "",
        "description": "You can request any of the actions mentioned above through our contact page on the website, using the most convenient and accessible method for your needs, establishing communication with us via our address, telephone or email<br />If you ask us to elimination of some or all of your personal data, some of the services requested may not be provided to you, retaining the personal data necessary to comply with your legal obligations.<br />We reserve the right to request access to identifying elements of the author of the request in order to prove their identity."
      },
    ],
    [
      {
        "title": "10 – Disclosure of information to third parties",
        "description": "We do not sell or commercialize your data. <br /> As part of its activity, we may use third parties to provide certain services, which may involve access, by these entities, to the personal data of our users and customers. When this happens, we take all appropriate precautions, contractually imposing on these entities to put in place appropriate technical and organizational measures to prevent any illicit processing of data and to ensure its availability, integrity and confidentiality. <br /> Personal data may also be made available to courts and other competent authorities, in strict compliance with the provisions of the law, particularly when necessary for the resolution of disputes relating to billing and for activities relating to the protection of public security, defense and security of the State and the prevention, investigation or detection of criminal offenses."
      },
      {
        "title": " 11 – Security",
        "description": "Ensuring the confidentiality, integrity and availability of data is a commitment we make to all our customers and users.<br />In this sense, we follow the best information security management practices, requiring our employees to strictly comply with strict standards , ensuring the security of personal data communicated to us, and cannot use such data for any purposes other than those defined in the contract, nor correlate them with other data that are available.<br />We draw attention to the fact data circulating on the Internet is not fully protected against possible misuse, and the communication of access passwords, passwords, confidential codes and any sensitive information is carried out under your sole responsibility."
      },
    ],
    [
      {
        "title": "12 – Cookies",
        "description": "We use cookies on this website. A cookie is a small text file that identifies your computer on our server. Cookies themselves do not identify the individual user, only the computer used. Cookies are not used to collect personal information.<br />This website uses cookies to help determine the usefulness, interest and number of visits to the website, allowing faster and more efficient browsing, eliminating the need for repeatedly enter the same information.<br />The use of cookies on this site will always require your prior consent."
      },
      {
        "title": "",
        "description": "The cookies we use:<br />PHPSESSID: cookie that allows the website to respond to any action that the User performs on the website, such as completing a survey form. The website will not function correctly if this cookie is not used.<br />xms_user: cookie used by backoffice users. The website functions correctly if this cookie is not used."
      },
      {
        "title": "",
        "description": "__utma, __utmb, __utmc, __utmz: __ utmz cookies starting “__utm” enable the analysis software function (analytics). This software helps analyze website visitors and provide anonymous information, such as browsers used, return visitors and response to marketing activities.<br />__atuvc: The _atuvc cookie is created and read by the website's JavaScript that allows sharing of content on “AddThis” social networks.<br />All browsers allow the User to accept, refuse or delete cookies, namely by selecting the appropriate settings in the respective browser. You can configure cookies in the “settings” or “preferences” menu of your browser."
      }
    ], [
      {
        "title": "",
        "description": "To find out more about cookies, including how to see what cookies have been created and how to manage and delete them, visit www.allaboutcookies.org which includes information on how to manage your settings for the various browser providers.<br />Please note, however, that disabling cookies may partially or completely affect your browsing experience on the website.<br />Google Analytics browser opt-out<br />To provide visitors with a greater choice about how your data is collected by Google Analytics, Google has developed the Google Analytics Browser Opt-out Add-on. The add-on communicates with the Google Analytics JavaScript (ga.js) to indicate that site visit information should not be sent to Google Analytics."
      },
      {
        "title": "",
        "description": "The Google Analytics Browser Opt-out extra does not prevent information from being sent to the website itself or to other web analytics services. Learn more about the Google Analytics Brower Opt-out extra."
      },
    ],
    [
      {
        "title": "13 – Links to third party websites",
        "description": "The links on this website may lead to other websites. We are not responsible for, approve or in any way support or subscribe to the content of these websites, nor of the websites linked to or referred to in them."
      },
      {
        "title": "14 – Changes to the privacy policy",
        "description": "We reserve the right to modify this privacy policy at any time, so we advise you to consult it regularly.<br />All changes will take effect immediately upon publication on the website.<br />If you object to the changes in our privacy policy, you must stop using our services, including the website."
      },
      {
        "title": "15 – General provisions",
        "description": "We are not responsible for damages resulting from viruses that may infect the user's computer or network, or other property, due to access to our website with the transfer of content from it to the user's computer or network."
      }
    ],
    [
      {
        "title": "16 – Contacts, doubts and questions",
        "description": "If you have any questions or concerns, or if you wish to update, delete or change any personal information we hold relating to you, or if you have a concern about the way we deal with any privacy issue, please contact us via our contact page on the website, using the most convenient and accessible means to meet your needs, establishing communication with us via our address, telephone or email"
      },
    ],
  ]

  return (
    <Layout marcacaoRef={marcacaoRef} mobile={mobile} location={location} dataGlobal={t("global", { returnObjects: true })}>
      <InView as="div" threshold={0.5} onChange={inView => dispatch(toggleDifferentColorFirstMenu(inView))}>
        {mobile ?
          <Swiper
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
            {textMobile.map((item, index) => (
              <SwiperSlide key={'politica' + index}>
                <div className="section container-politicas">
                  <div className="align-middle d-flex position-relative" style={{ height: '100%' }}>
                    <div className="main-container-limit max-width t-0 position-absolute container h-100vh " style={{ minWidth: '100%' }}>
                      <div className="position-relative m-auto container">
                        <h4 className="title-small font-weight-bold ">
                          {item.title}
                        </h4>
                        {item.description.map((paragraph, idenx2) => (
                          <p className="text  description" key={'paragraph' + idenx2} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          :
          <Swiper
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
            {textDesktop.map((item, index) => (
              <SwiperSlide>
                <div className="section container-politicas">
                  <div className="align-middle d-flex slide3 position-relative" style={{ height: '100%' }}>
                    <div className="main-container-limit max-width t-0 position-absolute container h-100vh " style={{ minWidth: '100%' }}>
                      <div className="position-relative m-auto container">
                        {item.map((innerItem, index2) => (
                          <>
                            <h4 className="title-small font-weight-bold " dangerouslySetInnerHTML={{ __html: innerItem.title }} />
                            <p className="text  " dangerouslySetInnerHTML={{ __html: innerItem.description }} />
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }

      </InView>
    </Layout >
  )
}

export const Head = () => <Seo title="Política de Privacidade" />

export default connect()(PoliticaPage)

export const QueryHomepagePT = graphql`
  query($language: String!) {
    locales: allLocale(filter: { ns: { in: ["global"] }, language: { eq: $language } }) {
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