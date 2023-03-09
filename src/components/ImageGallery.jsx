import { useState, useEffect } from "react";
import css from "./styles.module.css";
import ErrorPage from './ErrorPage'
import { getImage } from "../services/getImage";
import { Loader } from "./Loader";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Button } from "./Button";

export const ImageGallery = ({ inputSearch, pageLoaded, currentHit, onClick }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('idle');
    const [totalHits, setTotalHits] = useState(0);

    useEffect(() => {
        console.log("Updating phase: inputSearch", inputSearch);
        setStatus('pending');
        // setImages([]);
        setPage(1);
//   inputSearch !== '' && 
      getImage(inputSearch, 1)
            .then((response) => response.json())
            .then((img) => {
                console.log(img);
                setImages([...img.hits],);
                setStatus('resolved');
                setTotalHits(img.totalHits);
                setPage(1);
            })
            .catch((err) => {
                console.log('error :>> ', err);
                setError(err);
                setStatus('rejected');
            });

    }, [inputSearch]);

    useEffect(() => {
        console.log(`Changed page`, page);
        setStatus('pending');
        inputSearch !== '' && getImage(inputSearch, page)
            .then((response) => response.json())
            .then((img) => {
                setImages(prev => [...prev, ...img.hits]);
                setStatus('resolved');
            })
            .catch((err) => {
                setError(err);
                setStatus('rejected');
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // componentDidUpdate(prevProps, prevState) {
    //     // console.log(this.props.inputSearch, this.props.pageLoaded);

    //     if (prevProps.inputSearch !== this.props.inputSearch) {
    //         this.setState({ status: 'pending' })
    //         this.setState({ images: [] });
    //         this.setState({ page: 1 });

    //         console.log(`Changed inputSearch ${this.props.inputSearch}`);

    //         getImage(this.props.inputSearch, 1)
    //             .then((response) => response.json())
    //             .then((images) => {
    //                 // console.log(images);

    //                 this.setState({
    //                     images: [...this.state.images, ...images.hits],
    //                     status: 'resolved',
    //                     totalHits: images.totalHits,
    //                     page: 1,
    //                 })
    //             })
    //             .catch((error) => {
    //                 console.log('error :>> ', error);
    //                 this.setState({ error });
    //             })
    //     }

    //     if (prevState.page !== this.state.page) {
    //         console.log(`Changed page`, this.state.page);
    //         this.setState({ status: 'pending' })
    //         // getImage(this.props.inputSearch, this.props.pageLoaded)
    //         getImage(this.props.inputSearch, this.state.page)
    //             .then((response) => response.json())
    //             .then((images) => {
    //                 // console.log(images);

    //                 this.setState({
    //                     images: [...this.state.images, ...images.hits],
    //                     status: 'resolved',
    //                 })
    //             })
    //             .catch((error) => {
    //                 console.log('error :>> ', error);
    //                 this.setState({ error, status: 'rejected' });
    //             })
    //     }
    // }

    const handleClick = (id, largeImageURL, tags) => {
        // console.log(id, largeImageURL, tags);
        onClick(id, largeImageURL, tags);
    }

    const handleLoad = () => {
        console.log(page);
        setPage(() => page + 1);
    }

    if (status === 'pending') return <Loader />

    if (status === 'resolved')
        return inputSearch !== '' && (
            <>
                <ul className={css.ImageGallery}>
                    <ImageGalleryItem
                        images={images}
                        onClick={handleClick} />
                </ul>
                <footer className={css.footer}>

                    {inputSearch !== '' && (
                        totalHits / 20 > page && (
                            <Button onLoadMore={handleLoad} />
                        )
                    )}

                </footer>
            </>
        );

    if (status === 'rejected') return <ErrorPage error={error} />

}
