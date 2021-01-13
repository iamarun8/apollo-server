# GraphQL #

# What is GraphQL #

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. Basically, it is used to load data from a server to a client -- it’s a way to get data from an API into your application. And as you’ll see, it does this in a much more efficient manner than traditional methods and services.

GraphQL was developed by Facebook in 2012 because the team needed “a data-fetching API powerful enough to describe all of Facebook, yet simple enough to be easy to learn and use by our product developers” when building the mobile applications. 

GraphQL has proven to be incredibly effective for building modern mobile and web, giving developers a flexible, rich technology for extracting data that is more efficient and less sprawling than REST APIs. The real secret is that GraphQL ensures that the developer and application only loads the relevant and absolute necessary data, even if it's from multiple sources.

# Difference between GraphQL and Rest. #

GraphQL is much different than a standard REST API where you typically have a specific endpoint or resource you’re hitting that determines an entire block of data that comes back in the returning JSON response, which then needs to be parsed and scattered.

GraphQL is instead established around schema, queries, and resolvers and rather aims to improve upon the REST philosophy by allowing you to ask for a specific piece of data not just the entire block. No need for parsing through a long stream of data you only get what you ask for. And what you ask for could be compiled from several different REST APIs.

However, let’s remember GraphQL and REST are two different things GraphQL is a language and a technology, while REST is an architecture pattern, which means that even as teams increasingly adopt GraphQL, it does not mean the end of the road for REST.

# Write down about Schema and Resolvers. #

## Schema ##

GraphQL server uses a schema to describe the shape of your data graph. This schema defines a hierarchy of types with fields that are populated from your back-end data stores. The schema also specifies exactly which queries and mutations are available for clients to execute against your data graph

The GraphQL specification includes a human-readable schema definition language (or SDL) that you use to define your schema and store it as a string.

Here's a short example schema that defines two object types: Book and Author:

type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

A schema defines a collection of types and the relationships between those types. In the example schema above, every Book has an author, and every Author has a list of books. By defining these type relationships in a unified schema, we enable client developers to see exactly what data is available and request a specific subset of that data with a single optimized query.

## Resolver ##

Apollo Server needs to know how to populate data for every field in your schema so that it can respond to requests for that data. To accomplish this, it uses resolvers.

A resolver is a function that's responsible for populating the data for a single field in your schema. It can populate that data in any way you define, such as by fetching data from a back-end database or a third-party API.