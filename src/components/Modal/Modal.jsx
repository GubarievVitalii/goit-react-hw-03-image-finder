import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onModalClose);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onModalClose);
    };

    onModalClose = event => {
        if (event.code === 'Escape' || event.currentTarget === event.target) { this.props.onModalClose() }
    };
    
    render() {
        const { largeImageURL, alt } = this.props;
        return (
            <div className={s.overlay} onClick={this.onModalClose}>
                <div className={s.modal}>
                    < img className={s.modalImg} src={largeImageURL} alt={alt} />
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
};

export default Modal;