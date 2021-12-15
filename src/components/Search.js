import React from 'react'

 const Search = () => {
    return (
        <div className="row justify-content-center my-auto pb-5">
        <div className="col-lg-6 text-center mb-5">
          <h1 className="display-2 fw-bold text-white">Find your recipes, lets cook.</h1>
        </div>
        <div className="col-lg-8">
          <div className="grouped-inputs p-1 rounded-pill bg-white">
            <div className="row g-0">
              <div className="col-md-3">
                <select className="form-select form-select-lg px-4" aria-label="Default select example" >
                  <option selected value='3'>Low Carb</option>
                  <option value="1">Development</option>
                  <option value="2">Marketing</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control form-control-lg px-4" aria-label="Text input with dropdown button" placeholder="Search recipes & more..." />
              </div>
              <div className="col-md-3 d-grid">
                <a href="" className="btn btn-dark btn-lg rounded-pill">Search <i class="bi bi-search text-light"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Search;