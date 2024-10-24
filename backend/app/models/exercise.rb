class Exercise < ApplicationRecord
  has_and_belongs_to_many :workout_sessions
  has_and_belongs_to_many :muscle_groups
end
