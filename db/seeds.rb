# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

studio = Studio.create(name: "Wildflowers Yoga", description: "Yoga studio in Gainesville, FL")

teacher_brandi = Teacher.create(name: "Brandi")
teacher_amy = Teacher.create(name: "Amy")
teacher_bryan = Teacher.create(name: "Bryan")

yoga_klass = Klass.create(name: "Hatha Yoga", description: "Slow flow class that will help you get to learn basic asanas in yoga.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass2 = Klass.create(name: "Vinyasa Yoga", description: "Flow with your breath in this intense Vinyasa class.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass3 = Klass.create(name: "Kundalini Yoga", description: "Train your breath to be fully awake and increase your body's vitalizing energy.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass4 = Klass.create(name: "Yin Yoga", description: "Restore and recover your muscles by diving deep into this restorative yin yoga class.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass5 = Klass.create(name: "Ganja Yoga", description: "Toke and move", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)

student_amy = Student.create(name: "Amy", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_joy = Student.create(name: "Joy", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_bobby = Student.create(name: "Bobby", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_billy = Student.create(name: "Bill", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_jeremiah = Student.create(name: "Jeremiah", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_jorge = Student.create(name: "Jorge", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_rebbeca = Student.create(name: "Rebbeca", email: "bryanprz00@gmail.com", phone_number: "9546877137")
student_andres = Student.create(name: "Andres", email: "bryanprz00@gmail.com", phone_number: "9546877137")

# Yoga Class 1
yoga_klass.students << student_amy
yoga_klass.students << student_joy

yoga_klass.teachers << teacher_brandi
yoga_klass.teachers << teacher_amy
yoga_klass.teachers << teacher_bryan

yoga_klass.save

# Yoga Class 2
yoga_klass2.students << student_bobby
yoga_klass2.students << student_billy

yoga_klass2.teachers << teacher_brandi
yoga_klass2.teachers << teacher_amy
yoga_klass2.teachers << teacher_bryan

yoga_klass2.save

# Yoga Class 3
yoga_klass3.students << student_jeremiah
yoga_klass3.students << student_jorge

yoga_klass3.teachers << teacher_brandi
yoga_klass3.teachers << teacher_amy
yoga_klass3.teachers << teacher_bryan

yoga_klass3.save

# Yoga Class 4
yoga_klass4.students << student_rebbeca
yoga_klass4.students << student_andres

yoga_klass4.teachers << teacher_brandi
yoga_klass4.teachers << teacher_amy
yoga_klass4.teachers << teacher_bryan

yoga_klass4.save
