class User < ApplicationRecord

  validates :email, presence: true { message: "You must add an email address" }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Your email address must be valid" }
  validates :email, uniqueness: { message: "Your email address must be unique" }
  validates :firstname, presence: true { message: "You must add a first name" }
  validates :lastname, presence: true { message: "You must add a last name" }
  validates :phone, format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, message: "Your phone number must be valid" }, allow_blank: true
  validates :password, presence: true { message: "You must a password" }
  validates :password, confirmation: true
  validates :password, format: { with: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, message: "Your password must be secure" }
  validates :password_confirmation, presence: true { message: "You must confirm your password" }

  def password=(value)
    super(BCrypt::Password.create(value))
  end
end
