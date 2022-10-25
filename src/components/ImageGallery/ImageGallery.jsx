import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export function ImageGallery(props) {
    return (<ul>
        {/* пройтись мєпом і створити на кожній йтерації картку */}
        <li
        // key={props.?.item.id}
        >            
            <ImageGalleryItem />
        </li>
    </ul>
            )
}