import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import idProfile from '../assets/statics/IdProfile.png'
import iconSn from '../assets/statics/IconSN.png'

class Resume extends Component{
    render(){
        return(
            <div className="resume-container" style={{width: '100%', margin: 'auto'}}>
                <Grid className="resume-grid">
                    <Cell className="resume-grid-cell"col={12}>
                      <img className="resume-image-profile" 
                      src={idProfile}
                      atl="avatar"/>
                      <p className="resume-content-profile">
                          <h1>Professional Resume</h1>
                          I have over 10 years of experience in <strong>ServiceDesk management</strong> , support areas, supplier management and <strong>incident and request process management.</strong><br></br> <br></br>
                        Precursor of the <strong>ServiceNow</strong> project, being an essential part in the adoption of the tool in the region of Mexico and CAM, <strong>achieving standardization of processes</strong> worldwide and improving the life cycle in the care of incidents, requests, changes, events and problems.<br></br> <br></br>
                        Additionally, I have experience in the <strong>design and development of key indicators</strong>, dashboards and solutions for other areas and countries (Canada, CAM, Chile, E- Commerce MX) with the objective of maturing processes and improving services related to IT 
                        
                        </p>

                        <section className="resume-content-experience">
                            <h3>Profesional Experience</h3>
                            <p>Service Desk Co. Manager
Incident and Request processes manager for the region of Mexico, regional administrator of the Servicenow tool as well as responsible for the operational areas, Servicedesk, First level support for Windows and UNIX Servers, Telecommunications Infrastructure and Event Monitoring in Sites of systems.
My main objectives and activities were to develop and implement technological solutions through the Servicenow tool that allowed to automate and improve activities within the processes of incidents, requests and events, these solutions were focused both for internal users and for the areas of IT support .</p>          
                        </section>
                        

                    </Cell>        
                </Grid>
               
            </div>
            
        )
    }
};

export default Resume;