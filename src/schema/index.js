
module.exports = {
  MyGraphQlSchema: `
    
    type Login {
      email: String!
      password: String!
      token: String!
    }
    
    type Booking {
      _id: ID!
      event: Event
      user: User
      createdAt: String!
      updatedAt: String!
    }
   
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
      creator: User!
    }
    
    type User {
      _id: ID!
      email: String!
      password: String
      createdEvent: [Event!]
    }
    
    input UserInput {
      email: String!
      password: String!
    }
    
    input LoginInput {
      email: String!
      password: String!
    }
    
    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }
    
    input BookingInput {
      title: String!
    }
    
    type RootQuery {
      events: [Event!]!
      bookings: [Booking!]!
      loginUser(loginInput: LoginInput): Login
    }
    
    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
      book(eventName: BookingInput): Event
    }
    schema {
    query: RootQuery
    mutation: RootMutation
    }
  `
};

