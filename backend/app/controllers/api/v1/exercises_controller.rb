class ExercisesController < ApplicationController

  def create
    Exercise.create(
      name:params[:exercise][:name]
      description:params[:exercise][:description]
      muscles:params[:exercise][:muscles]
      link:params[:exercise][:link]
    )
  end

  def show
    @exercise = Exercise.find(params[:id])
    if @exercise
      render :show, status: :ok
    else
      render json: { error: 'Exercise not found' }, status: :not_found
    end
  end

  def update
    @exercise=Exercise.find(params[:id])
    
    @exercise.update(
      name:params[:exercise][:name]
      description:params[:exercise][:description]
      muscles:params[:exercise][:muscles]
      link:params[:exercise][:link]
    )
  end
  
  def exercise_params
    
  end

end
