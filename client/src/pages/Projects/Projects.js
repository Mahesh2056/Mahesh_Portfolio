import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
    <div className="continer project">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Top Recent Projects
    </h2>
    <hr />
    <p className="pb-3 text-center">
        Here are my some project with source code.
    </p>
    {/* Card Design */}
    <div className="row" id="ads">
        {/* project 1 */}
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img src="https://github.com/Mahesh2056/Blood-Bank-App/blob/main/client/public/assets/images/banner1.jpg?raw=true" 
                    alt="project1" 
                    />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">MongoDB</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Blood Bank App</h5>
                    </div>
                    <a className="ad-btn" href="https://github.com/Mahesh2056/Blood-Bank-App.git">
                        View
                    </a>
                </div>
            </div>
        </div>
        {/* project 2 */}
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Chat App</span>
                    <img src="https://t4.ftcdn.net/jpg/05/11/87/37/360_F_511873784_NLmIMOcuwo9JTuoXJNyR0jQSQOUXUvFk.jpg" 
                    alt="project2" 
                    />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">XML</span>
                    <span className="card-detail-badge">Java</span>
                    <span className="card-detail-badge">Firebase</span>
                    <span className="card-detail-badge">Android Studio</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">BaatChit</h5>
                    </div>
                    <a className="ad-btn" href="https://github.com/Mahesh2056/Baat_chit.git">
                        View
                    </a>
                </div>
            </div>
        </div>
        {/* project 3 */}
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Web App</span>
                    <img src="https://c8.alamy.com/comp/2GA71K1/poll-online-vote-icon-outline-poll-online-vote-vector-icon-for-web-design-isolated-on-white-background-2GA71K1.jpg" 
                    alt="project3" 
                    />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">HTML</span>
                    <span className="card-detail-badge">CSS</span>
                    <span className="card-detail-badge">Bootstrap</span>
                    <span className="card-detail-badge">PHP</span>
                    <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Online-voting-app</h5>
                    </div>
                    <a className="ad-btn" href="https://github.com/Mahesh2056/Online-Voting-System.git">
                        View
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Projects;