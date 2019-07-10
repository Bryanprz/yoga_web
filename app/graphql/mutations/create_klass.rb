class Mutations::CreateKlass < GraphQL::Schema::Mutation
  null true

  argument :klass, Types::KlassInputType, required: true
  argument :teacher, Types::TeacherInputType, required: false

  def resolve(klass:, teacher:)
    klass = Klass.create klass.to_h

    if teacher.to_h.has_key?(:id) and !teacher.to_h[:id].blank?
      teacher = Teacher.find(teacher.to_h[:id])
    else
      teacher = Teacher.create teacher.to_h
    end

    klass.teachers << teacher
    klass
  end

  def self.accessible?(context)
    context[:current_user]&.is_admin?
  end
end
