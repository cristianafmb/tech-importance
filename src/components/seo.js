import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"


function Seo({ description, lang, title, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle ? (`${title} | ${defaultTitle}`) : title}
      titleTemplate={defaultTitle ? `%s`: null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title + ' - Computer Science',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: "https://computer-science.cris-portfolio.pt/image.png",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CPSNM8PQKN"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CPSNM8PQKN');`}
      </script>
      <meta name='robots' content='all'/>
    </Helmet>
  )
}
Seo.defaultProps = {
  lang: `pt`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
