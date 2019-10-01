class AddUserToPizzas < ActiveRecord::Migration[6.0]
  def change
    add_column :pizzas, :user_id, :integer, foreign_key: true
    change_column_null :pizzas, :user_id, false
  end
end
