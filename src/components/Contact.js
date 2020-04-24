import React from "react";
import faceBook from "../assets/statics/facebook.png";
import twitter from "../assets/statics/twitter.png";
import github from "../assets/statics/github.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-block">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={faceBook}></img>
                <h3>facebook</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Vamos!!! y da un ojo a un poquito de mi vida</p>
                <a href="https://www.facebook.com/francisco.lopez.1441">¡StAlKeAmE!</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={twitter}></img>
                <h3>twitter</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>¡Sigueme en mis ocurrencias por el mundo del desarrollo!</p>
                <a href="https://twitter.com/babasyop">#FOLLOW ME!</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={github}></img>
                <h3>github</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>¡¡¡Empecemos a contruir un mundo GENIAL!!!</p>
                <a href="https://github.com/pacool84">¡Develop with me :)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
