import { useNavigate } from "react-router-dom";
import "./Portfolio";
import { data } from "./Portfolio";
import PortfolioItem from "./PortfolioItem";

export function PortfolioPreview() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate("/" + route);
  let items: any = [];
  for (let i = 0; i < data.length; i++) {
    items.push({
      id: data[i].id,
      title: data[i].title,
      description: data[i].description,
      imageUrl: data[i].imageUrl,
      link: data[i].link,
      github: data[i].github,
      stack: data[i].stack,
      filters: data[i].filters,
    });
  }

  return (
    <div className="portfolio-preview flex">
      <div className="portfolio-preview-container screen-max">
        <div className="section-title">
          Portfolio <span>.</span>
        </div>

        <div className="portfolio-items-container">
          {items.slice(0, 3).map((item: any, index: number) => {
            return (
              <PortfolioItem
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
                github={item.github}
                stack={item.stack}
                filters={item.filters}
              />
            );
          })}
        </div>

        <div
          className="portfolio-preview-view-more"
          onClick={() => {
            handleNavigate("portfolio");
          }}
        >
          View More <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
