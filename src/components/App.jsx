import { Component } from "react";
import css from "./styles.module.css";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
// import Button from "./Button";
import Modal from "./Modal";

export default class App extends Component {
  state = {
    inputSearch: '',
    page: 1,
    showModal: false,
    clickId: 1,
    imgUrl: '',
    imgTag: '',
    onLoading: false,
  }

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(() => ({
      inputSearch: data,
    }));
  }

  handleLoad = () => {
    // console.log(this.state.page)
    this.setState((prev) => ({ page: prev.page + 1 }))
  }

  toggleModal = clickId => {
    // console.log(` click ${clickId}`);
    this.setState(() => ({ clickId }));
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  clickId = (id, largeImageURL, tags) => {
    // console.log(id, largeImageURL, tags);
    this.setState(() => ({
      clickId: id,
      imgUrl: largeImageURL,
      imgTag: tags,
    }));
    this.setState(() => ({ showModal: true }));
  }

  togleLoading = data => {
    console.log(`Loading`,data);
    this.setState({onLoading: data});
  }

  render() {
    return (
      
      <div className={css.App}>
        {/* {this.state.onLoading===true && (
          <Loader />
        )} */}

        <Searchbar
          onSubmit={this.formSubmitHandler}
          page={this.handleLoad}
          // onLoading={this.onLoading}
        />   

        <ImageGallery
          inputSearch={this.state.inputSearch}
          pageLoaded={this.state.page}
          currentHit={this.state.currentHit}
          onClick={this.clickId}
          onLoading={this.togleLoading}
        />
        {/* <footer className={css.footer}> 
          {this.state.inputSearch!=='' && (
            <Button onLoadMore={this.handleLoad} />
          )}   
        </footer> */}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <p>{this.state.clickId}</p>
            <img src={this.state.imgUrl} alt={this.state.imgTag} />
          </Modal>
        )}
      </div>
    );
  }
};
