import * as React from "react"
import { InView } from 'react-intersection-observer'
import PlyrComponent2 from "./PlyrComponent"
import { toggleDifferentColorFirstMenu } from "../state/app"
import { connect } from 'react-redux'


const DoodleLeft = ({ className }) => {
    return (<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="968.006" height="947.538" viewBox="0 0 968.006 947.538">
        <g id="Grupo_675" data-name="Grupo 675" transform="translate(0 540.53) rotate(-56)">
            <g id="Grupo_623" data-name="Grupo 623" clipPath="url(#clipPath)">
                <path id="Caminho_7238" data-name="Caminho 7238" d="M216.486,247.258A154.721,154.721,0,0,0,354.5,65.558s-2.759-13.207-7.753-19" transform="translate(170.131 36.587)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7239" data-name="Caminho 7239" d="M162.731,121.457a254.492,254.492,0,0,1,16.63,90.789A254.86,254.86,0,0,1,62.693,426.537" transform="translate(49.269 95.45)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7240" data-name="Caminho 7240" d="M1,499.069A246.827,246.827,0,0,1,114.644,291.114" transform="translate(0.786 228.78)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7241" data-name="Caminho 7241" d="M104.636,144.473A53.227,53.227,0,1,1,92.667,39.381" transform="translate(31 30.949)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7242" data-name="Caminho 7242" d="M75.952,98.958a66.025,66.025,0,0,1,78.4,47.128" transform="translate(59.689 76.481)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7243" data-name="Caminho 7243" d="M121.5,157.547A66.012,66.012,0,0,1,143.914,63.1" transform="translate(86.625 49.591)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7244" data-name="Caminho 7244" d="M112.191,23.87a39.114,39.114,0,0,1,25.693,73.842" transform="translate(88.168 17.378)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7245" data-name="Caminho 7245" d="M114.705,289.994A232.409,232.409,0,0,1,300.413,158.939" transform="translate(90.144 124.907)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7246" data-name="Caminho 7246" d="M359.869,27.72A45.527,45.527,0,0,1,331.182,114.1" transform="translate(260.268 21.785)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7247" data-name="Caminho 7247" d="M291.394,117.483a60.119,60.119,0,0,1,73.3-40.061" transform="translate(229 59.158)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
                <path id="Caminho_7248" data-name="Caminho 7248" d="M294.371,83.15q-1.353-1.787-2.55-3.691A51.26,51.26,0,0,1,329.733,1.293,52.111,52.111,0,0,1,335.25,1" transform="translate(223.194 0.786)" fill="none" stroke="#f7efdf" strokeMiterlimit="10" strokeWidth="7" />
            </g>
        </g>
    </svg>
    )
}

const DoodleRight = ({ className }) => {
    return (<svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="638.93" height="920.271" viewBox="0 0 638.93 920.271">
        <g id="Grupo_677" data-name="Grupo 677" transform="translate(-18110.801 -1683)">
            <g id="Grupo_676" data-name="Grupo 676" transform="translate(18110.801 1683)" clipPath="url(#clipPath)">
                <path id="Caminho_7270" data-name="Caminho 7270" d="M314.17,858.261C141.765,858.261,1.5,718,1.5,545.591c0-97.356,44.177-187.459,121.2-247.206,17.971-14.986,33.7-24.322,56.408-36.295C293,212.477,369.278,122.505,399.87,1.824l5.074,1.287c-31,122.312-108.309,213.5-223.573,263.7-22.215,11.719-37.7,20.911-55.389,35.656-75.806,58.8-119.24,147.4-119.24,243.124,0,169.52,137.913,307.429,307.429,307.429S621.6,715.111,621.6,545.591A307.314,307.314,0,0,0,435.58,263.06l-1.006-.421a81.575,81.575,0,0,0-25.871-4.05A79.291,79.291,0,0,0,379.272,411.5c83.743,28.838,139.848,105.85,136.323,187.241-4.929,113.8-86.479,198.48-193.91,201.362A205.449,205.449,0,0,1,173.239,741.48c-38.854-38.184-59.974-88.563-59.475-141.859l5.241.054c-.485,51.856,20.077,100.894,57.9,138.067a199.81,199.81,0,0,0,144.636,57.124c104.6-2.8,184.007-85.383,188.809-196.347,3.434-79.1-51.221-153.977-132.912-182.109A84.53,84.53,0,0,1,408.7,253.352a86.841,86.841,0,0,1,27.729,4.394l1.191.494A312.539,312.539,0,0,1,626.84,545.591C626.84,718,486.575,858.261,314.17,858.261Z" transform="translate(5.295 6.439)" fill="#f6efde" />
            </g>
            <path id="Caminho_7271" data-name="Caminho 7271" d="M433.918,455.772C423.291,342.918,328.357,254.589,212.711,254.589c-.406,0-.8.052-1.209.052.01-.406.063-.792.063-1.209,0-115.646-88.339-210.581-201.215-221.2C239.434,42.9,423.229,226.7,433.918,455.772Z" transform="translate(18233.131 2147.265)" fill="none" stroke="#f6efde" strokeMiterlimit="10" strokeWidth="5" />
        </g>
    </svg>

    )
}

const Slide2 = ({ dispatch, mobile, data }) => {
    return (
        <div className="section   active" >
            <InView as="div" threshold={0.5} className="align-middle d-flex slide3 bg-slide2 h-100 position-relative">
                <PlyrComponent2 />
                <DoodleRight className="doodle-right" />
                <DoodleLeft className="doodle-left" />
                <div className="main-table-text">
                    <div className="inner-table-text ">
                        <div>
                            {data.map((item, index) => (
                                (item.description) ?
                                    (
                                        <div className="table-small">
                                            <h1 className={`text-` + (index + 1) + ` title-large fontRegular white`}>{item.title}</h1>
                                            <h4 className="title-small fontRegular side-text white" dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    )
                                    :
                                    (
                                        <div>
                                            <h1 className={`text-` + (index + 1) + ` title-large fontRegular white`}>{item.title}</h1>
                                        </div>
                                    )

                            ))}
                        </div>
                        {!mobile &&
                            <div className="pl-0">
                                <h5 className="title-small fontRegular text-left mt-4 white" dangerouslySetInnerHTML={{ __html: data[3].description }} />
                            </div>
                        }
                    </div>
                </div>
            </InView>
        </div>
    )
}

export default connect()(Slide2)