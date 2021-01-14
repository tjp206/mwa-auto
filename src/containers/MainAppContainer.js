import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactContainer from './ContactContainer';
import AboutContainer from './AboutContainer';
import ServicesContainer from './ServicesContainer';
import NavBar from '../components/header_footer_components/NavBar';
import FooterComponent from '../components/header_footer_components/FooterComponent';
import './MainAppContainer.css'


const MainAppContainer = () => {

    return(
        // <>
        // <h1>MWA Auto Performance</h1>
        // <ContactContainer />
        // <ServicesContainer />
        // <AboutContainer />
        // </>
        <Router>
        <>
        <NavBar /> 
        <section>
            <Switch>
                <Route exact path="/" component={AboutContainer} />

                <Route exact path="/contact" component={ContactContainer} />
                
                <Route exact path="/services" component={ServicesContainer} />
        </Switch>
        </section>
        <FooterComponent />
        </>
        </Router>
    )
}

export default MainAppContainer;