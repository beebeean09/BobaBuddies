class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name
      t.boolean :host, null: false
      t.string :boba_choice
      t.integer :city_id
      t.string :profile_image
      t.text :description

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
