import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
    <ul className={styles.imageGallery}>
        {images.map(image => {
            return (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                    onImageClick={onImageClick} />
            );
        })}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;