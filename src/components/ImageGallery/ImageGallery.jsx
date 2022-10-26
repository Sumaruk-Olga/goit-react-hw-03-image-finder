// import PropTypes from 'prop-types';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export function ImageGallery({ imageArray, onClick }) {
    // console.log('imageArray.hits', imageArray.hits);
    return (<ul>
        {/* пройтись мєпом і створити на кожній йтерації картку */
            
            imageArray.map(image => <ImageGalleryItem key={image.id} image={image} onClick={onClick} />)
        }        
    </ul>
            )
}

// ImageGallery.propTypes = {
//     onSubmit: PropTypes.array.isRequired,
//     //дописати який саме масив
// }