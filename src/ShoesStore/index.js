import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      productDetail: "",
    };
  }

  handleDetail = (item) => {
    this.setState({
      productDetail: item,
    });
  };

  render() {
    let { products, productDetail } = this.state;
    return (
      <div className="container">
        <h1 className="title">Shoes Shop</h1>
        <div>
          <ProductList productData={products} getDetail={this.handleDetail} />
        </div>
        <Modal detail={productDetail}/>
      </div>
    );
  }
}
