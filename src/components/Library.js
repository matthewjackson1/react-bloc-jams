import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import {Bootstrap, Grid, Col, Row} from 'react-bootstrap';
import './Library.css';

class Library extends Component { 
   constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }
   render() {
    return ( 
      <Grid className='library'>
       <Row>
        {
          this.state.albums.map( (album, index) => 
            <Col className="library-album text-left" sm={4}>
            <Link to={`/album/${album.slug}`} key={index}>
              <img className="library-album-pic" src={album.albumCover} alt={album.title} />
              <div className="album-info-1"><span className="album-name">{album.title}</span></div>
              <div className="album-info-2">{album.artist}</div>
              <div className="album-numsongs">Album - {album.songs.length} songs</div>
            </Link>
            </Col>
          )
        }
        </Row>
      </Grid>
     );
   }
 }

export default Library;