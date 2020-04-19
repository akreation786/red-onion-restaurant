import React from 'react';
import '../../components/Hero/Hero.css'

const Hero = () => {
   return (
      <div className="hero_area">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="heroHeadding">
                  <h1 className="display-4">Best food Waiting for Your belly</h1>
                  <div className="d-flex justify-content-center">
                     <div className="searchbar">
                        <input className="search_input" type="text" name="Search" placeholder="Search Food Item" />
                        <button className="search_btn" type="submit">Search</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;