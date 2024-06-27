import '../styles/About.css'
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { VscDebugAll } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Hello, my name is Upit Fitriani, a Bachelor's degree graduate from Budi Luhur University, Department of Information Engineering</p>
            <p>During my time as a Trainee at Enigma Camp, I started following the LMS material and completing quizzes and challenges 
              in the Enigma LMS is also complete final project java database application for the ocean food stall and final project for 
              the restful api application ocean food stalls and even attending incubation classes. I must at least be proficient in Java 
              Fundamentals before entering the incubation class. In the incubation class, I learned a lot about Spring and others 
              until the end I was assigned to create another final project and was only given 5 days to complete it 
              and the application is deployed using Docker</p>

                <h4>Programming Language & Tools</h4>
                <div className="skills">
                <FaJava />
                <FaHtml5 />
                <IoLogoJavascript />
                <FaPhp />
                <SiCodeigniter />
                <FaCss3Alt />
                <SiSpringboot />
                <SiMysql />
                <FaReact />
                <FaGit />
                <DiMsqlServer />
                <VscDebugAll />
                </div>
        </div>
    </section>
  )
}

export default About