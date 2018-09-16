export default `
    type Query {

        # User collection
        users: [User]

        # User unit
        user (
            id: String
        ): User

    }

    type Mutation {

        # User create
        user_create (
            input: UserInput
        ): User

        # User update
        user_update (
            id: ID
            input: UserInput
        ): User

    }

    type User {

        # User id
        id: ID

        # User name
        name: String

    }

    input UserInput {
        name: String
    }
`
