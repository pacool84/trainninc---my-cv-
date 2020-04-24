import React, { Component } from 'react';


class AboutMe extends Component{
    render(){
        return(
            <div className="container-about">
                <p>
                ...I have a very particular set of skills...<br></br>
                ...skills that I have adquire for a very long carrer..
                </p>
                
                <section className="container-cards">
                <ul>
                    <li>Cisco</li>
                    <li>Itil</li>
                    <li>JavaScript</li>
                </ul>
            </section>
            </div>
            
            
        )
    }
};

export default AboutMe;