import React from 'react';
import { Route, Switch } from 'react-router-dom';

import News from '../pages/News';
import Sepakbola from '../pages/Sepakbola';
import Ekonomi from '../pages/Ekonomi';
import Politik from '../pages/Politik';
import Hiburan from '../pages/Hiburan';
import SignIn from '../components/SignIn';
import Profile from '../components/Profile';
// import GetParam from "../pages/News";

const MainRoute = () => {
    return (
        <Switch>
            09<Route exact path='/' component={News} />
            <Route exact path='/sepakbola' component={Sepakbola} />
            <Route exact path='/ekonomi' component={Ekonomi} />
            <Route exact path='/politik' component={Politik} />
            <Route exact path='/hiburan' component={Hiburan} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/profile' component={Profile} />
            {/* <Route path="/:query" component={this.GetParam} /> */}
            {/* <Route component={NotMatch} /> */}
        </Switch>
    );
};

export default MainRoute;