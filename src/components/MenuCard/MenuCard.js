import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = (props) => {
   console.log();
   const {img, title, body, price, key, } = props.menuCard;

   return (
      <div className="col-md-4 text-center">
         <img src={img} alt=""/>
         <h3><Link handleAddFood={props.handleAddFood} to={"/menuCard/"+key}>{title}</Link></h3>
         <p>{body}</p>
         <h4>${price}</h4>
         <button onClick={() => props.handleAddFood(props.menuCard)}>test</button>
      </div>
   );
};

export default MenuCard;