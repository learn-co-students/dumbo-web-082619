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
    @topping = Topping.create(params.require(:topping).permit(:name, :tasting_notes, :pizza_id))
    if @topping.valid?
      flash[:happy] = "YAY thanks for filling out our form well."
      redirect_to pizzas_path
    else
      # what goes here
      flash[:errors] = @topping.errors.full_messages
      redirect_to new_topping_path
    end
  end

  def destroy
    topping = Topping.find(params[:id])
    topping.destroy
    
    redirect_to toppings_path
  end

end
