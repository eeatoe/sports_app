module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :require_no_authentication
    before_action :require_authentication
    before_action :set_user
  end

  def require_no_authentication
    
  end

  def require_authentication
    
  end

  def set_user
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      decoded_token = JsonWebToken.decode(token)
      
      if decoded_token.present? && decoded_token[:user_id].present?
        @current_user = User.find(decoded_token[:user_id])
      else
        render json: { errors: 'Invalid or expired token' }, status: :unauthorized
      end
    else
      render json: { errors: 'Unauthorized access' }, status: :unauthorized
    end
  end


  # Добавление этого метода позволяет другим контроллерам легко получать доступ к текущему пользователю
  def current_user
    @current_user
  end
end