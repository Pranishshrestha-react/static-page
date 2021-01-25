import React from 'react';
import Button from '../../widgets/button';
import Title from '../../widgets/typography/title';
import SubTitle from '../../widgets/typography/subtitle';
import './header.css'

const Header = () => {
    return(
        <div className="header">
            <h1 className="main_title">SIMPLE CSS TEMPLATE</h1>
            <SubTitle> WELCOME TO OUR CHURCH </SubTitle>
            <Button title="Join With Us" />
        </div>
    );


}

export default Header;