import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({headerCopy, headerBanner}) => {
    return(
    <>
        <h1>{headerCopy}</h1>
        
        <img className="header-image" src={headerBanner} alt=""></img>
        
        <br />
    </>
    )
}
export default HeaderComponent;