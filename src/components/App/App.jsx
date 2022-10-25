import { Component } from "react";
import { Container, SectionTitle, PageTitle } from "./App.styled";
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
    }
  }

  handleSubmit = ({search}) => {    
    this.setState({ search });    
  }


  handleLoadMore = () => {
    console.log('завантажуємо ще');
  }

  render() {
    return (
      <Container>
        <PageTitle>GoIT React HW 3 Image finder</PageTitle>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        <Button onClick={this.handleLoadMore} />
        <SectionTitle>other title</SectionTitle>
      </Container>
    );
  }
};
