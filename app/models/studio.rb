class Studio < ApplicationRecord
  has_many :klasses
  has_and_belongs_to_many :teachers
  has_many :students, -> { distinct }, through: :klasses
end
