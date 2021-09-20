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


function App() {
  
  client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

  return (
    <div className="App">
      <h1> Place Holder Text</h1>
      
      
    </div>
  );
}

export default App;
