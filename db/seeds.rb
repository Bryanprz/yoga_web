# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

studio = Studio.create(name: "Wildflowers Yoga", description: "Yoga studio in Gainesville, FL")

teacher_brandi = Teacher.create(name: "Brandi")

yoga_klass = Klass.create(name: "Hatha Yoga", description: "Slow flow class", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)

student_amy = Student.create(name: "Amy", email: "bryanprz00@gmail.com", phone_number: "9546877137")

yoga_klass.students << student_amy
yoga_klass.teachers << teacher_brandi
yoga_klass.save
