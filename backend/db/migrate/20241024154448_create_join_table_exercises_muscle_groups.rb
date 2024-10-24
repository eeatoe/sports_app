class CreateJoinTableExercisesMuscleGroups < ActiveRecord::Migration[7.1]
  def change
    create_join_table :exercises, :muscle_groups do |t|
      t.index :exercise_id
      t.index :muscle_group_id
    end
  end
end
