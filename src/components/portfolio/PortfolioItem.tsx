import { motion, Variants } from "framer-motion";
import { useState } from "react";
import "./PortfolioItem.css";

export type PortfolioItemProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  stack: string[];
  filters: string[];
};

export default function PortfolioItem({
  id,
  title,
  description,
  imageUrl,
  link,
  github,
  stack,
  filters,
}: PortfolioItemProps) {
  const [showImage, setShowImage] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  return (
    <motion.div
      key={id}
      className="portfolio-item-container"
      transition={{
        duration: 1,
        delay: 0,
      }}
      viewport={{ once: true }}
      initial="offscreen"
      whileInView="onscreen"
      variants={itemVariants}
    >
      <div className="portfolio-item-header">
        <i
          className="portfolio-item-header-item fa-regular fa-3x fa-folder"
          onClick={() => {
            setShowImage(!showImage);
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></i>

        <div className="portfolio-item-header-links">
          {github !== "" ? (
            <i
              className="fa-brands fa-xl fa-github"
              onClick={() => {
                openSocial(github);
              }}
            ></i>
          ) : null}
          {link !== "" ? (
            <i
              className="fa-solid fa-xl fa-arrow-up-right-from-square"
              onClick={() => {
                openSocial(link);
              }}
            ></i>
          ) : null}
        </div>
      </div>

      <div className="portfolio-item-body">
        <div className="portfolio-item-body-title">{title}</div>
        <div className="portfolio-item-body-desc">{description}</div>
        <div className="portfolio-item-body-tag-container">
          {stack?.map((e) => {
            return (
              <div key={e} className="portfolio-item-body-tag">
                {e}
              </div>
            );
          })}
        </div>
      </div>

      {isHovering ? (
        <img
          loading="lazy"
          className="portfolio-item-img"
          alt="portfolioItemImg"
          src={process.env.PUBLIC_URL + "/assets/portfolio_assets/" + imageUrl}
        ></img>
      ) : null}
    </motion.div>
  );
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
