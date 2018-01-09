import React from "react";
import ReactDOM from "react-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import TopBar from "./common/topbar.js";
import Map from './map/map.js';

import "./../Stylesheets/style.css";

class Main extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    componentDidMount()
    {
    }

    render(){
        return (
            <div className="app-content">
                <TopBar ref="Topbar" />
                <Map ref="MapContainer" />
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('content')
);
  