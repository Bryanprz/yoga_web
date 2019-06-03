class CreateJoinTableKlassesStudents < ActiveRecord::Migration[5.2]
  def change
    create_join_table :klasses, :students do |t|
       t.index [:klass_id, :student_id]
       t.index [:student_id, :klass_id]
    end
  end
end
