// import { useGlobalContext } from "../context/GlobalContext";
import "./About.css";
import { Timeline } from "./Timeline";

export function About() {
  // const { lightThemeGlobal } = useGlobalContext();

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  return (
    <div id="about" className="about-page flex">
      <div className="screen-max flex">
        <div className="about-page-container">
          {/* Section one - short description */}
          <div className="about-section-one">
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

            <div className="about-body-container">
              <div className="about-body">
                Hey! I'm <span>Gowtham</span> and I enjoy creating things! I
                have a passion for all things technology and design, from
                engineering to UI/UX. I love making user & browser-friendly
                websites and apps as well as creating solutions for problems.
                <br></br>
                <br></br>I am based in London, UK - currently working as a
                Frontend Developer at the{" "}
                <span
                  className="about-body-link"
                  onClick={() => {
                    openSocial("https://hived.space");
                  }}
                >
                  Hived
                </span>
                .<br></br>
                <br></br>
                Feel free to contact me by{" "}
                <a
                  className="about-body-link"
                  href="mailto:contact@gowtham.co.uk"
                >
                  email
                </a>{" "}
                or check out my work on{" "}
                <span
                  className="about-body-link"
                  onClick={() => {
                    openSocial("https://github.com/gowth6m");
                  }}
                >
                  GitHub
                </span>
                .
              </div>

              {/* <div className="about-me-pic"> */}
              <img
                className="about-me-pic"
                src={process.env.PUBLIC_URL + "/assets/me.svg"}
                alt="aboutMyPic"
              />
              {/* </div> */}
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
