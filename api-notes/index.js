// require('dotenv').config()
import {} from 'dotenv/config'
import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema";

const host = process.env.MONGO_HOST
const MongoPort = process.env.MONGO_PORT
const database = process.env.MONGO_DB

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${host}:${MongoPort}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = process.env.LOCAL_PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Notes API v1"
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});