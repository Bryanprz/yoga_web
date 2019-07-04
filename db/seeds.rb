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

studio.teachers << [teacher_brandi, teacher_amy, teacher_bryan]

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
roster_hatha_amy = KlassRoster.create
yoga_klass.klass_roster << roster_hatha_amy
student_amy.klass_roster << roster_hatha_amy

roster_hatha_joy = KlassRoster.create
yoga_klass.klass_roster << roster_hatha_joy
student_joy.klass_roster << roster_hatha_joy

yoga_klass.teachers << teacher_brandi
yoga_klass.teachers << teacher_amy
yoga_klass.teachers << teacher_bryan

yoga_klass.save

# Yoga Class 2
roster_vinyasa_bobby = KlassRoster.create
yoga_klass2.klass_roster << roster_vinyasa_bobby
student_bobby.klass_roster << roster_vinyasa_bobby

roster_vinyasa_billy = KlassRoster.create
yoga_klass2.klass_roster << roster_vinyasa_billy
student_billy.klass_roster << roster_vinyasa_billy

yoga_klass2.teachers << teacher_brandi
yoga_klass2.teachers << teacher_amy
yoga_klass2.teachers << teacher_bryan

yoga_klass2.save

# Yoga Class 3
roster_class_3_jeremiah = KlassRoster.create
yoga_klass3.klass_roster << roster_class_3_jeremiah
student_jeremiah.klass_roster << roster_class_3_jeremiah

roster_class_3_jorge = KlassRoster.create
yoga_klass3.klass_roster << roster_class_3_jorge
student_jorge.klass_roster << roster_class_3_jorge

yoga_klass3.teachers << teacher_brandi
yoga_klass3.teachers << teacher_amy
yoga_klass3.teachers << teacher_bryan

yoga_klass3.save

# Yoga Class 4
roster_class_4_rebbeca = KlassRoster.create
yoga_klass4.klass_roster << roster_class_4_rebbeca
student_rebbeca.klass_roster << roster_class_4_rebbeca

roster_class_4_andres = KlassRoster.create
yoga_klass4.klass_roster << roster_class_4_andres
student_andres.klass_roster << roster_class_4_andres

yoga_klass4.teachers << teacher_brandi
yoga_klass4.teachers << teacher_amy
yoga_klass4.teachers << teacher_bryan

yoga_klass4.save
