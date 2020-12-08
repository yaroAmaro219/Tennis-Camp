class User < ApplicationRecord
  has_secure_password
  has_many :order
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}
end
