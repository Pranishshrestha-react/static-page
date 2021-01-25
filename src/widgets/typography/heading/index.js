import React from 'react';
import './heading.css';

const Heading = (props) => {
    return <h5 className = "heading">{props.children}</h5>
}

export default Heading;