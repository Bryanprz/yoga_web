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

ActiveRecord::Schema.define(version: 2019_06_03_231215) do

  create_table "items", force: :cascade do |t|
    t.integer "type"
    t.string "name"
    t.text "excerpt"
    t.text "description"
    t.string "url"
    t.integer "upvotes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "klasses", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "studio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["studio_id"], name: "index_klasses_on_studio_id"
  end

  create_table "klasses_students", id: false, force: :cascade do |t|
    t.integer "klass_id", null: false
    t.integer "student_id", null: false
    t.index ["klass_id", "student_id"], name: "index_klasses_students_on_klass_id_and_student_id"
    t.index ["student_id", "klass_id"], name: "index_klasses_students_on_student_id_and_klass_id"
  end

  create_table "klasses_teachers", id: false, force: :cascade do |t|
    t.integer "klass_id", null: false
    t.integer "teacher_id", null: false
    t.index ["klass_id", "teacher_id"], name: "index_klasses_teachers_on_klass_id_and_teacher_id"
    t.index ["teacher_id", "klass_id"], name: "index_klasses_teachers_on_teacher_id_and_klass_id"
  end

  create_table "list_items", force: :cascade do |t|
    t.integer "list_id"
    t.integer "item_id"
    t.text "description"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_list_items_on_item_id"
    t.index ["list_id"], name: "index_list_items_on_list_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title"
    t.text "excerpt"
    t.text "description"
    t.integer "upvotes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "studios", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
