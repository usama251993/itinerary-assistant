import { NgModule } from '@angular/core';

import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
const createApollo = (httpLink: HttpLink): ApolloClientOptions<unknown> => ({
  link: httpLink.create({ uri }),
  cache: new InMemoryCache()
});

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
