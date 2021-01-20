import React from 'react';
import './ServiceDetail.css'

const ServiceDetailComponent = () => {
    return(
        <div className='serviceDetail'>
            <h2>Services & Prices</h2>

                <h3>Hydrogen Carbon Cleaning - £99</h3>
                    <img className="carbonPic" src="/bmw-engine.jpg" alt="Carbon Clean In Progress"></img>
                    <h4>Benefits include:</h4>
                        <p>Remove carbon deposits from diesel & petrol engines</p>
                        <p>Less vibration</p>
                        <p>Reduce engine noise & flat spots</p>
                        <p>Increase engine life expectancy</p>
                        <p>Prevent wear & tear of components(EGR, DPF, Valves, Spark plugs, Injectors, Turbo)</p>
                        <p>Potential fuel savings</p>
                        <p>Lower emissions</p>
                        <h5>* Disclaimer: 100% safe BUT carbon cleaning cannot fix faulty components *</h5>
                        <h5>* Recommended every 10k miles or before a Service/MOT*</h5>
                        <h5>* Estimated duration: 40-50 mins *</h5>

                <h3>Engine Remapping - £249</h3>
                <img className="remapPic" src="/remap-tools.jpg" alt="Engine Remap In Progress"></img>
                    <h4>Benefits include:</h4>
                        <p>Improved fuel economy</p>
                        <p>Increase BHP & Torque</p>
                        <p>Improve throttle response</p>
                        <p>Improve performance & drivability</p>
                        <p>Remapping removes flat spots for a smoother power delivery</p>
                        <p>Maximise power without comprimising other engine components</p>
                        <h5>* Disclaimer: 100% safe BUT engine remapping cannot fix faulty components *</h5>
                        <h5>* Remapping is a mechanically safe upgrade *</h5>
                        <h5>* Estimated duration: 2-3 hours *</h5>

                        <h4>* Call or email for a free enquiry *</h4>
        </div>
    )
}

export default ServiceDetailComponent;