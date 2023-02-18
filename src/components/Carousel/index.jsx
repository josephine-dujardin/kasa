import React, { useState, useEffect } from "react";
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom";
import './carousel.css';

function Carousel() {
    const [index, setIndex] = useState(0);
    const apiData = Hooks();
    const { logementId } = useParams();
    const array = []
    const logementSelected = apiData.find((logement) => logement.id === logementId);

    array.push(logementSelected)

    const arrayLogement = array[0]?.pictures
    const emptyArray = []

    emptyArray.push(arrayLogement)

    useEffect(() => {
        const lastIndex = arrayLogement?.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, arrayLogement]);

    // autoslide, clearInterval = interval transition function

    useEffect(() => {
        if (arrayLogement?.length === 1) {
            return
        } else {
            const slider = setInterval(() => {
                setIndex(index + 1);
            }, 3000);
            return () => clearInterval(slider);
        }
    }, [index, arrayLogement?.length]);

    if (arrayLogement?.length === 1) {
        document.querySelector('.prev').style.display = 'none'
        document.querySelector('.next').style.display = 'none'
        document.querySelector('.bullet_points').style.display = 'none'
    }

    return (
        <section className="section">
            <div className="section-center">
                {arrayLogement && arrayLogement.length > 0 && arrayLogement.map((logement, logementIndex) => {
                    let position = "nextSlide";
                    if (logementIndex === index && arrayLogement?.length === 1) {
                        position = "activeSlide";
                    }
                    if (logementIndex === index) {
                        position = "activeSlide";
                    }
                    if (arrayLogement?.length > 1 &&
                        (logementIndex === index - 1 ||
                            (index === 0 && logementIndex === arrayLogement.length - 1))
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={logementIndex} className={position}>
                            <img
                                className="logement_image" key={logementIndex} src={logement} alt="Logement"
                            />
                        </article>
                    );
                })}
                <p className="bullet_points">{index + 1}/{arrayLogement?.length}</p>
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <i className={`fa fa-chevron-right icon-arrow`}></i>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <i className={`fa fa-chevron-right icon-arrow`}></i>
                </button>
            </div>
        </section>
    );
}

export default Carousel;

