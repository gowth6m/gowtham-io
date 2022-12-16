import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export function PageNotFound() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate("/" + route);

  return (
    <div className="page-not-found">
      <div className="page-not-found-container screen-max">
        <div className="section-title">Page not found</div>
        <div
          className="redirect-home-btn"
          onClick={() => {
            handleNavigate("");
          }}
        >
          Home
        </div>
      </div>
    </div>
  );
}
