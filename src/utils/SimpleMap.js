import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pin from '../images/pin.png'
import { Link } from 'react-router-dom';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.22,
      lng: 76.88
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '74vh', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBRcnAK9ZyraRd7CP4HEAk1nW9tliQH5yM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.locations.map(item => {
            if (item.address.length !== 0) {
              return item.address.map(i => {
                return (
                  <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
                    <img style={markerStyle} src={pin} alt="pin" />
                  </Link>
                );
              });
            }
          })}
          <AnyReactComponent
            lat={43.2216076}
            lng={76.8829057}
            text="SK-MEDLAB"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;