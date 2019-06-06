module Types
  class KlassType < GraphQL::Schema::Object
    field :id, ID, null: true
    field :name, String, null: true
    field :description, String, null: true
  end
end
