class CreateWorkoutSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :workout_sessions do |t|
      t.string :title, limit: 50, null: false
      t.string :description, null: false
      t.time :duration, null: false
      t.string :location

      t.timestamps
    end
  end
end
