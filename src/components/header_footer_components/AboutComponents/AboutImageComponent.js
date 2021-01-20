import React from 'react';
import Slider from 'infinite-react-carousel';
import './AboutImage.css'

const AboutImageComponent = () => {
    return (
        <Slider dots>
            <img className="car" src="/mwa-van-stairs.jpg" alt="MWA Van"/>
            <img className="car" src="/a3.jpg" alt="Audi A3"/>
            <img className="car" src="/fiesta.jpg" alt="Ford Fiesta"/>
            <img className="car" src="/maserati.jpg" alt="Maserati"/>
            <img className="car" src="/skoda.jpg" alt="Skoda Taxi"/>
            <img className="car" src="/passat.jpg" alt="Volkswagen Passat"/>
            <img className="car" src="/range.jpg" alt="Range Rover Sport"/>
            <img className="car" src="/van.jpg" alt="Van/Truck"/>
            <img className="car" src="/discovery.jpg" alt="Land Rover Discovery"/>
        </Slider>
    )
}

export default AboutImageComponent;