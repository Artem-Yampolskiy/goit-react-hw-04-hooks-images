import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ image, onImageClick }) => {
    const fullImageUrl = () => onImageClick(image.largeImageURL);

    return (
        <li className={styles.item}>
            <img
                className={styles.image}
                src={image.webformatURL}
                alt={image.tags}
                onClick={fullImageUrl}
            />
        </li>
    );
};

ImageGalleryItem.defaultProps = {
    tags: '',
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    }).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;