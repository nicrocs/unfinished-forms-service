// connects to remote prisma DB and allows for querying
const { Prisma } = require("prisma-binding");
const config = require("../config/project.config");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: config[process.env.NODE_ENV].endpoint,
  secret: config[process.env.NODE_ENV].prismaSecret,
  debug: false
});

module.exports = db;
