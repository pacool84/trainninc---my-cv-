import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Contact from './Contact'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Resume} />
        <Route exact path ="/aboutme" component={AboutMe} />
        <Route exact path ="/contact" component={Contact} />
    </Switch>
)

export default Main;