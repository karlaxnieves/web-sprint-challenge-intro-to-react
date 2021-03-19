// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function Details() {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/1/")
            .then(res => { setDetails(res.data) })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (

        <div className='container'>
            <h2>Who is Luke:</h2>
            {
                details &&
                <>
                    <p>{details.name} was born in {details.birth_year}</p>
                    <p>His height is {details.height}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair Color: {details.hair_color}</p>
                </>
            }

        </div>
    )
}

// export default Character;