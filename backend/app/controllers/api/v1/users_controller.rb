class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request

  # DELETE api/v1/users/:id
  def destroy
    user = User.find_by(id: params[:id])

    if user.nil?
      render json: { errors: 'User not found.' }, status: :not_found
      return
    end
  

    if user && user.authenticate(params[:user][:password])
      user.destroy
      render json: { message: 'User deleted successfully.' }, status: :ok
    else
      render json: { errors: 'Invalid email or password.' }, status: :unauthorized
    end
  end

  # GET api/v1/users/:id
  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
