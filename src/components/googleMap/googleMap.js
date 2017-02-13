import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import './googleMap.css';

export default ({ lat, lon }) => (
    <GoogleMapLoader
        containerElement={<div style={{ height: '100%' }}/>}
        googleMapElement={
            <GoogleMap defaultZoom={10}
                       defaultCenter={{ lat, lng: lon }}/>
        }
    />
);