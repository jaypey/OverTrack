class RemakeBudgetUser < ActiveRecord::Migration[6.1]
  def change

    drop_join_table :budgets, :users

    create_table :budget_users do |t|
      t.references :budget
      t.references :user
      t.string :token
      t.boolean :confirmed, default: false
    end
  end
end
