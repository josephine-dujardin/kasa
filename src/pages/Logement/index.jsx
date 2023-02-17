import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import React from 'react';
import Description from '../../components/Description';
import Host from '../../components/Host';
import Dropdown from '../../components/Dropdown';
import './logement.css';

export function Logement() {

    return (
        <>
            <Carousel />
            <span className="logement_container">
                <Description />
                <Host />
            </span>
            <span className="dropdown_container">
                <div className="description">
                    <Dropdown title={"Description"} />
                </div>
                <div className="equipements">
                    <Dropdown title={"Équipements"} />
                </div>
            </span>
            <Footer />
        </>
    )
}

export default Logement;