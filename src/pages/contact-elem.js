import React from 'react';

const styling = {
    textDecoration: 'none'
};
const ContactElem = (props) => {
    var rendering;
    const sameRender = 
    <div className="content" >
            <div className="icon">
                <img src={props.data.icon} />
            </div>
            <h3>{props.data.title}</h3>
            {props.data.text.map( textData => {
                return <h4>{textData}</h4>
            })}
        </div>
    if (props.data.title === "LinkedIn") {
        rendering = 
        <a style={styling} href={props.data.link} target="_blank">
            {sameRender}
        </a>
    } else if (props.data.title === "Resume") {
        rendering = 
        <a style={styling} href={props.data.link} download="TJ_Resume">
            {sameRender}
        </a>
    } else {
        rendering = sameRender;

    }

    return (
        
        <div className="box"  data-aos="fade-up" data-aos-easing="ease-in">
        <div className="imgBox">
            <img src={props.data.icon} />
        </div>
    
        {rendering}
    </div>
    );
}

export default ContactElem;