import { Component } from "react";
import { Container} from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { searchImage } from "services/searchApi";


export class App extends Component {
  state = {
    search: '',
    status: null,
    imageArray: [],
    page: 1,
    error:null,
  };


  async componentDidUpdate(_, prevState) {    
    if (this.state.search !== prevState.search) {
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });       
        this.setState({
          imageArray: [...data.hits],
          status: "resolved"
    })          
    } catch {
      this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected" });
    } finally {
      // i`m thinking
        
    }
    }

    if (this.state.page !== prevState.page & this.state.page!==1) {     
      try {
        const data = await searchImage({ search: this.state.search, page: this.state.page });
        console.log(data);
        
         this.setState(prevState => ({
      imageArray: [...prevState.imageArray, ...data.hits]
    }))
      
    } catch {
      this.setState({ error: `Failed to load ${this.state.search} :(`, status: "rejected" });
    } finally {
      // i`m thinking        
    }
    }

  }

  handleSubmit = ({search}) => {    
    this.setState({ search, page:1 });    
  }


  handleSearch = () => {    
    this.setState({ status: "pending" });    
  }

  handleLoadMore = () => {
    console.log('завантажуємо ще');

this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    return (
      <Container>        
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.status === "resolved" && <>< ImageGallery imageArray={ this.state.imageArray} /> <Button onClick={this.handleLoadMore} /> </>}
        {this.state.status === "rejected" && <div>{this.state.error}</div>}
        {this.state.status==="pending" && <div>loading</div>}                
      </Container>
    );
  }
};
