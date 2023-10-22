import React, { useState } from "react"
import { connect } from 'react-redux'
import axios from 'axios'
import { Modal } from 'react-bootstrap'

const Form = ({ data }) => {
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState("")
    var checker = [];
    const [polCheck, setPolCheck] = useState(false)

    const handleClose = () => setShow(false);

    const handleCloseError = () => setShowError(false);
    const [errorResponse, setErrorResponse] = useState("")
    function doSubmit(e) {
        checkValues()
        if (checker.length < 1) {

            e.preventDefault()
            var formData = new FormData()
            if (typeof document !== `undefined`) {
                formData.append('name', document.querySelector("#name").value)
                formData.append('contact', document.querySelector("#contact").value)
                formData.append('email', document.querySelector("#email").value)
                formData.append('message', document.querySelector("#message").value)
            }
            try {
                axios({
                    url: 'https://cris-portfolio.pt/computer-science/website-form-contact.php',
                    method: 'post',
                    config: { headers: { 'Content-Type': 'multipart/form-data' } },
                    data: formData
                })
                    .then(res => {
                        console.log(res)
                        if (res.data === "success") {
                            success()
                            setResponse(data.sucess.description)
                            setShow(true)
                        } else {
                            e.preventDefault()
                            setErrorResponse(data.error.description);
                            setShowError(true)
                        }
                    })
            } catch (error) {
                console.log(error.response); // this is the main part. Use the response property from the error object
                console.log(error); // this is the main part. Use the response property from the error object

            }
        } else {
            e.preventDefault()
            setResponse("" + checker + ".");
            setShowError(true)
            console.log(checker)
            if (checker.length > 2) {
                setErrorResponse(data.error.title.plural)
            } else {
                setErrorResponse(data.error.title.singular)
            }
        }
    }

    function checkValues() {
        checker = []
        let checkerTemp = []
        if (typeof document !== `undefined`) {
            if (!document.querySelector("#name").value) {
                checkerTemp.push(data.fields.name)
            }
            if (!document.querySelector("#email").value) {
                checkerTemp.push(data.fields.email)
            }
            if (document.querySelector("#email").value) {
                if (!document.querySelector("#email").value.toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) {
                    checkerTemp.push(data.fields.validEmail)
                }
            }
        }

        if (!polCheck) {
            if (checkerTemp.length < 1) {
                checkerTemp.push(data.fields.polition.singular)
            } else {
                checkerTemp.push(data.fields.polition.plural)
            }
        }
        checker = checkerTemp
    }

    const success = () => {
        setResponse("Mensagem enviada com sucesso!")
        if (typeof document !== `undefined`) {
            document.querySelector("#name").value = null
            document.querySelector("#email").value = null
            document.querySelector("#contact").value = null
            document.querySelector("#message").value = null
            //document.getElementById("form").reset()
            setPolCheck(false)
            if (typeof window !== "undefined") {
                window.gtag('event', 'form_contact', {
                    form: 'Formulário de Contacto'
                })
            }
        }
    }

    const handleChangeCheckbox = () => {
        setPolCheck(!polCheck)
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className="success-form txt fontRegular white">
                <Modal.Header >
                    <Modal.Title>{data.sucess.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{data.sucess.subtitle}</Modal.Body>
            </Modal>
            <Modal show={showError} onHide={handleCloseError} centered className=" txt fontRegular white">
                <Modal.Header >
                    {console.log(errorResponse)}
                    <Modal.Title>{errorResponse}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{response}</Modal.Body>
            </Modal>
            <div className="container-form" >
                <form action="" method="post" >
                    <div className="container-form-name-tel">
                        <div className="form-group label-icon mb-1">
                            <label>
                                <input type="text" id="name" className="form-control fontRegular title-small" aria-describedby="nameHelp" placeholder={"* " + data.fields.name} required />
                            </label>
                        </div>
                        <div className="form-group label-icon mb-1">
                            <label>
                                <input className="form-control fontRegular title-small" type='text' id="contact" name='contact' placeholder={data.fields.phone} />
                            </label>
                        </div>
                    </div>
                    <div className="form-group label-icon mb-1">
                        <label>
                            <input type="email" id="email" className="form-control fontRegular title-small" aria-describedby="emailHelp" placeholder={"* " + data.fields.email} required />
                        </label>
                    </div>

                    <div className="form-group label-icon mb-1">
                        <label>
                            <input className="form-control fontRegular title-small" type='text' id="message" name='message' placeholder={data.fields.message} />
                        </label>
                    </div>

                    <div className="form-group form-check mb-4">
                        <input type="radio" className="form-check-input" checked={polCheck} size="small" onChange={handleChangeCheckbox}
                            onClick={handleChangeCheckbox}
                            id="politica" />
                        <label className="form-check-label fontRegular description white" htmlFor="exampleCheck1">
                            {data.fields.polition.description}
                        </label>
                    </div>

                    <button type="submit" onClick={doSubmit}
                        className="btn btn-custom fontRegular txt">{data.fields.polition.btnText}</button>
                </form>
            </div>
        </>
    )
}

export default connect()(Form)