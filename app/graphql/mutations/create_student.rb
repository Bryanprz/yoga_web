class Mutations::CreateStudent < GraphQL::Schema::Mutation
  null true

  argument :name, String, required: true
  argument :email, String, required: true
  argument :phone_number, String, required: false

  def resolve(name:, email:, phone_number:)
    Student.create name: name, email: email, phone_number: phone_number
  end
end
