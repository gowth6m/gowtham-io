import { useGlobalContext } from "../context/GlobalContext";
import "./About.css";
import { Timeline } from "./Timeline";

export function About() {
  const { lightThemeGlobal } = useGlobalContext();

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  return (
    <div id="about" className="about-page flex">
      <div className="screen-max flex">
        <div className="about-page-container">
          {/* Section one - short description */}
          <div className="about-section-one flex">
            {/* Multiple about me titles */}
            <div className="about-title-container">
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
              <div className="about-title ">
                About Me<span> .</span>
              </div>
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
            </div>

            <div className="about-body">
              Hey! I'm <span>Gowtham</span> and I enjoy creating things! I have
              a passion for all things technology and design, from engineering
              to UI/UX. I love making user & browser-friendly websites and apps
              as well as creating solutions for problems.
              <br></br>
              <br></br>I am based in London, UK - currently working as an App
              Developer at the{" "}
              <span
                className="about-body-link"
                onClick={() => {
                  openSocial("https://www.exeter.ac.uk/");
                }}
              >
                University of Exeter
              </span>
              .<br></br>
              <br></br>
              Feel free to contact me by{" "}
              <span className="about-body-link">email</span> or check out my
              work on <span className="about-body-link">GitHub</span>.
            </div>

            <div className="about-me-pic">
              <img
                src={
                  process.env.PUBLIC_URL + lightThemeGlobal
                    ? "/assets/me.svg"
                    : "/assets/meW.svg"
                }
                alt="abountMyPic"
              />
            </div>
          </div>

          {/* Section two - timeline */}
          <div className="about-section-two flex">
            <div className="timeline-title">
              Experience <span>.</span>
            </div>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}
