// import React, { useState } from 'react';
// import fakeData from '../../fakeData';
// import MenuCard from '../MenuCard/MenuCard';

const Lunch = (props) => {
   const lunchCat = fakeData.filter((lunch) => {
      return lunch.cat === "lunch";
   });
   // console.log(lunchCat);
   const [cards, setCards] = useState(lunchCat);
   return (
      <div className="row">
         {
            cards.map(card => <MenuCard menuCard={card}></MenuCard>)
         }
      </div>
   );
};

export default Lunch;