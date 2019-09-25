class Topping < ApplicationRecord
  belongs_to :pizza
  validates :name, presence: true
  validates :name, length: { minimum: 2 }
  validates :tasting_notes, presence: true
  validates :tasting_notes, length: { maximum: 500 }
  validates :name, uniqueness: true

end
