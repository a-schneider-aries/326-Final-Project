bamboo = new Mongo().getDB('bamboo');
bamboo.items.remove({});
bamboo.items.insert([
 {item: 'Dim Sum Platter', description: '6 pieces of dim sum', price: 9.00},
 {item: 'Individual Plate', description: '2 pieces of dim sum', price: 3.50},
 {item: 'Lunch and Dinner Hot Plate Special', description: '2 pieces of dim sum', price: 9.00},
 {item: 'Fountain Drink', description: '', price: 1.00}
]);
bamboo.items.createIndex({ status: 1 });
bamboo.items.createIndex({ owner: 1 });
bamboo.items.createIndex({ created: 1 });

deli = new Mongo().getDB('deli');
deli.items.remove({});
deli.items.insert([
 //insert menu items for deli delish
 {"item" : "Chicken Bacon Ranch Ciabatta", "price" : 8 },
    {"item" : "Buffalo Chicken Ciabatta", "price" : 8 },
    {"item" : "Steak and Cheese Ciabatta", "price" : 8 },
    {"item" : "Chicken and Pesto", "price" : 8 },
    {"item" : "Valley Chicken Sandwich", "price" : 8 },
    {"item" : "Tavola Veggie Sandwich", "price" : 6.75 },
    {"item" : "Spicy Roast Beef Sandwich", "price" : 7 },
    {"item" : "Italian Cold Cut Sandwich", "price" : 8 },
    { "item" : "Caprese Sandwich", "price" : 7 },
    { "item" : "Classic Grinder", "price" : 7 },
    {"item" : "Three Cheese and Spinach Hot Sandwich", "price" : 7.25 },
    {"item" : "The BLT", "price" : 6 },
    {"item" : "Blue Wall Club Hot Sandwich", "price" : 8 },
    {"item" : "Chicken Parmesan Hot Sandwich", "price" : 8 },
    {"item" : "Extra Cheese", "price" : 1.5 },
    {"item" : "Avocado", "price" : 2 },
    {"item" : "Bacon", "price" : 2 },
    {"item" : "Fresh Hummus", "price" : 3 },
    {"item" : "Extra Meat", "price" : 3 }
]);
deli.items.createIndex({ status: 1 });
deli.items.createIndex({ owner: 1 });
deli.items.createIndex({ created: 1 });

green = new Mongo().getDB('green');
green.items.remove({});
green.items.insert([
 //insert menu items for green fields
]);
green.items.createIndex({ status: 1 });
green.items.createIndex({ owner: 1 });
green.items.createIndex({ created: 1 });

grill = new Mongo().getDB('grill');
grill.items.remove({});
grill.items.insert([
 //insert menu items for the grill
]);
grill.items.createIndex({ status: 1 });
grill.items.createIndex({ owner: 1 });
grill.items.createIndex({ created: 1 });

paciugo = new Mongo().getDB('paciugo');
paciugo.items.remove({});
paciugo.items.insert([
 //insert menu items for paciugo
]);
paciugo.items.createIndex({ status: 1 });
paciugo.items.createIndex({ owner: 1 });
paciugo.items.createIndex({ created: 1 });

star = new Mongo().getDB('star');
star.items.remove({});
star.items.insert([
 //insert menu items for star ginger
]);
star.items.createIndex({ status: 1 });
star.items.createIndex({ owner: 1 });
star.items.createIndex({ created: 1 });

tamales = new Mongo().getDB('tamales');
tamales.items.remove({});
tamales.items.insert([
 //insert menu items for tamales
]);
tamales.items.createIndex({ status: 1 });
tamales.items.createIndex({ owner: 1 });
tamales.items.createIndex({ created: 1 });

tavola = new Mongo().getDB('tavola');
tavola.items.remove({});
tavola.items.insert([
 //insert menu items for tavola
]);
tavola.items.createIndex({ status: 1 });
tavola.items.createIndex({ owner: 1 });
tavola.items.createIndex({ created: 1 });

wasabi = new Mongo().getDB('wasabi');
wasabi.items.remove({});
wasabi.items.insert([
 //insert menu items for wasabi
]);
wasabi.items.createIndex({ status: 1 });
wasabi.items.createIndex({ owner: 1 });
wasabi.items.createIndex({ created: 1 });

yum = new Mongo().getDB('yum');
yum.items.remove({});
yum.items.insert([
    {item: 'Paciugo Gelato', price: 2.50},
    {item: 'Homemade cookies, pastries, and cakes', price: 4.00}
]);
yum.items.createIndex({ status: 1 });
yum.items.createIndex({ owner: 1 });
yum.items.createIndex({ created: 1 });