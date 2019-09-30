class CreatePizzaToppings < ActiveRecord::Migration[6.0]
  def change
    create_table :pizza_toppings do |t|
      t.belongs_to :pizza, null: false, foreign_key: true
      t.references :topping, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
