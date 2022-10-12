import {
  Args,
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
class AppQuery {
  @Field(() => String, { nullable: true })
  id: string;
}

@InputType()
class AppQueryInput {
  @Field(() => Types.ObjectId)
  idForCastingToScalar: Types.ObjectId;
}

@Resolver()
export class AppResolver {
  @Query(() => AppQuery)
  public async appQuery(
    @Args('input') input: AppQueryInput,
  ): Promise<AppQuery> {
    console.log({ input });

    return {
      id: '_________',
    };
  }
}
