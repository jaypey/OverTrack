class AddsInformationToUsers < ActiveRecord::Migration[6.1]
    def change
        add_column :users, :email, :string
        add_column :users, :firstname, :string
        add_column :users, :lastname, :string
        add_column :users, :phone, :string
    end
end