import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

// init ApolloClient
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io', // uri specifies the url for our graphql server
  cache: new InMemoryCache() // client uses to cache query results after fetching them 
});

// get dogs graphql queries 
const GET_DOGS = gql`
query GetDogs {
  dogs {
    id
    breed
  }
}
`;

// new dog component
const Dogs = ({ onDogSelected }) => {

  const { loading, error, data } = useQuery()

  if(loading) return "Loading...";
  if(error) return `Error! ${error.message}`;



}





function App() {
  return (
    <div className="App">
      <h1> My first Apollo app 🚀</h1>   
    </div>
  );
}
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

export default App;
