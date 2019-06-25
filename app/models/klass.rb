class Klass < ApplicationRecord
  belongs_to :studio
  has_and_belongs_to_many :teachers
  has_many :klass_roster
  has_many :students, through: :klass_roster
end
