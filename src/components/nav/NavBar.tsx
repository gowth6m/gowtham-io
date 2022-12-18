import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const { lightThemeGlobal, setLightThemeGlobal } = useGlobalContext();

  const changeTheme = () => {
    if (lightThemeGlobal) {
      document.documentElement.style.setProperty("--body", "#f8f8f8");
      document.documentElement.style.setProperty(
        "--black",
        "rgb(225, 225, 225)"
      );
      document.documentElement.style.setProperty("--white", "black");
      setLightThemeGlobal(!lightThemeGlobal);
    } else {
      document.documentElement.style.setProperty("--body", "#0e0e0e");
      document.documentElement.style.setProperty("--black", "black");
      document.documentElement.style.setProperty("--white", "#f8f8f8");
      setLightThemeGlobal(!lightThemeGlobal);
    }
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleClass = function toggleClass(
    element: Element,
    stringClass: string
  ) {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  const handleClick = () => {
    var lineOne = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[0];
    var lineTwo = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[1];
    var lineThree = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[2];
    toggleClass(lineOne, "menu_icon_line_one");
    toggleClass(lineTwo, "menu_icon_line_two");
    toggleClass(lineThree, "menu_icon_line_three");
    setClick(!click);
  };

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <>
      <nav className="navbar screen-max">
        <div className="nav-container">
          <NavLink
            to="/"
            className="nav-logo"
            onClick={() => {
              // handleClickScroll("home");
              changeTheme();
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/logo_transparent.svg"}
              alt="logo"
              className="navbar-logo"
            ></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll("home");
                }}
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll("about");
                }}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll("skills");
                }}
              >
                skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll("portfolio");
                }}
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll("contact");
                }}
              >
                contact
              </NavLink>
            </li>
            <div className="nav-socials">
              <div
                onClick={() => openSocial("https://github.com/gowth6m")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-github"></i>
              </div>
              <div
                onClick={() =>
                  openSocial("https://www.linkedin.com/in/gowth6m/")
                }
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-linkedin"></i>
              </div>
              <div
                onClick={() => openSocial("https://www.google.com")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-youtube"></i>
              </div>
              <div
                onClick={() => openSocial("https://twitter.com/gowth6m")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-twitter"></i>
              </div>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <div className="menu-icon hover-target">
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
