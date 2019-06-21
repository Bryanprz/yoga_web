# Entry point to API server; "query root"

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :studio, StudioType, null: true do
      description "Represents a Yoga Studio in the system."
      argument :id, ID, required: true
    end
    def studio(id:)
      Studio.find(id)
    end

    field :klass, KlassType, null: true do
      description "Represents a Yoga Class. Spelled with K to avoid name clash with Ruby Class."
      argument :id, ID, required: true
    end
    def klass(id:)
      Klass.find(id)
    end

  end
end
