# Entry point to API server; "query root"

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :studio, StudioType, null: true do
      description "get studio"
      argument :id, ID, required: true
    end
    def studio(id:)
      Studio.find(id)
    end
  end
end
