import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import './PlayerBar.css';

 class PlayerBar extends Component {
   render() {
     return (
      <Grid className="player-bar" fluid>
        <Grid>
         <Row>
            <Col id="playback-controls" sm={9}>
             <Row>
		         <Col id="buttons" className="text-center">
		           <button id="previous" onClick={this.props.handlePrevClick}>
		             <span className="ion-skip-backward"></span>
		           </button>
		           <button id="play-pause" onClick={this.props.handleSongClick} >
		             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
		           </button>
		           <button id="next" onClick={this.props.handleNextClick}>
		             <span className="ion-skip-forward"></span>
		           </button>
		         </Col>
		     </Row>
		     <Row id="time-control">                                                                    
		           <Col className="time-text current-time text-right" sm={2}>{this.props.currentTime}</Col>
		           <Col sm={8}>
		           <input 
		             type="range" 
		             className="seek- time-seek"
		             value={this.props.seekValue || 0} 
		             max="1" 
		             min="0" 
		             step="0.01" 
		             onChange={this.props.handleTimeChange}
		           />  
		           </Col> 
		           <Col className="time-text total-time text-left" sm={2}>{this.props.duration}</Col> 
		     </Row>
	        </Col> 

	         <Col id="volume-control" sm={3}>
	           <Row id="volume-container" className="align-middle">
		           <Col className="icon ion-volume-low" sm={2}></Col>
		           <Col sm={8}>
		           <input type="range" 
		           className="seek-bar volume-seek" 
		           value={this.props.currentVolume || 0}
		           max="1"
		           min="0"
		           step="0.01"
		           onChange={this.props.handleVolumeChange}
		            />
		            </Col>
		           <Col className="icon ion-volume-high" sm={2}></Col>
               </Row>
	         </Col>
         </Row>
         


        </Grid>
         
       </Grid>
       
     );
   }
 }
 
 export default PlayerBar;