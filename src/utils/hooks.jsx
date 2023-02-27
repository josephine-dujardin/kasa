import { useState, useEffect } from 'react';

export function Hooks() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://josephine-dujardin.github.io/kasa/data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return data
}

