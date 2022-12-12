import "./Skills.css";

export function Skills() {
  class SkillsSection {
    title: string;
    desc: string;
    skillList: string[];

    constructor(title: string, desc: string, skillList: string[]) {
      this.title = title;
      this.desc = desc;
      this.skillList = skillList;
    }

    openLink = (openLink: string) => {
      window.open(openLink);
    };

    display() {
      return (
        <>
          <div className="skills-section">
            <div className="skills-subtitle">{this.title}</div>
            <div className="skills-list">
              {this.skillList.map((skill) => (
                <>
                  <div className="skills-list-item">{skill}</div>
                </>
              ))}
            </div>
          </div>
        </>
      );
    }
  }

  let sectionOne = new SkillsSection("Frontend", "Test", [
    "HTML-CSS",
    "JavaScript/TS",
    "React",
    "Framer Motion",
    "Vue.js",
    "Tailwind",
    "Three.js",
  ]);
  let sectionTwo = new SkillsSection("Backend", "Test", [
    "Node.js",
    "Django",
    "C, C# & C++",
    "Java",
    "GraphQL",
    "SQL",
    "Docker",
  ]);
  let sectionThree = new SkillsSection("Mobile", "Test", [
    "Flutter",
    "Swift",
    "Kotlin",
    "CoreML Models",
    "Lottie",
    "Chopper"
  ]);
  let sectionFour = new SkillsSection("Other", "Test", [
    "GitHub",
    "Firebase",
    "AWS Services",
    "Figma",
    "Unity",
    "Jira",
  ]);

  return (
    <div id="skills" className="skills-page flex">
      <div className="skills-page-container screen-max">
        <div className="skills-title section-title">
          Skills<span> .</span>
        </div>

        {sectionOne.display()}
        {sectionTwo.display()}
        {sectionThree.display()}
        {sectionFour.display()}
      </div>
    </div>
  );
}
