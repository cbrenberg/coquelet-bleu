import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Image extends Component {
  state = { loaded: false };

  imageLoaded = () => {
    this.setState({ loaded: true});
  }

  render() {

    if (this.state.loaded) {
      return (
        <img src={this.props.src}
          height='200'
          width='200'/>
        )
      } else {
      return (
      <img src={RoosterLogo}
        onLoad={() => this.imageLoaded()}
        height='0'
        width='0'
        alt="loading" />
        )
      }
    }
  }

  const mapStateToProps = ({ orderToDisplay }) => ({ orderToDisplay })
    
  export default connect(mapStateToProps)(Image);
