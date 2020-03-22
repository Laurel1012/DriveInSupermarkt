import React from "react";
//import GoogleApiComponent from "google-maps-react";
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
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(GoogleMapsComponent)


/*
import {Map} from "./Map";

class GoogleMapsComponent extends React.Component{
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };
        return (
            <div style={style}>
                <Map google={this.props.google}
                />
            </div>
        )
    }
}
export default GoogleMapsComponent/*GoogleApiComponent({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    google: this.google,
})(GoogleMapsComponent);*/