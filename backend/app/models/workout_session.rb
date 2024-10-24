class WorkoutSession < ApplicationRecord
  has_many :exercises
  
  LOCATIONS = ['Gym', 'Home', 'Outdoor', 'Office']

  validates :location, inclusion: { in: LOCATIONS, message: "%{value} is not a valid location" }
end
