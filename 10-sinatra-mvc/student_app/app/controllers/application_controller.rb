require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # "<html><head></head><body><marquee>🧙🏻‍hihihihihihihihihi</marquee></body></html>"
    erb :welcome
  end

  get '/cheese' do
    "<html><head></head><body><h1>🧀</h1></body></html>"
  end

  get '/students' do
    # get all of our students
    @students = Student.all
    # build the html we need to show our user
    @my_friends =  "🧙" *  9999
    erb :students
  end

end
