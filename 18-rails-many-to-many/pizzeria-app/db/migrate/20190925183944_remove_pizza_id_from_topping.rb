class RemovePizzaIdFromTopping < ActiveRecord::Migration[6.0]
  def change
    remove_column :toppings, :pizza_id
  end
end
