import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Filling from './pages/Filling';
import Finalize from './pages/Finalize';
import Landing from './pages/Landing';
import Size from './pages/Size';

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/size"  component={Size} />
            <Route path="/filling"  component={Filling} />
            <Route path="/finalize"  component={Finalize} />
        </BrowserRouter>
    )
};

export default Routes;