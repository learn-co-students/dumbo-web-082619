class AddImageToTopping < ActiveRecord::Migration[6.0]
  def change
    add_column :toppings, :image, :string
  end
end
