import teamMember from "./common/teamMember";
import ceo from "../images/ceo.jpg";
import employee01 from "../images/employee01.jpg";
import employee02 from "../images/employee02.jpg";
import employee03 from "../images/employee03.jpg";
import employee04 from "../images/employee04.jpg";

const TeamMembers = () => {
  return (
    <>
      <div className="team-members section-center">
        <h2 className="text-center">
          Meet Team <span> Members</span>
        </h2>

        <div className="row g-4">
          {teamMember(ceo, "Founder", "John Smith")}
          {teamMember(employee01, "Senior Software Engineer", "Andrew Mead")}
          {teamMember(employee03, "Marketing Analyst", "Robert M. Martin")}
          {teamMember(employee02, "Software Engineer", "Alex Hales")}
          {teamMember(employee04, "HR Executive", "Marco Rubio")}
          {teamMember(employee01, "Graphic Designer", "Brad Harb")}
          {teamMember(employee03, "Software Developer", "Mark Root")}
          {teamMember(employee04, "Intern", "Johney Deep")}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
