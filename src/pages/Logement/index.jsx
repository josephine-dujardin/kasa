import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import React from 'react';
import Description from '../../components/Description';
import Host from '../../components/Host';
import Dropdown from '../../components/Dropdown';
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom";
import './logement.css';

export function Logement() {

    const apiData = Hooks();
    const { logementId } = useParams();
    const logementSelected = apiData.find((logement) => logement.id === logementId);

    // Description Data Dropdown

    const descriptionArray = []
    descriptionArray.push(logementSelected)
    const descriptionArrayLogement = descriptionArray[0]?.description
    const emptyArrayDescription = []
    emptyArrayDescription.push(descriptionArrayLogement)

    // Équipements Data Dropdown

    const equipementArray = []
    equipementArray.push(logementSelected)
    const equipementArrayLogement = equipementArray[0]?.equipments
    const emptyArrayEquipement = []
    emptyArrayEquipement.push(equipementArrayLogement)

    return (
        <>
            <Carousel />
            <span className="logement_container">
                <Description />
                <Host />
            </span>
            <span className="span_dropdown_container">
                {descriptionArray && descriptionArray.length > 0 && descriptionArray.map((logement, i) => (
                    <div key={i} className="description">
                        <Dropdown title={"Description"} key={i} text={logement?.description} />
                    </div>
                ))}
                {equipementArray && equipementArray.length > 0 && equipementArray.map((logement, i) => (
                    <div key={i} className="equipements">
                        <Dropdown title={"Équipements"} key={i} list={logement?.equipments.map((subItems, sIndex) => {
                            return <li key={sIndex}> {subItems} </li>;
                        })} />
                    </div>
                ))}
            </span>
            <Footer />
        </>
    )
}

export default Logement;