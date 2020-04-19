import React, { useState } from 'react';
import fakeData from '../../fakeData'
import MenuCard from '../MenuCard/MenuCard';

const Breakfast = () => {
   const [cards, setCards] = useState(fakeData);
   return (
      <div className="row">
            {
               cards.map(card => <MenuCard menuCard={card}></MenuCard>)
            }
      </div>
   );
};

export default Breakfast;