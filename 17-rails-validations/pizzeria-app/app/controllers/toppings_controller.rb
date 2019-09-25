class ToppingsController < ApplicationController

  def index
    @toppings = Topping.all
  end

  def show
    @topping = Topping.find(params[:id])
  end
  
  def new
    @topping = Topping.new
    @pizzas = Pizza.all
  end

  def create
    topping = Topping.create(params.require(:topping).permit(:name, :tasting_notes, :pizza_id))

    redirect_to pizzas_path
  end

  def destroy
    topping = Topping.find(params[:id])
    topping.destroy
    
    redirect_to toppings_path
  end

end
