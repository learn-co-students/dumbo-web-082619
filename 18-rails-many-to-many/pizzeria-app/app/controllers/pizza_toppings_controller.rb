class PizzaToppingsController < ApplicationController

  def new
    @pizza_topping = PizzaTopping.new

  end

  def create
    pt_params = params.require(:pizza_topping).permit(:pizza_id, :topping_id, :amount)
    PizzaTopping.create(pt_params)
    redirect_to pizzas_path
  end

end
