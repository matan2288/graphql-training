GraphQL is a query language for APIs and a runtime environment for executing those queries with your existing data. Unlike traditional REST APIs, where the server defines the structure of the response data, GraphQL allows clients to request only the specific data they need. Here are the key concepts of GraphQL:

1. Schema: GraphQL APIs are defined by a schema, which describes the types of data you can query and the relationships between them. It acts as a contract between the client and the server.

2. Types: GraphQL schemas are composed of types, which represent objects and their relationships. Types can be scalar (e.g., String, Int, Boolean) or complex (custom objects defined in the schema).

3. Queries: Clients can request data using queries. A query in GraphQL looks similar to the shape of the response data. Clients can specify the fields they need, and the server will respond with data in the same structure.
Example Query:

4. Mutations: Mutations are used to modify data on the server. Unlike queries, mutations can have side effects, such as creating, updating, or deleting data.
Example Mutation:

5. Subscriptions: GraphQL supports real-time updates through subscriptions. Clients can subscribe to specific events, and the server will push data to the clients when those events occur.
Example Subscription:

GraphQL provides a more flexible, efficient, and precise way for clients to interact with APIs, allowing them to request exactly what they need and nothing more. This flexibility makes it popular for modern web and mobile applications.![image](https://github.com/matan2288/graphql-training/assets/60103076/71a080b3-842e-4402-bca1-ff9d7633b181)
