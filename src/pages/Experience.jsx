import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { SiPhp } from "react-icons/si";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Experience() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            <h1>Experience</h1>

            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2024 - Present"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<FaJava />}
            >
                <h3 className="vertical-timeline-element-title">Trainee Backend Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Enigma Camp</h4>
                <p><h5 className="vertical-timeline-element-subtitle">Project :</h5></p>
                <p>
                Rent Tent is a backend application that can rent camping equipment based on weather predictions from BMKG. 
                This project uses Java Springboot, Rest API, Json Web Token (JWT)
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2024 - Jun 2024"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<FaReact />}
            >
                <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Fitrianiupit Portofolio</h4>
                <p><h5 className="vertical-timeline-element-subtitle">Project :</h5></p>
                <p>
                Created applications for portfolio, Developed responsive web applications using React, 
                Optimized website performance and user experience
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jul 2023 - Sep 2023"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<DiCodeigniter />}
            >
                <h3 className="vertical-timeline-element-title">Research Scientist</h3>
                <h4 className="vertical-timeline-element-subtitle">Faculty of Economics, Budi Luhur University</h4>
                <p><h5 className="vertical-timeline-element-subtitle">Project :</h5></p>
                <p>
                Implementation of Data Mining Classification to Predict Budi Luhur University Student Graduation and Journal Publication at FTI
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Mar 2022 - Jul 2022"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<SiPhp />}
            >
                <h3 className="vertical-timeline-element-title">Industrial Internships</h3>
                <h4 className="vertical-timeline-element-subtitle">Annisa Florist Store</h4>
                <p><h5 className="vertical-timeline-element-subtitle">Project :</h5></p>
                <p>
                This Chatbot application was created to do just that easier for customer service employees
                and customers to communicate remotely.
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experience