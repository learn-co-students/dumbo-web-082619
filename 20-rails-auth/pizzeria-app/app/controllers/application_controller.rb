class ApplicationController < ActionController::Base
  before_action :set_page_count
  
  helper_method :current_user
  helper_method :a_cool_method
  
  private

  def a_cool_method
    "cool"
  end

  def current_user
    User.find(session[:user_id])
  end

  def set_page_count
    session[:page_count] ||= 0
  end

end
