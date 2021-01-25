import React from 'react';
import './subtitle.css';

const SubTitle = (props) => {
    return <h3 className = "subtitle">{props.children}</h3>
}

export default SubTitle;
