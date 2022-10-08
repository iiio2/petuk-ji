import testimonial from "./common/testimonial";
import employee02 from "../images/employee02.jpg";
import employee03 from "../images/employee03.jpg";
import employee04 from "../images/employee04.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials section-center">
        <h2 className="text-center">Testimonials</h2>
        <div className="row g-4">
          {testimonial(employee02, "Thomas Smith", "Truly Fantastic.")}
          {testimonial(
            employee03,
            "Scot Mathew",
            "Amazing. I enjoyed using the service."
          )}
          {testimonial(employee04, "ALBERT MAX", "Very good indeed.")}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
