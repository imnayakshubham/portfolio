import "./Skills.css";
import SkillsList from "../../data/SkillsList";

const Skills = () => {
  return (
    <>
      <div className="skills_container" id="skills">
        <div className="skills__heading">
          <h1>Skills</h1>
        </div>
        <div className="row">
          {SkillsList.map((skill, key) => (
            <div className="card" key={key}>
              <div className="card-body">
                <i className={skill.logo}></i>
              </div>
              <div className="card-header">
                <h1>
                  <strong>{skill.name}</strong>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
