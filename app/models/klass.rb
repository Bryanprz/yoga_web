class Klass < ApplicationRecord
  belongs_to :studio
  has_and_belongs_to_many :students
  has_and_belongs_to_many :teachers
end
