class AddColumnToBudgetsUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :budgets_users, :token, :string
    add_column :budgets_users, :confirmed, :boolean
  end
end
