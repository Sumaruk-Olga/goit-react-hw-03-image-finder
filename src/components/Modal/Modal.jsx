import { Component } from 'react';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {    
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
      if (e.code === 'Escape') {
          this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div  onClick={this.handleBackdropClick}>
        <div >{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}