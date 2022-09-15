class User < ApplicationRecord
  def password=(value)
    super(BCrypt::Password.create(value))
  end

  def email=(value)
    super(value)
  end 

  def first_name=(value)
    super(value)
  end

  def last_name=(value)
    super(value)
  end

  def phone_number=(value)
    super(value)
  end
end
