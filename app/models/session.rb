class Session < ApplicationRecord
  has_many :order_items
  has_many :orders, through: :order_items
  # monetize :price, as: "price"
end
