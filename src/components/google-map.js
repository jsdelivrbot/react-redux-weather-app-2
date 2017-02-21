import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    console.log(this.props)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: Number(this.props.lat),
        lng: Number(this.props.lon)
      }
    });
  }

  render() {
    return <div ref="map" />;
  }

}

export default GoogleMap;
