import React from 'react';
import charizard from '../assets/images/charizard.png';

import styled from 'styled-components';

//let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
let xAxis = (window.innerWidth / 2 ) / 25;
let yAxis = (window.innerHeight / 2 ) / 25;

const Div = styled.div`
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1000ms;
    
    &:hover {
        transform: translateZ(200px);
        transform: rotateY(${xAxis}deg) rotateX(${yAxis}deg);        
        transition: 1000ms;
    }
`;

const Img = styled.img`
    width: 20rem;
    z-index: 2;
    transition: all 0.75s ease-out;        
`;

export default props =>
    <Div>        
        <Img src={charizard} />
    </Div>