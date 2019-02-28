import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost"
import{ApolloProvider} from 'react-apollo'

import BookList from './components/Books/BookList';
import AddBook from './components/Books/AddBook';
import AddAuthor from './components/Authors/AddAuthor';
import AuthorsList from './components/Authors/AuthorsList';
import Header from './components/Header';
import Background from './back.jpeg'
const client = new ApolloClient({
  uri:"http://localhost:8080/graphql"
})

class App extends Component {
  
  render() { 
    return (
      <ApolloProvider client={client}>

      <div >
      <div className="home" style={{ backgroundImage: `url(${Background})`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
      <br />,
      <br />
      <br />
        <div className="books">
        <BookList />
        </div>
       
        <div className="addBooks">
        <AddBook />
        </div>
        <hr />
        <br />
        <div className="authorsList">

        <h3>Authors List</h3>
        <AuthorsList />
        </div>
        <div className="addAuthor">
        <p>Add Author</p>
        <AddAuthor/>
        </div>
        <br />
        </div>
        </div>
       
      </ApolloProvider>
    );
  }
}

export default App;
