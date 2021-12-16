import React, {useState, useContext} from 'react'
import {SearchContext} from '../contexts/SearchContext'

 const Search = () => {
    const {search, updateSearch, submitForm} = useContext(SearchContext);
    return (
        <div className="row justify-content-center my-auto pb-5">
        <div className="col-lg-6 text-center mb-5">
          <h1 className="display-2 fw-bold text-white">Find your recipes, lets cook.</h1>
        </div>
        <div className="col-lg-8">
          <div className="grouped-inputs p-1 rounded-pill bg-white">
          <form className='form-control' onSubmit={submitForm}>
            <div className="row g-0">
               
                <div className="col-md-3">
                <select className="form-select form-select-lg px-4" aria-label="Default select example" >
                  <option  defaultValue='3'>Low Carb</option>
                </select>
              </div>
              <div className="col-md-6">
                <input  
                type='search'
                value={search}
               onChange={updateSearch} className="form-control form-control-lg px-4" aria-label="Text input with dropdown button" placeholder="Search recipes & more..." />
              </div>
              <div className="col-md-3 d-grid">
                <button type='submit' className="btn btn-dark btn-lg rounded-pill">Search <i class="bi bi-search text-light"></i></button>
              </div>
              
           
            </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Search;