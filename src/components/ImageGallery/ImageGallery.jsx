import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
// import Modal from 'components/Modal/Modal'

const ImageGallery = ({ galleryArray }) => {
    return (
        <>
            <ul className={s.gallery}>
                {galleryArray.map(({ webformatURL, tags, id, largeImageURL }) =>
                    <ImageGalleryItem url={webformatURL} alt={tags} key={id} />)}
                    {/* <Modal ImageURL={largeImageURL} /> */}
            </ul>
        </>
    )
}

ImageGallery.propTypes = {
    galleryArray: PropTypes.array.isRequired,
};

export default ImageGallery;