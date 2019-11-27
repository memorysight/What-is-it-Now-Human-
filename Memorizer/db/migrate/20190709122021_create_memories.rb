class CreateMemories < ActiveRecord::Migration[5.2]
  def change
    create_table :memories do |t|
      t.string :source
      t.string :title
      t.string :date
      t.string :picture
      t.string :body
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
