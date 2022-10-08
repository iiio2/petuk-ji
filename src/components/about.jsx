import ceo from "../images/ceo.jpg";
import employee01 from "../images/employee01.jpg";
import employee02 from "../images/employee02.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h2>About Us</h2>
      </div>

      <div className="about-us-description section-center">
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem voluptates fugiat, id dignissimos at amet, ex quas ducimus,
          minus quaerat dolorem. Hic aliquid mollitia excepturi distinctio
          neque, nobis aperiam labore dolor fuga dicta? Illo ab optio at eaque
          neque. Ut impedit consectetur deleniti ipsa obcaecati dolorem quae
          velit doloremque deserunt assumenda. Possimus accusantium est placeat
          itaque architecto asperiores aliquid consequatur? Dicta voluptate ab
          nobis laborum odit, facilis autem cumque minus doloribus eius aperiam
          aliquam soluta, labore placeat iure doloremque id quaerat in eum.
          Assumenda, repellendus soluta commodi, quo ullam cupiditate illo sequi
          repellat fugit dolorem quaerat dignissimos sint ab, ratione voluptate!
          Debitis aliquam expedita labore facere, consequatur in,
          necessitatibus, eius veniam cumque eligendi quia porro hic? Dolorum
          dignissimos unde expedita nobis, est corporis earum tempora ab beatae
          nihil et quibusdam recusandae eligendi quam quos consequatur!
          Deserunt, voluptate ex commodi vel delectus nihil officia ducimus
          quaerat, esse quasi saepe quam dolor voluptas pariatur alias ullam
          eveniet impedit inventore obcaecati iusto autem asperiores corrupti
          ratione! Totam eveniet soluta labore iste. Ad similique deleniti
          laudantium, voluptatem debitis eaque delectus veritatis tempora porro
          culpa voluptates accusantium nesciunt minima cumque impedit quo in
          quod consequatur a facilis quaerat eligendi nemo soluta. Optio, ipsam
          fugiat?
        </p>
      </div>

      <div className="team-members section-center">
        <h2 className="text-center">
          Meet Team <span> Members</span>
        </h2>

        <div className="row g-4">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img src={ceo} className="card-img-top" alt="founder" />
              <div className="card-body">
                <h5 className="card-title">Founder</h5>
                <p className="card-text">- John Smith</p>
              </div>
            </div>
          </div>
          {/* card */}

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee01}
                className="card-img-top"
                alt="employee one"
              />
              <div className="card-body">
                <h5 className="card-title">Senior Software Engineer</h5>
                <p className="card-text">- Andrew Mead</p>
              </div>
            </div>
          </div>
          {/* card */}

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee02}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee01}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Rubio Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee02}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee02}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee02}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee02}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Analyst</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
        </div>
      </div>

      <div className="testimonials section-center">
        <h2 className="text-center">Testimonials</h2>
        <div className="row g-4">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={ceo} alt="customer" />
                <div className="card-header-info">
                  <h5>Thomas Smith</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={ceo} alt="customer" />
                <div className="card-header-info">
                  <h5>Thomas Smith</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={ceo} alt="customer" />
                <div className="card-header-info">
                  <h5>Thomas Smith</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="contact-us section-center">
        <h2 className="text-center">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <button className="btn btn-info mb-5">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AboutUs;
