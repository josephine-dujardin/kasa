import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './cards.css'

const Card = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {(
        data && data.length > 0 && data.map(logement => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <div className="card_title">{logement.title}</div>
            <div className="card_image" style={{ backgroundImage: `url(${logement.cover})` }}
              key={logement.id}
            >
            </div>
          </Link>
        ))
      )}
    </>
  )
};

export default Card

