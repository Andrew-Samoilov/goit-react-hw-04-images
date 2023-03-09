import { useState } from "react";
import css from "./styles.module.css";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { ToDoModal } from "./ToDoModal";

const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [clickId, setClickId] = useState(1);
  const [imgUrl, setImgUrl] = useState('');
  const [imgTag, setImgTag] = useState('');
  // const [onLoading, setOnLoading] = useState(false);

  const formSubmitHandler = (data) => {
    console.log(`formSubmitHandler`, data);
    setInputSearch(() => (data));
  }

  const handleLoad = () => {
    // console.log(this.state.page)
    setPage((prev) => (prev.page + 1));
  }

  const toggleModal = clickId => {
    // console.log(` click ${clickId}`);
    setClickId(() => (clickId));
    setShowModal(() => (false));
  };

  const clickItem = (id, largeImageURL, tags) => {
    console.log(id, largeImageURL, tags);
    setClickId(() => (id));
    setImgUrl(() => (largeImageURL));
    setImgTag(() => (tags));
    setShowModal(() => (true));
  }

  // const togleLoading = data => {
  //   console.log(`Loading`, data);
  //   setOnLoading(data);
  // }

  return (

    <div className={css.App}>
      {/* {this.state.onLoading===true && (
          <Loader />
        )} */}

      <Searchbar
        onSubmit={formSubmitHandler}
        pageS={handleLoad}
      // onLoading={this.onLoading}
      />

      <ImageGallery
        inputSearch={inputSearch}
        pageLoaded={page}
        // currentHit={currentHit}
        onClick={clickItem}
        // onLoading={togleLoading}
      />
      {showModal && (
        <ToDoModal onClose={toggleModal} imgSrc={imgUrl} imgAlt={imgTag}>
          <p>{clickId}</p>
          <img src={imgUrl} alt={imgTag} />
        </ToDoModal>
      )}
    </div>
  );

};

export default App;
