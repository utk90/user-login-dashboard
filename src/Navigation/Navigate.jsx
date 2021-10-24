import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from '../Profile/Dashboard'
import Login from '../Login/Login';
import PATH from '../path';
import { Error } from '../Login/Error';
import All from '../Pages/All/AllPage';
import Motivation from '../Pages/Motivation/Motivation';

const routes = [
    { path: PATH.LOGIN, component: () => <Login /> },
    { path: PATH.DASH, component: () => <Dashboard /> },
    { path: PATH.ALL, component: () => <All /> },
    { path: PATH.MOTIVATION, component: () => <Motivation /> },
    { path: PATH.ERROR, component: () => <Error /> },
];

const Navigate = () => {

    return (
        <div>
            <Switch>
                {routes.map((route) => (
                    <Route exact key={route.path} path={route.path} component={route.component} />
                ))}
            </Switch>
        </div>


    )
}

export default Navigate;