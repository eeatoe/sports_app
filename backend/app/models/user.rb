require 'bcrypt'

class User < ApplicationRecord
  has_secure_password
  
  # Строка 'valid_email_2/email': { disposable: true } проверяет, что домен не
  # является одноразовым и что у него есть MX-запись. Наследуется от гема ValidEmail2
  validates :email, 'valid_email_2/email': { disposable: true }, presence: true, uniqueness: true
  validates :password, presence: true
end