class AddRoles < ActiveRecord::Migration[6.1]
    def change
        create_table :roles do |t|
          t.bigint :role_value, null: false
          t.string :role_name, null: false
        end
      add_column :budget_users, :role_value, :bigint
      add_index :budget_users, :role_value

    end
  end