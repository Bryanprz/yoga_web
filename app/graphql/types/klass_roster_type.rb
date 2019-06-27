module Types
  class KlassRosterType < GraphQL::Schema::Object
    description 'Join model that joins students and klasses in a many-to-many-through relationship. Handles the student check in process for each klass.'

    field :id, ID, null: false
    field :student, StudentType, null: true
    field :klass, KlassType, null: true
    field :checked_in, Boolean, null: true
  end
end
