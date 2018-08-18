import React from 'react';
import {Bootstrap, ButtonGroup, Button, Grid, Col, Row} from 'react-bootstrap';
import './Landing.css';
import { Route, Link } from 'react-router-dom';

const Landing = () => (
  <Grid className="landing">
    <Row className="hero-row">
      <Col id="hero-music" md={12}>
        <div id="hero-info">
          <h1 id="hero-title">Welcome to the new home of music</h1>
          <Link className="header-link" to='/library'>
            <Button bsStyle="primary" bsSize="large">
              Explore Music Library
            </Button>
          </Link>
        </div>
      </Col>

    </Row>
    <Row className="selling-points">
      <Col className="point-pic" sm={4}>
      <h3 className="point-title">Choose from millions of tracks</h3>
      <img className="point-image" src="../assets/images/listen.jpg"/>
      </Col>
      <Col className="point-pic" sm={4}>
      <h3 className="point-title">Unlimited & ad-free forever</h3> 
      <img className="point-image" src="../assets/images/crowd.jpg"/> 
      </Col>
      <Col className="point-pic" sm={4}>
      <h3 className="point-title">Listen anywhere, any time</h3>
      <img className="point-image" src="../assets/images/mobile.jpg"/>
      </Col>
    </Row>
    

  </Grid>
);

export default Landing;