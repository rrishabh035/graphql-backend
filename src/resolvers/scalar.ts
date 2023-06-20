import { GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Default date",
  serialize: (value) => {
    console.log(value);
    if (value instanceof Date) {
      return value.getTime();
    }
    return null;
  },

  parseValue: (value: any) => {
    if (value !== null) return new Date(value);
    return null;
  },

  parseLiteral: (ast: any) => {
    if (ast.kind === Kind.INT) return new Date(parseInt(ast.value));
    return null;
  },
});
