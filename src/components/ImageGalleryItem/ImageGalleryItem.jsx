import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ onClick, image, indx }) {
    const { largeImageURL, tags, webformatURL } = image;
    return (
        <Item indx={indx } onClick={() => onClick({
            url: largeImageURL,
            alt: tags,
            indx
        })}>
            <Image src={webformatURL} alt={tags} />
        </Item>
    )
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        indx: PropTypes.number.isRequired,
    }),  
    onClick: PropTypes.func.isRequired,
}