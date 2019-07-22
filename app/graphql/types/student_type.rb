class Types::StudentInputType < GraphQL::Schema::InputObject
    argument :id, ID, required: false
    argument :name, String, required: false
end

module Types
  class StudentType < GraphQL::Schema::Object
    field :id, ID, null: true
    field :name, String, null: true
  end
end


