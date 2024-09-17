import React, { useEffect } from "react";
import { heroData, infoData } from "../constants/index.js";
import gsap from "gsap";
import { Row, Col } from "antd";

const Hero = () => {
  useEffect(() => {
    const chars = document.querySelectorAll(".char");

    // RotateY animation
    gsap.fromTo(
      chars,
      { rotateY: 0, opacity: 0 },
      {
        rotateY: 360,
        duration: 1,
        opacity: 1,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="main">
    
      {/* Hero Animation */}
      <main className="hero w-full h-screen flex justify-center">
        <div className="flex flex-col justify-center items-start">
          {/* Subtitle Animation */}
          <div className="h-subheading">
            {"Step Into The".split("").map((char, i) => (
              <span className="char char-subheading" key={i}>
                {char}
              </span>
            ))}
          </div>

          {/* Title Animation */}
          <div className="h-heading">
            {heroData.title.split("").map((char, i) => (
              <span className="char char-title ml-3" key={i}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </main>

      <main className="info w-full h-screen">
        <Row>
          <Col xl={10} lg={10} md={24} sm={24} xm={24}>
            <div className="flex flex-col i-col-1 justify-center">
              {infoData.map((data, i) => (
                <div key={i} className="i-subhead pb-8">
                  {data}
                </div>
              ))}
            </div>
          </Col>
          <Col xl={14} lg={14} md={24} sm={24} xm={24}></Col>
        </Row>
      </main>
    </section>
  );
};

export default Hero;
