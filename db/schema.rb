# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160925160000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abouts", force: :cascade do |t|
    t.string   "title_1"
    t.string   "title_2"
    t.string   "title_3"
    t.string   "title_4"
    t.string   "title_5"
    t.string   "title_6"
    t.string   "content_1"
    t.string   "content_2"
    t.string   "content_3"
    t.string   "content_4"
    t.string   "content_5"
    t.string   "content_6"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "homes", force: :cascade do |t|
    t.string   "title_1"
    t.string   "content_1"
    t.string   "hours_thursday"
    t.string   "hours_friday"
    t.string   "hours_saturday"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "menus", force: :cascade do |t|
    t.string   "food1"
    t.string   "food2"
    t.string   "food3"
    t.string   "food4"
    t.string   "food5"
    t.string   "beer1_1"
    t.string   "beer1_2"
    t.string   "beer1_3"
    t.string   "beer1_4"
    t.string   "beer1_5"
    t.string   "beer2_1"
    t.string   "beer2_2"
    t.string   "beer2_3"
    t.string   "beer2_4"
    t.string   "beer2_5"
    t.string   "beer3_1"
    t.string   "beer3_2"
    t.string   "beer3_3"
    t.string   "beer3_4"
    t.string   "beer3_5"
    t.string   "wine1_1"
    t.string   "wine1_2"
    t.string   "wine1_3"
    t.string   "wine1_4"
    t.string   "wine1_5"
    t.string   "wine2_1"
    t.string   "wine2_2"
    t.string   "wine2_3"
    t.string   "wine2_4"
    t.string   "wine2_5"
    t.string   "wine3_1"
    t.string   "wine3_2"
    t.string   "wine3_3"
    t.string   "wine3_4"
    t.string   "wine3_5"
    t.string   "food1Desc"
    t.string   "food2Desc"
    t.string   "food3Desc"
    t.string   "food4Desc"
    t.string   "food5Desc"
    t.string   "beer1_1Desc"
    t.string   "beer1_2Desc"
    t.string   "beer1_3Desc"
    t.string   "beer1_4Desc"
    t.string   "beer1_5Desc"
    t.string   "beer2_1Desc"
    t.string   "beer2_2Desc"
    t.string   "beer2_3Desc"
    t.string   "beer2_4Desc"
    t.string   "beer2_5Desc"
    t.string   "beer3_1Desc"
    t.string   "beer3_2Desc"
    t.string   "beer3_3Desc"
    t.string   "beer3_4Desc"
    t.string   "beer3_5Desc"
    t.string   "wine1_1Desc"
    t.string   "wine1_2Desc"
    t.string   "wine1_3Desc"
    t.string   "wine1_4Desc"
    t.string   "wine1_5Desc"
    t.string   "wine2_1Desc"
    t.string   "wine2_2Desc"
    t.string   "wine2_3Desc"
    t.string   "wine2_4Desc"
    t.string   "wine2_5Desc"
    t.string   "wine3_1Desc"
    t.string   "wine3_2Desc"
    t.string   "wine3_3Desc"
    t.string   "wine3_4Desc"
    t.string   "wine3_5Desc"
    t.string   "beer1_1Path"
    t.string   "beer1_2Path"
    t.string   "beer1_3Path"
    t.string   "beer1_4Path"
    t.string   "beer1_5Path"
    t.string   "beer2_1Path"
    t.string   "beer2_2Path"
    t.string   "beer2_3Path"
    t.string   "beer2_4Path"
    t.string   "beer2_5Path"
    t.string   "beer3_1Path"
    t.string   "beer3_2Path"
    t.string   "beer3_3Path"
    t.string   "beer3_4Path"
    t.string   "beer3_5Path"
    t.string   "wine1_1Path"
    t.string   "wine1_2Path"
    t.string   "wine1_3Path"
    t.string   "wine1_4Path"
    t.string   "wine1_5Path"
    t.string   "wine2_1Path"
    t.string   "wine2_2Path"
    t.string   "wine2_3Path"
    t.string   "wine2_4Path"
    t.string   "wine2_5Path"
    t.string   "wine3_1Path"
    t.string   "wine3_2Path"
    t.string   "wine3_3Path"
    t.string   "wine3_4Path"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "food1_price"
    t.string   "food2_price"
    t.string   "food3_price"
    t.string   "food4_price"
    t.string   "food5_price"
    t.string   "beer1_1_price"
    t.string   "beer1_2_price"
    t.string   "beer1_3_price"
    t.string   "beer1_4_price"
    t.string   "beer1_5_price"
    t.string   "beer2_1_price"
    t.string   "beer2_2_price"
    t.string   "beer2_3_price"
    t.string   "beer2_4_price"
    t.string   "beer2_5_price"
    t.string   "beer3_1_price"
    t.string   "beer3_2_price"
    t.string   "beer3_3_price"
    t.string   "beer3_4_price"
    t.string   "beer3_5_price"
    t.string   "wine1_1_price"
    t.string   "wine1_2_price"
    t.string   "wine1_3_price"
    t.string   "wine1_4_price"
    t.string   "wine1_5_price"
    t.string   "wine2_1_price"
    t.string   "wine2_2_price"
    t.string   "wine2_3_price"
    t.string   "wine2_4_price"
    t.string   "wine2_5_price"
    t.string   "wine3_1_price"
    t.string   "wine3_2_price"
    t.string   "wine3_3_price"
    t.string   "wine3_4_price"
    t.string   "wine3_5_price"
  end

  create_table "mgmts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
