module Types
  class KlassType < GraphQL::Schema::Object
    description 'Represents a yoga class in the system. Spelled with K to avoid clashes with Ruby/JS Class'

    field :id, ID, null: false
    field :name, String, null: true
    field :description, String, null: true
    field :teachers, [TeacherType], null: true
  end
end
