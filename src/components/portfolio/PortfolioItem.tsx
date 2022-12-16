import { motion, Variants } from "framer-motion";
import "./PortfolioItem.css";

class PortfolioItem {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  stack: string[];
  filters?: string[];

  constructor(
    key: number,
    title: string,
    description: string,
    imageUrl: string,
    link: string,
    github: string,
    stack: string[],
    filters?: string[]
  ) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
    this.github = github;
    this.stack = stack;
    this.filters = ["all", ...filters!]; // forcing it to have 'all' filter
  }

  render() {
    return (
      <motion.div
        key={this.key}
        className="portfolio-item-container"
        transition={{
          duration: 1,
          delay: 0,
        }}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        variants={this.key % 2 === 1 ? itemVariants : itemVariants}
      >
        <div className="portfolio-item-header">
          <i className="portfolio-item-header-item fa-regular fa-3x fa-folder"></i>
          <div className="portfolio-item-header-links">
            <i className="fa-brands fa-xl fa-github"></i>
            <i className="fa-solid fa-xl fa-arrow-up-right-from-square"></i>
          </div>
        </div>

        <div className="portfolio-item-body">
          <div className="portfolio-item-body-title">{this.title}</div>
          <div className="portfolio-item-body-desc">{this.description}</div>
          <div className="portfolio-item-body-tag-container">
            {this.stack?.map((e) => {
              return <div key={e} className="portfolio-item-body-tag">{e}</div>;
            })}
          </div>
        </div>

        {/* <img
          loading="lazy"
          className="portfolio-item-img"
          alt="portfolioItemImg"
          src={
            process.env.PUBLIC_URL + "/assets/portfolio_assets/" + this.imageUrl
          }
        ></img> */}

        {/* <div className="portfolio-item-details flex">
          <div className="portfolio-item-title">{this.title}</div>
        </div> */}

        {/* <div className="portfolio-item-bot">
          <div></div>
        </div> */}
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

export default PortfolioItem;
