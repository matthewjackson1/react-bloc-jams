import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import {Bootstrap, ButtonGroup, Button, Col, Row, Table} from 'react-bootstrap';
import './Album.css';


class Album extends Component {
   constructor(props) {
     super(props);

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });
 
     this.state = { 
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration, 
      currentVolume: 0.5,
      isPlaying: false,
      isHovering:false
     };

     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
     this.audioElement.volume = this.state.currentVolume;


     }

     componentDidMount() {
      this.eventListeners = {
       timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       },
       volumeupdate: e => {
       	 this.setState({ currentVolume: this.audioElement.volume });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
     this.audioElement.addEventListener('volumeupdate', this.eventListeners.volumeupdate);
    }

    componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
     this.audioElement.removeEventListener('volumeupdate', this.eventListeners.volumeupdate);
    }
 

     play() {
       this.audioElement.play();
       this.setState({ isPlaying: true });
     }

     pause() {
       this.audioElement.pause();
       this.setState({ isPlaying: false });
     }

     setSong(song) {
       this.audioElement.src = song.audioSrc;
       this.setState({ currentSong: song });
     }

     formatTime(time) {
     	if (isNaN(time)) {
          return "-:--";
     	}
     	else {
     	  let minutes = Math.floor(time / 60);
     	  let seconds = Math.floor(time % 60);
     	  if (seconds < 10) { 
     	  	seconds = "0" + seconds;
     	  }
     	  let formattedTime = String(minutes)+":"+String(seconds);
     	  return formattedTime;
     	}
     }

     handleSongClick(song) {
       const isSameSong = this.state.currentSong === song;
       if (this.state.isPlaying && isSameSong) {
         this.pause();
       } else {
       	 if (!isSameSong) { this.setSong(song); } 
         this.play();
       }
     }

    handleSongHoverEnd() {
       console.log("left");
       this.setState({isHovering: false});
    }

     handleSongHoverStart(song) {
       console.log("entered");
       this.setState({isHovering:true});
       console.log(song);
     }

     handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play(newSong);
    }


    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play(newSong);
    }

    handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
   }

   handleVolumeChange(e) {
     const newVol = e.target.value;
     this.audioElement.volume = newVol;
     this.setState({ currentVolume: newVol });
   }

   renderButtons(song, index) {
      if (this.state.currentSong === song) {
      	if (this.state.isPlaying === true) {
      		return <span className="ion-pause"></span>;
      	}
      	else{
            return <span className="ion-play"></span>;
      	}

      }
      else {
     		return <div><span className="songNumber">{index+1}</span> <span className="ion-play hoverSongRowControl"></span></div>;
       }
      
   }
  	


 
   render() {
    

     return (
     	
     	<section className="album">
     	<Row className="album-container">
     	<Col sm={2}></Col>
        <Col id="album-info" sm={4}>
           <img id="album-cover-art" src={this.state.album.albumCover} />
        </Col>
        <Col id="album-songlist" sm={4} className="text-left">
        <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">by {this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
        </div>
        <Table id="song-list" className="text-left" lg={6} striped>
           <colgroup>
             <col id="play-controls-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup> 
           <thead>
              <tr>
                 <th>#</th>
                 <th>Title</th>
                 <th>Duration</th>
              </tr>
           </thead> 
           <tbody>
           {this.state.album.songs.map( (song, index) => 
       		<tr className="song" key={index} 
       		onClick={() => this.handleSongClick(song)}
            >
                <td className="song-actions">
                {this.renderButtons(song, index)}
                </td>
           		<td className="song-title">{song.title}</td>
           		<td className="song-duration">{this.formatTime(song.duration)}</td>
           	</tr>
           	)}
           </tbody>
         </Table>
         </Col>
         <Col sm={2}></Col>
         </Row>

         <PlayerBar 
           isPlaying={this.state.isPlaying} 
           currentSong={this.state.currentSong} 
           currentTime={this.formatTime(this.audioElement.currentTime)}
           duration={this.formatTime(this.audioElement.duration)}
           seekValue={this.audioElement.currentTime / this.audioElement.duration}
           currentVolume={this.audioElement.volume}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
           handleVolumeChange={(e) => this.handleVolumeChange(e)}
         />
         </section> 
      
       
     );
   }
 }




export default Album;