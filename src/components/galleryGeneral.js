import React, { useState, useRef } from "react"
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
        <>
            <motion.svg
                fill="none"
                stroke="currentColor" id="Grupo_1124" data-name="Grupo 1124" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 506.643 1185.45">

                <motion.path id="Caminho_7815" data-name="Caminho 7815" d="M12.976,925.667c-.562,9.393,1.848,18.551,7.743,25.251,8.635,9.815,17.541,19.824,31.636,22.909a45.3,45.3,0,0,0,23.941-.873c3.906-1.241,6.3-1.268,9.634,1.556,14.862,12.591,29.755,25.142,44.337,38.059a39.939,39.939,0,0,0,4.469,3.022"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird} />
                <motion.path id="Caminho_7816" data-name="Caminho 7816" d="M205.1,35.416a456.3,456.3,0,0,0-24.422,94.925,496.425,496.425,0,0,0-5.119,63.94,552.808,552.808,0,0,0,4.023,71.449,6.888,6.888,0,0,0,2.563,4.489"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7817" data-name="Caminho 7817" d="M456.6,1000.6c-6.609,7.087-17.9,3.324-20.572-5.963a12.59,12.59,0,0,1,.738-8.473c3.357-8.238,2.218-15.127-3.372-22.229-2.3-2.927-4.688-4.929-7.768-5.65-4.373-1.024-7.292-4.144-10.912-6.2a101.078,101.078,0,0,0-45.943-12.9c-28.536-1.317-57.678,14.489-72.044,30.27a103.44,103.44,0,0,0-24.613,46.668c-1.825,7.682-2.078,15.7-4.034,23.472-3.995,15.87-12.805,28.671-24.7,39.283-5.094,4.545-10,9.336-15.194,13.8-7.13,6.137-15.44,11-21.141,18.792-1.273,1.74-3.178,3.027-2.948,5.529"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7818" data-name="Caminho 7818" d="M203.6,378.128c-5.049,16.53-13.707,31.075-24.454,44.461-17.367,21.63-40.552,34.241-65.754,44.739C85.781,478.831,64.474,498,51.838,525.976c-11.285,24.982-13.643,50.615-6.366,76.947,10.611,38.4,35.457,64.235,72.385,77.712,22.388,8.17,45.725,8.257,68.775,1.23,21.295-6.493,39.459-18.1,53.8-35.041,15.773-18.63,24.949-40.16,26.623-64.862,2.025-29.895-6.218-56.591-24.69-79.814-9.181-11.541-20.4-21.373-33.8-28.052-18.568-9.249-41.126,2.678-42.792,23.939C164.7,511.7,170.82,521.812,183.142,528c18.674,9.377,32.329,23.115,38.99,43.444,6.732,20.548,3.052,39.856-7.231,57.871-8.725,15.287-21.429,26.537-38.718,32.162-15.995,5.205-31.662,5.184-47.442-.567-21.987-8.013-36.652-23.58-44.668-45.07-3.367-9.029-4.08-19.038-3.23-28.888"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionSecond} />
                <motion.path id="Caminho_7819" data-name="Caminho 7819" d="M243.024,851.23c3.719,5.117,4.128,10.236,1.1,16.038-3.1,5.931-7.787,8.019-14.07,7.974-5.39-.039-10.851-.7-16,1.906a10.454,10.454,0,0,0-4.613,3.96c-2.658,4.152-6.226,7.712-9.319,11.6a73.391,73.391,0,0,0-16.091,42.449c-1.3,21.279,4.527,40.125,19.233,55.306,12.883,13.3,19.488,29.441,23.477,46.688a72.423,72.423,0,0,1,.57,26.942c-1.587,10.578-4.166,20.549-9.147,29.983-.792,1.5-.421,3.618-.587,5.449"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7820" data-name="Caminho 7820" d="M423.169,74.882a7.233,7.233,0,0,1-5.007.044c-10.937-4.245-27.585,3.65-28.249,20.446a8.091,8.091,0,0,1-3.718,6.92q-16.211,11.277-33.39,21.045c-21.759,12.378-44.94,22.161-65.428,36.89a316.566,316.566,0,0,0-50.458,44.44A305.4,305.4,0,0,0,187.614,278.7a12.984,12.984,0,0,1-1.478,2.007"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7821" data-name="Caminho 7821" d="M382.25,176.8c7.655,6.657,14.974,7.205,23.026,2.625,3.318-1.886,4.7-4.8,6.353-7.657a70.017,70.017,0,0,1,5.552-8.956c-5.331-6.638-20.943-6.261-28.438,1.5a24.976,24.976,0,0,0-5.9,9.516,6.939,6.939,0,0,1-4.606,4.4c-37.821,14.26-73.768,32.369-108.787,52.473a797.44,797.44,0,0,0-77.815,51.509,8.419,8.419,0,0,1-6,1.99"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7822" data-name="Caminho 7822" d="M293.424,664.887c.6,1.429.8,2.631-.463,4.03q-12.332,13.641-24.473,27.456c-11.037,12.605-21.918,25.347-32.967,37.94-8.4,9.57-17.008,18.948-25.419,28.5-11.534,13.106-22.945,26.32-34.456,39.446-5.6,6.38-11.291,12.674-16.959,18.991-8.073,9-12.7,19.4-14.657,31.445-1.548,9.539-.345,18.539,2.238,27.492,5.288,18.333-5.277,36.068-23.044,40.335-11.269,2.707-21.7-.336-29.848-8.9-5.694-5.984-11.9-10.968-20.028-12.9-12.883-3.056-24.659-.645-34.912,7.967-9.909,8.322-14.145,19.148-14.043,31.961.031,3.847,1.238,7.461,2.322,10.907.787,2.5.615,4.716.733,7.078"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird} />
                <motion.path id="Caminho_7823" data-name="Caminho 7823" d="M206.1,34.916c14.221-.147,21.383-10.008,17.494-23.988-.54-1.94-1.208-4.066-.923-5.971.661-4.412-1.386-4.329-4.6-3.542-13.312,3.256-20.948,21.646-12.468,33.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7824" data-name="Caminho 7824" d="M280.45,67.389c-17.673,16.881-33.937,34.964-47.414,55.449a296.078,296.078,0,0,0-43.519,104.894c-2.516,12.428-4.092,24.922-5.369,37.492-.407,4.009-3.217,7.6-1.63,12.034.572,1.6.4,3.624,1.705,4.862a1.016,1.016,0,0,1,.38,1.079c-1.846,7.267,2.122,14.56-.808,22.051-4.4,11.247-11.4,16.889-23.109,16.955-2.326.013-4.717-.527-6.986.469"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7825" data-name="Caminho 7825" d="M27.947,709.849c8.381,4.068,15.394,10.15,22.375,16.082,14.659,12.458,27.645,26.649,37.886,42.944,12.6,20.053,21.395,41.721,25.2,65.349a208.542,208.542,0,0,1,2.727,31.495c.061,7.655-1.154,15.323-1.911,22.974-.07.709-.941,1.338-1.44,2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird} />
                <motion.path id="Caminho_7826" data-name="Caminho 7826" d="M142.721,316.18c-3.5-5.466-9.466-6.532-14.989-7.919-30.81-7.737-61.665,13.661-63.232,47.891a47.545,47.545,0,0,0,8.821,29.495c5.686,8.268,9.759,17.121,10.628,27.442.987,11.733-1.873,22.108-8.024,32.028-7.972,12.858-19.776,20.062-34.039,22.756A49.705,49.705,0,0,1,1,458.061"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionSecond} />
                <motion.path id="Caminho_7827" data-name="Caminho 7827" d="M297.417,928.665c-2.115,2.249-1.573,5.594-3.457,8.022-5.453,7.025-14.926,7.672-21.42,1.392a21.769,21.769,0,0,0-13.044-6.458,5.911,5.911,0,0,0-2.525-.055c-17.9,4.517-32.349,13.835-40.765,30.636-4.716,9.414-6.052,19.876-4.94,30.39.192,1.814-.536,3.014-.679,4.515"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7828" data-name="Caminho 7828" d="M294.422,896.192c-1.846-.311-2.841-1.579-4.067-2.929-4.517-4.973-13.582-6.707-19.387-4.065a17.074,17.074,0,0,0-9.93,17.479c.364,3.034,1.392,5.982,1.922,9,1.027,5.852-2.062,10.4-4.966,14.983"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7829" data-name="Caminho 7829" d="M29.943,685.869c.591,4.6-1.507,8.793-2.029,13.235-1.984,16.893-2.573,33.691-.662,50.733a196.22,196.22,0,0,0,17.771,61.875A184.327,184.327,0,0,0,76.39,858.689c10.911,11.82,22.025,23.475,35.87,32.041.659.408,1.019,1.3,1.518,1.965"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird} />
                <motion.path id="Caminho_7830" data-name="Caminho 7830" d="M30.941,687.867c6.587,1.508,11.883,5.656,17.4,9.094a175.6,175.6,0,0,1,61.421,64.856c7.058,12.709,12.328,26.209,16.963,39.963a6.574,6.574,0,0,1,.025,1.99"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionThird} />
                <motion.path id="Caminho_7831" data-name="Caminho 7831" d="M406.2,1021.587c-.7,1.945,1.044,2.545,2.014,3.479A13.388,13.388,0,0,1,405.664,1046c-3.466,2.13-7.855,1.776-11.389.871-8.785-2.252-15.782.124-22.027,6.165a20.3,20.3,0,0,1-2.973,2.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7832" data-name="Caminho 7832" d="M378.756,823.253c-10.218,2.261-15.956,8.723-15.969,17.985-.014,10.432,5.105,16.535,15.97,18.979,6.121,1.376,11.927,2.813,16.631,7.844a15.8,15.8,0,0,1,4.094,12.129c-1.495,23.345-11.637,41.864-32.208,53.962-1.483.872-3.335,1.327-3.489,3.505"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7833" data-name="Caminho 7833" d="M467.582,969.131c5.223-9.336,2.608-18.544-6.519-21.378-5.339-1.658-10.84-1.445-14.926,3.4a28.981,28.981,0,0,1-13.986,8.982"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7834" data-name="Caminho 7834" d="M379.255,1007.6c-5.791-5.8-18.142-3.767-22.505-.058-6.533,5.555-9.119,14.9-5.012,22.577a21.021,21.021,0,0,0,7.091,7.9c6.051,3.946,8.037,10.446,9.662,16.613.992,3.768-1.4,8.24-3.31,11.861-7.615,14.466-17.709,26.814-31.79,35.6-1.927,1.2-4.54,2.088-5.036,4.922"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7835" data-name="Caminho 7835" d="M498.521,1103.518c-10.892-7.99-24.937-1.557-27.913,10.5-1.495,6.059-6.278,9.648-10.12,13.882-1.354,1.492-3,2.7-3.884,4.595"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7836" data-name="Caminho 7836" d="M142.721,316.679c-5.984,1.022-12.176.626-17.975,2.971-11.258,4.553-18.484,12.562-20.909,24.514-2.637,13,.616,24.523,11.08,32.786,5.587,4.411,13.357,3.832,19.757,1.96,15.084-4.412,24.752-14.1,26.105-30.75a34.055,34.055,0,0,0-2.665-16.461c-2.944-6.868-6.991-12.941-14.894-15.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7837" data-name="Caminho 7837" d="M397.719,870.214c3.019-6.765,7.813-11.84,13.892-16.1a12.681,12.681,0,0,0,4.945-13.347c-1.386-6.61-5.351-11.42-12.35-13.015"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7838" data-name="Caminho 7838" d="M128.249,1184.45q30.69-28.227,61.414-56.414a77.436,77.436,0,0,1,11.5-8.934c4.948-3.036,10.97-3.263,16.461-4.918a85.885,85.885,0,0,1,48.4-.368c16.844,4.588,34.019,2.811,50.262-3.049,9.834-3.548,19.182-2.887,29.04-1.856a77.1,77.1,0,0,1,39.44,15.552c5.624,4.263,10.783,9.252,17.439,12.023a59.428,59.428,0,0,0,16.953,4.624,54.682,54.682,0,0,0,31.875-6.258c6.469-3.443,11.371.094,16.472,2.3,3.763,1.627,6.416,5.106,8.593,8.808,6.1,10.375,19.656,11.042,26.784.44,2.141-3.183,4.048-7.2,1.62-11.407"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7839" data-name="Caminho 7839" d="M229.55,832.246c-10.849-8.452-25.463-1.649-28.5,8.977-1.539,5.39-2.17,10.95,1.2,15.393a42.015,42.015,0,0,1,8.838,21.591"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFourth} />
                <motion.path id="Caminho_7840" data-name="Caminho 7840" d="M304.4,36.914c-.9,5,.438,10.1-.173,14.966-1.375,10.945-11.4,18.593-23.281,15.009-3.5-18.583,7.076-32.625,22.955-30.475"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
                <motion.path id="Caminho_7841" data-name="Caminho 7841" d="M419.177,75.881a10.844,10.844,0,0,0-2.893,7.988c.731,12.279-12.831,22.437-26.05,15.993"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="transparent" stroke="rgba(255, 255, 255,19)" initial={{ pathLength: 0, pathOffset: 0 }} animate={animate ? animateIn : animateOut} transition={transitionFirst} />
            </motion.svg>


        </>
    )
}

const GalleryGeneral = ({ mobile, data }) => {
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
                <Row className=" gallery-general-container position-relative">
                    <Col lg="12" md="12" sm="12" className="w-100 h-100 position-relative">
                        <div className="position-relative container h-100vh align-middle d-grid">
                            <div className="align-middle container ml-0 d-grid position-relative container-gallery-general">
                                <h3 className="title-md fontRegular white  title-gallery-general">{data.title}</h3>
                                <Row className="container-gallery-general-arrow mt-5">
                                    <Col>
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
                                    <Col>
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
                            {data.imgs.map((item, index) => (
                                <Carousel.Item >
                                    <Image src={item} alt={'gallery-general-' + index} extraClass="img-gallery-general" />
                                </Carousel.Item>
                            ))}

                        </Carousel>
                    </Col>
                </Row>
            </InView>
        </div>
    )
}

export default connect()(GalleryGeneral)