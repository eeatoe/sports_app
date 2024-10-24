class CreateJoinTableWorkoutsExercises < ActiveRecord::Migration[7.1]
  def change
    create_join_table :workout_sessions, :exercises do |t|
      t.index [:workout_session_id, :exercise_id]
      t.index [:exercise_id, :workout_session_id]
    end
  end
end