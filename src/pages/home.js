import React from "react";
import Image from "../resources/tariq2.png"

import HomeElem from "./home-elem"

const homeWorkData = [

        {
            title: 'Estimator',
            date: '2021 - Present',
            name: 'TC Transcontinental',
            list: [
                'Created quotes for marketing projects',
                'Used a scalable pricing system for efficiency',
                'Explored different materials used in marketing'
            ]
        },
        {
            title: 'Graphic Designer, Video Editor',
            date: '2017 - 2021',
            name: 'AlMaghrib Institute',
            list: [
                'Created marketing materials such social media posts, videos, flyers.',
                'Edited videos using Adobe Premiere',
                'Organized and archived branding assets'
            ]
        },

        {
            title: 'Social Media Manager, Content Creator',
            date: '2017 - Present',
            name: 'Yasir Qadhi (Public Figure) - USA',
            list: [
                'Created and designed posts for Instagram and Facebook',
                'Edited videos for Yasir Qadhi’s YouTube Channel (edit, export, publish)',
                'Managed all social media accounts'
            ]
        },

        {
            title: 'Graphic Designer, Video Producer',
            date: 'July 2020 - August 2020',
            name: 'ISNA Canada - Toronto',
            list: [
                'Created and designed posts for Instagram and Facebook',
                'Produced videos for social media',
                'Photographed events and key moments',
                'Created a library for photography assets'
            ]
        },

        {
            title: 'Graphic Designer, Content Creator',
            date: '2018 - 2019',
            name: 'Hunnibi - E-commerce Store',
            list: [
                'Created social media posts and content catered to the niche of the online store',
                'Designed one post for every day of the week',
                'Managed social media accounts',
                'Analyzed analytics to improve reach and sales'
            ]
        },

];

const eduData = [
    {
        title: 'Ryerson University',
        list: {
            name: 'Graphics Communications Management',
            year: '2018 - 2022'
        }
    },
    {
        title: 'Mississauga Secondary School',
        list: {
            name: 'High School Diploma',
            year: '2014-2018'
        }
    }
];





class Home extends React.Component {
    state = { 
        showing: false 
    };

render () {
    const { showing } = this.state;
return (

    
    <div>
        <div className="home-container" >
            <div className="container home-container2" data-aos="fade-up" data-aos-easing="ease-in" style={{paddingLeft: "5%", paddingRight: "5%"}}>
                <div className ="row home-row">
                    <div className="col-7 my-2 home-image" style={{padding: "3%"}}>
                        <img className= "image-self" src={Image }/>
                    </div>
                    <div className="col-5 side-description home-desc">
                        <h1 className="big-title"> <strong>Hi, I'm Tariq!</strong></h1>
                        <h2 className="small-title"> <strong>Graphic Communications Management Student</strong> </h2>
                    </div>
                </div>
            </div>

            <div className="container arrow-button" data-aos="zoom-in-up" style={{paddingTop: "3%"}}>
                <h6 className="centering" >Work Experience and Education</h6>
                <div id="arrow-hover" >
                    <div className="arrow-down"></div>
                </div>
            </div>
        </div>
        <div id="hide-display" style={{paddingLeft: "4%", paddingRight: "4%"}}>
            <HomeElem workData={homeWorkData} eduData={eduData}/>
        </div>
        
    </div>
);
}
}

export default Home
