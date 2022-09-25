# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.where(
    username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay',
    password: 'user',
    email: 'email@example.com',
    firstname: 'Firstname',
    lastname: 'Lastname',
    phone: '555-555-5555'
    ).first_or_create
