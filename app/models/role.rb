class Role < ApplicationRecord
    validates_presence_of :role_name, :role_value

    has_many :budget_users
end