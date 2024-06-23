import React from "react";
import { MdSchool } from "react-icons/md";
import {
     VerticalTimeline, 
     VerticalTimelineElement
 }  from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css";
const Education = () => {
  return (
    <>
    <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        {<MdSchool />} Education details
        </h2>
        <hr />
    <VerticalTimeline>
        {/* B.Tech Degree */}
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: "black" }}
    contentArrowStyle={{ borderRight: "7px solid white" }}
    date="2021 - present"
    iconStyle={{ background: "#138781", color: "#fff" }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">B.TECH in Computer Science and Engineering</h4>
    <h5 className="vertical-timeline-element-subtitle">Tula's Institute, Dehradun, India</h5>
    </VerticalTimelineElement>
    {/* Diploma Degree */}
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: "black" }}
    contentArrowStyle={{ borderRight: "7px solid white" }}
    date="2018 - 2021"
    iconStyle={{ background: "#138781", color: "#fff" }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">Diploma in Information Technology</h4>
    <h5 className="vertical-timeline-element-subtitle">CT Polytechnic College, Jalandhar, India</h5>
    </VerticalTimelineElement>
    {/* School Degree */}
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: "black" }}
    contentArrowStyle={{ borderRight: "7px solid white" }}
    date="2004 - 2015"
    iconStyle={{ background: "#138781", color: "#fff" }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">High School (SLC Board)</h4>
    <h5 className="vertical-timeline-element-subtitle">Panchodaya Higher Secondary School, Nepal</h5>
    </VerticalTimelineElement>        
    </VerticalTimeline>
    </div>
    </>
  );
};

export default Education;