class AddRevenueToCategory < ActiveRecord::Migration[6.1]
    def change 
        add_column :categories, :is_revenue, :integer, null:false
    end
end