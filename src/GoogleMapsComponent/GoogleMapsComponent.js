// https://github.com/fullstackreact/google-maps-react und https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/#the-map-container-component
import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMapsComponent extends React.Component {
    render(){
        const containerStyle = {
            position: 'absolute',

            height: "200px",
        };

        return (
            <Map google={this.props.google} zoom={14} containerStyle={containerStyle}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

            </Map>
        );
    }
}
export default GoogleApiWrapper({
})(GoogleMapsComponent);