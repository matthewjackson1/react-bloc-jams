import React from 'react';
import {Bootstrap, ButtonGroup, Button, Grid, Col, Row} from 'react-bootstrap';
import './Landing.css';
import { Route, Link } from 'react-router-dom';

const Landing = () => (
  <Grid className="landing">
    <h1 className="hero-title">Turn the music up!</h1>
    <Row className="selling-points">
      <Col className="point" sm={4}>
        <span className="home-icon ion-music-note"></span>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </Col>
      <Col className="point" sm={4}>
        <span className="home-icon ion-radio-waves"></span>
        <h2 className="point-title">Unlimited, streaming, ad&#x2011;free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </Col>
      <Col className="point" sm={4}>
        <span className="home-icon ion-iphone"></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </Col>
    </Row>
    <Row className="cta">
      <Col>
      <Link className="header-link" to='/library'>
      <Button bsStyle="primary" bsSize="large">
      Explore Music Library
      </Button>
      </Link>
      </Col>
    </Row>

  </Grid>
);

export default Landing;