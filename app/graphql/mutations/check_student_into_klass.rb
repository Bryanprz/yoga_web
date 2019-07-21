module Mutations
  class CheckStudentIntoKlass < Mutations::BaseMutation
    null true

    argument :student_id, ID, required: false # also used for creating new students
    argument :klass_id, ID, required: true

    # return type
    field :klass, Types::KlassType, null: true

    def resolve(student_id:, klass_id:)
      student = Student.find(student_id)
      klass = Klass.find(klass_id)

      require 'pry'; binding.pry
      klass.klass_roster << teacher
      klass
    end
  end
end
