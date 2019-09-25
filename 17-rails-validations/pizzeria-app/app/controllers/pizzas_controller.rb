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

  def edit
    # model
    @pizza = Pizza.find(params[:id])
    # render/redirect
  end

  def create
    # model
    pizza = Pizza.create(params.require(:pizza).permit(:name, :size, :cost, :extra_cheese))

    # render/redirect
    redirect_to pizza_path(pizza)
  end

  def update
    pizza = Pizza.find(params[:id])
    pizza.update(params.require(:pizza).permit(:name, :cost, :size, :extra_cheese))

    # render/redirect
    redirect_to pizza_path(pizza)
  end

  def destroy
    pizza = Pizza.find(params[:id])
    pizza.destroy

    redirect_to pizzas_path
  end


end
