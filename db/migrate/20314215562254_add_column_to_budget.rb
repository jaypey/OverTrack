class AddColumnToBudget < ActiveRecord::Migration[6.1]
  def change
    add_column :budgets, :is_base_budget, :boolean, default: false
  end
end
