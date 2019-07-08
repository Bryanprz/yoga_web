class Mutations::EditKlass < GraphQL::Schema::Mutation
  null true

  argument :id, ID, required: true
  argument :klass, Types::KlassInputType, required: false
  argument :teacher, Types::TeacherInputType, required: false

  def resolve(id:, klass:, teacher:)
    klass = Klass.find(id)
    require 'pry'; binding.pry

    if teacher.to_h.has_key?(:id) and !teacher.to_h[:id].blank?
      teacher = Teacher.find(teacher.to_h[:id])
    else
      teacher = Teacher.create teacher.to_h
    end

    klass.teachers << teacher
    klass
  end

end

