import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo_better.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
      render() {
    return (
      <header id="container">
        <div id="content">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          <div className="carrito">
            <Link to="/cart">
              <button className="btn-car">
                <FontAwesomeIcon
                  className="car"
                  icon="shopping-cart"
                  aria-hidden="true"
                />
                <span className="notification">{this.props.items.length}</span>
              </button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(NavBar);
