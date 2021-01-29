import React from 'react';
import SubTitle from '../../widgets/typography/subtitle';
import Button from '../../widgets/button';
import Images from '../../images';
import arrow from '../../images/arrow.png';
import cal from '../../images/cal.png';
import gps from '../../images/gps.png';
import './banner.css' 

const Banner = () => {
    return <div className="banner_body">
        <div className="banner_size">
             <div className="text_church">
                <Images
                    url={arrow}
                    text="Monday, 10:00am - Friday, 10:00am" />
                <SubTitle>Welcome To Our Church</SubTitle>
             </div>
             <div className="banner_bb">
                <Images
                    url={cal}
                    text="St. Paul Church" />
                
                <Images
                    url={gps}
                    text="510,Ave, Belbore, WA 6000s" />
                
             </div>
                <div className="button">
                        <Button title="Read More" />
               </div>
        </div>
    </div>
}

export default Banner;