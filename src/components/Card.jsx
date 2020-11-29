import React from 'react'
import './Card.css';
import Show from './Show';
import Info from './Info';

import styled from 'styled-components';

//let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
let xAxis = (window.innerWidth / 2 - (window.innerWidth)) / 25;
let yAxis = (window.innerHeight / 2 - (window.innerHeight)) / 25;

const Div = styled.div`
    transform-style: preserve-3d;
    background-color: rgba(255, 255, 255, 0.9);
    min-height: 80vh;
    width: 35rem;
    border-radius: 30px;
    padding: 0rem 5rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);    
    
    transition: 1000ms;
    transform: 'rotateY(0deg) rotateX(0deg)';

    &:hover {
        transition: 1000ms;
        transform: rotateY(${xAxis}deg) rotateX(${yAxis}deg);
    }

`;

export default props => 
    <Div className="card">
        <Show />
        <Info />
    </Div>