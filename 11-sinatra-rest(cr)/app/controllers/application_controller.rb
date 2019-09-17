require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/students' do
    # get all of our students
    @students = Student.all
    # build the html we need to show our user
    @my_friends =  "🧙" *  9999
    erb :students
  end
end
