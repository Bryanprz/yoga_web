class Types::TeacherInputType < GraphQL::Schema::InputObject
    argument :id, ID, required: false
    argument :name, String, required: false
end

module Types
  class TeacherType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :name, String, null: false
  end
end

