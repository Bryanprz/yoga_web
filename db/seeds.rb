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

yoga_klass = Klass.create(name: "Hatha Yoga", description: "Slow flow class", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass2 = Klass.create(name: "Vinyasa Yoga", description: "Flow with your breath in this intense Vinyasa class.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass3 = Klass.create(name: "Kundalini Yoga", description: "Train your breath to be fully awake and increase your body's vitalizing energy.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)
yoga_klass4 = Klass.create(name: "Yin Yoga", description: "Restore and recover your muscles by diving deep into this restorative yin yoga class.", studio: studio, start_time: DateTime.now, end_time: DateTime.now + 1.hour)

student_amy = Student.create(name: "Amy", email: "bryanprz00@gmail.com", phone_number: "9546877137")

# Yoga Class 1
yoga_klass.students << student_amy

yoga_klass.teachers << teacher_brandi
yoga_klass.teachers << teacher_amy
yoga_klass.teachers << teacher_bryan

yoga_klass.save

# Yoga Class 2
yoga_klass2.students << student_amy

yoga_klass2.teachers << teacher_brandi
yoga_klass2.teachers << teacher_amy
yoga_klass2.teachers << teacher_bryan

yoga_klass2.save

# Yoga Class 3
yoga_klass3.students << student_amy

yoga_klass3.teachers << teacher_brandi
yoga_klass3.teachers << teacher_amy
yoga_klass3.teachers << teacher_bryan

yoga_klass3.save

# Yoga Class 4
yoga_klass4.students << student_amy

yoga_klass4.teachers << teacher_brandi
yoga_klass4.teachers << teacher_amy
yoga_klass4.teachers << teacher_bryan

yoga_klass4.save
