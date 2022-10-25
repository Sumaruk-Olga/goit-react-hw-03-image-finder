import { Component } from "react";
import { Container, SectionTitle, PageTitle } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";

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


  render() {
    return (
      <Container>
        <PageTitle>GoIT React HW 3 Image finder</PageTitle>
        <Searchbar onSubmit={this.handleSubmit} />
        <SectionTitle>other title</SectionTitle>
      </Container>
    );
  }
};
