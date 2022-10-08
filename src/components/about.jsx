import { useState } from "react";
import { toast } from "react-toastify";
import AboutUsBody from "./aboutUsBody";
import TeamMembers from "./teamMembers";
import Testimonials from "./testimonials";
import Contact from "./contact";

const AboutUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = data;
    if ((name, email, message)) {
      toast("Email Sent! We'll contact you soon.");
    }
    setData({ name: "", email: "", message: "" });
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
      <AboutUsBody />
      <TeamMembers />
      <Testimonials />
      <Contact
        onChange={handleChange}
        data={data}
        onDisabled={onDisabled}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AboutUs;
