import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from '../pages/AboutScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { Footer } from './Footer';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Footer/>
                <Switch >
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    {/* <Route component={HomeScreen} /> */}
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}
