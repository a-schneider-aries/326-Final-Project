var db = new Mongo().getDB('menu');
db.items.remove({});
db.items.insertMany([
 {location: 'Bamboo', item: 'Dim Sum Platter', description: '6 pieces of dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Individual Plate', description: '2 pieces of dim sum', price: 3.50},
 {location: 'Bamboo', item: 'Lunch and Dinner Hot Plate Special', description: '2 pieces of dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Fountain Drink', description: '', price: 1.00},
<<<<<<< HEAD
 {location: 'The Grill', "item" : "Chicken Bacon Ranch Ciabatta", "price" : 8 },
{location: 'The Grill', "item" : "Buffalo Chicken Ciabatta", "price" : 8 },
{location: 'The Grill', "item" : "Steak and Cheese Ciabatta", "price" : 8 },
{location: 'The Grill', "item" : "Chicken and Pesto", "price" : 8 },
{location: 'The Grill', "item" : "Valley Chicken Sandwich", "price" : 8 },
{location: 'The Grill', "item" : "Tavola Veggie Sandwich", "price" : 6.75 },
{location: 'The Grill', "item" : "Spicy Roast Beef Sandwich", "price" : 7 },
{location: 'The Grill', "item" : "Italian Cold Cut Sandwich", "price" : 8 },
{location: 'The Grill', "item" : "Caprese Sandwich", "price" : 7 },
{location: 'The Grill', "item" : "Classic Grinder", "price" : 7 },
{location: 'The Grill', "item" : "Three Cheese and Spinach Hot Sandwich", "price" : 7.25 },
{location: 'The Grill', "item" : "The BLT", "price" : 6 },
{location: 'The Grill', "item" : "Blue Wall Club Hot Sandwich", "price" : 8 },
{location: 'The Grill', "item" : "Chicken Parmesan Hot Sandwich", "price" : 8 },
{location: 'The Grill', "item" : "Extra Cheese", "price" : 1.5 },
{location: 'The Grill', "item" : "Avocado", "price" : 2 },
{location: 'The Grill', "item" : "Bacon", "price" : 2 },
{location: 'The Grill', "item" : "Fresh Hummus", "price" : 3 },
{location: 'The Grill', "item" : "Extra Meat", "price" : 3 },
{location: 'The Grill', "item" : "Combo Upgrade", "price" : 2 },
=======
 {location: 'The Grill', item : "Chicken Bacon Ranch Ciabatta", price : 8 },
{location: 'The Grill', item : "Buffalo Chicken Ciabatta", price : 8 },
{location: 'The Grill', item : "Steak and Cheese Ciabatta", price : 8 },
{location: 'The Grill', item : "Chicken and Pesto", price : 8 },
{location: 'The Grill', item : "Valley Chicken Sandwich", price : 8 },
{location: 'The Grill', item : "Tavola Veggie Sandwich", price : 6.75 },
{location: 'The Grill', item : "Spicy Roast Beef Sandwich", price : 7 },
{location: 'The Grill', item : "Italian Cold Cut Sandwich", price : 8 },
{location: 'The Grill', item : "Caprese Sandwich", price : 7 },
{location: 'The Grill', item : "Classic Grinder", price : 7 },
{location: 'The Grill', item : "Three Cheese and Spinach Hot Sandwich", price : 7.25 },
{location: 'The Grill', item : "The BLT", price : 6 },
{location: 'The Grill', item : "Blue Wall Club Hot Sandwich", price : 8 },
{location: 'The Grill', item : "Chicken Parmesan Hot Sandwich", price : 8 },
{location: 'The Grill', item : "Extra Cheese", price : 1.5 },
{location: 'The Grill', item : "Avocado", price : 2 },
{location: 'The Grill', item : "Bacon", price : 2 },
{location: 'The Grill', item : "Fresh Hummus", price : 3 },
{location: 'The Grill', item : "Extra Meat", price : 3 },
{location: 'The Grill', item : "Combo Upgrade", price : 2 },
>>>>>>> 8331e3e778cf6e5d7c60966a7dc81f3d418a234e
]);
db.items.createIndex({ location: 1 });
db.items.createIndex({ item: 1 });
db.items.createIndex({ description: 1 });
db.items.createIndex({ price: 1 });
