class CreatePizzas < ActiveRecord::Migration[6.0]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :cost
      t.string :size
      t.boolean :extra_cheese

      t.timestamps
    end
  end
end
