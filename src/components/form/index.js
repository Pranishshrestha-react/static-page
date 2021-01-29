import React from 'react';
import Button from '../../widgets/button';
import fb from '../../images/fb.png';
import insta from '../../images/insta.png';
import twitter from '../../images/twitter.png';
import arrow from '../../images/arrow.png';
import line2 from '../../images/line2.png';
import gps from '../../images/gps.png';
import SubTitle from '../../widgets/typography/subtitle';
import Title from '../../widgets/typography/title'
import './form.css';

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        errors: {}
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleFormSubmit =(e) => {
        e.preventDefault();
        let errors = {};
    

        let isValid = true;

        if (this.state.name ==='') {
            errors.name ="name is required"
            isValid = false;
        } else if (this.state.name.length <5){
            errors.name= "Name should be at least 5 characters"
            isValid = false;
        }

        
        if (this.state.message ==='') {
            errors.message ="message is required"
            isValid = false;
        } else if (this.state.message.length <10){
            errors.name= "Message should be at least 10 characters"
            isValid = false;
        }

        this.setState({
            errors: errors
        })
        
        if (isValid) {
            console.log("this form is valid please proceed.")
        }
        
    }
        render() {

            const {name, email, phone, message} = this.state;
            return (
                <div id="formClassic">
                    <div className="form_body">
                        <div className="only_form">
                            <h2> {this.state.name} </h2>
                            <SubTitle>Contact Us</SubTitle>
                            <form onSubmit={this.handleFormSubmit}>
                                Name: <input type="text" className={this.state.errors.name ? 'error-block': ''} name="name" value={name} placeholder ="Name" onChange={this.handleChange} />
                                <div className="error">{this.state.errors.name}</div>
                                Email: <input type="text" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                                Phone: <input type ="text" value={phone} name="phone" placeholder="Phone Number" onChange={this.handleChange}/>
                                Message: <textarea name="message"className={this.state.errors.message ? 'error-block': ''} placeholder="Enter Message" value={message} onChange={this.handleChange}></textarea>
                                <div className="error">{this.state.errors.message}</div>
                                <Button type="submit" title="Submit"/>
                                <hr></hr>
                                <b>Get Updated on</b> <img src={fb} /> Facebook  <img src={insta}/> Instagram  <img src={twitter} /> Twitter
                            </form>
                        </div>
                        <div className="map">
                            <SubTitle>Reach Out To Us Directly</SubTitle>
                            <div className="flex">
                                <div className="location">
                                    <img src={gps} />
                                    <div className="line"><img src={line2} /></div>
                                    <div className="add">
                                        <span>Bucketheadland</span>
                                        <span>Los Ageles</span>
                                        <span>Califorina</span>
                                    </div>
                                </div>
                                <div className="location">
                                    <img src={arrow} />
                                    <div className="line"><img src={line2} /></div>
                                    <div className="add">
                                        <span>984-771-977</span>
                                        <span>982-771-977</span>
                                        
                                    </div>


                                


                            </div>
                            </div>
                                <div className="map_img">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.2439719483173!2d85.30411995792497!3d27.702216970462768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1857a6278279%3A0xf22090d05a35b4b8!2sGauri%20Shankar%20Temple!5e0!3m2!1sen!2snp!4v1611745609015!5m2!1sen!2snp" ></iframe>

                                </div>

                        </div>

                    </div>
                </div>

            )
        }
}

export default Form;