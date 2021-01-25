import React from 'react';
import './images.css';

const Images = (props) => {
    return( 
        <div>
            <img src={props.url} className = "images"/>
            <span className="span">{props.text}</span>
        </div>
        
    )
    }

export default Images;