import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import Esri from 'esri-leaflet';
import _ from 'underscore';

class Map extends React.Component{
    constructor(props)
    {
        super(props);
        this.map = null;
        this.layer = null;
        this.markers = null;
        this.borders = null;
        this.ifSatelliteView = false;
    }

    componentDidMount(){
        this.map = Leaflet.map(this.refs.mapRef,{
            minZoom : 2.4,
            maxZoom : 12,
            inertia : false,
            zoomControl : false
        }).setView([50,0],2.4);

        this.map.setMaxBounds([[84, -200],[-59, 180]]);

        this.layer = Esri.basemapLayer("Gray", {
            noWrap: false,
            continuousWorld: false,
            inertia: false
        });

        this.layer.addTo(this.map);
        var zoom = new Leaflet.Control.Zoom({position: "bottomleft"}).addTo(this.map);
    }

    render(){
        return(
            <div id="map" ref="mapRef"/>
        );
    }
}

export default Map;