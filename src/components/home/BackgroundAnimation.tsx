import React from "react";
import { useState, useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

export function BackgroundAnimation() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // ---------------------------------------------------------
  // Animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = {
    canvasWidth: windowSize.innerWidth,
    canvasHeight: windowSize.innerHeight,
  };

  useEffect(() => {
    if (canvasRef.current) {
      const c = canvasRef.current.getContext("2d");

      const makeStars = (count: number) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const star = {
            x: (Math.random() - 0.5) * state.canvasWidth * 2,
            y: (Math.random() - 0.5) * state.canvasHeight * 2,
            z: (i * 1000) / count,
          };
          out.push(star);
        }
        return out;
      };

      let stars = state.canvasWidth < 960 ? makeStars(1000) : makeStars(4000);

      const clear = () => {
        c!.fillRect(0, 0, state.canvasWidth, state.canvasHeight);
      };

      const putPixel = (
        x: number,
        y: number,
        brightness: number,
        size: number
      ) => {
        const intensity = brightness * 255;
        const rgb =
          "rgb(" + intensity + "," + intensity + "," + intensity + ")";
        c!.fillStyle = rgb;
        c!.fillRect(x, y, size, size);
      };

      const moveStars = (distance: number) => {
        const count = stars.length;

        for (let star of stars) {
          star.z += distance;
        }
        for (let i = 0; stars[count - 1].z > 1000; i++) {
          // Replace star
          stars.pop();
          stars.unshift({
            x: (Math.random() - 0.5) * state.canvasWidth * 2,
            y: (Math.random() - 0.5) * state.canvasHeight * 2,
            z: stars[0].z - 1000 / count, // keep z ordered
          });
        }
      };

      let prevTime: number;
      const init = (time: number) => {
        prevTime = time;
        requestAnimationFrame(tick);
      };

      const tick = (time: number) => {
        let elapsed = time - prevTime;
        prevTime = time;

        moveStars(elapsed * 0.03);

        clear();

        const cx = state.canvasWidth / 2;
        const cy = state.canvasHeight / 2;

        for (let star of stars) {
          const x = cx + star.x / (star.z * 0.001);
          const y = cy + star.y / (star.z * 0.001);

          if (
            x < 0 ||
            x >= state.canvasWidth ||
            y < 0 ||
            y >= state.canvasHeight
          ) {
            continue;
          }

          const distance = star.z / 1000;
          const brightness = 1 - distance * distance;
          const size = brightness * 5;

          putPixel(x, y, brightness, size);
        }

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(init);
    }
  }, [state.canvasHeight, state.canvasWidth]);

  return (
    <>
      <div className="home-canvas-container">
        <canvas
          id="homeCanvas"
          className="home-canvas"
          ref={canvasRef}
          width={state.canvasWidth}
          height={state.canvasHeight}
        ></canvas>
      </div>
    </>
  );
}
