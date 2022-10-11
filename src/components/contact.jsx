import { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { renderInput, renderBtn } from "./common/input";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = data;
    try {
      if ((name, email, message)) {
        emailjs
          .sendForm(
            `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
            `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
            form.current,
            `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        toast.success("Your message is Sent! We'll contact you soon.");
        setData({ name: "", email: "", message: "" });
      }
    } catch (ex) {
      toast.error("Expected error.");
    }
  };

  const onDisabled = () => {
    const { name, email, message } = data;
    return (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    );
  };
  return (
    <>
      <div className="contact-us section-center">
        <h2 className="text-center">Contact Us</h2>
        <form ref={form} onSubmit={handleSubmit}>
          {renderInput("Name", "name", "text", data.name, handleChange)}

          {renderInput("Email", "email", "email", data.email, handleChange)}

          {renderInput(
            "Message",
            "message",
            "text",
            data.message,
            handleChange
          )}

          {renderBtn(onDisabled, "Submit")}
        </form>
      </div>
    </>
  );
};

export default Contact;
