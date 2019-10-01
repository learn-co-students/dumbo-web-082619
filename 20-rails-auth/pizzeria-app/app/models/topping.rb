class Topping < ApplicationRecord
  has_many :pizza_toppings, dependent: :destroy
  has_many :pizzas, through: :pizza_toppings

  validates :name, length: { minimum: 2 }
  validates :name, uniqueness: true

end
