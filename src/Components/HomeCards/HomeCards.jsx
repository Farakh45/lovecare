import React from 'react';
import './HomeCards.css';
import cardData from '../Assets/cardData';


const HomeCards = () => {
  return (
    <div className='home_cards'>
        <h1>Who Are You</h1> 
    <div className="cards-wrapper">
      {cardData.map((card, index) => (
        <div className="card-container" key={index}>
          <img className="card-image" src={card.imageSrc} alt={card.title} />
          <h2 className="card-heading">{card.title}</h2>
          <p className="card-paragraph">{card.description}</p>
          <button className="card-button">{card.buttonText}</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HomeCards;
