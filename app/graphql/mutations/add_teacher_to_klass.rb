# TODO add this functionality to createKlass mutation with multiple teachers as arg option
module Mutations
  class AddTeacherToKlass < Mutations::BaseMutation
    null true

    argument :teacher_id, ID, required: true
    argument :klass_id, ID, required: true

    # return type
    field :klass, Types::KlassType, null: true

    def resolve(teacher_id:, klass_id:)
      teacher = Teacher.find(teacher_id)
      klass = Klass.find(klass_id)

      klass.teachers << teacher
      klass
    end
  end
end
