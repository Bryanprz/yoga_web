module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    # used for generating payload types: https://graphql-ruby.org/mutations/mutation_classes
    object_class Types::BaseObject

    # used for generating input object type
    input_object_class Types::BaseInputObject
  end
end
