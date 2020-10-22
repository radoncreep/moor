import React from 'react'
import { FooterContainer, Logo, IconWrapper, Icon, FooterContent } from './FooterElement';
import Icon1 from '../../assests/icons/Icon awesome-facebook-f.svg';
import Icon2 from '../../assests/icons/Icon awesome-instagram.svg';
import Icon3 from '../../assests/icons/Icon awesome-linkedin-in.svg';
import Icon4 from '../../assests/icons/Icon awesome-youtube.svg';
import Icon5 from '../../assests/icons/Icon ionic-logo-twitter.svg';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <Logo>MOOR</Logo>
                    <p style={{ fontSize: '11px' }}>Visit Help Center</p>
                    <IconWrapper>
                        <img style={{ width: '25px', height: '25px', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginRight: '15px'}} src={Icon1}alt="icon"/>
                        <img style={{ width: '25px', height: '25px', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginRight: '15px'}} src={Icon2}alt="icon"/>
                        <img style={{ width: '25px', height: '25px', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginRight: '15px'}} src={Icon3}alt="icon"/>
                        <img style={{ width: '25px', height: '25px', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginRight: '15px'}} src={Icon4}alt="icon"/>
                        <img style={{ width: '25px', height: '25px', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginRight: '15px'}} src={Icon5}alt="icon"/>
                    </IconWrapper>
                    <p style={{ fontSize: '11px' }}>© 2020 MOOR</p>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer;
