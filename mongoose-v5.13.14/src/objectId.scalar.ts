import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { Types } from 'mongoose';

@Scalar('ObjectId', () => Types.ObjectId)
export class ObjectIdScalar implements CustomScalar<string, Types.ObjectId> {
  description = 'Types.ObjectId custom scalar type';

  parseValue(value: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(value);
  }

  serialize(value: Types.ObjectId): string {
    return value.toHexString();
  }

  parseLiteral(ast: ValueNode): Types.ObjectId {
    if (ast.kind === Kind.STRING) {
      return Types.ObjectId.createFromHexString(ast.value);
    }

    return null;
  }
}
