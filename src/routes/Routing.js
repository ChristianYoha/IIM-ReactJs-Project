import React, {lazy, Suspense} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Static import

import Loading from '../components/loader/loading';
import NoMatch from './NoMatch';

// Lazy loading
const Home = lazy(() => import('../pages/Home.js'));
const Projects = lazy(() => import('../pages/Projects.js'));
const Cv = lazy(() => import('../pages/Cv.js'));


const Routing = ()=>{
    return (
        <Suspense fallback={<Loading/>}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/cv" component={Cv}/>
                    <Route path="*" component={NoMatch}/>
                </Switch>
            </Router>
        </Suspense>
    )
};

export default Routing;