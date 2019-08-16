// lib/withApollo.js
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
//import { GRAPHQL_URL } from '../configs';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache().restore(initialState || {})
    })
);