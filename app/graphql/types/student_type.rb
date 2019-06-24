module Types
  class StudentType < GraphQL::Schema::Object
    field :id, ID, null: true
    field :name, String, null: true
  end
end


