import React from 'react';
import { Route, Switch } from 'react-router-dom';

import News from '../pages/News';
import Romance from '../pages/Sepakbola';
import Action from '../pages/Ekonomi';
import Fiction from '../pages/Politik';
import Comedy from '../pages/Hiburan';
import SignIn from '../components/SignIn';
import Profile from '../components/Profile';
// import GetParam from "../pages/News";

const MainRoute = () => {
    return (
        <Switch>
            09<Route exact path='/' component={News} />
            <Route exact path='/romance' component={Romance} />
            <Route exact path='/action' component={Action} />
            <Route exact path='/fiction' component={Fiction} />
            <Route exact path='/comedy' component={Comedy} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/profile' component={Profile} />
            {/* <Route path="/:query" component={this.GetParam} /> */}
            {/* <Route component={NotMatch} /> */}
        </Switch>
    );
};

export default MainRoute;