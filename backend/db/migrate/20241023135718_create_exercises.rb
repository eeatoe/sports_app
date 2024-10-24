class CreateExercises < ActiveRecord::Migration[7.1]
  def change
    create_table :exercises do |t|
      t.text :name, unique: true, null: false
      t.text :description, limit: 50, null: false
      t.text :muscle_groups, array: true, null: false
      t.text :link, null: false

      t.timestamps
    end
  end
end
