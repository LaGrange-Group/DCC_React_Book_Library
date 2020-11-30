import React, { Component } from 'react';
import LibraryNav from './components/navigation/libraryNav';
import BookViewer from './components/book-viewer/bookViewer'
import BookCreator from './components/book-creator/bookCreator';
import Footer from './components/footer/footer';
import Container from 'react-bootstrap/Container';
import bookData from './data/books.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.originalData = bookData;
    this.books = JSON.parse(JSON.stringify(this.originalData));
    this.state = { 
      bookNumber: 0
     }
  }

  addNewBook(book){
    this.books.push(book);
    this.setState({
      bookNumber: this.books.length - 1
    });
  }

  nextBook(){
    this.books = this.originalData;
    let bookNumberTemp = this.state.bookNumber + 1;
    if(bookNumberTemp >= this.books.length)
      bookNumberTemp = 0
    this.setState({
      bookNumber: bookNumberTemp,
    });
  }

  previousBook(){
    this.books = this.originalData;
    let bookNumberTemp = this.state.bookNumber - 1;
    if(bookNumberTemp < 0)
      bookNumberTemp = this.books.length - 1;
    this.setState({
      bookNumber: bookNumberTemp
    });
  }

  render() { 
    return (       
      <div>
        <Container fluid >
          <LibraryNav/>
          <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.nextBook()} previousBook={() => this.previousBook()}/>
          <BookCreator addNewBook={this.addNewBook.bind(this)}/>
          <Footer />
        </Container>
      </div> 
     );
  }
}
 
export default App;