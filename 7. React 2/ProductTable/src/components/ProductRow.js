import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    return (
      <div key={this.props.name}>
        <div>{this.props.name}</div>
        <div>{this.props.price}</div>
      </div>
    );
  }
}

export default ProductRow;
