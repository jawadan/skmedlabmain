import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { ReactComponent as Logo } from "../images/logo.svg";
 
const AnyReactComponent = () => <Logo width="32px" height="32px" />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.221,
      lng: 76.882
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBRcnAK9ZyraRd7CP4HEAk1nW9tliQH5yM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={43.2217076} lng={76.8835514} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;