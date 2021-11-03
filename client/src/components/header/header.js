import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import Navigation from '../navigation/navigation'
import About from '../about/about'
import Contact from '../contact/contact'
import './header.css'

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
            </div>
            </HashRouter>
        )
    }
}

export default Header;