class Budget < ApplicationRecord
    validates_presence_of :name, :id
  
  end