class Visit < ActiveRecord::Base
  belongs_to :cat
  belongs_to :vet
  # def cat
  #   Cat.find(self.cat_id)
  # end
  #
  # def vet
  #   Vet.find(self.vet_id)
  # end

end
