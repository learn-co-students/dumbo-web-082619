class Tweet

  attr_reader :content, :author
  @@all = []

  def initialize(content, author)
    @content = content
    @author = author
    # instance of the tweet that got created
    @@all << self
  end

  def self.all
    return @@all
  end

  def likes_for_this_tweet
    Like.all.select do |like|
      like.tweet == self
    end
  end

  def likers
    self.likes_for_this_tweet.map do |like|
      like.user
    end
  end




















end
