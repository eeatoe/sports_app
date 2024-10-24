class WorkoutSession < ApplicationRecord
  has_and_belongs_to_many :exercises
  
  WORKOUT_CATEGORY = ['Strength training', 
                      'Cardio training', 
                      'Functional training', 
                      'Strength aerobics',
                      'Plyometrics',
                      'Endurance training',
                      'Flexibility and stretching',
                      'High-Intensity Interval Training',
                      'CrossFit',
                      'Yoga',
                      'Pilates'
                      'Bodyweight training',
                      'Aerobics'
                    ]
  DIFFICULTY_LEVEL = ['easy', 'medium', 'hard']
  LOCATIONS = ['Gym', 'Home', 'Outdoor', 'Office', 'Outdoor Gym Area']

  validates :title,
            presence: true,
            format: { with: /\A[A-Za-z.,:&/]+\z/, message: "can only include letters, punctuation marks, and symbols: / and &" },
            length: { within: 4..50,
                      too_short: "must be at least 4 characters",
                      too_long: "must be at most 50 characters" }

  validates :description, presence: true
  validates :workout_category, 
            presence: true,
            inclusion: { in: WORKOUT_CATEGORY, message: "%{value} is not a valid workout category" }
  
            validates :duration, presence: true, numericality: { greater_than: 5 }
  validates :calories_burned, numericality: { greater_than: 50 }
  validates :difficulty_level,
            presence: true,
            inclusion: { in: DIFFICULTY_LEVEL, message: "%{value} is not a valid difficulty level" }

  validates :location, inclusion: { in: LOCATIONS, message: "%{value} is not a valid location" }
end