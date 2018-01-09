import React from 'react';
import logoImage from './../../images/logo.png';
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    var menuStyle = {"display": "none"};
    var arrowSrc = "images/arrow-down.png";

    return (
      <div className="topbar">
        <div className="container-fluid">
          <img className="logo" src={logoImage} alt="Logo" />          
        </div>
      </div>
    )
  }
}

export default TopBar;
