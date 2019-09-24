class CreateToppings < ActiveRecord::Migration[6.0]
  def change
    create_table :toppings do |t|
      t.belongs_to :pizza, null: false, foreign_key: true
      t.string :name
      t.string :tasting_notes

      t.timestamps
    end
  end
end
