import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Separator } from "../misc/Separator";
import { SideText } from "../misc/SideText";
import { Portfolio } from "../portfolio/Portfolio";
import { PortfolioPreview } from "../portfolio/PortfolioPreview";
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
  const [, setIndex] = useState(1);
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
  });

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
    <motion.div
      className="motion-div"
      initial={{ x: window.innerWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: -window.innerWidth,
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="home-page flex" id="home">
        <SideText left="- hello there -" right="- scroll down -" />
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
              onClick={() => handleClickScroll("about")}
              className="scroll-down fa-3x fa-solid fa-angle-down"
            ></i>
          </div>
        </div>
      </div>

      <Separator />
      <About />

      <Separator />
      {window.innerWidth > 768 ? (
        <Portfolio standalone={false} />
      ) : (
        <PortfolioPreview />
      )}

      <Separator />
      <Skills />

      <Separator />
      <Contact />
    </motion.div>
  );
}
