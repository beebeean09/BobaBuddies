class CreateRemoveHostIdFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :attendances, :host_id, :integer
  end
end
