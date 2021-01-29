import React from 'react';
import SubTitle from '../../widgets/typography/subtitle';
import Images from '../../images';
import cal from '../../images/cal.png';
import gps from '../../images/gps.png';
import arrow from '../../images/arrow.png';
import line from '../../images/line.png';
import Quotes from '../../widgets/typography/quotes';
import './bannerd.css'


const Bannerd = () => {
    return <div className="body">
        <div className="body_Part">
                <div className="white">
                    <div className="head">Welcome To Our Church</div>
                    
                    <Images 
                    url={cal}
                    text="Monday, 10:00AM - Friday, 10:00 AM" />
                    <div className="color">
                        <Images 
                        url={gps}
                        text="St. Paul Chruch" />
                    </div>
                    <Images 
                    url={arrow}
                    text="510,Ave, Belbore, WA 6000s" />


                </div>
                <div className="red">
                    <Quotes
                    bigtext="200" 
                    smalltext="Days" />

                    <Quotes
                    bigtext="16"
                    smalltext="Hours" />

                    <Quotes
                    bigtext="42"
                    smalltext="Minutes" />

                    <Quotes
                    bigtext="40"
                    smalltext="Seconds" />



                </div>
            </div>






    </div> 




}


export default Bannerd;