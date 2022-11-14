# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2031_42_15_562250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "budget_users", force: :cascade do |t|
    t.bigint "budget_id"
    t.bigint "user_id"
    t.string "token"
    t.boolean "confirmed", default: false
    t.bigint "role_value"
    t.index ["budget_id"], name: "index_budget_users_on_budget_id"
    t.index ["role_value"], name: "index_budget_users_on_role_value"
    t.index ["user_id"], name: "index_budget_users_on_user_id"
  end

  create_table "budgets", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.bigint "owner_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_budgets_on_owner_id"
  end

  create_table "categories", force: :cascade do |t|
    t.text "name", null: false
    t.string "color", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "monthly_goal", default: 0
    t.integer "rank", default: 0
    t.integer "is_revenue", null: false
    t.bigint "budget_id"
    t.index ["budget_id"], name: "index_categories_on_budget_id"
    t.index ["rank"], name: "index_categories_on_rank"
  end

  create_table "csv_configs", force: :cascade do |t|
    t.text "name", null: false
    t.text "config_json", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "users_id"
    t.index ["users_id"], name: "index_csv_configs_on_users_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.text "description", null: false
    t.integer "amount", null: false
    t.integer "category_id", null: false
    t.datetime "paid_at", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["amount"], name: "index_expenses_on_amount"
    t.index ["category_id"], name: "index_expenses_on_category_id"
    t.index ["paid_at"], name: "index_expenses_on_paid_at"
  end

  create_table "revenues", force: :cascade do |t|
    t.text "description", null: false
    t.integer "amount", null: false
    t.integer "category_id", null: false
    t.datetime "paid_at", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["amount"], name: "index_revenues_on_amount"
    t.index ["category_id"], name: "index_revenues_on_category_id"
    t.index ["paid_at"], name: "index_revenues_on_paid_at"
  end

  create_table "roles", force: :cascade do |t|
    t.bigint "role_value", null: false
    t.string "role_name", null: false
  end
  create_table "tasks", force: :cascade do |t|
    t.boolean "is_done"
    t.string "title"
    t.text "description"
    t.date "due_date"
    t.integer "category_id"
    t.bigint "budget_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["budget_id"], name: "index_tasks_on_budget_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "monthly_goal", default: 0
    t.string "email", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "phone"
    t.string "password_digest"
  end

  add_foreign_key "budgets", "users", column: "owner_id"
  add_foreign_key "categories", "budgets"
  add_foreign_key "csv_configs", "users", column: "users_id"
  add_foreign_key "tasks", "budgets"
end
