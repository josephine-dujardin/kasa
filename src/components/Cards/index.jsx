import { Link } from "react-router-dom";
import React from 'react';
import { Hooks } from '../../utils/hooks';
import './cards.css'

const Card = () => {

  const apiData = Hooks();

  return (
    <>
      {(
        apiData && apiData.length > 0 && apiData.map(logement => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <p className='card_title'>{logement.title}</p>
            <img
              className="card_image" key={logement.id} src={logement.cover} alt="Logement"
            />
          </Link>
        ))
      )}
    </>
  )
};

export default Card

