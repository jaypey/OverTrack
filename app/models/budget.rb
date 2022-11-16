class Budget < ApplicationRecord
    validates_presence_of :name

    has_many :tasks, :dependent => :destroy
    has_many :categories, :dependent => :destroy

    has_many :budget_users, :dependent => :destroy
    has_many :users, through: :budget_users

end
