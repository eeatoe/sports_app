class Api::V1::SessionsController < ApplicationController
  include CurrentUserConcern

  # POST /api/v1/sessions
  def create
    user = User.find_by(email: params["user"]["email"])
    
    if user&.authenticate(params["user"]["password"])
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: { status: 401 }
    end
  end

  # DELETE /api/v1/sessions/logout
  def logout
    # Логаут нужно сделать просто удаляя токен на стороне клиента.
    reset_session # Сброс данных сессии. Добовляет безопасность и убирает возможность конфликта с новой сессией
    head :no_content # Возвращаем статус 204 без контента, что является хорошей практикой для успешного выхода.
  end

  # GET /api/v1/sessions/check
  def check
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
