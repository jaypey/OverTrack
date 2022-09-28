class AddBudget < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
     t.string :name, null: false
     t.text :description

     t.references :owner, null: false

     t.timestamps
    end

    add_foreign_key :budgets, :users, column: :owner_id

    create_join_table :budgets, :users do |t|
      t.index :budget_id
      t.index :user_id
    end
 end

end
