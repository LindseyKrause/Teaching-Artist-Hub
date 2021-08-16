import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Videocam from '@material-ui/icons/Videocam';

const styles = (theme) => ({
    input: {
        display: 'none'
    }
});

class MediaCapture extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    

    state: { 
        images: [],
        videos: []
    
    }
  };
    handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.accept.includes('image') ? 'images' : 'videos';

        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));
        };
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>

                <input
                    accept="video/*"
                    capture="camcorder"
                    className={classes.input}
                    id="icon-button-video"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-video">
                    <IconButton color="primary" component="span">
                        <Videocam />
                    </IconButton>
                </label>
            </Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MediaCapture);




/*//code to upload profile picture
 class UploadPhotos extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        picture: false,
        src: false
      }
    }
  
    handlePictureSelected(event) {
      var picture = event.target.files[0];
      var src = URL.createObjectURL(picture);
  
      this.setState({
        picture: picture,
        src: src
      });
    }
  
    renderPreview() {
      if(this.state.src) {
        return (
          <img src={this.state.src}/>
        );
      } else {
        return (
          <p>
            No Preview
          </p>
        );
      }
    }
    
    upload() {
      var formData = new FormData();
  
      formData.append("file", this.state.picture);
  
      $.ajax({
        url: "/http://localhost:3000",
        method: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
          //code to handle a successful upload
        
    
    render() {
      return (
        <div>
          <h5> Picture Uploader</h5>
  
          <input
          type="file" width="20%" height="20%"
          onChange={this.handlePictureSelected.bind(this)}
          />
          <br/>
          <div>
           {this.renderPreview()}
          </div>
          <hr/>
          <button
            onClick={this.upload.bind(this)}
            >
            Upload
          </button>
        </div>
      );
    }
  }*/
  
  