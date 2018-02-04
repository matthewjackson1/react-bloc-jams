import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row id="sticky-header">
            <Grid>
              <Row id="testing">
                <header>
                  <Col sm={6} xs={6} className="text-left"><h1 id="bloc-jams-title">Bloc Jams</h1></Col>
                  <Col sm={6} xs={6} className="text-right">
                    <nav id="header-nav">
                      <Link className="header-link" to='/'><Button>Home</Button></Link>
                      <Link className="header-link" to='/library'><Button>Library</Button></Link>  
                    </nav>
                  </Col>
                </header>
              </Row>
            </Grid>
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
