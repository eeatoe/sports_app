class Api::V1::RegistrationsController < ApplicationController
  skip_before_action :authenticate_request, only: [:create] 
  # Указываем, что не нужно быть зарегистрированным для "create"

  # POST api/v1/registrations
  def create
    user = User.create(user_params)

    if user.save
      token = encode_token(user_id: user.id)
      render json: {
        id: user.id,
        email: user.email,
        name: user.name,
        token: token
      }, status: :created
    else
      render json: { status: 422 }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :birth_date)
  end
end