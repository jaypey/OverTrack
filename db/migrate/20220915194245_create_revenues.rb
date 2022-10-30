class CreateRevenues < ActiveRecord::Migration[6.1]
    def change
      create_table :revenues do |t|
        t.text :description, null: false
        t.integer :amount, null: false
        t.integer :category_id, null: false
        t.datetime :paid_at, null: false
  
        t.timestamps
      end
      add_index :revenues, :amount
      add_index :revenues, :category_id
      add_index :revenues, :paid_at
    end
  end