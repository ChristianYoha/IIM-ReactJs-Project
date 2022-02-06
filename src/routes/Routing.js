import React, {lazy, Suspense} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Static import

import Loading from '../components/loader/loading';
import NoMatch from './NoMatch';
import Header from '../components/Header';

// Lazy loading
const Home = lazy(() => import('../pages/Home.js'));
const Projects = lazy(() => import('../pages/Projects.js'));
const Cv = lazy(() => import('../pages/Cv.js'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails.js'));


const Routing = ()=>{
    return (
        <>
        <Header/>
        <Suspense fallback={<Loading/>}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects} />
                    <Route path="/project/:projectId" component={ProjectDetails}/>
                    <Route path="/cv" component={Cv}/>
                    <Route path="*" component={NoMatch}/>
                </Switch>
            </Router>
        </Suspense>
        </>
    )
};

export default Routing;