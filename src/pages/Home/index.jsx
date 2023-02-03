import Banner from '../../components/Banner';
import Card from '../../components/Cards';
import React from 'react';
import './home.css';
import Footer from '../../components/Footer';

const Home = (props) => {

  return (
    <>
      <Banner />
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
