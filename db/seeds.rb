# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

usersToDelete = User.where(firstname: 'Firstname')
for user in usersToDelete do
    user.budgets.delete_all
    budgetsOwned = Budget.where(owner_id: user.id)
    if budgetsOwned.count > 0
        budgetsOwned.destroy_all
    end
    user.destroy
end

user1 = User.create!(
    username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay',
    password: 'user',
    email: 'email@example.com',
    firstname: 'Firstname',
    lastname: 'Lastname',
    phone: '555-555-5555'
    )

user2 = User.create(
        username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay',
        password: 'user',
        email: 'email2@example.com',
        firstname: 'Firstname',
        lastname: 'Lastname',
        phone: '555-555-5555'
    )


user3 = User.create(
        username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay',
        password: 'user',
        email: 'email3@example.com',
        firstname: 'Firstname',
        lastname: 'Lastname',
        phone: '555-555-5555'
    )

# Seed for budgets

Budget.where(name: 'test').destroy_all

budget = Budget.create!(
    name: 'test',
    description: 'Budget Test',
    owner_id: user1.id
)

budget.users << user1
budget.users << user2
budget.users << user3
    