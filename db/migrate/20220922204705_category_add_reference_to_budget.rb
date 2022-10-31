class CategoryAddReferenceToBudget < ActiveRecord::Migration[6.1]
  def change
    add_reference :categories, :budget, foreign_key: true
  end
end
