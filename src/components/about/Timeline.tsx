// import { motion, Variants } from "framer-motion";
import "./Timeline.css";

export function Timeline() {
  let zero = new TimelineItem(
    "hived",
    "Frontend Developer",
    "@Hived",
    "hived_logo.svg",
    "https://www.hived.space/",
    "Jan 2023 - Present",
    [
      "Worked on creating frontend solutions for services used by both clients and drivers",
      "Designed and planned out frontend architecture for new services",
      "Create and deploy services using AWS CDK",
    ],
    [
      "Flutter",
      "React.js",
      "Firebase",
      "AWS Services",
      "Typescript",
      "AWS CDK",
      "API Gateway",
      "AWS S3",
    ]
  );
  let one = new TimelineItem(
    "uoe",
    "Software Engineer",
    "@University of Exeter",
    "uoe_white_logo.svg",
    "https://www.exeter.ac.uk/",
    "Jan 2022 - Jan 2023",
    [
      "Worked on university wide used student app",
      "Worked on chatbot used by university students and staff",
      "Built web games used at student fairs",
    ],
    [
      "Flutter",
      "AWS Services",
      "Typescript",
      "AWS CDK",
      "AWS Cognito",
      "AWS S3",
    ]
  );


  return (
    <div className="about-timeline-container">
      <div className="about-timeline">
        {/* Items */}
        {zero.display()}
        {one.display()}
      </div>
    </div>
  );
}

class TimelineItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  link: string;
  date: string;
  desc: string[];
  stack: string[];

  constructor(
    id: string,
    role: string,
    company: string,
    logo: string,
    link: string,
    date: string,
    desc: string[],
    stack: string[]
  ) {
    this.id = id;
    this.role = role;
    this.company = company;
    this.logo = logo;
    this.link = link;
    this.date = date;
    this.desc = desc;
    this.stack = stack;
  }

  openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  display() {
    return (
      <div
        className="about-timeline-item"
        // transition={{
        //   duration: 0.8,
        //   delay: 0,
        // }}
        // initial="offscreen"
        // whileInView="onscreen"
        // variants={itemVariants}
        // viewport={{ once: true }}
      >
        <div className="about-timeline-item-container">
          <div className="about-timeline-item-context">
            <div className="timeline-row">
              <div className="timeline-col">
                <div className="about-timeline-item-role">{this.role}</div>
                <div
                  className="about-timeline-item-company about-body-link"
                  onClick={() => {
                    this.openSocial(this.link);
                  }}
                >
                  {this.company}
                </div>
              </div>

              <div className="timeline-logo-container">
                <img
                  id={this.id}
                  onClick={() => this.openSocial(this.link)}
                  className="about-timeline-item-logo"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/timeline_assets/" +
                    this.logo
                  }
                  alt="work-logo"
                />
              </div>

              <div className="hidden-timeline-date">{this.date}</div>
            </div>

            <div className="row about-timeline-item-bottom">
              <div className="about-timeline-item-dates">{this.date}</div>
            </div>

            <div className="timeline-header">
              <div className="timeline-item-desc">
                {this.desc.map((e) => {
                  return <li key={e}>{e}</li>;
                })}
              </div>
            </div>

            <div className="row about-timeline-item-bottom">
              {this.stack.map((e) => {
                return (
                  <div key={e} className="timeline-item-tags">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const itemVariants: Variants = {
//   offscreen: {
//     scale: 0,
//   },
//   onscreen: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.5,
//       duration: 1,
//     },
//   },
// };
