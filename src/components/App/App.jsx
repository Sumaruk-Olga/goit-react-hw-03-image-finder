import { Component } from "react";
// import { Container} from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { searchImage } from "services/searchApi";
import Modal from "components/Modal/Modal";
import { Image } from "components/Image/Image";


export class App extends Component {
  state = {
    search: '',
    status: null,
    imageArray: [],
    page: 1,
    error: null,
    showModal: false,
    image:null,
  };


  async componentDidUpdate(_, prevState) {    
    if (this.state.search !== prevState.search) {
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });       
        this.setState({
          imageArray: [...data.hits],
          status: "resolved",
          showModal: false,
    })          
    } catch {
      this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected", showModal:true });
    } finally {
      // i`m thinking
        
    }
    }

    if (this.state.page !== prevState.page & this.state.page!==1) {     
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });
        this.setState(prevState => ({
          imageArray: [...prevState.imageArray, ...data.hits],
          status: "resolved",
      showModal: false,
    }))
      
    } catch {
      this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected", showModal:true });
    } finally {
      // i`m thinking        
    }
    }

  }

  handleSubmit = ({search}) => {    
    this.setState({ search, page:1 });    
  }


  handleSearch = () => {    
    this.setState({ status: "pending" , showModal:true});    
  }

  openModal = ({url, alt}) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      image: {url, alt}
    }));
    console.log(url, alt);
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,      
    }));
  }

  handleLoadMore = () => {
    this.handleSearch();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    return (<>
      {/* // <Container>         */}
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.status === "resolved" && <>
          < ImageGallery imageArray={this.state.imageArray} onClick={this.openModal} />
          <Button onClick={this.handleLoadMore} />
        </>}
        {this.state.showModal && <Modal onClose={this.toggleModal}><Image data={this.state.image} /></Modal>}
        {this.state.status === "rejected" && <Modal onClose={this.toggleModal}><div>{this.state.error}</div></Modal>}
        {this.state.status==="pending" && <Modal onClose={this.toggleModal}><div>loading</div></Modal>}                
      {/* // </Container> */}
      </>
    );
  }
};
