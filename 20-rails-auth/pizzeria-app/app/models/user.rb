class User < ApplicationRecord
  has_secure_password
  has_many :pizzas
  validates :username, uniqueness: true

  # attr_accessor :username, :password
  
  # def initialize(params) 
  #   username = params[:username]
  #   password = params[:password]
  # end

  # def password=(plaintext_password)
  #   self.password_digest = BCrypt::Password.create(plaintext_password)
  # end

  # def authenticate(pt_pw)
  #   BCrypt::Password.new(self.password_digest) == pt_pw
  # end

end
