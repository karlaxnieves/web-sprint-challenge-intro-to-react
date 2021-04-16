// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'


export default function Character({ characters }) {
    const [details, setDetails] = useState('')

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/1/")
            .then(res => { setDetails(res.data) })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (

        <div>
            <h2>Who is Luke:</h2>
            {
                details &&
                <div>
                    <p>{details.name} was born in {details.birth_year}</p>
                    <p>His height is {details.height}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair Color: {details.hair_color}</p>
                </div>
            }

        </div>
    )
}