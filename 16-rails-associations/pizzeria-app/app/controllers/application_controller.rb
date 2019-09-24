class ApplicationController < ActionController::Base
  def set_some_instance_variable
    @title = "Some title"
  end
end
