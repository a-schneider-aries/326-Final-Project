bamboo = new Mongo().getDB('bamboo');
bamboo = connect("localhost:3000")
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
 //insert menu items for yum! bakery
]);
yum.items.createIndex({ status: 1 });
yum.items.createIndex({ owner: 1 });
yum.items.createIndex({ created: 1 });