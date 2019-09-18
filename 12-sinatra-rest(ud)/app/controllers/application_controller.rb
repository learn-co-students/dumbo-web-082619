require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    # set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get '/students' do
    # get all of our students
    @students = Student.all
    # build the html we need to show our user
    @my_friends =  "🧙" *  9999
    erb :index
  end

  get'/students/new' do
    erb :new
  end

  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :show
  end


  post '/students' do
    student = Student.create(params)
    redirect to "/students/#{student.id}"
  end








end
