import React, {useContext} from 'react'
import {  Link } from 'react-router-dom';
import {SearchContext} from '../contexts/SearchContext'
import Recipe from './Recipe'

const RecipeList = ()  => {
    const {recipes, setRedirect} = useContext(SearchContext);
    setRedirect(false);
    return (
      
   
  <section className="py-15 py-xl-20 bg-light border-bottom">
    <div className="container foreground">
      <div className="row align-items-end mb-5">
        <div className="col-lg-8">
          <h2 className="fw-light">Browse over <span className="fw-bold">60k+ Recipes</span> for all kinds of dishes.</h2>
        
        </div>
        <div className="col-lg-4">
        <Link to='/'>  <button type="button" class="btn btn-dark btn-lg rounded-pill">Search <i class="bi bi-search text-light"></i></button></Link>
          </div>
      </div>
      <div className="row g-4">
          {recipes && recipes.map(recipe => (  
            <Recipe 
           key={recipe.recipe.title}
           recipe={recipe.recipe}
          />))}

          {!recipes && <p>No Data Found</p>}

      </div>
    </div>
  </section>
    )
}
export default RecipeList;