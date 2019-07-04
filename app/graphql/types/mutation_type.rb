module Types
  class MutationType < Types::BaseObject
    field :addTeacherToKlass, mutation: Mutations::AddTeacherToKlass do
      description "Adds a teacher to a yoga klass in the system"
    end

    field :create_student, Types::StudentType, mutation: Mutations::CreateStudent do
      description "Create a student in the system"
    end

    field :create_klass, Types::KlassType, mutation: Mutations::CreateKlass do
      description "Creates a new yoga class for given studio."
    end
  end
end
