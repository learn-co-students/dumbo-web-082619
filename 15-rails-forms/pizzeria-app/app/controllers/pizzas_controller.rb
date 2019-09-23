class PizzasController < ApplicationController

  def index
    @pizzas = Pizza.all
    # render :index
  end

  def show
    # model
    @pizza = Pizza.find(params[:id])

    # render :show
  end

  def new
    @pizza = Pizza.new
  end

  def create
    byebug
  end

end
