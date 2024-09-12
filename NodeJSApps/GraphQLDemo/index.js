import { ApolloServer,gql } from 'apollo-server';

//Schema and querys  for the graphql
const typeDefs = `
  type Employee {
    id: Int
    name: String
    salary: Float
  }

  type Query {
    displayemps:[Employee]
    view: String
  }
  `
//dataset
  const emps=[
    {
        id:101,
        name:"klu",
        salary:12000
    },
    {
        id:102,
        name:"adnan",
        salary:15000
    },
    {
        id:101,
        name:"shariff",
        salary:15000
    }
  ]

//function fro every query you defined in schema
const resolvers = {
    Query: {
      displayemps: () =>emps,
      view:() =>"Hello MSWD"
    },
  };
  
  const server = new ApolloServer({ typeDefs, resolvers,});

  server.listen({port:2014}).then(({ url }) => {
    console.log(` Server ready at ${url}`);
  });