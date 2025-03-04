import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomePage = ({ incrementPageNumber }) => {
  const [title, setTitle] = useState("");
  const fullTitle = "Welcome to Perspectrum";
  const [fadeOut, setFadeOut] = useState(false);
  const [typing, setTyping] = useState(true);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    "Educating about neurodiversity through inclusion.",
    "See the world through different perspectives.",
    "Challenge your perception, embrace diversity.",
  ];

  useEffect(() => {
    if (typing) {
      let i = 0;
      const typeInterval = setInterval(() => {
        setTitle(fullTitle.slice(0, i + 1));
        i++;
        if (i > fullTitle.length) {
          clearInterval(typeInterval);
          setTimeout(() => setFadeOut(true), 2000); // Pause before fade out
        }
      }, 100);
      return () => clearInterval(typeInterval);
    }
  }, [typing]);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setFadeOut(false);
        setTitle(" ".repeat(fullTitle.length)); // Keep space for text
        setTyping(false);
        setTimeout(() => setTyping(true), 1000); // Restart typing after fade
      }, 1000);
    }
  }, [fadeOut]);

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(subtitleInterval);
  }, []);

  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className={`display-3 fw-bold ${fadeOut ? "fade-out" : "fade-in"}`}
        style={{ minHeight: "1em" }}
      >
        {title}
      </h1>
      <h2 className="lead">{subtitles[subtitleIndex]}</h2>
      <button
        className="btn btn-primary btn-lg mt-4"
        onClick={incrementPageNumber}
      >
        Start Game
      </button>
      <style>
        {`
          .fade-in {
            opacity: 1;
            transition: opacity 1s ease-in;
          }
          .fade-out {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default WelcomePage;
