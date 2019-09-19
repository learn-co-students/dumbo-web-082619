class HabitsController < ApplicationController
  get '/habits' do
    @habits = Habit.all
    erb :'habits/index'
  end

  get '/habits/new' do
    @students = Student.all

    erb :'habits/new'
  end

  post '/habits' do
    habit = Habit.create(params[:habit])

    redirect to "/students/#{habit.student.id}"
  end

end
