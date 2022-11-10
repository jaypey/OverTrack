class Category < ApplicationRecord
  validates_presence_of :name, :color, :is_revenue

  belongs_to :budget
  has_many :expenses
  has_many :revenues

  default_scope { order(rank: :asc, id: :asc) }
end
