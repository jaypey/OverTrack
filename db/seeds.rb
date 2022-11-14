# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

### User seed
if (Role.where(role_name: 'owner')==[]) then
    role_owner = Role.create(role_name: 'owner', role_value: 1)
    role_member = Role.create(role_name: 'member', role_value: 2)
end

if (User.where(firstname: 'Firstname') == []) then
    user1 = User.create!(
        password: 'Qwerty123!',
        password_confirmation: 'Qwerty123!',
        email: 'email@example.com',
        firstname: 'Firstname',
        lastname: 'Lastname',
        phone: '555-555-5555'
    )
        
    user2 = User.create(
        password: 'Qwerty123!',
        password_confirmation: 'Qwerty123!',
    email: 'email2@example.com',
    firstname: 'Firstname',
    lastname: 'Lastname',
    phone: '555-555-5555'
    )   
    
    
    user3 = User.create(
        password: 'Qwerty123!',
        password_confirmation: 'Qwerty123!',
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
end

### Categories, Revenues, Expenses Seed
if (Category.where(name: "food") == []) then
    categories1 = Category.create!(
        name: "food",
        color: "red",
        is_revenue: 0
    )
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
    }])
    end
if (Category.where(name: "salary") == []) then

    categories2 = Category.create!(
        name: "salary",
        color: "purple",
        is_revenue: 0
    )
    expenses = Expense.create!([{
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
    end
if (Category.where(name: "Shoes sales") == [])then
    categories3 = Category.create!(
        name: "Shoes sales",
        color: "green",
        is_revenue: 1
    )

    revenues = Revenue.create([{
        category_id: categories3.id,
        description: "Sneaker Sales",
        amount: 500000,
        paid_at: Date.today,
        created_at: Date.today,
        updated_at: Date.today
    }])
    end
if (Category.where(name: "T-Shirt sales") == []) then
    
    categories4 = Category.create!(
        name: "T-Shirt sales",
        color: "blue",
        is_revenue: 1
    )

    revenues = Revenue.create([{
        category_id: categories4.id,
        description: "Supreme T-Shirt Sales",
        amount: 1000000,
        paid_at: Date.today,
        created_at: Date.today,
        updated_at: Date.today
    }])
    end