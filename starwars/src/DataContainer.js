import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

const DivContainer = styled.div`
    width: 64%;
    height: 36%;
    background-color: rgba(20, 22, 28, .95);
    padding-top: 2%;
    margin: 1% auto;
    border-radius: 15px;
`;
const DivInfo = styled.div`
    width: 96%;
    height: 100%;
    margin: 0 auto;
    font-size: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    
`;
const ImgCharacter = styled.img`
    width: 64%;
    height: 80%;
    margin: 0 auto;
`;

const DataContainer = props => {
// set up state for the likes
    return (
        <DivContainer>
            <DivInfo>
                {props.myData.name}
                <ImgCharacter src={props.myData.image}></ImgCharacter>
            </DivInfo>
        </DivContainer>
    );
};

export default DataContainer;