class PizzasController < ApplicationController

  def index
    # model
    @pizzas = Pizza.all

    # render/redirect
    # render :index
  end

  def show
    # model
    @pizza = Pizza.find(params[:id])

    # render/redirect
    # render :show
  end

  def new
    # model
    @pizza = Pizza.new

    # render/redirect
    # render :new
  end

  def create
    # model
    pizza = Pizza.create(params.require(:pizza).permit(:name, :size, :cost, :extra_cheese))

    # render/redirect
    redirect_to pizza_path(pizza)
  end

end
