class Teacher < ApplicationRecord
  has_and_belongs_to_many :klasses
  has_and_belongs_to_many :studios
end
