class Category < ApplicationRecord
  validates_presence_of :name, :color, :is_revenue

  has_many :expenses

  default_scope { order(rank: :asc, id: :asc) }
end
