class CreateAddEventIdToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :attendances, :event_id, :integer, null: false
    add_index :attendances, :event_id
  end
end
