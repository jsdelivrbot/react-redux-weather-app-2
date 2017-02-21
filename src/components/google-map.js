import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: Number(props.lat), lng: Number(props.lon) }} />
      }
    />
  );
};

// class GoogleMap extends Component {
//
//   componentDidMount() {
//     new google.maps.Map(this.refs.map, {
//       zoom: 12,
//       center: {
//         lat: Number(this.props.lat),
//         lng: Number(this.props.lon)
//       }
//     });
//   }
//
//   render() {
//     return <div ref="map" />;
//   }
//
// }
//
// export default GoogleMap;
