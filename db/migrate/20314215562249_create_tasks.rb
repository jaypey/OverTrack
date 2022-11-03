class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.boolean :is_done
      t.string :title
      t.text :description
      t.date :due_date
      t.integer :category_id
      t.references :budgets, null: false, foreign_key: true

      t.timestamps
    end
  end
end
