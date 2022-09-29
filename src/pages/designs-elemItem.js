import React from 'react';

const DesignItem = (props) => {
    return (
        
        <a href={props.item.link} className={props.index % 2 === 1 ? "nav-link-odd" : "nav-link-even" } >{props.item.name}</a>

    );
    
}

export default DesignItem