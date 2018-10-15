import ApolloClient from 'apollo-boost';

class GraphQLClient {
  constructor() {
    this.client = new ApolloClient({
      uri: 'http://localhost:3030/graphql'
    });
  }

  async execute(query, variables) {
    const result = await this.client.query({
      query, variables
    });
    return result;
  }
}

export default GraphQLClient;