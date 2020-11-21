import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from '../Components/NavBar/Navbar'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'
import Login from '../Components/Login/Login'
import Portfolio from '../Components/Portfolio/Portfolio'
import Messages from '../Components/MessageBoard/MessageBoard'
import Contributions from '../Components/Contributions/Contributions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <BrowserRouter>
        <NavBar {...props} />
            <Switch>
                <Route exact path='/' render={() => {return (<div><Body /></div>)}} />
                <Route exact path="/contact-me" render={() => {return(<div><Contact/></div>);}}/>
                <Route exact path="/contributions" render={() => {return(<div className='flex-container'><Contributions/></div>);}}/>
                <Route exact path="/login" render={() => {return(<div><Login/></div>);}}/>
                <Route exact path="/portfolio" render={() => {return(<div className='flex-container'><Portfolio/></div>);}}/>
                <Route exact path="/messages" render={() => {return(<div className='flex-container'><Messages/></div>);}}/>
                
            </Switch>
        <Footer/>
    </BrowserRouter>
)

// <Route exact path="/portfolio" render={() => {return(<div><Portfolio /></div>);}}/>