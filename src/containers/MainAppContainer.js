import React from 'react';
import PriceContainer from './PriceContainer'
import AboutContainer from './AboutContainer'
import ServicesContainer from './ServicesContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const MainAppContainer = () => {

    return(
        <>
        <h1>MWA Auto Performance</h1>
        <PriceContainer />
        <ServicesContainer />
        <AboutContainer />
        </>
        /* <Router>
        <>
        <NavBar /> 
        <section>
            <Switch>
                <Route exact path="/" component={ConditionsContainer} />

                <Route exact path="/services" component={ServicesContainer} />
                
                <Route exact path="/user" component={UserContainer} />

                <Route exact path='/reminders' component={ReminderContainer} />
        </Switch>
        </section>
        <FooterComponent />
        </>
        </Router> */
    )
}

export default MainAppContainer;