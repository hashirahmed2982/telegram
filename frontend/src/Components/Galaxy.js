"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import './galaxy.css'

const TwinklingStars = (props) => {
    const { radius, depth, count, factor, saturation, fade } = props;
    const starsRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        // Twinkling effect
        starsRef.current.material.opacity = 0.9 + 0.5 * Math.sin(time * 20);

    });

    return (
        <Stars
            ref={starsRef}
            radius={radius}
            depth={depth}
            count={count}
            factor={factor}
            saturation={saturation}
            fade={fade}
        />
    );
};

const Galaxy = () => {
    return (
        <section class="wrapper" style={{ zIndex: -1}}>
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
           
        </section>
    );
};

export default Galaxy;
