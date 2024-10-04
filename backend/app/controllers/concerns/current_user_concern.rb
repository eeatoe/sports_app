module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end

  # Добавление этого метода позволяет другим контроллерам легко получать доступ к текущему пользователю
  def current_user
    @current_user
  end
end