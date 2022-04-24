import "./Intro.css";

const styles = {
  padding: 0,
  width: 60,
  fontSize: 40,
  color: "#9932cc",
};

const Intro = () => {
  let MyEmail = "imnayakshubham@gmail.com";

  return (
    <div className="intro-container" id="home">
      <div className="intro-info">
        <div className="intro">
          <a href="/">
            <img
              src="https://joeschmoe.io/api/v1/SH"
              alt="Logo"
              className="profile-pic"
            ></img>
          </a>
          <h1 className="username">Nayak Shubham</h1>
          <p className="user-info">A Story Teller who codes.</p>
          <p className="user-links">
            <a
              href="https://github.com/imnayakshubham"
              target="_blank"
              rel="noreferrer"
              alt={"Link to my Github profile"}
            >
              <i className="fab fa-github" style={styles}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/imnayakshubham/"
              target="_blank"
              rel="noreferrer"
              alt={"Link to my Linkedin profile"}
            >
              <i className="fab fa-linkedin" style={styles}></i>
            </a>

            <a href={`mailto: ${MyEmail}`} alt={"My Email Id to contact me"}>
              <i className="fa fa-envelope" style={styles}></i>
            </a>
          </p>
          <span className="MyLocation">
            <span>
              <i
                className="fa-solid fa-location-dot"
                style={{
                  padding: 0,
                  width: 40,
                  fontSize: 20,
                  color: "#9932cc",
                }}
              ></i>
              Ahmedabad, Gujarat, India
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
