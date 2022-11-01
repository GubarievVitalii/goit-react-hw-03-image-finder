import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt }) => {
    
    return (
        <>
            <li className={s.galleryItem}>
                <img className={s.galleryItemImage} src={url} alt={alt} />
            </li>
        </>
    )
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;