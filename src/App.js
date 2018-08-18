import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import {Bootstrap, Grid, Col, Row, Button, Nav, Navbar, NavItem} from 'react-bootstrap';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar id="site-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="header-link" to='/'>
              <img id="header-logo" src="../assets/brand/tempoLogo.png"/>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/library" id="library-link">Library
          </NavItem>
        </Nav>
      </Navbar>
        
            
                <main id="main-container">
                  <Route exact path="/" component={Landing} />
                  <Route path="/library" component={Library} />
                  <Route path="/album/:slug" component={Album} />
                </main>
           
      </div>
    );
  }
}

export default App;
