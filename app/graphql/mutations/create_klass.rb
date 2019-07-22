# TODO refactor into one generic make_records method that takes in a class type and params.

class Mutations::CreateKlass < GraphQL::Schema::Mutation
  null true

  argument :klass, Types::KlassInputType, required: true
  argument :teachers, [Types::TeacherInputType], required: false
  argument :students, [Types::StudentInputType], required: false

  def resolve(klass:, teachers:, students:)
    klass_model = Klass.create klass.to_h

    teacher_models = teachers.map(&:to_h).map { |t| make_teacher_records(t) }
    klass_model.teachers << teacher_models

    student_models = students.map(&:to_h).map { |s| make_student_records(s) }
    klass_model.students << student_models

    klass_model
  end

  def self.accessible?(context)
    context[:current_user]&.is_admin?
  end

  private
  def make_teacher_records(teacher_params)
    if teacher_params.to_h.has_key?(:id) and !teacher_params.to_h[:id].blank?
      teacher = Teacher.find(teacher_params.to_h[:id])
    else
      teacher = Teacher.create teacher_params.to_h
    end
    teacher
  end

  def make_student_records(student_params)
    if student_params.to_h.has_key?(:id) and !student_params.to_h[:id].blank?
      student = Student.find(student_params.to_h[:id])
    else
      student = Student.create student_params.to_h
    end
    student
  end
end
