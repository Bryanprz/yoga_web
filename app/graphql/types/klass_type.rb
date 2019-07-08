class Types::KlassInputType < GraphQL::Schema::InputObject
    # args have to match field names for the return type, e.g. KlassType
    # arg names should be snake-cased (server ruby syntax) in this server definition
    # and camel-cased in client-side calls

    argument :id, ID, required: false
    argument :name, String, required: false
    argument :description, String, required: false
    argument :start_time, Types::DateTimeType, required: false
    argument :end_time, Types::DateTimeType, required: false
    argument :studio_id, ID, required: false
end

module Types
  class KlassType < GraphQL::Schema::Object
    description 'Represents a yoga class in the system. Spelled with K to avoid clashes with Ruby/JS Class'

    field :id, ID, null: false
    field :studio_id, ID, null: false
    field :name, String, null: true
    field :description, String, null: true
    field :start_time, String, null: true
    field :end_time, String, null: true
    field :teachers, [TeacherType], null: true
    field :students, [StudentType], null: true
    field :klass_roster, [KlassRosterType], null: true
  end
end
