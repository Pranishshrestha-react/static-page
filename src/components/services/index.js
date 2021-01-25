import React from 'react';
import Heading from '../../widgets/typography/heading';
import SubTitle from '../../widgets/typography/subtitle';
import Title from '../../widgets/typography/title';
import ServiceCard from './service_card';
import leaves from '../../images/leaves.png';
import heart from '../../images/heart.png';
import hands from '../../images/hands.png';
import './services.css'


const Services = (props) => {
    return <div className="services_container">
        <Title >STATEMENT OF FAITH</Title>
        
        <div className="services">
            <ServiceCard
            title="Who are you"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            logo={<img src= {leaves}/>}
            />
            <ServiceCard
                title="How are you?"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
                logo={<img src= {hands}/>}
            />
            <ServiceCard
                title="How are you?"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
                logo={<img src= {heart}/>}
            />



        </div>
    


    </div>

}

export default Services;