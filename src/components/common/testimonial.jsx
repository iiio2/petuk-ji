const testimonial = (img, name, message) => {
  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="card">
        <div className="card-header">
          <img className="img-fluid" src={img} alt="customer" />
          <div className="card-header-info">
            <h5>{name}</h5>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
