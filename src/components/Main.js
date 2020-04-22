import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Resume from './Resume';
import AboutMe from './AboutMe';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Resume} />
        <Route exact path ="/aboutme" component={AboutMe} />
    </Switch>
)

export default Main;