class User
  # Instance methods
  attr_reader :name, :handle
  @@all = []

  def initialize(name, handle)
    @name = name
    @handle = handle
    @@all << self
  end

  def self.all
    @@all
  end
  # Instance Method
  def dance
    "#{@name} is dancing"
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.author == self
    end
  end

  def post_tweet(message)
    # self is the instance of a user
    Tweet.new(message, self)
  end

  def likes
    # returns [<Like>, <Like>]
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # returns [<Like> , <Like> ] => (map) [<Tweet>, <Tweet>]
    self.likes.map do |like|
      like.tweet
    end
  end

  def liked_tweets_contents
    # returns [<Tweet> , <Tweet> ] => (map) ["CONTENT by AUTHOR", "CONTENT by AUTHOR"]

    self.liked_tweets.map do |tweet|
      "#{tweet.content} by #{tweet.author.handle}"
    end

  end



















end
