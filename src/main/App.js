import React from 'react';
import routes from '../config/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = props => {


    return (
        <div>
            <Router>
                <Switch>
                    {routes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(routeProps) => {
                                return (
                                    <>
                                        <route.component {...routeProps} />
                                    </>);
                            }}
                        />)}
                </Switch>
            </Router>

        </div>
    )
}
export default App;