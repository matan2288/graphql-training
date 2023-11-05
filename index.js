import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefinitions } from "./schema.js";
import { resolvers } from "./resolvers.js";

// Server setup

const server = new ApolloServer({
	// This object takes 2 parameters
	// 1.TypeDefinitions (Definition of our datatypes and their relationship with the other data types)
    typeDefs: typeDefinitions,
	// 2.Resolvers (how do we respond to different kind of queries, how to handle/respond to any type of request of the queries)
    resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log("Server ready", url);
