import { motion, Variants } from "framer-motion";
import "./Timeline.css";

export function Timeline() {
  let one = new TimelineItem(
    "uoe",
    "App Developer",
    "@University of Exeter",
    "uoe_white_logo.svg",
    "https://www.exeter.ac.uk/",
    "May 2022 - Present",
    [
      "Worked on university wide used student app",
      "Worked on chatbot used by university students and staff",
      "Built web games used at student fairs",
    ],
    [
      "Flutter",
      "AWS Services",
      "Typescript",
      "GraphQL",
      "AWS Cognito",
      "AWS S3",
    ]
  );
  let two = new TimelineItem(
    "swmstudios",
    "Frontend Developer",
    "@Swimstudios",
    "swmstudios_logo.png",
    "https://swmstudios.com/",
    "Mar 2021 - Nov 2021",
    [
      "Worked on website for Swmstudios clients",
      "Worked on web applications for Swmstudios",
    ],
    [
      "React.js",
      "Flutter",
      "Firebase",
      "MongoDB",
      "GitHub",
      "AWS Services",
      "Typescript",
      "Framer Motion",
      "Tailwind",
      "Stripe API",
      "Paypal API",
    ]
  );
  let three = new TimelineItem(
    "nocxa",
    "Software Developer",
    "@Nocxa",
    "nocxa_logo.svg",
    "https://nocxa.com/",
    "Sep 2019 - Feb 2021",
    [
      "Managed team of developers on various projects",
      "Worked on e-commerce website for Great Comcat Engineering",
      "Worked on e-commerce website for Di-tea bubble tea",
      "Worked on website for Nocturnal Nomads",
    ],
    [
      "Next.js",
      "Flutter",
      "Django",
      "Firebase",
      "AWS Services",
      "AWS S3",
      "MongoDB",
      "React.js",
      "Framer Motion",
      "Paypal API",
    ]
  );

  return (
    <div className="about-timeline-container">
      <div className="about-timeline">
        {/* Items */}
        {one.display()}
        {two.display()}
        {three.display()}
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
      <motion.div
        className="about-timeline-item"
        transition={{
          duration: 0.8,
          delay: 0,
        }}
        initial="offscreen"
        whileInView="onscreen"
        variants={itemVariants}
        viewport={{ once: true }}
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
      </motion.div>
    );
  }
}

const itemVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};
