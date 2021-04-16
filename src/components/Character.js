// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const H2 = styled.h2`
&:hover {
    transform: scale(3);
    transition: all 0.2s ease-in-out;
  }
  transition: all 2s ease-in-out;
  color: #D3D3D3;
`

const Paragraph = styled.div`
color: blue;
font-size: 1.2em;
`


export default function Character({ charactersId, close }) {
    const [details, setDetails] = useState('')


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1/`)
            .then(res => { setDetails(res.data) })
            .catch(err => {
                console.log(err);
            })
    }, [charactersId])

    return (

        <div>
            <H2>Who is {details.name}</H2>
            {
                details &&
                <Paragraph>
                    <p>{details.name} was born in {details.birth_year}</p>
                    <p>His height is {details.height}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair Color: {details.hair_color}</p>
                </Paragraph>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}