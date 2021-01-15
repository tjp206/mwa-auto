import React from 'react';
import './FooterComponent.css';
import { SocialIcon } from 'react-social-icons';


const FooterComponent = () => {
    return(
        <footer>
            <SocialIcon className="socialIcon" url="https://www.facebook.com/mwaautoperform/" style={{ height: 40, width: 40 }} bgColor="rgb(136, 107, 54)" fgColor="rgb(0, 0, 0)" /> <SocialIcon className="socialIcon" url="https://www.instagram.com/mwa_autoperform/" style={{ height: 40, width: 40 }} bgColor="rgb(136, 107, 54)" fgColor="rgb(0, 0, 0)" /><br /><br />

            <a className="footLink" href="tel:+447999588488">phone: +44(0)7999 588488</a><br />
            <a className="footLink" href="mailto:mwa_autoperform@protonmail.com">email: mwa_autoperform@protonmail.com</a>
            
            <p className="copyright" >&#169;MWA Auto Performance&#8482; 2021</p>
        </footer>
    )
}

export default FooterComponent;