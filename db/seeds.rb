# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.where(username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay').destroy_all

users = User.create!(
    username: '$2a$12$vWdd52kX6c1Eh0byF16l..G96Cg06HskjfGOHPTHy1Ruli6N8m5ay',
    password: 'user',
    email: 'email@example.com',
    firstname: 'Firstname',
    lastname: 'Lastname',
    phone: '555-555-5555'
    )

# Category's seed
Category.where(name: "food")
    .or(Category.where(name: "salary"))
    .or(Category.where(name:"Shoes sales"))
    .or(Category.where(name: "T-Shirt sales")).destroy_all
    
categories1 = Category.create!(
    name: "food",
    color: "red",
    is_revenue: 0
)
categories2 = Category.create!(
    name: "salary",
    color: "purple",
    is_revenue: 0
)
categories3 = Category.create!(
    name: "Shoes sales",
    color: "green",
    is_revenue: 1
)
categories4 = Category.create!(
    name: "T-Shirt sales",
    color: "blue",
    is_revenue: 1
)

# Revenue's seed
Revenue.where(description: "Supreme T-Shirt Sales")
    .or(Revenue.where(description: "Sneaker Sales")).destroy_all

revenues = Revenue.create([{
    category_id: categories4.id,
    description: "Supreme T-Shirt Sales",
    amount: 1000000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
},
{
    category_id: categories3.id,
    description: "Sneaker Sales",
    amount: 500000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
}])

# Expense's seed
Expense.where(description: "Breakfast")
    .or(Expense.where(description: "Lunch"))
    .or(Expense.where(description: "IT Salary"))
    .or(Expense.where(description: "Human Resources Salary")).destroy_all

expenses = Expense.create!([{
    category_id: categories1.id,
    description: "Breakfast",
    amount: 5000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
},
{
    category_id: categories1.id,
    description: "Lunch",
    amount: 10000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
},
{
    category_id: categories2.id,
    description: "IT Salary",
    amount: 500000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
},
{
    category_id: categories2.id,
    description: "Human Resources Salary",
    amount: 250000,
    paid_at: Date.today,
    created_at: Date.today,
    updated_at: Date.today
}])