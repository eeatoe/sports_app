class CreateWorkoutSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :workout_sessions do |t|
      t.string :title, limit: 50, null: false
      t.string :description, null: false
      t.string :workout_category, null: false
      t.integer :duration, null: false
      t.integer :calories_burned
      t.string :difficulty_level
      t.string :location

      t.timestamps
    end

    execute <<-SQL
      ALTER TABLE workout_sessions 
      ADD CONSTRAINT duration_greater_than_5 
      CHECK (duration > 5);
    SQL

    execute <<-SQL
      ALTER TABLE workout_sessions 
      ADD CONSTRAINT calories_burned_greater_than_5 
      CHECK (calories_burned > 50);
    SQL
  end
end