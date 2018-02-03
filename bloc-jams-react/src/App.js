import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import {Bootstrap, Grid, Col, Row} from 'react-bootstrap';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid>
        <Row id="sticky-header">
        <header>
        <Col sm={8}><h1>Bloc Jams</h1></Col>
        <Col sm={4}>
          <nav id="header-nav">
            <Link className="header-link" to='/'>Home</Link>
            <Link className="header-link" to='/library'>Library</Link>  
          </nav>
        </Col>
          
        </header>
        </Row>
        <main id="main-container">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        </Grid>
      </div>
    );
  }
}

export default App;
