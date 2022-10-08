export const renderInput = (label, name, type, value, onChange) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      {name === "message" ? (
        <textarea
          id={name}
          className="form-control"
          name={name}
          rows="3"
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export const renderBtn = (onDisabled, value) => {
  return (
    <button disabled={onDisabled()} className="btn btn-info mb-5">
      {value}
    </button>
  );
};
