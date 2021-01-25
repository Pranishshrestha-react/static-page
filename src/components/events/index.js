import React from 'react';
import Title from '../../widgets/typography/title';
import SubTitle from '../../widgets/typography/subtitle';
import Images from '../../images';
import aas from '../../images/aas.jpg';
import asdf from '../../images/asdf.jpg';
import asd from '../../images/asd.jpg';
import cal from '../../images/cal.png';
import gps from '../../images/gps.png';
import arrow from '../../images/arrow.png';

import './events.css';

const Events = (props) => {
    return <div className="main">
                <h3>OUR EVENTS</h3>
                    <div className="first">
                        <div classname="main_pic">
                            <div className="event_pic">
                                <img src={aas} />
                            </div>
                            <div className="second">
                                <div className="text_bold">
                                    Morning Gathering
                                </div>
                                <div className="text_ita">
                                    <Images 
                                    url={cal}
                                    text="Monday, 10:00AM - Friday, 10:00 AM" />
                                    <Images 
                                    url={gps}
                                    text="St. Paul Chruch" />
                                    <Images 
                                    url={arrow}
                                    text="510,Ave, Belbore, WA 6000s" />
                                </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
                                        rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                        . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m
                                        ollit anim id est laborum</p>
                            </div>
                        </div>

                        <div classname="maiin_pic">
                            <div className="event_pic">
                                <img src={asd}/>
                            </div>
                            <div className="second">
                                 <div className="text_bold">
                                    Spirit And Truth
                                </div>
                                <div className="text_ita">
                                    <Images 
                                    url={cal}
                                    text="Monday, 10:00AM - Friday, 10:00 AM" />
                                    <Images 
                                    url={gps}
                                    text="St. Paul Chruch" />
                                    <Images 
                                    url={arrow}
                                    text="510,Ave, Belbore, WA 6000s" />
                                </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
                                        rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                        . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m
                                        ollit anim id est laborum</p>  
                            </div>
                        </div>

                        <div classname="main_ppic">
                            <div className="event_pic">
                                <img src={asdf} />
                            </div>
                            <div className="second">
                                <div className="text_bold">
                                    Sunday School
                                </div>
                                <div className="text_ita">
                                    <Images 
                                    url={cal}
                                    text="Monday, 10:00AM - Friday, 10:00 AM" />
                                    <Images 
                                    url={gps}
                                    text="St. Paul Chruch" />
                                    <Images 
                                    url={arrow}
                                    text="510,Ave, Belbore, WA 6000s" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
                                    rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                    . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m
                                    ollit anim id est laborum</p>
                            </div>
                        </div>



                     </div>










             </div>



}

export default Events;