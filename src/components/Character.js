// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'



export default function Character(props) {
    const { nameId, close } = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/1/")
            .then(res => { setDetails(res.data) })
            .catch(err => {
                console.log(err);
            })
    }, [nameId])

    return (
        <div className='container'>
            <h2>Details:</h2>
            {
                details &&
                <>
                    <p>{details.name} is {details.age}</p>
                    <p>Height is {details.height}</p>
                </>
            }

        </div>
    )
}

// export default Character;