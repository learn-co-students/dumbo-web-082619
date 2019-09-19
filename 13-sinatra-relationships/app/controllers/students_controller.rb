class StudentsController < ApplicationController
  get '/students' do
    # get all of our students
    @students = Student.all
    # build the html we need to show our user
    @my_friends =  "🧙" *  9999
    erb :'students/index'
  end

  get'/students/new' do
    erb :'students/new'
  end

  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :'students/show'
  end

  get '/students/:id/edit' do
    # find the student we want to update using path params
    @student = Student.find(params[:id])
    erb :'students/edit'
  end

  put '/students/:id' do
    student = Student.find(params[:id])
    student.update(params[:student])

    redirect to "/students/#{student.id}"
   #  {
   #    "_method"=>"PUT",
   #    "id"=>"1",
   #    "student" => {
   #       "name"=>"Aibek Ozhorov",
   #       "age"=>"14",
   #       "slogan"=>"Yes, it's tough, but not as tough as doing comedy.",
   #       "photo_url"=>"https://avatars.slack-edge.com/2019-08-27/733447427873_d030562a6cf3b4c60877_192.png",
   #     }
   # }

  end

  delete '/students/:id' do
    student = Student.find(params[:id])
    student.destroy

    redirect to "/students"
  end

  post '/students' do
    student = Student.create(params)
    redirect to "/students/#{student.id}"
  end

end
