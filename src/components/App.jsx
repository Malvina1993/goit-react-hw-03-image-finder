import { Component } from "react";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import { fetchPictures } from "services/api";


export class App extends Component {
  state = {
    images: null,
    page: 1,
    query: "",
    // isModalOpen: false,
    // largeImageURL: null,
    // webformatURL: null,
    isLoading: false,
    error: null,
  }

  fetchImages = async (data) => {
  try {
    const picture = await fetchPictures(data, this.stage.page);
    this.setState({ images: picture.hits, query: data, isLoading: true });
    console.log(picture.hits)
    } catch (error) {}
  }

  hendalFormSubmit = data => {
    data?this.fetchImages(data): alert('Not search');
  }

  // hendalLoadMore = () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.fetchImages(this.state.query);

  // }

  // componentDidMount() {
  //   this.fetchImages();
  // }

  render() {
    return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar
        onSubmit = {this.hendalFormSubmit}
      />
      {this.state.isLoading&&<ImageGallery 
          images ={this.state.images}
      />}


        {this.state.isLoading && <Button
          onClick={this.hendalLoadMore}
        />}  
      <Loader />
      
      <Modal/>
    </div>
  );
  }
};
