import React, { Component } from "react";
import netecLogo from "../assets/statics/netecLogo.png";
import jsSchool from "../assets/statics/escuelaJS.png";
import certLogo from "../assets/statics/certLogo.png";

class AboutMe extends Component {
  render() {
    return (
      <div className="container-about">
        <p>
          ...I have a very particular set of skills...<br></br>
          ...skills that I have adquire for a very long carrer..
        </p>

        <div className="container-cards">
          <section className="card-itil">
            <p>ITIL Foundations V3. Certified</p>
            <img src={certLogo}></img>
          </section>

          <section className="card-javascript">
            <p>Javascript School</p>
            <img src={jsSchool}></img>
          </section>

          <section className="card-cisco">
            <p>CISCO CCNA Certified</p>
            <img src={netecLogo}></img>
          </section>
        </div>
        
        <div className="skills">
            <h1>My Others Skills</h1>
            <li>
            <h5>Project Managment</h5>
            <span className="bar"><span className="project"></span></span>
            </li>
            <li>
            <h5>Team Leadership</h5>
            <span className="bar"><span className="leadership"></span></span>
            </li>
            <li>
            <h5>Process Managment</h5>
            <span className="bar"><span className="process"></span></span>
            </li>
            <li>
            <h5>Technological Solutions Implementations</h5>
            <span className="bar"><span className="implementation"></span></span>
            </li>
           
        </div>
      </div>

        
    );
  }
}

export default AboutMe;
