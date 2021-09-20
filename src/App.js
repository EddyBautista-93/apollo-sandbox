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

// defining the query 
const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

//exchange rates component 
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}


function App() {
  return (
    <div className="App">
      <h1> My first Apollo app 🚀</h1>
      <ExchangeRates />
      
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
