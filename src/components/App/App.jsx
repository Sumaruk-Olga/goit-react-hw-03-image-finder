import { Component } from "react";
import { Container} from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";


export class App extends Component {
  state = {
    search:'',
  };

  componentDidMount() {
    
  }

  componentDidUpdate(_, prevState) {
    if (this.state.search !== prevState.search) {
      console.log('змінився запит');
      console.log('відправили запит на сервер');
      this.handleSearch();
    }
  }

  handleSubmit = ({search}) => {    
    this.setState({ search });    
  }


  handleSearch=()=>{
    console.log('робимо фетч');
  }

  handleLoadMore = () => {
    console.log('завантажуємо ще');
    this.handleSearch();
  }

  render() {
    return (
      <Container>        
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        <Button onClick={this.handleLoadMore} />        
      </Container>
    );
  }
};
