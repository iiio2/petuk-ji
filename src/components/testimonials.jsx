import ceo from "../images/ceo.jpg";
import employee01 from "../images/employee01.jpg";
import employee02 from "../images/employee02.jpg";
import employee03 from "../images/employee03.jpg";
import employee04 from "../images/employee04.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials section-center">
        <h2 className="text-center">Testimonials</h2>
        <div className="row g-4">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={employee02} alt="customer" />
                <div className="card-header-info">
                  <h5>Thomas Smith</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <p>Truly Fantastic.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={employee03} alt="customer" />
                <div className="card-header-info">
                  <h5>Scot Mathew</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <p>Amazing. I enjoyed using the service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={employee04} alt="customer" />
                <div className="card-header-info">
                  <h5>Albert Max</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <p>Very good indeed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
