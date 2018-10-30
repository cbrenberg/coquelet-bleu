import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import './Image.css';

class Image extends Component {
  state = { loaded: false };

  imageLoaded = () => {
    this.setState({ loaded: true});
  }

  render() {

    if (this.state.loaded) {
      return (
        <img id='selectedBean' src={this.props.src} alt={this.props.beanName} />
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

  const mapStateToProps = ({ newOrder }) => ({ beanName: newOrder.toDisplay.bean.name })
    
  export default connect(mapStateToProps)(Image);
