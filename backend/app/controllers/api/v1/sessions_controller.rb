class Api::V1::SessionsController < ApplicationController
  include CurrentUserConcern

  # POST /api/v1/authentication
  def login
    user = User.find_by(email: session_params[:email])
    
    if user&.authenticate(session_params[:password])
      token = JsonWebToken.encode(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # GET /api/v1/authentication/check 
  # def check
  #   if request.headers['Authorization'].present?
  #     token = request.headers['Authorization'].split(' ').last
  #     decoded_token = JsonWebToken.decode(token)
  
  #     if decoded_token && User.find_by(id: decoded_token[:user_id])
  #       @current_user = User.find(decoded_token[:user_id])
  #       render json: {
  #         logged_in: true,
  #         user: @current_user
  #       }, status: :ok
  #     else
  #       render json: {
  #         logged_in: false,
  #         message: 'Token has expired or is invalid'

  #       }, status: :unauthorized
  #     end
  #   else
  #     render json: {
  #       logged_in: false
  #     }, status: :unauthorized
  #   end  
  # end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
