import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const {item, getDetail}=this.props
    return (
      <div className="p-2 col-4">
        <div className="card text-left">
          <img
            className="card-img-top"
            src={item.image}
            alt={item.alias}
          />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">
              Price: {item.price}$
            </p>
            <button
              className="btn btn-success mr-2"
              data-toggle="modal"
              data-target="#modelId"
              onClick={()=>{getDetail(item)}}
            >
              Chi Tiết
            </button>
            <button className="btn btn-dark">Add to Carts</button>
          </div>
        </div>
      </div>
    );
  }
}
