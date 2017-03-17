class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :city_id, null: false
      t.integer :host_id, null: false
      t.string :title, null: false
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.string :address, null: false
      t.integer :seats, null: false

      t.timestamps
    end

    add_index :events, :city_id
    add_index :events, :host_id
  end
end
