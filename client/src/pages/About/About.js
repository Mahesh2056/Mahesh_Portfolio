import React from "react";
import "./About.css";
const About = () => {
  return (
    <> 
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="https://media.licdn.com/dms/image/D5603AQFnzgwmyym5pQ/profile-displayphoto-shrink_200_200/0/1715356651605?e=1724284800&v=beta&t=LFx47bJXEIJBYwK5Mbq_LtcnIxVaDvX30zJdzIF3ADQ"
                 alt="profile_pic" 
                />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>
                My name is Mahesh Chaudhary, and I am from Dhangadhi-5, Hasanpur, Nepal.
                I completed my schooling at Panchodaya Higher Secondary School in Dhangadhi, 
                Nepal. Following my passion for technology, I pursued a Diploma in IT from 
                CT Polytechnic College in Jalandhar, Punjab, India. I am currently a 4th-year 
                student at Tulas Institute in Dehradun, India, where I am working towards 
                my B.Tech in Computer Science and Engineering.
                </p>
                <p>
                 Throughout my academic journey, I have developed a diverse set of skills. 
                 I am proficient in programming languages such as C and Java, and I have 
                 substantial experience as an Android developer. Additionally, I am a 
                 full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js)
                 and MySQL. My educational background and hands-on experience have prepared me to create robust,
                  user-friendly applications and deliver comprehensive and efficient solutions. 
                  I am committed to continuous learning and staying abreast of the latest advancements 
                  n the ever-evolving field of technology.
                </p>
            </div>
        </div>
    </div>
    </>
  );
};

export default About;