class TopicsController < ApplicationController
  get '/topics' do
    @topics = Topic.all
    erb :'/topics/index'
  end
end
