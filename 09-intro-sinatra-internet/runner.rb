require 'sinatra'

get '/' do
  "<marquee>#{"🧙🏻‍" * 9999}</marquee><a href='/cheese'>go to the cheese</a>"
end

get '/cheese' do
  "<h1>The 🧀 Cheese</h1>"
end

delete '/cheese' do
  "YOU WILL NEVER DELETE THE CHEESE"
end
