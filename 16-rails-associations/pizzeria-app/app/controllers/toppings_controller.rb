class ToppingsController < ApplicationController
  
  def new
    @topping = Topping.new
    @pizzas = Pizza.all
  end

  def create
    topping = Topping.create(params.require(:topping).permit(:name, :tasting_notes, :pizza_id))

    redirect_to pizzas_path
  end

end
