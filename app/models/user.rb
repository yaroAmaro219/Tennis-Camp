class User < ApplicationRecord
  has_secure_password
  has_many :orders

  def current_orders
    []
  end
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}
end
