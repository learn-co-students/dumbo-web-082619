class CreateInterest < ActiveRecord::Migration
  def change
    create_table :interests do |t|
      t.integer :student_id
      t.integer :topic_id
    end
  end
end
