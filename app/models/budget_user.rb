class BudgetUser < ApplicationRecord
    belongs_to :user
    belongs_to :budget
end