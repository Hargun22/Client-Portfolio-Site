import React from 'react';
import ContactElem from './contact-elem'

import linkedinIcon from '../resources/icons/linkedin-icon.png';
import emailIcon from '../resources/icons/email-icon.png';
import phoneIcon from '../resources/icons/phone-icon.png';
import resumeIcon from '../resources/icons/resume-icon.png';

const data = [
    {
        icon: emailIcon,
        title: 'Email',
        text: [
            "tjambocus@gmail.com"
        ]
    },
    {
        icon: phoneIcon,
        title: 'Phone No.',
        text: [
            "647-528-4048"
        ]
    },
    {
        icon: linkedinIcon,
        title: 'LinkedIn',
        text: [
            "Click to visit my profile!"
        ],
        link: "https://www.linkedin.com/in/tariq-jambocus-134876149"
    },
    {
        icon: resumeIcon,
        title: 'Resume',
        text: [
            "Click to download my resume!"
        ],
        link: "./Resume - January 2022.pdf"
    }

];

const styling = {
    minHeight: "90vh"
}

const Contact = () => {

    return (
    <div className="contact-page-styling" style={styling} >
        <div className="contact-text">
            <h3>Contact</h3>
        </div>
        <div className="contact-page">
    
            <div className="contact-container">
        
            {data.map(contactData => {
                return <ContactElem data={contactData} />
            })}
            </div>
        </div>
    </div>
    
    );

}

export default Contact;

{/**
<div className="contact-page">
                <h1 className="contact-text"><strong>Contact Me!</strong></h1>
                <div className="container contact-container">
                    <ContactElem />
                    <ContactElem />
                    <ContactElem />
                    <ContactElem />
                </div>
            </div>
            
*/}

{/** 
<div className="box">
                <div className="imgBox">
                    <img src={emailIcon} />
                </div>
                <div className="content" >
                    <div className="icon">
                        <img src={emailIcon} />
                    </div>
                    <h3>Email</h3>
                    <h4>hargunbedi463@gmail.com</h4>
                </div>
            </div>
            <div className="box">
                <div className="imgBox">
                    <img src={phoneIcon} />
                </div>
                <div className="content" >
                <div className="icon">
                        <img src={phoneIcon} />
                    </div>
                    <h3>Phone No.</h3>
                    <h4>905-564-8045</h4>
                    <h4>905-564-8045</h4>
                </div>
            </div>
            <div className="box">
                <div className="imgBox">
                    <img src={linkedinIcon} />
                </div>
                <div className="content" >
                <div className="icon">
                        <img src={linkedinIcon} />
                    </div>
                    <h3>LinkedIn</h3>
                    <h4>Click to visit my profile!</h4>
                </div>
            </div>
            <div className="box">
                <div className="imgBox">
                    <img src={resumeIcon} />
                </div>
                <div className="content" >
                <div className="icon">
                        <img src={resumeIcon} />
                    </div>
                    <h3>Resume</h3>
                    <h4>Click to download my resume!</h4>
                </div>
            </div>
         */}