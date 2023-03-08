import css from "./styles.module.css";

export const ImageGalleryItem = ({ images, onClick }) => {
    // console.log(images);
    // <img src={el.webformatURL} alt={el.tags} className={css.ImageGalleryItemImage} />
    return (images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
                <li key={id}
                    onClick={() => onClick(id, largeImageURL, tags)}
                    className={css.ImageGalleryItem}>
                    <img src={webformatURL}
                        alt={tags}
                        className={css.ImageGalleryItemImage} />
                </li>
            );
        })
        );
}
