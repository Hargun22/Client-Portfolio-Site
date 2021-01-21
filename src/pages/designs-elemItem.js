import React from 'react';

const DesignItem = (props) => {
    return (
        <a href={props.item.link} className="nav-link" >{props.item.name}</a>

    );
}

export default DesignItem