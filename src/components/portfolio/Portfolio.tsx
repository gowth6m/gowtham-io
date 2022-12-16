import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FilterItem } from "./FilterItem";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

export const data = [
  {
    key: 0,
    title: "University of Exeter App",
    description: "App developed using Flutter",
    imageUrl: "uoe_app.jpg",
    link: "https://m.exeter.ac.uk",
    github: "",
    stack: ["Flutter", "Typescript", "NoSQL", "AWS Services", "GraphQL"],
    filters: ["web", "mobile"],
  },
  {
    key: 1,
    title: "Reddit Viewer",
    description: "App developed using Flutter",
    imageUrl: "reddit_app.png",
    link: "https://gowth6m.github.io/reddit-viewer/",
    github: "https://github.com/gowth6m/reddit-viewer",
    stack: ["Flutter", "Typescript", "API"],
    filters: ["web", "mobile"],
  },
  {
    key: 2,
    title: "Stugether",
    description:
      "Web application built with Django to connect students together",
    imageUrl: "stugether_app.png",
    link: "https://stugether.herokuapp.com/",
    github: "https://github.com/gowth6m/stugether",
    stack: ["Django", "Python", "SQL"],
    filters: ["web"],
  },
  {
    key: 3,
    title: "Zombie Maze",
    description:
      "A simple 2D top-down zombie shooting game created in Python using the PyGame library",
    imageUrl: "zombie_maze.gif",
    link: "",
    github: "https://github.com/gowth6m/zombie-maze",
    stack: ["Python", "PyGame"],
    filters: ["game"],
  },
  {
    key: 4,
    title: "Gravity Simulator",
    description:
      "Simulation of gravity between particles written in JavaScript",
    imageUrl: "gravitySim_app.png",
    link: "https://gowth6m.github.io/gravity-simulator/",
    github: "https://github.com/gowth6m/gravity-simulator",
    stack: ["Javascript", "HTML", "CSS"],
    filters: ["web"],
  },
  {
    key: 5,
    title: "Lift Simulator",
    description: "A simulation of a lift system implemented in Java with GUI",
    imageUrl: "liftSim.gif",
    link: "",
    github: "https://github.com/gowth6m/lift-system",
    stack: ["Java", "GUI"],
    filters: ["other", "data", "desktop"],
  },
  {
    key: 6,
    title: "Human-Object Interaction Research",
    description: "Research on HOI. Evaluation on five HOI models",
    imageUrl: "gravitySim_app.png",
    link: "https://gowth6m.github.io/gravity-simulator/",
    github: "https://github.com/gowth6m/stugether",
    stack: ["Machine Learning", "CNN", "R-CNN", "Jupyter"],
    filters: ["data", "other"],
  },
  {
    key: 7,
    title: "Game of Life in Haskell",
    description:
      "Implementation of Conway's Game of Life in Haskell using an imperative approach",
    imageUrl: "liftSim.gif",
    link: "",
    github: "https://github.com/gowth6m/game-of-life-haskell",
    stack: ["Haskell"],
    filters: ["other"],
  },
];

export function Portfolio() {
  let items: PortfolioItem[] = [];
  let filters: string[] = [
    "all",
    "web",
    "mobile",
    "desktop",
    "game",
    "data",
    "other",
  ];
  const [currentFilter, setCurrentFilter] = useState("all");

  for (let i = 0; i < data.length; i++) {
    items.push(
      new PortfolioItem(
        data[i].key,
        data[i].title,
        data[i].description,
        data[i].imageUrl,
        data[i].link,
        data[i].github,
        data[i].stack,
        data[i].filters
      )
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="portfolio-page flex"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="portfolio-page-container screen-max">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        {/* Filters */}
        <div className="filters-container flex">
          {filters.map((filter, index) => (
            <FilterItem
              key={index}
              title={filter}
              initialClicked={filter === "all" ? true : false}
              setCurrentFilter={setCurrentFilter}
              currentFilter={currentFilter}
            />
          ))}
        </div>

        {/* Filtered Items */}
        <div className="portfolio-items-container">
          {items
            .filter((item) => item.filters?.includes(currentFilter))
            .map((item) => {
              return item.render();
            })}
        </div>
      </div>
    </motion.div>
  );
}
