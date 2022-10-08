const Contact = ({ data, onSubmit, onChange, onDisabled }) => {
  return (
    <>
      <div className="contact-us section-center">
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              value={data.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="3"
              value={data.message}
              onChange={onChange}
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

export default Contact;
