import { useEffect, useState } from "react";
import { About } from "../about/About";
import {Contact } from "../contact/Contact";
import { SideText } from "../misc/SideText";
import { Skills } from "../skills/Skills";
import { BackgroundAnimation } from "./BackgroundAnimation";
import "./Home.css";

export function Home() {
  const typingDelay: number = 100;
  const deletingDelay: number = 60;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(typingDelay);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [index, setIndex] = useState(1);
  const period = 2000;

  const toRotate = [
    "who likes to try new food",
    "who likes problem solving",
    "who is an app developer at the university of exeter",
    "who loves the gym!",
    "who is looking for new opportunities",
    "who wants to get into machine learning",
    "who loves to draw",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingDelay);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(typingDelay);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home-page flex" id="home">
        <SideText left="- HELLO THERE -" right="- HELLO THERE -" />
        <BackgroundAnimation />
        <div className="screen-max flex">
          <div className="home-page-container">
            <div className="title">
              I'M <span className="title-gowtham">Gowtham</span>
              <span className="title-span">.</span>
              <div className="title-text">
                a designer & developer <span className="typed-text"> </span>
                <span className="typingText">{text}</span>
                <span className="typed-text-cursor">|</span>
              </div>
            </div>

            <i
              onClick={() => handleClickScroll("aboutme")}
              className="scroll-down fa-3x fa-solid fa-angle-down"
            ></i>
          </div>
        </div>
      </div>

      <About />

      <Skills />

      <Contact />
    </>
  );
}
