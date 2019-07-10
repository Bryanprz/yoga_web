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
      argument :id, String, required: true
    end

    def delete_klass(id:)
      Klass.where(id: id).destroy_all
      true
    end

    field :login, String, null: true, description: "Login a user" do
      argument :email, String, required: true
      argument :password, String, required: true
    end
    def login(email:, password:)
      if user = User.where(email: email).first&.authenticate(password)
        user.sessions.create.key
      end
    end

    field :logout, Boolean, null: false
    def logout
      Session.where(id: context[:session_id]).destroy_all
      true
    end

  end
end
