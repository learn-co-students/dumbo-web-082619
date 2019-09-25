class Pizza < ApplicationRecord
  has_many :pizza_toppings
  has_many :toppings, through: :pizza_toppings


  validates :cost, numericality: true
  validate :cost_between_five_and_fifty

  # cost must be between 5 and 50 dollars.
  def cost_between_five_and_fifty
    if cost <= 5 || cost >= 50
      errors.add(:cost, "has to be between 5 and 50")
    end
  end

end
