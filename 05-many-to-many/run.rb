require 'pry'
require_relative "./lib/tweet"
require_relative "./lib/user"
require_relative "./lib/like"


coffee_dad = User.new("Albert", "coffee_dad")
kanye = User.new("Kanye West", "ye")

cd1 = Tweet.new("coffeeeeee#", coffee_dad)
cd2 = Tweet.new("love cofeee", coffee_dad)
cd3 = Tweet.new("death is inevitable", coffee_dad)

k1 = Tweet.new("McDonalds is my favorite restaurant", kanye)
k2 = Tweet.new("I miss the old Kanye", kanye)
k3 = Tweet.new("I need this horse", kanye)

coffee_dad.post_tweet("I need coffeee")

Like.new(kanye, cd3)
Like.new(kanye, k2)

Like.new(coffee_dad, cd3)
Like.new(coffee_dad, k3)




















binding.pry
0
