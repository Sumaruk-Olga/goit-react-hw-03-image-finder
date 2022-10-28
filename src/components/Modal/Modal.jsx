import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';


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
        console.log('при кліку на Escape', this.props.onClose);
          this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      console.log('при кліку в бєкдроп', this.props.onClose);
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop  onClick={this.handleBackdropClick}>
        <ModalWindow >{this.props.children}</ModalWindow>
      </Backdrop>,
      modalRoot,
    );
  }
}