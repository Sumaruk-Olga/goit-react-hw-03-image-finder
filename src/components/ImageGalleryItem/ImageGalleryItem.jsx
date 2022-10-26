export function ImageGalleryItem({ image, onClick }) {
    console.log('onClick', onClick);
    return (
        <li onClick={() => onClick({
            url: image.largeImageURL,
            alt:image.tags,
        })}>
            <img src={image.previewURL} alt={image.tags} />
        </li>
    )
}