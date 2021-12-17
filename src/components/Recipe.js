import React from 'react'


const Recipe = (props)  => {
    const {label, calories, image,ingredientLines} = props.recipe;
    const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    
    return (
        <React.Fragment>

                <div className="col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
                <a href="" className="card h-100 bg-dark text-light card-hover-border rounded-pill shadow-lg">
                  <div className="d-flex align-items-lg-center">
                  <img src={image} className="card-image img-fluid w-30 h-10 rounded-pill" />
                     
                    <div className="card-header px-1">
                      <h3 className="card-title">{truncate(label, 17)}</h3>
                    </div>
                  
                    <div className="card-footer px-1">
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