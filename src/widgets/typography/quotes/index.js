import React from 'react';
import line from '../../../images/line.png'
import './quotes.css';

const Quotes = (props) => {
    return (
        <div className="whole">
            <div className="numbers">
                <p className="big">{props.bigtext}</p>
                <p className="small">{props.smalltext}</p>
            </div>
            <img src={line}/>
            
            
        </div>
    )
}

export default Quotes;