import React from 'react';
import './AboutImage.css'

const AboutImageComponent = () => {
    return (
        <>
            <img className="car" src="/a3.jpg" alt="Audi A3"/>
            <img className="car" src="/passat.jpg" alt="Volkswagen Passat"/>
            <img className="car" src="/range.jpg" alt="Range Rover Sport"/>
            <img className="car" src="/van.jpg" alt="Van/Truck"/>
        </>
    )
}

export default AboutImageComponent;