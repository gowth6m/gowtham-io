import "./Footer.css";

export function Footer() {
  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="footer">
        <div className="screen-max flex">
          <div className="footer-inner">
            {/* Footer list */}
            <div className="footer-list">
              <div className="footer-list-item hover-target" onClick={()=>handleClickScroll('home')}>Home</div>
              <div className="footer-list-item hover-target" onClick={()=>handleClickScroll('aboutme')}>About Me</div>
              <div className="footer-list-item hover-target" onClick={()=>handleClickScroll('home')}>Skills</div>
              <div className="footer-list-item hover-target" onClick={()=>handleClickScroll('home')}>Portfolio</div>
            </div>

            {/* Socials */}
            <div className="footer-socials flex-c">
              <div onClick={()=>openSocial('https://github.com/gowth6m')}>
                <i className="fa-brands fa-2xl fa-github hover-target"></i>
              </div>
              <div onClick={()=>openSocial('https://www.linkedin.com/in/gowth6m/')}>
                <i className="fa-brands fa-2xl fa-linkedin hover-target"></i>
              </div>
              <div onClick={()=>openSocial('https://gowtham.co.uk/')}>
                <i className="fa-brands fa-2xl fa-youtube hover-target"></i>
              </div>
              <div onClick={()=>openSocial('https://twitter.com/gowth6m')}>
                <i className="fa-brands fa-2xl fa-twitter hover-target"></i>
              </div>
            </div>

            {/* Branding */}
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo_transparent.svg"}
                  alt="logo"
                />
              </div>
              <div className="footer-brand-text">
                2022 &copy; Gowthaman Ravindrathas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
