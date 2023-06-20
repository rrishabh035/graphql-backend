import { GraphQLTypeResolver } from "graphql";
import { candidates } from "./candidate.js";
import { jobs } from "./jobs.js";
import { ENUMS } from "./enums.js";
import { SearchResults } from "./search.js";
import { DateScalar } from "./scalar.js";
import GraphQLJSON from "graphql-type-json";

export const resolver = {
  ...ENUMS,
  SearchResults,
  Date: DateScalar,

  JSON: GraphQLJSON,

  Query: {
    jobs: () => jobs,
    candidates: () => candidates,
    search: () => [...jobs, ...candidates],
  },
};
