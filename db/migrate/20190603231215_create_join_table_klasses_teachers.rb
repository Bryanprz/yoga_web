class CreateJoinTableKlassesTeachers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :klasses, :teachers do |t|
       t.index [:klass_id, :teacher_id]
       t.index [:teacher_id, :klass_id]
    end
  end
end
