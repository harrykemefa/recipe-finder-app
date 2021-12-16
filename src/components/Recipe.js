import React from 'react'


const Recipe = (props)  => {
    const {label, calories, image,ingredientLines} = props.recipe;

    
    return (
        <React.Fragment>

                <div className="col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
                <a href="" className="card h-100 bg-dark text-light card-hover-border rounded-pill shadow-sm">
                  <div className="d-flex align-items-lg-start">
                  <img src={image} className="card-image img-fluid w-20 vh-10 rounded-pill" />
                     
                    <div className="card-header pb-0">
                      <h3 className="card-title">{label}</h3>
                    </div>
                  
                    <div className="card-footer">
                    <span className="text-muted">{ingredientLines.length} ingredients</span>
                    </div>
                  </div>
                </a>
              </div>

        {/* <div className="col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
          <a href="" className="card h-100 bg-white card-hover-border rounded-pill shadow-sm">
            <div className="d-flex flex-row">
              <div className="card-header pb-0">
              <h3 className="card-title">Chicken Pizza</h3>
              
              </div>
              <img src={img2} className="card-image img-fluid w-20 vh-10 rounded-pill" />
              <div className="card-footer mt-2">
              <span className="text-muted">10 ingredients</span>
              </div>
            </div>
          </a>
        </div> */}
        </React.Fragment>
    )
}
export default Recipe;