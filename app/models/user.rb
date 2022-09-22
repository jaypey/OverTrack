class User < ApplicationRecord
  def password=(value)
    super(BCrypt::Password.create(value))
  end

  has_and_belongs_to_many :budgets

end
