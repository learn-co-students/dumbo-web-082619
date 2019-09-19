class InterestsController < ApplicationController
  get '/interests/new' do
    @topics = Topic.all
    @students = Student.all
    erb :'interests/new'
  end

  post '/interests' do
   interest = Interest.create(params[:interest])

   redirect to "/students/#{interest.student.id}"
 end
end
