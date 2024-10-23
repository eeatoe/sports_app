class CreateExercises < ActiveRecord::Migration[7.1]
  def change
    create_table :exercises do |t|
      t.text :name, null: false
      t.text :description, null: false
      t.text :muscles, null: false
      t.text :link, null: false

      t.timestamps
    end
  end
end
