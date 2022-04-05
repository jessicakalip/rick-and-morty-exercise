import React from 'react';
import {
  ApolloProvider,
} from "@apollo/client";
import client from './config/apolloConfig'
import Characters from './components/characters/characters';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Characters />
      </div>
    </ApolloProvider>
  );
}

export default App;
