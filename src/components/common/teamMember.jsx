const teamMember = (img, title, name) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="founder" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">- {name}</p>
        </div>
      </div>
    </div>
  );
};

export default teamMember;
