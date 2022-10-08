import { renderInput, renderBtn } from "./common/input";

const Contact = ({ data, onSubmit, onChange, onDisabled }) => {
  return (
    <>
      <div className="contact-us section-center">
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={onSubmit}>
          {renderInput("Name", "name", "text", data.name, onChange)}

          {renderInput("Email", "email", "email", data.email, onChange)}

          {renderInput("Message", "message", "text", data.message, onChange)}

          {renderBtn(onDisabled, "Submit")}
        </form>
      </div>
    </>
  );
};

export default Contact;
