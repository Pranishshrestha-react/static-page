import React from 'react';
import fb from '../../images/fb.png';
import insta from '../../images/insta.png';
import twitter from '../../images/twitter.png';

import './footer.css'

const Footer = () => {
    return <div className="footbody">
                <div className="footpart">
                    <span>Copyright @2021. Alright</span>
                    <div className="links">
                        <img src={fb}/>
                        <img src={twitter}/>
                        <img src={insta}/>

                    </div>


                </div>



    </div>
}











export default Footer;