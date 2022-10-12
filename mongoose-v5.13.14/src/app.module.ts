import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppResolver } from './app.resolver';
import { ObjectIdScalar } from './objectId.scalar';

@Module({
  controllers: [],
  exports: [],
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
      disableHealthCheck: true,
      playground: true,
    }),
  ],
  providers: [AppResolver, ObjectIdScalar],
})
export class AppModule {}
