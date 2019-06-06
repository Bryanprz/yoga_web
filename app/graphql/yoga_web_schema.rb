class YogaWebSchema < GraphQL::Schema
  mutation(Types::MutationType)

  # build schema with Types::QueryType as query entry point
  query(Types::QueryType)
end
