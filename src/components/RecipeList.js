import React from 'react'
import Recipe from './Recipe'

const RecipeList = ()  => {
    return (
      
 
  <section className="py-15 py-xl-20 bg-light border-bottom">
    <div className="container foreground">
      <div className="row align-items-end mb-5">
        <div className="col-lg-8">
          <h2 className="fw-light">Browse over <span className="fw-bold">60k+ Recipes</span> for all kinds of dishes.</h2>
        </div>
      </div>
      <div className="row g-4">
         <Recipe />
      </div>
    </div>
  </section>
    )
}
export default RecipeList;