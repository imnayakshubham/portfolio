import ProjectList from "../../data/ProjectList";
import "./Project.css";

const Projects = () => {
  return (
    <>
      <div className="container" id="projects">
        <h2 className="project-heading">
          <p>Projects</p>
        </h2>
        <div className="projects-container">
          {ProjectList.map((projectInfo, key) => (
            <div className="project" key={key}>
              <div className="project-image">
                <img
                  src={projectInfo.url}
                  alt={projectInfo.name}
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h1 className="heading grow">
                  <strong>{projectInfo.name}</strong>
                </h1>
                <h4 className="project-description">{projectInfo.desc}</h4>
                <div className="links-container">
                  {projectInfo.code_link && (
                    <a
                      href={projectInfo.code_link}
                      className="github-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to Code
                    </a>
                  )}
                  {projectInfo.demo_link && (
                    <a
                      href={projectInfo.demo_link}
                      className="demo-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
