import { Component } from "react";

import { Loading } from "components/Loading/Loading";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import { searchImage } from "services/searchApi";
import Modal from "components/Modal/Modal";
import { LargeImage } from "components/LargeImage/LargeImage";
import { Container } from "./App.styled";


export class App extends Component {
  state = {
    search: '',
    status: null,
    imageArray: [],
    page: 1,
    error: null,
    showModal: false,
    image: false,
  };


  async componentDidUpdate(_, prevState) {
    if (this.state.search !== prevState.search) {
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });
        if (data.hits.length === 0) {
          this.setState({ error: `${this.state.search} can not find :(`, status: "rejected", showModal: true });
        } else {
          this.setState({
            imageArray: [...data.hits],
            status: "resolved",
            showModal: false,
          })
        }
      } catch {
        this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected", showModal: true });
      } finally {
        // i`m thinking
        
      }
    }

    if (this.state.page !== prevState.page & this.state.page !== 1) {
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });
        this.setState(prevState => ({
          imageArray: [...prevState.imageArray, ...data.hits],
          status: "resolved",
          showModal: false,
        }))
      
      } catch {
        this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected", showModal: true });
      } finally {
        // i`m thinking        
      }
    }

  }

  handleSubmit = ({ search }) => {
    this.setState({ search, page: 1 });
  }


  handleSearch = () => {
    this.setState({ status: "pending", showModal: true });
  }

  openImage = ({ url, alt, indx }) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      image: { url, alt, indx }
    }));
    console.log(url, alt);
  }

  toggleModal = () => {
    this.setState(prevState => {
      return ({
        showModal: !prevState.showModal,
      })
    });
  }

  handleLoadMore = () => {
    this.handleSearch();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {this.state.status === "rejected" && <Modal onClose={this.toggleModal}><div>{this.state.error}</div></Modal>}
          
        {this.state.status === "pending" && <>
          {this.state.imageArray.length > 0 ?
            <>
            < ImageGallery imageArray={this.state.imageArray} onClick={this.openImage} />
              <LoadMoreBtn onClick={this.handleLoadMore} />
            <Loading/>
            </> : <Loading/>}
        </>
        }
        
        {this.state.status === "resolved" && <>
          {
            this.state.image ? 
              <>
                < ImageGallery imageArray={this.state.imageArray} onClick={this.openImage} />
                <LoadMoreBtn onClick={this.handleLoadMore} />
                <Modal onClose={this.toggleModal}><LargeImage data={this.state.image} /></Modal>
              </>:
              <>
                < ImageGallery imageArray={this.state.imageArray} onClick={this.openImage} />
                <LoadMoreBtn onClick={this.handleLoadMore} />
              </>
          }
        </>
        }
      </Container>
    );
  };
}