class Api::V1::SessionsController < ApplicationController
  skip_before_action :authenticate_request

  def new
    redirect_to root_path if logged_in?
  end

  # POST /api/v1/sessions
  def create
    user = User.find_by(email: params[:user][:email])

    if user && user.authenticate(params[:user][:password])
      token = encode_token(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
