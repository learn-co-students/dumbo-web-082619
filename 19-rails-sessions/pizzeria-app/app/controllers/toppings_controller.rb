class ToppingsController < ApplicationController
  before_action :set_topping, only: [:show, :destroy, :edit, :update]

  def index
    @toppings = Topping.all
  end

  def show
    # before_action finds topping and sets instance variable
  end
  
  def new
    @topping = Topping.new
    @pizzas = Pizza.all
  end

  def create
    topping = Topping.create(topping_params)
    if topping.valid?
      flash[:happy] = "YAY thanks for filling out our form well."
      redirect_to @topping
    else
      flash[:errors] = topping.errors.full_messages
      redirect_to new_topping_path
    end
  end

  def edit
    # before_action finds topping and sets instance variable
  end

  def update
    # before_action finds topping and sets instance variable
    @topping.update(topping_params)
    if @topping.valid?
      flash[:happy] = "YAY thanks for filling out our form well."
      redirect_to @topping
    else
      flash[:errors] = @topping.errors.full_messages
      redirect_to edit_topping_path(@topping)
    end
  end

  def destroy
    # before_action finds topping and sets instance variable
    @topping.destroy
    
    redirect_to toppings_path
  end

  private

  def set_topping
    @topping = Topping.find(params[:id])
  end

  def topping_params
    params.require(:topping).permit(:name, :tasting_notes, :image)
  end

end
