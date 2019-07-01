import graphqlHTTP from 'express-graphql';
import {buildSchema} from "graphql";
import schema from '../schema';
import {loginUser, createUser, createEvent, events, bookings, book} from "../modules";

export default graphqlHTTP({
  schema: buildSchema(schema.MyGraphQlSchema),
  rootValue: {
    createUser,
    loginUser,
    createEvent,
    events,
    bookings,
    book
  }
  ,
  graphiql: true
})
