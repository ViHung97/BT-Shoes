import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class extends Component {
  rederProductList = () => {
    const { productData, getDetail } = this.props;
    return productData.map((products) => {
      return (
        <ProductItem key={products.id} item={products} getDetail={getDetail} />
      );
    });
  };
  render() {
    return <div className="row">{this.rederProductList()}</div>;
  }
}
