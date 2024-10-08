class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token
  before_action :authenticate_request

  private

  # Этот метод будет вызываться перед каждым запросом, требующим аутентификации

  def authenticate_request
    token = request.headers['Authorization']&.split(' ')&.last
    if token
      begin
        decoded_token = JsonWebToken.decode(token)
        @current_user = User.find(decoded_token[:user_id]) if decoded_token
      rescue JWT::ExpiredSignature
        render json: { errors: 'Token has expired' }, status: :unauthorized
      rescue JWT::DecodeError
        render json: { errors: 'Invalid token' }, status: :unauthorized
      end
    else
      render json: { errors: 'Missing token' }, status: :unauthorized
    end  
  end
end