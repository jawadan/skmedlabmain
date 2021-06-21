import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.22,
      lng: 76.88
    },
    zoom: 14
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '74vh', width: '95%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBRcnAK9ZyraRd7CP4HEAk1nW9tliQH5yM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.2216179}
            lng={76.8831001}
            zoom={14}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;