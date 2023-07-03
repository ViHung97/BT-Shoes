import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { detail } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{detail.name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={detail.image} alt={detail.alias} />
                <p>{detail.description}</p>
                <p>Quantity: {detail.quantity}</p>
                <p className="card-text">Price: {detail.price}$</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-dismiss="modal"
                >
                  Add To Carts
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
