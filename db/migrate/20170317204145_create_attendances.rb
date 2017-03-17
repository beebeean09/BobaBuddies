class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.integer :user_id, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
    add_index :attendances, :user_id
    add_index :attendances, :host_id
  end
end
