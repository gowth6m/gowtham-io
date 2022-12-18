import React from "react";
import "./Contact.css";

export function Contact() {
  // const openSocial = (socialLink: string) => {
  //   window.open(socialLink);
  // };

  // const handleClickScroll = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const [value] = React.useState();

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
          action="https://formsubmit.co/91916c7c0b845c196d6c84a91e84301b"
          method="POST"
        >
          <input
            className="contact-form-child"
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            className="contact-form-child"
            type="email"
            name="email"
            placeholder="email"
            required
          />
         
          <textarea
            className="contact-form-child"
            name="message"
            value={value}
            rows={6}
            placeholder="message"
          />
          <button className="contact-submit-btn hover-target" type="submit">
            GET IN TOUCH <i className="fa-sharp fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
