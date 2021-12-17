import React from 'react'
import {  Link } from 'react-router-dom';
import Search from './Search'
import Slide from './Slide'


const HeroSearch = () => {

  
  return (
  
          
      <section className="bg-black overflow-hidden" data-aos="fade-in">
        <div className="d-flex flex-column py-15 min-vh-100 container foreground">

            <Search />
            
        <div className="h1 text-center mt-3 pt-4 pointer"> <Link to='/recipes'><i className="bi bi-chevron-down text-light text-center"></i> </Link></div>
      
        </div>
        <figure className="background background-overlay" data-top-top="transform: translateY(0%);" data-top-bottom="transform: translateY(10%);"></figure>
      </section>

  );
}

export default HeroSearch;
