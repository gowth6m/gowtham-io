import "./About.css";
import { Timeline } from "./Timeline";

export function About() {
  return (
    <div id="aboutme" className="about-page flex">
      <div className="screen-max flex">
        <div className="about-page-container">
          
          {/* Section one - short description */}
          <div className="about-section-one flex">
            <div className="about-title section-title">
              About Me<span> .</span>
            </div>
            <div className="about-body sec-ele-pad-v">
              I'm an App Developer at the University of Exeter. I'm passionate
              about programming and dabbling in design. I love making user &
              browser-friendly websites and apps.
              <br></br>
              <br></br>
              Feel free to contact me by <span>email</span> or check out my work
              on <span>GitHub</span>.
            </div>
          </div>

          {/* Section two - timeline */}
          <div className="about-section-two flex">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}
