import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

import { ApolloProvider } from "@apollo/client/react";
import { ExampleData } from './ExampleData';
import MyFormExample from './MyFormExample';

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphqlzero.almansi.me/api" }),
  cache: new InMemoryCache(),
});

export default function MyGraphData() {
  return (
    <ApolloProvider client={client}>
    <MyFormExample />
  </ApolloProvider>
  )
}
