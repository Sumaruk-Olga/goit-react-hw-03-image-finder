export function ImageGalleryItem({ image }) {
    console.log('image.id', image.id);
    return (
        <li>
            <img src={image.previewURL} alt={image.tags} />
        </li>        
        // pageURL
        // previewURL
        // largeImageURL
    )
}

