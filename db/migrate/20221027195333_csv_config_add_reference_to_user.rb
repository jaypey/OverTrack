class CsvConfigAddReferenceToUser < ActiveRecord::Migration[6.1]
    def change
      add_reference :csv_configs, :users, foreign_key: true
    end
  end
  