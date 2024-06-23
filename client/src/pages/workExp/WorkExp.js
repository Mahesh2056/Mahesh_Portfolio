import React from "react";
import { SiReact, SiMongodb } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="January 2024 - March 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Ritusha Consultants pvt.ltd.
              </h5>
              <p>
                - Learned MERN Stack, PHP, MySQL, Web API and Deployment methodologies.
              </p>
              <p>
                - Contributed to the development and deployment of various projects, showcasing adaptability and 
                  teamwork skills.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2023 - August 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiMongodb />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Developer Intern
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Broadway Infosys
              </h5>
              <p>
                - Acquired proficiency in frontend technologies including React, Vue, Angular, and Next.js, as well as 
                  backend technologies such as Node.js and MongoDB. 
              </p>
              <p>
                - Engaged in the development of onsite, remote, and hybrid projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2020 - September 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<DiAndroid />}
            >
              <h3 className="vertical-timeline-element-title">
                Android Developer Intern
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Broadway Infosys
              </h5>
              <p>
                - Developed competence in Android Studio, Firebase, MySQL, and project deployment 
                  methodologies. 
              </p>
              <p>
                - Attained proficiency in Java and XML, pivotal languages for Android development. 
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;