import React from "react";
import PropTypes from "prop-types";
import '../styles/Modal.css'

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <a href='#' class="toggle-button" onClick={this.onClose}>
            X
          </a>
         <div class="sign-in-title">
        
          <h2>Welcome to Tennis Coaches of NYC</h2>
          </div>
        <div class="content">{this.props.children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};