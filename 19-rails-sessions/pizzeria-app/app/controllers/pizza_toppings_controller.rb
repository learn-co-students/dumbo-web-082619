class PizzaToppingsController < ApplicationController

  def new
    @pizza_topping = PizzaTopping.new
    @pizzas = Pizza.all
    @toppings = Topping.all
  end

  def create
    pt_params = params.require(:pizza_topping).permit(:pizza_id, :topping_id, :amount)
    PizzaTopping.create(pt_params)
    redirect_to pizzas_path
  end

end
