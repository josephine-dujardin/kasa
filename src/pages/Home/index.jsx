import Banner from '../../components/Banner';
import shoreline from "../../assets/shoreline.png";
import Card from '../../components/Cards';
import React from 'react';
import './home.css';
import Footer from '../../components/Footer';

const Home = (props) => {

  return (
    <>
      <Banner image={shoreline} text={"Chez vous, partout et ailleurs"} />
      <span className="card_container">
        <span className="card_wrapper">
          <Card />
        </span>
      </span>
      <Footer />
    </>
  )

}

export default Home;
