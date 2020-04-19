import React, { useState, useContext } from 'react';
import Hero from '../Hero/Hero';
import '../../components/Menu/Menu.css';
import fakeData from '../../fakeData';
import MenuCard from '../MenuCard/MenuCard';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../App';


// const category = useContext(CategoryContext);

const Menu = (props) => {
   

   const [cards, setCards] = useState(fakeData);

   const breakfastCat = cards.filter((breakfast) => {
      return breakfast.cat === "breakfast" && breakfast.id <= 6;
   })
   const [breakfastItem, setBreakfastItem] = useState(breakfastCat);


   const lunchCat = fakeData.filter((lunch) => {
      return lunch.cat === "lunch" && lunch.id <= 6;
   });
   const [lunchItem, setlunchItem] = useState(lunchCat);



   const dinnerCat = fakeData.filter((dinner) => {
      return dinner.cat === "dinner" && dinner.id <= 6;
   });
   const [dinnerItem, setdinnerItem] = useState(dinnerCat);

   const handleAddFood = (menuCard) => {
      console.log("add food clicked", menuCard);
   }


   const [foodOrderCount, setFoodOrderCount] = useContext(CategoryContext);

   return (
      <div className="menu_area">
         <Hero></Hero>
         <div className="container">
            <div className="row">
               <div className="col-xs-12 ">
                  <nav>
                     <div className="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Breakfast</a>
                        <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lunch</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Dinner</a>
                     </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                           {
                              breakfastItem.map(card => <MenuCard
                                 handleAddFood = {handleAddFood}
                                 menuCard={card}
                                 ></MenuCard>)
                           }
                        </div>
                     </div>
                     <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row">
                           {
                              lunchItem.map(card => <MenuCard 
                                 handleAddFood = {handleAddFood}
                                 menuCard={card}
                                 ></MenuCard>)
                           }
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row">
                           {
                              dinnerItem.map(card => <MenuCard 
                                 handleAddFood = {handleAddFood}
                                 menuCard={card}
                                 ></MenuCard>)
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {
                  foodOrderCount> 0 ? <Link to="/menudetail">
                     <button style={{'background': '#f91944'}}  className="main_button">Checkout Your Food</button>
                  </Link> : <button  className="main_button">Checkout Your Food</button>
               }
            </div>
         </div>
      </div>
   );
};

export default Menu;