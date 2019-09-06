class CreateVisits < ActiveRecord::Migration[5.2]
  def change

    create_table :visits do |t|
      t.integer :cat_id
      t.integer :vet_id
      t.string :time
    end
    
  end
end
