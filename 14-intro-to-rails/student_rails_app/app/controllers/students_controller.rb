class StudentsController < ApplicationController
  def index
    # binding.pry
  end
  def show
    @student = Student.find(params[:id])
  end
end
