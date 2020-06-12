import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

const DivContainer = styled.div`
    width: 64%;
    height: 36%;
    background-color: #10141a;
    padding-top: 2%;
    margin: 1% auto;
    border-radius: 15px;
`;
const DivInfo = styled.div`
    width: 96%;
    height: 54%;
    background-color: #10141a;
    margin: 0 auto;
    font-size: 1.25rem;
`;

const DataContainer = props => {
// set up state for the likes
    return (
        <DivContainer>
            <DivInfo>Test Letters</DivInfo>
        </DivContainer>
    );
};

export default DataContainer;