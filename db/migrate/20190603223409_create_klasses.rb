class CreateKlasses < ActiveRecord::Migration[5.2]
  def change
    create_table :klasses do |t|
      t.string :name
      t.text :description
      t.datetime :start_time
      t.datetime :end_time
      t.references :studio

      t.timestamps
    end
  end
end
