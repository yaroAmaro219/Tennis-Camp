class OrderItem < ApplicationRecord
  belongs_to :session
  belongs_to :order
end
