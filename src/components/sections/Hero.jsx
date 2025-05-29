import React from "react";
import { words } from "../../../assets/assets/constants";
import Buttons from "../Buttons";
import { RightSIde } from "../herosection/RightSIde";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="assets\assets\public\images\bg.png" alt="background" />
      </div>

      <div className="hero-layout ">
        {/* {left: left side} */}
        <header className="flex flex-col justify-center md:w-full w-full md:px-10 px-5 ">
          <div className="flex flex-col gap-5 ">
            <div className="hero-text">
              <h1>
                Converting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>to Deployable Projects</h1>
              <h1> that Actually <br />Deliver Output</h1>

            </div>
           <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi, I’m Balavignesh — passionate about coding, curious about tech, <br />and always learning something new.</p>
             <Buttons  
             className="md:w-90 md:h-16 w-80 h-12"
             id="button"
             text="Explore my projects"
             />
          </div>
        </header>


        {/* {right part 3d object set up} */}
      </div>
      <figure>
        <div className="hero-3d-layout ">
               <RightSIde /> 
        </div> 

      </figure>
    </section>
  );
}

export default Hero;
