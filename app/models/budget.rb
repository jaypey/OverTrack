class Budget < ApplicationRecord
    validates_presence_of :name

    has_many :tasks, :dependent => :destroy
    has_many :categories, :dependent => :destroy
    has_and_belongs_to_many :users
end
