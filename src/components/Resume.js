import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import idProfile from '../assets/statics/IdProfile.png'

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
                          <h1>Professional Experience</h1>
                          I have over 10 years of experience in ServiceDesk management, support areas, supplier management and incident and request process management.<br></br> <br></br>
                        Precursor of the ServiceNow project, being an essential part in the adoption of the tool in the region of Mexico and CAM, achieving standardization of processes worldwide and improving the life cycle in the care of incidents, requests, changes, events and problems.<br></br> <br></br>
                        Additionally, I have experience in the design and development of key indicators, dashboards and solutions for other areas and countries (Canada, CAM, Chile, E- Commerce MX) with the objective of maturing processes and improving services related to IT 
                        </p>
                        <img src=""></img>

                    </Cell>        
                </Grid>
               
            </div>
            
        )
    }
};

export default Resume;