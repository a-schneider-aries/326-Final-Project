var db = new Mongo().getDB('menu');
db.items.remove({});
db.items.insertMany([
 {location: 'Bamboo', item: 'Dim Sum Platter', description: '6 pieces of dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Individual Plate', description: '2 pieces of dim sum', price: 3.50},
 {location: 'Bamboo', item: 'Lunch and Dinner Hot Plate Special', description: '2 pieces of dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Fountain Drink', description: '', price: 1.00},
]);
db.items.createIndex({ location: 1 });
db.items.createIndex({ item: 1 });
db.items.createIndex({ description: 1 });
db.items.createIndex({ price: 1 });
