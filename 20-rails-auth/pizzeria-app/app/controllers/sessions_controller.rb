class SessionsController < ApplicationController

  def reset
    session[:page_count] = 0
    # get them back to the page they were on
    redirect_back fallback_location: toppings_path
  end

end