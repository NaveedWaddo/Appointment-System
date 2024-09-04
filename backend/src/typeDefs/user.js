const { gql } = require('apollo-server');

module.exports = gql`
  type Availability {
    day: String!
    startTime: String!
    endTime: String!
  }

  type NotificationPreferences {
    email: Boolean
    sms: Boolean
  }

  type User {
    id: ID!
    name: String!
    email: String!
    availability: [Availability]
    notificationPreferences: NotificationPreferences
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean
    setAvailability(userId: ID!, availability: [AvailabilityInput]!): User
  }

  input AvailabilityInput {
    day: String!
    startTime: String!
    endTime: String!
  }
`;
