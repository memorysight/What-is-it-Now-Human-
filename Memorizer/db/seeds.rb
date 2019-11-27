# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
group1 = Group.create({category:'Serious'})
group2 = Group.create({category:'Funny'})
group3 = Group.create({category:'Work'})
group4 = Group.create({category:'Love'})

group1.memories.create!([
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Allison', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Theres', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Stacy', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Kim', title:'Something', date:'1111111', picture:'something', body:'something'}
])

group2.memories.create!([
    {source:'Rebecca', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Erica', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daphne', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Erica', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Kim', title:'Something', date:'1111111', picture:'something', body:'something'}
])

group3.memories.create!([
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'}
])

group4.memories.create!([
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'},
    {source:'Daniel', title:'Something', date:'1111111', picture:'something', body:'something'}
])