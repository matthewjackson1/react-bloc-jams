import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import './PlayerBar.css';

 class PlayerBar extends Component {
   render() {
     return (
     
         <Row className="player-bar">

            <Col id="playback-controls">
						
              <div id="buttons" className="text-center">
		           <span id="previous" onClick={this.props.handlePrevClick}>
		             <span className="ion-skip-backward"></span>
		           </span>
		           <div id="play-pause" onClick={this.props.handleSongClick} >
		             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
		           </div>
		           <span id="next" onClick={this.props.handleNextClick}>
		             <span className="ion-skip-forward"></span>
		           </span>
		        	</div> 
					
							<div id="time-indicator">
									<div className="time-text current-time text-right">{this.props.currentTime}</div>
									<div className="seeker">
									<input 
										type="range" 
										className="seek- time-seek"
										value={this.props.seekValue || 0} 
										max="1" 
										min="0" 
										step="0.01" 
										onChange={this.props.handleTimeChange}
									/>  
									</div> 
									<div className="time-text total-time text-left" xs={2} sm={2}>{this.props.duration}</div> 
							</div>

							<div id="volume-control"> 
									<div id="volume-container">
										<div className="icon ion-volume-low"></div>
										<div className="seeker">
										<input type="range" 
										className="seek-bar volume-seek" 
										value={this.props.currentVolume || 0}
										max="1"
										min="0"
										step="0.01"
										onChange={this.props.handleVolumeChange}
											/>
											</div>
										<div className="icon ion-volume-high"></div>
									</div>				
							</div>
						</Col>
				
         </Row>
         
    
       
     );
   }
 }
 
 export default PlayerBar;