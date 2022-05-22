import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Information from './pages/Information';


const Cards = () => {
  return (
    <>
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://etaaide.com/wp-content/uploads/2022/04/fittings-water-polo-construction-2784902.jpg'
              text='Track your progress with our app.'
              label='Adventure'
              path='/services' />
            <CardItem
              src='https://etaaide.com/wp-content/uploads/2022/01/engineer-engineering-electrical-engineer-4941341.jpg'
              text='Predict Before they fail.'
              label='Luxury'
              path='/services' />
          </ul>
          {/* <ul className='cards__items'>
      <CardItem
        src='images/img-3.jpg'
        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        label='Mystery'
        path='/services'
      />
      <CardItem
        src='images/img-4.jpg'
        text='Experience Football on Top of the Himilayan Mountains'
        label='Adventure'
        path='/products'
      />
      <CardItem
        src='images/img-8.jpg'
        text='Ride through the Sahara Desert on a guided camel tour'
        label='Adrenaline'
        path='/sign-up'
      />
    </ul> */}
        </div>
      </div>
    </div>
    <div>
        <Information />
    </div>
    </>
  );
}

export default Cards;

