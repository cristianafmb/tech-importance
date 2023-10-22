import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from './Images'

const Logo = ({ color }) => {
  return (<svg  viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" className={color == whiteColor ? 'whiteLogo mh-logo' : 'hoverLogo mh-logo'}>
    <path 
    d="M16 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H13.6C13.0399 3 12.7599 3 12.546 3.10899C12.3578 3.20487 12.2049 3.35785 12.109 3.54601C12 3.75992 12 4.03995 12 4.6V6M10 18V21M7 21H13M6.2 18H13.8C14.9201 18 15.4802 18 15.908 17.782C16.2843 17.5903 16.5903 17.2843 16.782 16.908C17 16.4802 17 15.9201 17 14.8V9.2C17 8.0799 17 7.51984 16.782 7.09202C16.5903 6.71569 16.2843 6.40973 15.908 6.21799C15.4802 6 14.9201 6 13.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
     stroke={color}  stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

const MenuHamburguer = ({ color, openMenu }) => {
  if (!openMenu)
    return (
      <svg
        className='show menu-hamburguer'
        xmlns="http://www.w3.org/2000/svg" width="32.501" height="21.5" viewBox="0 0 32.501 21.5">
        <g id="Grupo_1728" data-name="Grupo 1728" transform="translate(-306.249 -43.75)">
          <path id="Caminho_8525" data-name="Caminho 8525" d="M-10856.768,2235.2h-20.667" transform="translate(11184.435 -2190.7)" fill="none" stroke={color} stroke-linecap="round" stroke-width="1.5" />
          <path id="Caminho_8526" data-name="Caminho 8526" d="M-10856.768,2235.2h-20.667" transform="translate(11194.768 -2170.7)" fill="none" stroke={color} stroke-linecap="round" stroke-width="1.5" />
          <path id="Caminho_8527" data-name="Caminho 8527" d="M-10847.436,2235.2h-30" transform="translate(11184.435 -2180.7)" fill="none" stroke={color} stroke-linecap="round" stroke-width="1.5" />
        </g>
      </svg>
    )
  else if (openMenu)
    return (
      <svg className={'close-menu show menu-hamburguer'}
        id="Grupo_1729" data-name="Grupo 1729" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
        <g id="Grupo_1067" data-name="Grupo 1067" clip-path="url(#clip-path)">
          <path id="Caminho_7741" data-name="Caminho 7741"
            d="M11.273,10l8.455-8.455a.879.879,0,0,0,0-1.273.879.879,0,0,0-1.273,0L10,8.727,1.545.272a.879.879,0,0,0-1.273,0,.879.879,0,0,0,0,1.273L8.727,10,.273,18.454a.879.879,0,0,0,0,1.273A.825.825,0,0,0,.909,20a.825.825,0,0,0,.636-.273L10,11.272l8.455,8.454a.879.879,0,0,0,1.273,0,.879.879,0,0,0,0-1.273Z"
            transform="translate(0 0.001)" fill={color} />
        </g>
      </svg>
    )
}


var greyColor = "#717171"
var whiteColor = "#FFFFFF"

const HeaderMobile = ({ differentColorFirstMenu, dataGlobal }) => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="main-container-limit">
      <Container className="max-width  position-relative d-grid">
        <Row className="m-auto w-100 align-middle">
          <Col lg="4" md="4" sm="4" className="ml-0 mr-auto w-50 text-left logo-mobile">
            <Link to="/">
              <Logo color={differentColorFirstMenu ? greyColor : whiteColor} />
            </Link>
          </Col>
          <Col lg="6" md="6" sm="6" className="ml-auto mr-0 w-50 text-right menu-hamburguer-mobile">
            <a onClick={() => (setOpenMenu(!openMenu))}>
              <MenuHamburguer color={differentColorFirstMenu ? greyColor : whiteColor} openMenu={openMenu} />
            </a>
          </Col>
        </Row>

      </Container>
      <div className={openMenu ? " show-menu menu-fixed d-grid" : "hide-menu menu-fixed d-grid"}>
        <div className="container container-options-menu d-grid align-middle">
          <p className="title-md white fontRegular mt-2 mb-2 text-uppercase global-title-menu">{dataGlobal.title}</p>
          {dataGlobal.options.map((item, index) =>
            <a href={item.link} target="_blank" className="text-uppercase text-decoration-none" key={"options"+index}>
              <p className="title-md white fontRegular mt-2 mb-2">{item.title}</p>
              </a>
          )}
        </div>
        <Image src={dataGlobal.bgMobile} alt={dataGlobal.bgMobileAlt} extraClass="bg-menu-mobile" />
      </div>
    </header>
  )
}

export default connect(state => ({
  differentColorFirstMenu: state.app.differentColorFirstMenu
}), null)(HeaderMobile)