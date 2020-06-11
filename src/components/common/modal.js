/*
  Modal using React Portal to display Employee Form
*/

import React, { Component } from "react";
import ReactDom from "react-dom";
import { Close } from "./Buttons";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal");
    this.el = document.createElement("div");
    this.el.classList =
      "modal-container animate__animated animate__slideInLeft";
    this.appRoot = document.getElementById("root");
  }

  componentDidMount() {
    this.appRoot.classList.add("backdrop");
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.appRoot.classList.remove("backdrop");

    this.modalRoot.removeChild(this.el);
  }

  render() {
    console.log({ child: this.props.children, El: this.el });
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

class ModalContainer extends Component {
  state = {
    hidden: true,
  };

  handleShow = () => {
    this.setState({ hidden: false });
  };

  handleHide = () => {
    this.setState({ hidden: true });
  };

  render() {
    return (
      <div className="container">
        <div className="btn btn-primary" onClick={this.handleShow}>
          {this.props.children}
        </div>
        {!this.state.hidden && (
          <Modal>
            <div className="modal-header">
              <div className="modal-header-actions">
                <Close size="1.5rem" onClick={this.handleHide} />
              </div>
              <h4>{this.props.title}</h4>
            </div>
            {this.props.display(this.handleHide)}
          </Modal>
        )}
      </div>
    );
  }
}
export default ModalContainer;
