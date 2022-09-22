class ChangeNullableToNotNullableUsers < ActiveRecord::Migration[6.1]
  def change
      change_column :users, :email, :string, null: false
      change_column :users, :firstname, :string, null: false
      change_column :users, :lastname, :string, null: false
      change_column :users, :phone, :string, null: false
  end
end
