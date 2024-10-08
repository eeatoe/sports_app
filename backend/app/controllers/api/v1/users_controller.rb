class Api::V1::UsersController < ApplicationController
  include CurrentUserConcern
  before_action :require_no_authentication
  before_action :require_authentication
  before_action :set_user

  # DELETE api/v1/users/:id
  def destroy
    Rails.logger.info "Params: #{params.inspect}"
    user = User.find_by(email: user_params[:email])

    if current_user.nil?
      render json: { errors: 'User not authenticated.' }, status: :unauthorized
      return
    end

    if user && user.authenticate(user_params[:password]) && user.id == current_user.id
      user.destroy
      render json: { message: 'User deleted successfully.' }, status: :ok
    else
      render json: { errors: 'Invalid email or password.' }, status: :unauthorized
    end
  end

  # GET api/v1/users/:id
  def show
    render json: current_user.as_json(except: [:password_digest]), status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
