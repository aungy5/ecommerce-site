import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import Navigation from '../navigation/navigation'
import About from '../about/about'
import Contact from '../contact/contact'
import './header.css'
import Login from '../login/login';

class Header extends Component {
    render() {
        return(
            <HashRouter>
                <div className="nav">
                    <Navigation/>
                </div>
            <div className="routes">
                <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
            </div>
            </HashRouter>
        )
    }
}

export default Header;