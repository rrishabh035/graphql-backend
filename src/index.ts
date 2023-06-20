import { ApolloServer } from "@apollo/server";
import { candidate } from "./types/candidate.js";
import { job } from "./types/job.js";
import { resolver } from "./resolvers/index.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import { search } from "./types/search.js";

const server = new ApolloServer({
  typeDefs: [candidate, job, search],
  resolvers: resolver,
});

const port = Number(process.env.PORT || 4000);

startStandaloneServer(server, {
  listen: {
    port: port,
  },
})
  .then(({ url }) => {
    console.log(`Server started to run at ${url}`);
  })
  .catch((e) => {
    console.log(e);
  });
