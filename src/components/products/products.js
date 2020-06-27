import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "./products.css";
class Products extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
  };
  productsBetter = () => {
    return this.props.items.map((e, i) => {
      return (
        <div key={i} className="card-p">
          <div>
            <img src={e.img} alt={e.name} />
          </div>
          <div>
            <p>{e.name}</p>
            <p>${e.precio}.00</p>
          </div>
          <div
              className="add-car" onClick=
              {() => {
                this.handleClick(e.id);
              }}
              > Agregar al carrito
          </div>
        </div>
      );
    });
  };
  render() {
    return <div id="grid">{this.productsBetter()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
