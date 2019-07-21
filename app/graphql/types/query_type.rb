# Entry point to API server; "query root"

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :studio, StudioType, null: true do
      description "Represents a Yoga Studio in the system."
      argument :id, ID, required: true
    end
    def studio(id:)
      Studio.find(id)
    end

    field :klass, KlassType, null: true do
      description "Represents a Yoga Class. Spelled with K to avoid name clash with Ruby Class."
      argument :id, ID, required: true
    end
    def klass(id:)
      Klass.find(id)
    end

    field :current_user, Types::UserType, null: true, description: "The currently logged in user"
    def current_user
      context[:current_user]
    end

    field :klass_roster, [Types::KlassRosterType], null: false do
      description "See all students signed up for a class and who's checked in."
      argument :klass_id, ID, required: true
      argument :student_id, ID, required: false
    end
    def klass_roster(klass_id:, student_id:)
      klass = Klass.find(klass_id)
      return klass.klass_roster.where(student_id: student_id) if student_id
      return klass.klass_roster
    end

  end
end
