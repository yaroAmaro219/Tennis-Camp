# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_07_213918) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "children", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "image"
    t.bigint "users_id"
    t.bigint "sessions_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sessions_id"], name: "index_children_on_sessions_id"
    t.index ["users_id"], name: "index_children_on_users_id"
  end

  create_table "coaches", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "location"
    t.bigint "sessions_id"
    t.string "bio"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sessions_id"], name: "index_coaches_on_sessions_id"
  end

  create_table "enrolls", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "phone"
    t.string "email"
    t.string "childname"
    t.string "childage"
    t.string "startdate"
    t.string "enddate"
    t.string "question"
    t.boolean "consent"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "typeofday"
  end

  create_table "locations", force: :cascade do |t|
    t.string "title"
    t.string "time"
    t.string "age_group"
    t.string "image"
    t.string "coach"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "session_id"
    t.index ["session_id"], name: "index_locations_on_session_id"
  end

  create_table "order_items", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "quantity"
    t.bigint "sessions_id"
    t.bigint "orders_id"
    t.index ["orders_id"], name: "index_order_items_on_orders_id"
    t.index ["sessions_id"], name: "index_order_items_on_sessions_id"
  end

  create_table "orders", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "quantity"
    t.string "session_id"
    t.string "order_id"
    t.string "user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.bigint "location_id"
    t.string "time"
    t.bigint "children_id"
    t.bigint "coaches_id"
    t.string "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "dates"
    t.string "location"
    t.string "title"
    t.string "price"
    t.index ["children_id"], name: "index_sessions_on_children_id"
    t.index ["coaches_id"], name: "index_sessions_on_coaches_id"
    t.index ["location_id"], name: "index_sessions_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "child_name"
    t.string "child_age"
    t.string "email"
    t.string "phone"
    t.string "classes"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "children_id"
    t.boolean "admin"
    t.boolean "coach"
    t.integer "current_order"
    t.bigint "orders_id"
    t.index ["children_id"], name: "index_users_on_children_id"
    t.index ["orders_id"], name: "index_users_on_orders_id"
  end

  add_foreign_key "locations", "sessions"
  add_foreign_key "order_items", "orders", column: "orders_id"
  add_foreign_key "order_items", "sessions", column: "sessions_id"
  add_foreign_key "users", "children", column: "children_id"
  add_foreign_key "users", "orders", column: "orders_id"
end
