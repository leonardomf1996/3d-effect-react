import React from 'react';
import './Info.css';

import styled from 'styled-components';

//let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
let xAxis = (window.innerWidth / 2 ) / 25;
let yAxis = (window.innerHeight / 2 ) / 25;

const H1 = styled.h1`
    font-size: 3rem;
    transition: all 0.75s ease-out;
    text-align: center; 
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    padding: 2rem 0rem;
    color: #585858;
    font-weight: lighter;
    transition: all 0.75s ease-out;
`;

const A = styled.a`
    color: royalblue;
    text-decoration: none;
`;

const Div = styled.div`
    transition: 1000ms;

    &:hover {
        transform: translateZ(125px);
        transform: rotateY(${xAxis}deg) rotateX(${yAxis}deg);
        transition: 1000ms;
    }
`;

export default props =>
    <Div className="info">
        <H1 className="title">Charizard</H1>
        <H3>Charizard, conhecido como Lizardon no Japão, é uma criatura fictícia da franquia Pokémon que pertence a Nintendo e Game Freak. <A href="https://pt.wikipedia.org/wiki/Charizard" class="wikipedia">Wikipédia</A></H3>
    </Div>