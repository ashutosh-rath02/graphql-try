// import { makeExecutableSchema } from "@graphql-tools/schema";
import { builder } from "./builder";
import "./models/User";
import "./models/Message";

// const typeDefinitions = /* GraphQL */ `
//   type Query {
//     hello: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello World!",
//   },
// };

// export const schema = makeExecutableSchema({
//   resolvers: [resolvers],
//   typeDefs: [typeDefinitions],
// });
export const schema = builder.toSchema({});
