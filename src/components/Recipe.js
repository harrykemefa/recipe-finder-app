import React from 'react'
import img1 from './img_1.jpg'
import img2 from './img_2.png'

const Recipe = ()  => {
    return (
        <React.Fragment>
                <div className="col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
                <a href="" className="card h-100 bg-dark text-light card-hover-border rounded-pill shadow-sm">
                  <div className="d-flex align-items-lg-start">
                  <img src={img1} className="card-image img-fluid w-20 vh-10 rounded-pill" />
                     
                    <div className="card-header pb-0">
                      <h3 className="card-title">Avocado Salad</h3>
                    </div>
                  
                    <div className="card-footer">
                    <span className="text-muted">10 ingredients</span>
                    </div>
                  </div>
                </a>
              </div>

        <div className="col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
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
        </div>
        </React.Fragment>
    )
}
export default Recipe;