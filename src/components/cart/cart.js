import React, { Component } from "react";
import { connect } from "react-redux";
import "./cart.css";
class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="item">
            <li className="collection-item" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} className="" />
              </div>

              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>{item.name}</p>
                <p>
                  <b>Precio: ${item.precio}</b>
                </p>
                <p>
                  <b>Cantidad: {item.quantity}</b>
                </p>
              </div>
            </li>
          </div>
        );
      })
    ) : (
      <p>No ha agregado proudctos al carrito</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>Usted ha ordenado:</h5>
          <div className="content-items">
            <ul className="collection">{addedItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

export default connect(mapStateToProps)(Cart);
