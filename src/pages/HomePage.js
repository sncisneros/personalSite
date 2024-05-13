import React from "react";
import collage from './../collage.png';
import Navbar from './Navbar.js';
import './../App.css';
import './../index.css';

export default function HomePage() {
    return (
        <div className="App">
          <Navbar />
          
          <header className="App-header">
        
        <br/>
        <img src={collage} height={500}alt="Laptop" />
          
          <div class="main">
            <div class="roller">
              <span id="rolltext"><br/>Software Engineer<br/>
                Back-End Developer<br/>
                Problem Solver</span>
            </div>

          </div>

        

          <p>
          I'm a passionate back end developer based in sunny Southern California. With a solid foundation in back end development and a penchant for problem-solving, 
          I thrive in collaborative environments while also enjoying the autonomy of independent work. 
          </p>

          <p>
          Throughout my career as a Technical Support Engineer, I have consistently demonstrated a high level of self-sufficiency, achieving exceptional 
          rates of case closures while maintaining a focus on delivering quality solutions to our customers. I take pride in my ability to collaborate effectively 
          with cross-functional teams, contributing to collaborative efforts that result in improved product documentation and the development of technical 
          products to enhance our team's efficiency and effectiveness.
          </p>
            
            <p>
            I earned my Bachelor's degree in Computer Science from California State University, Los Angeles (Cal State LA), where I honed my technical skills 
            and developed a passion for software engineering. Throughout my academic journey, I immersed myself in the world of backend development, diving deep 
            into languages like Node.js, Java, Python and exploring various programming paradigms. My expertise lies in API development and design and ensuring 
            seamless integration of systems.
            </p>

            <p>
            I'm a firm believer in the power of collaboration and continuous learning. I enjoy working alongside talented teams, exchanging ideas, and collectively 
            overcoming obstacles to achieve shared goals. At the same time, I value autonomy and take initiative in my work, constantly seeking opportunities for 
            growth and self-improvement.
            </p>

          <h2>Looking forward to connecting with you!</h2><br/>
          </header>
        </div>
      );
}