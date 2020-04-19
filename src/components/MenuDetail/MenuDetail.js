import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import '../../components/MenuDetail/MenuDatail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { CategoryContext } from '../../App';

const MenuDetail = (props) => {
   console.log(props.handleAddFoodCard);

   const {menuCardKey} = useParams();
   const menuAdd = fakeData.find(mcsl => mcsl.key === menuCardKey );
   console.log(menuAdd);
   const {title, img, desc, price} = menuAdd;




   const [foodOrderCount, setFoodOrderCount] = useContext(CategoryContext);
   console.log(foodOrderCount);

   // function


   return (
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-5">
               <div className="menuDetailContent">

                  <h2>{title}</h2>
                  <p>{desc}</p>
                     <div className="addFoodcount">
                        <h4>${price}</h4>
                        <div className="foodCount">
                           {
                              foodOrderCount > 0? <button onClick = {() => setFoodOrderCount(foodOrderCount > 0 && foodOrderCount - 1)} className="decrementBtn"> <FontAwesomeIcon icon={faMinus} />
                           </button> : <button  className="decrementBtn"><FontAwesomeIcon icon={faMinus} />
                           </button>
                           }
                        {/* <button onClick = {() => setFoodOrderCount(foodOrderCount > 0 && foodOrderCount - 1)} className="decrementBtn">
                              <FontAwesomeIcon icon={faMinus} />
                           </button> */}
                           <span>{foodOrderCount}</span>
                           <button onClick = {() => setFoodOrderCount(foodOrderCount + 1)} className="incrementBtn">
                              <FontAwesomeIcon icon={faPlus} />
                           </button>
                        </div>
                     </div>
                     {
                       foodOrderCount > 0? <Link onClick={() => props.handleAddFoodCard} to="/menu"><button className="addToCardBtn"> <FontAwesomeIcon icon={faShoppingCart} />Add</button> </Link> : <button style={{'background': '#ddd', 'color': '#020202'}} className="addToCardBtn"><FontAwesomeIcon icon={faShoppingCart} />Add</button>

                     }
               </div>
            </div>
            <div className="col-md-7">
               <img src={img} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default MenuDetail;