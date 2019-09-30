class ApplicationController < ActionController::Base
  before_action :set_page_count
  
  private

  def set_page_count
    session[:page_count] ||= 0
  end

end
