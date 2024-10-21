class EmailValidator < ActiveModel::Validator
  def validate(record)
    email = record.email

    if email.blank?
      record.errors.add(:email, "не может быть пустым")
    end

    if User.exists?(email: email)
      record.errors.add(:email, "уже используется")
    end

    unless ValidEmail2::Address.new(email).valid?
      record.errors.add(:email, "некорректный")
    end

    if ValidEmail2::Address.new(email).disposable?
      record.errors.add(:email, "не может быть одноразовым")
    end
  end
end