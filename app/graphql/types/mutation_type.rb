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

    field :update_klass, Boolean, null: false, description: "Edit an existing yoga class. Requires ID and new attributes." do
      argument :klass, Types::KlassInputType, required: true
    end

    def update_klass(klass:)
      existing = Klass.where(id: klass[:id]).first
      existing&.update klass.to_h
    end
  end
end
