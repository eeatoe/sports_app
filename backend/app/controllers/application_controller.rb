class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token
  before_action :authenticate_request

  private

  def logged_in?
    !!current_user
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  # Этот метод будет вызываться перед каждым запросом, требующим аутентификации
  def authenticate_request
    unless current_user
      render json: { message: 'Unauthorized. Please log in.' }, status: :unauthorized
    end
  end

  def encode_token(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.credentials.jwt_secret_key) 
  end


  def decoded_token
    header = request.headers['Authorization']

    if header
      token = header.split(' ').last
      begin
        JWT.decode(token, Rails.application.credentials.jwt_secret_key)
      rescue JWT::ExpiredSignature
        render json: { errors: 'Token has expired' }, status: :unauthorized
      rescue JWT::DecodeError
        render json: { errors: 'Invalid token' }, status: :unauthorized
      rescue JWT::VerificationError
        render json: { errors: 'Token verification failed' }, status: :unauthorized  
      end
    end
  end
end