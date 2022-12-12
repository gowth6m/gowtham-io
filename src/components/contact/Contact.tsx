import React from "react";
import "./Contact.css";

export function Contact() {
  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [value, setValue] = React.useState();

  return (
    <div id="contact" className="contact-page flex">
      <div className="contact-page-container screen-max">
        <div className="contact-title section-title">
          Contact Me<span> .</span>
        </div>

        <form
          data-aos="fade-up"
          data-aos-duration="1000"
          className="contact-form flex"
          action="https://formsubmit.co/913dcdc22053ca7abfe5f79b178b8ed6"
          method="POST"
        >
          <input
            className="contact-input-name"
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            className="contact-input-email"
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <textarea className="contact-input-desc" value={value} rows={5} placeholder="message"/>
          <button className="contact-submit-btn hover-target" type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
