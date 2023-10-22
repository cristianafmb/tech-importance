import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InView } from 'react-intersection-observer'
import PlyrComponent2 from "./PlyrComponent"
import { connect } from 'react-redux'
import { Image } from './Images'


const BannerTop = ({ dispatch, popup, data }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="section   active" >
            <InView as="div" threshold={0.5} className="align-middle d-flex slide3 bg-slide2 h-100 position-relative">
                <PlyrComponent2 />
                <div className="main-table-text container position-relative">
                    <div className="inner-table-text position-relative text-center">
                        <div>
                            {data.map((item, index) => (
                                <div>
                                    <h1 className={`text-` + (index + 1) + ` title-large fontRegular white`}>{item.title}</h1>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline-light" className='btn-popup-video mt-5' onClick={handleShow}>
                            <p className='fontRegular title-small white text-uppercase mb-0'>{popup.btnText}</p>
                        </Button>
                    </div>
                </div>

                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className='modal-video-youtube'
                    show={show} onHide={handleClose}>
                    <Modal.Header  >
                        <Image src={popup.closeBtn} alt='close-button' extraClass="close-btn-popup" onClick={() => setShow(false)} />
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            className="modal__video-style"
                            loading="lazy"
                            width="800"
                            height="500"
                            src="https://cdn.pixabay.com/vimeo/361092012/grass-26790.mp4?width=640&hash=008f7da602bcfdab8b7d366cb554d32a1bd4eb15"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Modal.Body>

                </Modal>
            </InView>
        </div >
    )
}

export default connect()(BannerTop)