import { useState } from "react";
import { toast } from "react-toastify";
import ceo from "../images/ceo.jpg";
import employee01 from "../images/employee01.jpg";
import employee02 from "../images/employee02.jpg";
import employee03 from "../images/employee03.jpg";
import employee04 from "../images/employee04.jpg";

const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name, email, message)) {
      toast("Email Sent! We'll contact you soon.");
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  const onDisabled = () => {
    return (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    );
  };

  return (
    <>
      <div className="about-us banner">
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
                src={employee03}
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
                src={employee04}
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
                <h5 className="card-title">Software Developer</h5>
                <p className="card-text">- Robert M. Martin</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee03}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Accountant</h5>
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
                <h5 className="card-title">HR Executive</h5>
                <p className="card-text">- Samuel Johnson</p>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={employee04}
                className="card-img-top"
                alt="employee two"
              />
              <div className="card-body">
                <h5 className="card-title">Intern</h5>
                <p className="card-text">- Alex Hales</p>
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
                <img className="img-fluid" src={employee02} alt="customer" />
                <div className="card-header-info">
                  <h5>Thomas Smith</h5>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <p>Fantastic. Highly Recommended</p>
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
      {/* Contact Us */}
      <div className="contact-us section-center">
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button disabled={onDisabled()} className="btn btn-info mb-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AboutUs;
