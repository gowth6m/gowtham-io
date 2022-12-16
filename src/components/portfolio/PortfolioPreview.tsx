import { useNavigate } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";
import "./Portfolio";
import { data } from "./Portfolio";

export function PortfolioPreview() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate("/" + route);
  let items: PortfolioItem[] = [];
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

  return (
    <div className="portfolio-preview flex">
      <div className="portfolio-preview-container screen-max">
        <div className="section-title">
          Portfolio <span>.</span>
        </div>

        <div className="portfolio-items-container">
          {items.map((item) => {
            return item.render();
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
