class AddWorkoutSessionToExercises < ActiveRecord::Migration[7.1]
  def change
    add_reference :exercises, :workout_session, foreign_key: true
  end
end