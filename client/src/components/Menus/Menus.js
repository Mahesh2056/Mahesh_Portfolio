import React from "react";
import "./Menus.css";
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
    {toggle ? (
      <>
      <div className="navbar-profile-pic">
        <img src="https://media.licdn.com/dms/image/D5603AQFnzgwmyym5pQ/profile-displayphoto-shrink_200_200/0/1715356651605?e=1724284800&v=beta&t=LFx47bJXEIJBYwK5Mbq_LtcnIxVaDvX30zJdzIF3ADQ"
         alt="profile pic"
        />
     </div>
     <div className="nav-items">
       <div className="nav-item">
        <div className="nav-link">
          <FcHome />
          Home
        </div>
        <div className="nav-link">
          <FcAbout />
          About
        </div>
        <div className="nav-link">
          <FcPortraitMode />
          Work Experince
        </div>
        <div className="nav-link">
          <FcBiotech />
          Tech Stack
        </div>
        <div className="nav-link">
          <FcReadingEbook />
          Education
        </div>
        <div className="nav-link">
          <FcVideoProjector />
          Projects
        </div>
        <div className="nav-link">
          <FcVoicePresentation />
          Testimonial
        </div>
        <div className="nav-link">
          <FcBusinessContact />
          Contact
        </div>
       </div>
     </div>
      </>
    ) : (
      <>
      <div className="nav-items">
       <div className="nav-item">
        <div className="nav-link">
          <FcHome title="Home" />
        </div>
        <div className="nav-link">
          <FcAbout title="About" />
        </div>
        <div className="nav-link">
          <FcPortraitMode title="Work Experince" />
        </div>
        <div className="nav-link">
          <FcBiotech title="Tech Stack" />
        </div>
        <div className="nav-link">
          <FcReadingEbook title="Education" />
        </div>
        <div className="nav-link">
          <FcVideoProjector title="Projects" />
        </div>
        <div className="nav-link">
          <FcVoicePresentation title="Testimonial" />
        </div>
        <div className="nav-link">
          <FcBusinessContact title="Contact" />
        </div>
       </div>
     </div>
     </>
    )}
    </>
  );
};

export default Menus;