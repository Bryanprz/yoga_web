class CreateStudioTeacher < ActiveRecord::Migration[5.2]
  def change
    create_table :studio_teachers do |t|
      t.belongs_to :studio, foreign_key: true
      t.belongs_to :teacher, foreign_key: true
    end
  end
end
