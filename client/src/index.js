import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client.query({ 
  query: gql`
    { 
      rates(currency: "USD") { 
        currency
      }
    }
  `
}).then(result => console.log("result: ", result));

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App /> 
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
