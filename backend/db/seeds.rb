# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

muscle_groups = [
  "Muscles of the Head",
  "Masticatory Muscles",
  "Facial Muscles",
  "Muscles of the Neck",
  "Muscles of the Torso",
  "Muscles of the Chest",
  "Muscles of the Abdomen",
  "Muscles of the Back",
  "Muscles of the Upper Limbs",
  "Muscles of the Shoulder Girdle",
  "Muscles of the Arm",
  "Muscles of the Forearm",
  "Muscles of the Hand",
  "Muscles of the Lower Limbs",
  "Muscles of the Pelvic Girdle",
  "Muscles of the Thigh",
  "Muscles of the Leg",
  "Muscles of the Foot"
]

muscle_groups.each do |group|
  MuscleGroup.find_or_create_by(name: group)
end