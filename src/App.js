import React from 'react';
import { BrowserRouter , Redirect, withRouter, Switch , Route, Link } from "react-router-dom";
import Course from './components/Course'
import Programs from './components/Programs';
import Nav from './components/Nav'
import './mycss/app.css';

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/programs/"/>
  },
  {
    path: "/programs",
    exact: true,
    component: () => <Programs />
  },
  {
    path: "/programs/:courseId",
    exact: true,
    component: () => <Course />
  },

]

function App() {

    return (
          <div>
            <Route component={Nav} />
            {/* <Switch> */}
              {routes.map((route, i) => (
                <Route key={i} exact={route.exact} path={route.path} component={route.component} /> 
              ))}
            {/* </Switch> */}
        
          </div>
    );
}

export default App;
