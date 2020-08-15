import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Note {
        _id: ID!
        title: String!,
        content: String!,
        done: Boolean!,
        priority: Priority,
        date: Date
        
    }

    enum Priority {
        HIGH
        MEDIUM
        LOW
    }

    scalar Date

    type Query {
        allNotes: [Note]
        getNote(_id: ID!): Note
    }

    input NoteInput {
        title: String!,
        content: String!,
        done: Boolean!,
        priority: Priority
    }

    input NoteUpdateInput {
        title: String,
        content: String,
        done: Boolean,
        priority: Priority
     }

    type Mutation {
        createNote(input: NoteInput) : Note
        updateNote(_id: ID!, input: NoteUpdateInput): Note
        deleteNote(_id: ID!) : Note
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;