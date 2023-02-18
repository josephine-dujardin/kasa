import './star.css'
import React, { useState } from "react";
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom";

const StarRating = () => {
    const apiData = Hooks();
    const { logementId } = useParams();
    const logementSelected = apiData.find((logement) => logement.id === logementId);
    const Rating = []
    Rating.push(logementSelected)
    const ArrayRating = Rating[0]?.rating
    const emptyArrayRating = []
    emptyArrayRating.push(ArrayRating)

    let [rating] = useState([]);

    if (ArrayRating === '5') {
        rating = [true, true, true, true, true];
    } else if (ArrayRating === '4') {
        rating = [true, true, true, true, false];
    } else if (ArrayRating === '3') {
        rating = [true, true, true, false, false];
    } else if (ArrayRating === '2') {
        rating = [true, true, false, false, false];
    } else if (ArrayRating === '1') {
        rating = [true, false, false, false, false];
    } else {
        rating = [false, false, false, false, false];
    }

    return (
        <div>
            <i className={rating[0] ? `fa-solid fa-star` : "fa-sharp fa-solid fa-star"}></i>
            <i className={rating[1] ? `fa-solid fa-star` : "fa-sharp fa-solid fa-star"}></i>
            <i className={rating[2] ? `fa-solid fa-star` : "fa-sharp fa-solid fa-star"}></i>
            <i className={rating[3] ? `fa-solid fa-star` : "fa-sharp fa-solid fa-star"}></i>
            <i className={rating[4] ? `fa-solid fa-star` : "fa-sharp fa-solid fa-star"}></i>
        </div>
    )
}

export default StarRating