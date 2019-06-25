class CreateKlassRosters < ActiveRecord::Migration[5.2]
  def change
    create_table :klass_rosters do |t|
      t.belongs_to :student, foreign_key: true
      t.belongs_to :klass, foreign_key: true
      t.boolean :checked_in

      t.timestamps
    end
  end
end
