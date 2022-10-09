import { useState, useEffect } from "react";
import getVacancies from "../firebase/firebase";

const Vacancy = () => {
  const [positions, setPositions] = useState([]);
  const vacancies = async () => {
    const result = await getVacancies();
    setPositions(result);
  };

  useEffect(() => {
    vacancies();
  }, []);

  return (
    <>
      <div className="vacancy banner">
        <h2>Vacancy</h2>
      </div>
      <div className="vacancy-list section-center">
        <div className="row g-4">
          {positions.map((position, index) => (
            <div className="col-sm-6" key={index}>
              <div className="card">
                <div className="card-body">
                  <h6>{position.position}</h6>
                  <p className="lead">&#36;{position.salary} /month</p>
                  {position.skills.map((skill) => (
                    <div
                      style={{ display: "inline-block" }}
                      className="m-1 p-1 bg-secondary rounded"
                      key={skill}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vacancy;
