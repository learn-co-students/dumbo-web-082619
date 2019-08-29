class User
  # Instance methods
  attr_reader :name, :handle

  def initialize(name, handle)
    @name = name
    @handle = handle
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




















end
