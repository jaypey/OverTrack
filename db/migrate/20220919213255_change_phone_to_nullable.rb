class ChangePhoneToNullable < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :phone, :string, null: true
  end
end
