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
      argument :teacher, Types::TeacherInputType, required: false
    end

    def update_klass(klass:, teacher:)
      teacher_id = teacher.to_h.blank? ? nil : teacher.to_h[:id]
      klass_id = klass.to_h.blank? ? nil : klass.to_h[:id]

      existing = Klass.where(id: klass_id).first
      teacher = Teacher.where(id: teacher_id).first

      unless existing.teachers.map(&:id).include?(teacher.try(:id)) or teacher.nil?
        existing.teachers << teacher
      end

      existing&.update klass.to_h
    end

    field :delete_klass, Boolean, null: false, description: "Delete a class." do
      argument :id, ID, required: true
    end

    def delete_klass(id:)
      Klass.where(id: id).destroy_all
      true
    end
  end
end
