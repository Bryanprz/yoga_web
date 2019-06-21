class DropLists < ActiveRecord::Migration[5.2]
  def up
    drop_table :lists
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
