class Budget < ApplicationRecord
    validates_presence_of :name

    has_many :budget_users
    has_many :users, through: :budget_users
end
