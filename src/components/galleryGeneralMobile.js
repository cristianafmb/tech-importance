import React, { useEffect, useState, useRef } from "react"
import { InView } from 'react-intersection-observer'
import { connect } from 'react-redux'
import { toggleDifferentColorFirstMenu } from "../state/app"
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
import { Image } from './Images'



const BgDoodle = ({ animate }) => {
    const transitionFirst = { duration: 2.5, yoyo: Infinity, ease: "easeInOut", delay: 4.5, fill: "#ffffff" }
    const transitionSecond = { duration: 2.5, yoyo: Infinity, ease: "easeInOut", delay: 3, fill: "#ffffff" }
    const transitionThird = { duration: 2.5, yoyo: Infinity, ease: "easeInOut", delay: 1.5, fill: "#ffffff" }
    const transitionFourth = { duration: 2.5, yoyo: Infinity, ease: "easeInOut", delay: 0, fill: "#ffffff" }
    const animateIn = {
        pathLength: 1,
        pathOffset: 0
    };
    const animateOut = {
        pathLength: 1,
        pathOffset: 1
    };
    return (
        <motion.svg
            fill="none"
            stroke="currentColor" id="Grupo_1124" data-name="Grupo 1124" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 285.065 667">
            <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird}
                id="Caminho_7815" data-name="Caminho 7815" d="M12.941,925.667c-.316,5.285,1.04,10.438,4.357,14.208,4.859,5.522,9.87,11.154,17.8,12.89a25.488,25.488,0,0,0,13.471-.491c2.2-.7,3.545-.713,5.421.876,8.362,7.084,16.742,14.146,24.946,21.414a22.475,22.475,0,0,0,2.515,1.7"
                transform="translate(-5.64 -404.835)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7816" data-name="Caminho 7816" d="M192.159,35.416a256.74,256.74,0,0,0-13.741,53.41,279.311,279.311,0,0,0-2.88,35.976A311.038,311.038,0,0,0,177.8,165a3.875,3.875,0,0,0,1.442,2.526"
                transform="translate(-76.76 -15.489)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7817" data-name="Caminho 7817" d="M346.164,973.711c-3.719,3.987-10.07,1.87-11.575-3.355a7.084,7.084,0,0,1,.415-4.767c1.889-4.635,1.248-8.511-1.9-12.507a7.942,7.942,0,0,0-4.371-3.179c-2.46-.576-4.1-2.332-6.14-3.488a56.873,56.873,0,0,0-25.85-7.259c-16.056-.741-32.453,8.152-40.536,17.032a58.2,58.2,0,0,0-13.849,26.258c-1.027,4.322-1.169,8.834-2.27,13.207-2.248,8.929-7.2,16.132-13.9,22.1-2.866,2.557-5.628,5.253-8.549,7.766-4.012,3.453-8.687,6.19-11.9,10.573-.716.979-1.788,1.7-1.659,3.111"
                transform="translate(-89.254 -410.715)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionSecond}
                id="Caminho_7818" data-name="Caminho 7818" d="M132.624,378.128a74.891,74.891,0,0,1-13.759,25.016c-9.772,12.17-22.817,19.266-37,25.173-15.536,6.472-27.525,17.259-34.634,33-6.35,14.056-7.676,28.479-3.582,43.295,5.97,21.6,19.95,36.142,40.728,43.725a59.96,59.96,0,0,0,38.7.692,62.938,62.938,0,0,0,30.273-19.716,61.688,61.688,0,0,0,14.98-36.495,63.01,63.01,0,0,0-13.892-44.908,56.869,56.869,0,0,0-19.019-15.784,16.608,16.608,0,0,0-24.077,13.469c-.6,7.69,2.839,13.378,9.772,16.86,10.507,5.276,18.19,13.006,21.938,24.444,3.788,11.561,1.717,22.425-4.069,32.561a38.181,38.181,0,0,1-21.785,18.1,39.685,39.685,0,0,1-26.694-.319c-12.371-4.509-20.622-13.267-25.133-25.359a37.457,37.457,0,0,1-1.817-16.254"
                transform="translate(-18.067 -165.372)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7819" data-name="Caminho 7819" d="M217.145,851.23a7.86,7.86,0,0,1,.616,9.024c-1.744,3.337-4.381,4.512-7.917,4.487-3.033-.022-6.105-.394-9,1.073a5.882,5.882,0,0,0-2.6,2.228A81.911,81.911,0,0,1,193,874.566a41.294,41.294,0,0,0-9.054,23.884c-.731,11.973,2.547,22.577,10.822,31.118,7.249,7.483,10.965,16.565,13.209,26.269A40.75,40.75,0,0,1,208.3,971a51.857,51.857,0,0,1-5.147,16.87c-.446.845-.237,2.036-.33,3.066"
                transform="translate(-80.406 -372.281)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7820" data-name="Caminho 7820" d="M319.5,74.407a4.07,4.07,0,0,1-2.817.025c-6.154-2.388-15.521,2.054-15.894,11.5a4.552,4.552,0,0,1-2.092,3.894q-9.121,6.345-18.787,11.841c-12.243,6.965-25.286,12.469-36.813,20.756a178.117,178.117,0,0,0-28.39,25,171.833,171.833,0,0,0-27.742,41.656,7.306,7.306,0,0,1-.832,1.129"
                transform="translate(-81.406 -32.274)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7821" data-name="Caminho 7821" d="M296.262,168.636c4.307,3.746,8.425,4.054,12.956,1.477,1.867-1.061,2.643-2.7,3.575-4.308a39.4,39.4,0,0,1,3.124-5.039c-3-3.735-11.784-3.523-16,.847a14.053,14.053,0,0,0-3.321,5.354A3.9,3.9,0,0,1,294,169.445c-21.28,8.023-41.506,18.213-61.21,29.524a448.688,448.688,0,0,0-43.783,28.982,4.737,4.737,0,0,1-3.373,1.12"
                transform="translate(-81.187 -69.16)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird}
                id="Caminho_7822" data-name="Caminho 7822" d="M175.764,664.887a1.855,1.855,0,0,1-.261,2.267q-6.938,7.675-13.77,15.448c-6.21,7.092-12.332,14.262-18.549,21.347-4.724,5.385-9.57,10.661-14.3,16.038-6.49,7.374-12.91,14.809-19.387,22.194-3.149,3.59-6.353,7.131-9.542,10.685a33.758,33.758,0,0,0-8.247,17.693,34.7,34.7,0,0,0,1.259,15.469A17.839,17.839,0,0,1,80,808.724a16.794,16.794,0,0,1-16.794-5.008c-3.2-3.367-6.7-6.171-11.269-7.256-7.249-1.72-13.875-.363-19.643,4.483-5.575,4.682-7.959,10.774-7.9,17.983a21.062,21.062,0,0,0,1.306,6.137,14.646,14.646,0,0,1,.412,3.982"
                transform="translate(-10.667 -290.785)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7823" data-name="Caminho 7823" d="M204.318,20.083c8-.083,12.031-5.631,9.843-13.5a8.535,8.535,0,0,1-.519-3.36c.372-2.482-.78-2.436-2.589-1.993-7.49,1.832-11.786,12.179-7.015,18.85"
                transform="translate(-88.357 -0.437)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7824" data-name="Caminho 7824" d="M225.017,67.389c-9.944,9.5-19.095,19.673-26.678,31.2a166.589,166.589,0,0,0-24.486,59.019c-1.416,6.993-2.3,14.023-3.021,21.1-.229,2.256-1.81,4.277-.917,6.771.322.9.225,2.039.959,2.736a.572.572,0,0,1,.214.607c-1.039,4.089,1.194,8.192-.455,12.407-2.476,6.328-6.415,9.5-13,9.54-1.309.007-2.654-.3-3.931.264"
                transform="translate(-67.22 -29.472)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird}
                id="Caminho_7825" data-name="Caminho 7825" d="M27.947,709.849c4.716,2.289,8.662,5.711,12.589,9.049A105.733,105.733,0,0,1,61.853,743.06,97.856,97.856,0,0,1,76.03,779.829a117.337,117.337,0,0,1,1.534,17.721,122.308,122.308,0,0,1-1.075,12.927c-.039.4-.529.753-.81,1.128"
                transform="translate(-12.222 -310.449)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7826" data-name="Caminho 7826" d="M80.74,312.025c-1.968-3.075-5.326-3.675-8.434-4.456-17.335-4.353-34.7,7.686-35.578,26.946a26.751,26.751,0,0,0,4.963,16.6,31.588,31.588,0,0,1,5.98,15.44,28.54,28.54,0,0,1-4.515,18.021C38.671,391.807,32.03,395.86,24,397.376a27.967,27.967,0,0,1-23-5.521"
                transform="translate(-0.437 -134.125)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7827" data-name="Caminho 7827" d="M259.442,928.665c-1.19,1.265-.885,3.147-1.945,4.514a7.883,7.883,0,0,1-12.052.783,12.249,12.249,0,0,0-7.339-3.634,3.325,3.325,0,0,0-1.421-.031c-10.07,2.542-18.2,7.784-22.937,17.238a30.612,30.612,0,0,0-2.78,17.1,10.369,10.369,0,0,1-.382,2.54"
                transform="translate(-92.099 -406.146)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7828" data-name="Caminho 7828" d="M278.49,892.6a4.035,4.035,0,0,1-2.288-1.648,10.349,10.349,0,0,0-10.908-2.287,9.607,9.607,0,0,0-5.587,9.835c.2,1.707.783,3.366,1.081,5.066.578,3.293-1.16,5.852-2.794,8.43"
                transform="translate(-112.832 -388.348)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird}
                id="Caminho_7829" data-name="Caminho 7829" d="M28.256,685.869c.333,2.59-.848,4.947-1.142,7.447a124.316,124.316,0,0,0-.372,28.545,110.4,110.4,0,0,0,10,34.814,103.712,103.712,0,0,0,17.649,26.432c6.139,6.651,12.392,13.208,20.182,18.028.371.23.573.731.854,1.106"
                transform="translate(-11.408 -299.961)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird}
                id="Caminho_7830" data-name="Caminho 7830" d="M30.941,687.867c3.706.848,6.686,3.182,9.791,5.117a98.8,98.8,0,0,1,34.559,36.492,134.242,134.242,0,0,1,9.544,22.485,3.7,3.7,0,0,1,.014,1.12"
                transform="translate(-13.532 -300.835)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7831" data-name="Caminho 7831" d="M390.052,1021.587c-.392,1.094.587,1.432,1.133,1.958a7.533,7.533,0,0,1-1.436,11.78c-1.95,1.2-4.42,1-6.408.49-4.943-1.267-8.88.07-12.394,3.469a11.426,11.426,0,0,1-1.673,1.137"
                transform="translate(-161.5 -446.785)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7832" data-name="Caminho 7832" d="M371.772,823.253c-5.749,1.272-8.978,4.908-8.985,10.119-.008,5.87,2.872,9.3,8.986,10.679,3.444.774,6.711,1.583,9.358,4.413a8.891,8.891,0,0,1,2.3,6.824c-.841,13.135-6.548,23.555-18.122,30.362-.834.491-1.876.747-1.963,1.972"
                transform="translate(-158.663 -360.045)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7833" data-name="Caminho 7833" d="M452.086,959.373c2.939-5.253,1.467-10.434-3.668-12.028-3-.933-6.1-.813-8.4,1.915a16.306,16.306,0,0,1-7.869,5.054"
                transform="translate(-188.999 -414.086)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7834" data-name="Caminho 7834" d="M356.994,1006.01c-3.258-3.265-10.208-2.12-12.663-.033-3.676,3.126-5.131,8.384-2.82,12.7a11.827,11.827,0,0,0,3.99,4.447c3.4,2.22,4.522,5.878,5.436,9.348.558,2.12-.79,4.636-1.862,6.674-4.285,8.139-9.964,15.087-17.887,20.029-1.084.676-2.554,1.175-2.834,2.769"
                transform="translate(-143.604 -439.079)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7835" data-name="Caminho 7835" d="M480.189,1101.972c-6.128-4.5-14.031-.876-15.705,5.907-.841,3.409-3.532,5.429-5.694,7.811a11.017,11.017,0,0,0-2.185,2.585"
                transform="translate(-199.693 -481.071)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7836" data-name="Caminho 7836" d="M125.334,316.679c-3.367.575-6.851.352-10.114,1.672-6.334,2.562-10.4,7.068-11.765,13.793-1.484,7.313.347,13.8,6.234,18.447,3.144,2.482,7.515,2.156,11.116,1.1,8.487-2.482,13.927-7.932,14.688-17.3a19.161,19.161,0,0,0-1.5-9.262c-1.656-3.864-3.934-7.281-8.38-8.451"
                transform="translate(-45.032 -138.498)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7837" data-name="Caminho 7837" d="M397.719,851.643a21.88,21.88,0,0,1,7.816-9.06,7.135,7.135,0,0,0,2.782-7.51,8.818,8.818,0,0,0-6.949-7.323"
                transform="translate(-173.94 -362.012)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7838" data-name="Caminho 7838" d="M128.249,1151.055q17.268-15.882,34.555-31.742a43.565,43.565,0,0,1,6.472-5.027c2.784-1.708,6.172-1.836,9.262-2.767a48.324,48.324,0,0,1,27.235-.207c9.477,2.582,19.141,1.582,28.28-1.716,5.533-2,10.793-1.624,16.34-1.044a43.381,43.381,0,0,1,22.191,8.75c3.164,2.4,6.067,5.206,9.812,6.765a33.438,33.438,0,0,0,9.539,2.6,30.768,30.768,0,0,0,17.935-3.521c3.64-1.937,6.4.053,9.268,1.294,2.117.915,3.61,2.873,4.835,4.956,3.433,5.838,11.06,6.213,15.07.248,1.2-1.791,2.278-4.048.912-6.418"
                transform="translate(-56.089 -484.618)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth}
                id="Caminho_7839" data-name="Caminho 7839" d="M216.541,830.583c-6.1-4.756-14.327-.928-16.034,5.051-.866,3.033-1.221,6.161.672,8.661a23.64,23.64,0,0,1,4.973,12.148"
                transform="translate(-87.384 -362.315)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7840" data-name="Caminho 7840" d="M293.852,36.6c-.5,2.811.246,5.682-.1,8.421a9.923,9.923,0,0,1-13.1,8.445c-1.97-10.456,3.981-18.357,12.916-17.147"
                transform="translate(-122.578 -15.83)" />
            <motion.path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst}
                id="Caminho_7841" data-name="Caminho 7841" d="M406.519,75.881a6.1,6.1,0,0,0-1.628,4.494c.411,6.909-7.219,12.624-14.657,9"
                transform="translate(-170.667 -33.186)" />
        </motion.svg>
    )
}

const GalleryGeneralMobile = ({ mobile, data }) => {
    const ref = useRef(null);

    const [animate, setAnimate] = useState(false)

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    const variants = {
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } },
        hidden: { opacity: 0.5, scale: 1, x: 0 }
    };

    return (
        <div className="section active align-middle d-grid icons-slide" >
            <InView as="div" threshold={0.7} onChange={inView => (setAnimate(inView))} className="position-relative h-100vh align-middle d-grid">
                <Row className="gallery-general-container position-relative">
                    <Col lg="12" md="12" sm="12" className="w-100 h-100 position-relative">
                        <div className="position-relative container h-100vh align-middle d-grid">
                            <div className="align-middle container ml-0 d-grid position-relative container-gallery-general">
                                <h3 className="title-md fontRegular white  title-gallery-general">{data.title}</h3>
                                <Row className="container-gallery-general-arrow mt-1">
                                    <Col sm="6" md="6" lg="6">
                                        <svg className="svg-arrow" id="Grupo_1088" data-name="Grupo 1088" xmlns="http://www.w3.org/2000/svg" width="78" height="35" onClick={onPrevClick} viewBox="0 0 78 35">
                                            <g id="Arrow" transform="translate(24.673 10.678)">
                                                <path id="Path" d="M.328,6.043h0L6.178.32a1.133,1.133,0,0,1,1.583,0,1.087,1.087,0,0,1,0,1.556L3.83,5.722h23.7a1.1,1.1,0,1,1,0,2.2H3.83l3.927,3.842a1.087,1.087,0,0,1,0,1.556,1.133,1.133,0,0,1-1.583,0L.329,7.6h0A1.088,1.088,0,0,1,.328,6.043Z" transform="translate(0 0)" fill="#fff" />
                                            </g>
                                            <g id="Retângulo_1175" data-name="Retângulo 1175" fill="none" stroke="#fff" stroke-width="1.5">
                                                <rect width="78" height="35" rx="15" stroke="none" />
                                                <rect x="0.75" y="0.75" width="76.5" height="33.5" rx="14.25" fill="none" />
                                            </g>
                                        </svg>

                                    </Col>
                                    <Col sm="6" md="6" lg="6">
                                        <svg className="svg-arrow" xmlns="http://www.w3.org/2000/svg" width="78" height="35" viewBox="0 0 78 35" onClick={onNextClick}>
                                            <g id="Grupo_1088" data-name="Grupo 1088" transform="translate(-185 -693)">
                                                <g id="Arrow" transform="translate(209.674 703.678)">
                                                    <path id="Path" d="M28.325,6.043h0L22.476.32a1.133,1.133,0,0,0-1.583,0,1.087,1.087,0,0,0,0,1.556l3.927,3.842H1.119a1.1,1.1,0,1,0,0,2.2h23.7L20.9,11.764a1.087,1.087,0,0,0,0,1.556,1.133,1.133,0,0,0,1.583,0L28.324,7.6h0A1.088,1.088,0,0,0,28.325,6.043Z" fill="#fff" />
                                                </g>
                                                <g id="Retângulo_1175" data-name="Retângulo 1175" transform="translate(185 693)" fill="none" stroke="#fff" stroke-width="1.5">
                                                    <rect width="78" height="35" rx="15" stroke="none" />
                                                    <rect x="0.75" y="0.75" width="76.5" height="33.5" rx="14.25" fill="none" />
                                                </g>
                                            </g>
                                        </svg>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <motion.div className="container-bg-gallery-doodles position-absolute t-0"
                            animate={animate ? "visible" : "hidden"}
                            initial="hidden" variants={variants}
                        >
                            <BgDoodle animate={animate} />
                        </motion.div>
                        <Carousel fade indicators={false} controls={false} ref={ref} interval={3000} className="h-100 w-100 position-absolute t-0">
                            {data.imgsMobile.map((image, index) => (
                                <Carousel.Item >
                                    <Image src={image} alt={'gallery-general-' + index} extraClass="img-gallery-general" />
                                </Carousel.Item>
                            ))}

                        </Carousel>
                    </Col>
                </Row>
            </InView>
        </div>
    )
}

export default connect()(GalleryGeneralMobile)