db = new Mongo().getDB('menu');
db.items.remove({});
db.cart.remove({});
db.items.insertMany([
    {cart = False , location: 'Bamboo', item: 'Dim Sum Platter', description: 'Six pieces of assorted dim sum', price: 9.00},
    {cart = False , location: 'Bamboo', item: 'Individual Plate', description: 'Two pieces of dim sum', price: 3.50},
    {cart = False , location: 'Bamboo', item: 'Lunch and Dinner Hot Plate Special', description: 'Hot plate with two pieces of dim sum', price: 9.00},
    {cart = False , location: 'Bamboo', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'Deli', item : "Chicken Bacon Ranch Ciabatta", description: 'Roasted chicken breast, cheddar cheese, bacon, and ranch dressing, with local greens and sliced tomato', price : 8 },
    {cart = False , location: 'Deli', item : "Buffalo Chicken Ciabatta", description: 'Breaded chicken, house-made buffalo sauce, and crumbled blue cheese, with local greens and sliced tomato', price : 8 },
    {cart = False , location: 'Deli', item : "Steak and Cheese Ciabatta", description: 'Shaved steak, onions, peppers, cheddar cheese, and garlic aioli, with local greens and sliced tomato', price : 8 },
    {cart = False , location: 'Deli', item : "Chicken and Pesto", description: 'Roasted chicken breast, pesto, and fresh mozzarella, with local greens and sliced tomato', price : 8 },
    {cart = False , location: 'Deli', item : "Valley Chicken Sandwich", description: 'Roasted chicken breast, ham, Swiss cheese, spicy mustard, and pickles, with local greens and sliced tomato on a signature roll', price : 8 },
    {cart = False , location: 'Deli', item : "Tavola Veggie Sandwich", description: 'Fresh hummus, olives, roasted red peppers, and feta cheese, with local greens and sliced tomato on 12-grain bread', price : 6.75 },
    {cart = False , location: 'Deli', item : "Spicy Roast Beef Sandwich", description: 'House roast beef, provolone cheese, banana peppers, and creamy horseradish, with local greens and sliced tomato on sourdough', price : 7 },
    {cart = False , location: 'Deli', item : "Italian Cold Cut Sandwich", description: 'Pepperoni, salami, ham, provolone, roasted red peppers, and pesto, with local greens and sliced tomato on a baguette', price : 8 },
    {cart = False , location: 'Deli', item : "Caprese Sandwich", description: 'Fresh mozzarella and pesto, with local greens and sliced tomato on a baguette', price : 7 },
    {cart = False , location: 'Deli', item : "Classic Grinder", description: 'Choice of ham, turkey, or house roast beef, with local greens and sliced tomato on a signature roll or 12-grain bread', price : 7 },
    {cart = False , location: 'Deli', item : "Three Cheese and Spinach Hot Sandwich", description: 'Melted Swiss, provolone, and cheddar cheeses with baby spinach and garlic aioli on a baguette', price : 7.25 },
    {cart = False , location: 'Deli', item : "The BLT", description: 'Double portion of bacon with mixed greens, tomato, and mayo on sourdough', price : 6 },
    {cart = False , location: 'Deli', item : "Blue Wall Club Hot Sandwich", description: 'House roasted turkey, bacon, cheddar cheese, mixed greens, tomato, and garlic aioli on sourdough', price : 8 },
    {cart = False , location: 'Deli', item : "Chicken Parmesan Hot Sandwich", description: 'Breaded chicken, tomato sauce, and provolone and mozzarella cheeses on a signature roll', price : 8 },
    {cart = False , location: 'Deli', item : "Extra Cheese", price : 1.5 },
    {cart = False , location: 'Deli', item : "Avocado", price : 2 },
    {cart = False , location: 'Deli', item : "Bacon", price : 2 },
    {cart = False , location: 'Deli', item : "Fresh Hummus", price : 3 },
    {cart = False , location: 'Deli', item : "Extra Meat", price : 3 },
    {cart = False , location: 'Deli', item : "Combo Upgrade", price : 2 },
    {cart = False , location: 'Deli', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'Green', item: 'Garden Salad', description: 'Mixed greens, croutons, sliced almonds, carrot, cucumbers, and tomatoes with balsamic vinaigrette', price: 6.5},
    {cart = False , location: 'Green', item: "Caesar Salad", description: "Mixed greens, croutons & Parmesan cheese with Caesar Dressing", price: 6.5},
    {cart = False , location: 'Green', item: "Southwestern Salad", description: "Mixed greens, roasted corn, black beans, avocado, sliced peppers & onions with chipotle ranch", price: 7.5},
    {cart = False , location: 'Green', item: "Blueberry Cheddar Salad", description: 'Mixed greens, cheddar cheese, blueberries, and sliced almonds with blueberry pomegranate vinaigrette', price: 7.5},
    {cart = False , location: 'Green', item: "Antipasto Salad", description: "Mixed greens, salami, ham, pepperoni, provolone cheese, red peppers, kalamata olives, banana peppers, and white balsamic vinaigrette", price: 9},
    {cart = False , location: "Green", item: "Buffalo Chicken Salad", description: "Mixed greens, hand battered buffalo chicken, blue cheese, diced celery, grape tomatoes, and ranch dressing", price: 9},
    {cart = False , location: "Green", item: "Cobb Salad", description: "Mixed greens, diced chicken, bacon, hard boiled egg, blue cheese, avocado, and grape tomatoes with balsamic vinaigrette", price: 9},
    {cart = False , location: "Green", item: "Pesto Chicken Salad", description: "Mixed greens, pesto grilled chicken, mozzarella cheese, grape tomatoes, and croutons", price: 9},
    {cart = False , location: "Green", item: "Harvest Salad", description: "Spinach, almonds, avocado, spiced chickpeas, quinoa, meatless chicken, sweet potato, and blueberry pomegranate vinaigrette", price: 8.5},
    {cart = False , location: "Green", item: "Egg", price: 0.75},
    {cart = False , location: "Green", item: "All Butter Lettuce", price: 1},
    {cart = False , location: "Green", item: "Extra Cheese", price: 1},
    {cart = False , location: "Green", item: "Avocado", price: 1.5},
    {cart = False , location: "Green", item: "Bacon", price: 1.5},
    {cart = False , location: "Green", item: "Chicken Breast", price: 2.5},
    {cart = False , location: "Green", item: "Chicken Tender", price: 2.5},
    {cart = False , location: "Green", item: "Meatless Chicken", price: 2.5},
    {cart = False , location: "Green", item: "Spiced Chickpeas", price: 2.5},
    {cart = False , location: "Green", item: "Chicken Tenders Combo", description: "Chicken tenders with a small salad", price: 9},
    {cart = False , location: "Green", item: "Fountain Drink", price: 1},
    {cart = False , location: "Green", item: "Make it a Wrap", description: "Turn any salad into a wrap", price: 0},
    {cart = False , location: 'Tavola', item: 'Hummus Bowl', description: 'Served with freshly made pita, marinated olives, imported feta, cucumber, and tomato salad', price: 9},
    {cart = False , location: 'Tavola', item: 'Falafel with Tahini Mediterranean Wrap', price: 9},
    {cart = False , location: 'Tavola', item: 'Beef Kefta with Tzatiki Mediterranean Wrap', price: 9},
    {cart = False , location: 'Tavola', item: 'Chicken Skewers with Romesco Mediterranean Wrap', price: 9},
    {cart = False , location: 'Tavola', item: 'Rigatoni with Tomatoes, Spicy Fennel Sausage and Cream', description: 'Made to order featuring Barilla Pasta', price: 9},
    {cart = False , location: 'Tavola', item: 'Linguini with Pesto and Cherry Tomatoes', description: 'Made to order featuring Barilla Pasta', price: 9},
    {cart = False , location: 'Tavola', item: 'Chicken Broccoli Alfredo', description: 'Made to order featuring Barilla Pasta', price: 9},
    {cart = False , location: 'Tavola', item: 'Daily Special Large Plate', price: 9.00},
    {cart = False , location: 'Tavola', item: 'Tavola Salad', price: 9.00},
    {cart = False , location: 'Tavola', item: 'Two Skewers or Falafel', price: 3.50},
    {cart = False , location: 'Tavola', item: 'Extra Hummus', price: 3.50},
    {cart = False , location: 'Tavola', item: 'Dolma or Olives', price: 2.50},
    {cart = False , location: 'Tavola', item: 'Extra Pita', price: 1.50},
    {cart = False , location: 'Tavola', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'Tavola', item: 'Four Cheese Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 6.00},
    {cart = False , location: 'Tavola', item: 'Hand Crafted Daily Specials Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 7.00},
    {cart = False , location: 'Tavola', item: 'Pepperoni Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 6.00},
    {cart = False , location: 'Green', item: 'Garden Salad', description: 'Mixed Greens, Croutons, Sliced Almonds, Carrots, Cucumbers & Tomatoes with House Balsamic Vinaigrette', price: 6.50},
    {cart = False , location: 'Green', item: 'Caesar Salad', description: 'Mixed Greens, Croutons & Shredded Parmesan with Organic Caesar Dressing', price: 6.50},
    {cart = False , location: 'Green', item: 'Southwestern Salad', description: 'Mixed Greens, Roasted Corn, Black Beans, Fresh Avocado, Sliced Peppers & Onions with Organic Chipotle Ranch Dressing', price: 7.50},
    {cart = False , location: 'Green', item: 'Blueberry Cheddar Salad', description: 'Mixed Greens, Cheddar Cheese, Fresh Blueberries, and Sliced Almonds with Blueberry Pomegranate Vinaigrette', price: 7.50},
    {cart = False , location: 'Green', item: 'Antipasto Salad', description: 'Mixed Greens, Salami, Ham, Pepperoni, Provolone Cheese, Red Peppers, Kalamata Olives, Banana Peppers with White Balsamic Vinaigrette', price: 9.00},
    {cart = False , location: 'Green', item: 'Buffalo Chicken Salad', description: 'Mixed Greens, Hand Battered Antibiotic Free Buffalo Chicken, Blue Cheese, Diced Celery, Grape Tomatoes with Ranch Dressing', price: 9.00},
    {cart = False , location: 'Green', item: 'Cobb Salad', description: 'Mixed Greens, Diced Antibiotic Free Chicken, Nitrate Free Bacon, Local Cage Free Hard Boiled Egg, Blue Cheese, Fresh Avocado, & Grape Tomatoes with House Balsamic Vinaigrette', price: 9.00},
    {cart = False , location: 'Green', item: 'Pesto Chicken Salad ', description: 'Mixed Greens, Pesto Grilled Chicken, Fresh Mozzarella, Grape Tomatoes, and Croutons', price: 9.00},
    {cart = False , location: 'Green', item: 'Harvest Salad ', description: 'Chicken, Sweet Potato with Blueberry Pomegranate Vinaigrette', price: 8.50},
    {cart = False , location: 'Green', item: 'Cage Free Local Egg', price: 0.75},
    {cart = False , location: 'Green', item: 'Scarlett Butter Lettuce Substitution', price: 1.00},
    {cart = False , location: 'Green', item: 'Extra Cheese', price: 1.00},
    {cart = False , location: 'Green', item: 'Fresh Sliced Avocado', price: 1.50},
    {cart = False , location: 'Green', item: 'Nitrate Free Bacon', price: 1.50},
    {cart = False , location: 'Green', item: 'Antibiotic Free Chicken', description: 'Breast or Tender', price: 2.50},
    {cart = False , location: 'Green', item: 'Meatless Chicken or Spiced Chickpeas', price: 2.50},
    {cart = False , location: 'Green', item: 'ABF Hand Breaded Chicken Tenders', description: 'Choice of Buffalo, BBQ or Plain Tenders with Blue Cheese or Ranch Dressing. Served with Small Salad', price: 9.00},
    {cart = False , location: 'Grill', item: 'Single Patty Burger', description: 'Beef, Turkey, Chicken & Veggie patty and American, Swiss, Cheddar, Blue or Pepper Jack cheese', price: 5},
    {cart = False , location: 'Grill', item: 'Double Patty Burger', description: 'Beef, Turkey, Chicken & Veggie patty and American, Swiss, Cheddar, Blue or Pepper Jack cheese', price: 7},
    {cart = False , location: 'Grill', item: 'Caramelized Onions', price:  0.75},
    {cart = False , location: 'Grill', item: 'Mushrooms', price:  0.75},
    {cart = False , location: 'Grill', item: 'Applewood Bacon', price:  1.50},
    {cart = False , location: 'Grill', item: 'Fresh Avocado', price:  1.50},
    {cart = False , location: 'Grill', item: 'Lettuce Wrap Substitution', price: 0},
    {cart = False , location: 'Grill', item: 'Gluten Free Bun Substitution', price: 0},
    {cart = False , location: 'Grill', item: 'Burger Combo Upgrade', description: 'Add Fruit or Side Salad & a Fountain Drink', price:  3.00},
    {cart = False , location: 'Grill', item: 'Chicken Tenders', price:  7.00},
    {cart = False , location: 'Grill', item: 'Chicken & Fries Basket', price:  9.00},
    {cart = False , location: 'Grill', item: 'French Fries', price:  3.00},
    {cart = False , location: 'Grill', item: 'Onion Rings', price:  3.50},
    {cart = False , location: 'Grill', item: 'Sweet Potato Fries', price:  3.50},
    {cart = False , location: 'Grill', item: 'Side Garden Salad', price:  2.50},
    {cart = False , location: 'Grill', item: 'Milkshakes', description: 'Vanilla, Chocolate, Strawberry, Special', price:  5.00},
    {cart = False , location: 'Grill', item: 'Fountain Drink', price:  1.00},
    {cart = False , location: 'Green', item: 'Fountain Drink', price: 1},
    {cart = False , location: 'Paciugo', item: 'Perfecto', description: '2 flavors', price: 2.49},
    {cart = False , location: 'Paciugo', item: 'Piccolo', description: '3 flavors', price: 3.99},
    {cart = False , location: 'Paciugo', item: 'Medio', description: '4 flavors', price: 4.99},
    {cart = False , location: 'Paciugo', item: 'Grande', description: '5 flavors', price: 5.99},
    {cart = False , location: 'Paciugo', item: 'Waffle cone', description: '3 flavors', price: 4.99},
    {cart = False , location: 'Paciugo', item: 'Frappe', description: 'Smooth Gelato Shake', price: 5.99},
    {cart = False , location: 'Paciugo', item: 'Frizzante', description: 'Gelato blended with San Pellegrino water', price: 5.99},
    {cart = False , location: 'Paciugo', item: 'Gelato Smoothie', description: 'Made with Fruit Sorbet', price: 5.99},
    {cart = False , location: 'star', item: 'Green Curry Chicken', description: 'With chicken, zucchini, peas and bamboo shoots and served with White or Brown Rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {cart = False , location: 'star', item: 'Jungle Curry', description: 'Tofu and veggies in Yellow Curry served with White or Brown Rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.00},
    {cart = False , location: 'star', item: 'Thai BBQ Chicken', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {cart = False , location: 'star', item: '5 Spice Tofu', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {cart = False , location: 'star', item: 'Orange Chicken', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {cart = False , location: 'star', item: 'Wok Special', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price:  8.50},
    {cart = False , location: 'star', item: 'Roasted Ginger Broth Pho', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu',  price: 8.00},
    {cart = False , location: 'star', item: 'Chicken Broth', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu',  price: 8.50},
    {cart = False , location: 'star', item: 'Spicy Thai Coconut Curry Broth', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu', price: 8.50},
    {cart = False , location: 'star', item: 'Bibimbap', description: 'Bulgogi (Korean style bbq beef), Korean spinach, pickled carrots, kimchi, mushroom, and zucchini, served on top of steamed white rice and topped with a fried egg', price: 10},
    {cart = False , location: 'star', item: 'Pot Sticker', price: 1.25},
    {cart = False , location: 'star', item: 'Spring Roll', price: 1.25},
    {cart = False , location: 'star', item: 'Brown Rice or White Rice', price: 1.50},
    {cart = False , location: 'star', item: 'Sesame Asian Greens', price: 2.50},
    {cart = False , location: 'star', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'wasabi', item: 'Teriyaki Don', description: 'Choice of Chicken, Beef or Salmon in teriyaki sauce in a bowl of rice', price: 9.00},
    {cart = False , location: 'wasabi', item: 'Katsu Don', description: 'Choice of Chicken or Pork', price: 9.00},
    {cart = False , location: 'wasabi', item: 'Blue Wall Don', description: 'Beef Bulgogi, Vegetable Tempura & Broccoli', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Teppanyaki', description: 'Served with Steamed Rice or Fried Rice and Stir-fried Vegetables. Choice of Chicken or Beef', price: 9.00},
    {cart = False , location: 'wasabi', item: 'Paradise Roll', description: 'Shrimp Tempura, Crab Meat & Cucumber Roll Wrapped with Salmon & Avocado Topped with Spicy Mayo, Tempura Crunch & Eel Sauce', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Rainbow Roll', description: 'California Roll topped with assorted Raw Fish, Avocado, & Masago Japanese Mayo', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Fantastic Roll', description: 'Smoked salmon, Crab Meat & Cucumber topped with Tuna & Avocado', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Manhattan Roll', description: 'Shrimp roll topped with Spicy Crab Meat & Masago', price: 9.00},
    {cart = False , location: 'wasabi', item: 'Oishi Roll', description: 'Shrimp tempura, Crab Meat, Tuna, Salmon, Albacore Tuna, Avocado & Masago topped with Spicy Mayo & Tempura Crunch', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Tiger Roll', description: 'Shrimp Tempura Roll with Tuna and Salmon, Topped with Avocad', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Alaskan Roll', description: 'Smoked Salmon, Asparagus, Cucumber topped with Masago', price: 7.50},
    {cart = False , location: 'wasabi', item: 'California Roll', description: 'Crab Meat, Cucumber, Avocado', price: 6.50},
    {cart = False , location: 'wasabi', item: 'Vegetable Roll', description: 'Asparagus, Carrots, Cucumber, Avocado', price: 6.50},
    {cart = False , location: 'wasabi', item: 'Sweet Potato Tempura Roll', description: 'Sweet Potato Tempura, Cucumber', price: 6.50},
    {cart = False , location: 'wasabi', item: 'Spicy Tuna Roll', description: 'Spicy Tuna, Cucumber, Tempura Crunch', price: 7.00},
    {cart = False , location: 'wasabi', item: 'Philadelphia Roll', description: 'Smoked Salmon, Cream Cheese, Cucumber', price: 7.50},
    {cart = False , location: 'wasabi', item: 'Spicy Tuna Bowl', description: 'Spicy Tuna, Spring Mix, Avocado, Sushi Rice', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Poke Bowl', description: 'Marinated Tuna, Spring Mix, Pickled Cucumber, Mango, Avocado, Quinoa, and Sushi Rice ', price: 10.00},
    {cart = False , location: 'wasabi', item: 'Miso Soup', price: 2.00},
    {cart = False , location: 'wasabi', item: 'Edamame', price: 3.25},
    {cart = False , location: 'wasabi', item: 'Seaweed Salad', price: 3.25},
    {cart = False , location: 'wasabi', item: 'Fried Rice', price: 3.75},
    {cart = False , location: 'wasabi', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'tamales', item: 'Grilled Marinated Beef', price: 8.00},
    {cart = False , location: 'tamales', item: 'Grilled Marinated Chicken', price: 8.00},
    {cart = False , location: 'tamales', item: 'Pork Carnita', price: 8.00},
    {cart = False , location: 'tamales', item: 'Re-Fried Lentils', price: 7.00},
    {cart = False , location: 'tamales', item: 'Extra Cheese', price: 1.00},
    {cart = False , location: 'tamales', item: 'Extra Meat', price: 2.50},
    {cart = False , location: 'tamales', item: 'Chips and Salsa', price: 2.00},
    {cart = False , location: 'tamales', item: 'Guacamole', price: 1.50},
    {cart = False , location: 'tamales', item: 'Fresh Avocado', price: 1.50},
    {cart = False , location: 'tamales', item: 'Fresh Salsa', price: 0.50},
    {cart = False , location: 'tamales', item: 'Agua Fresca', price: 2.95},
    {cart = False , location: 'tamales', item: 'Fountain Drink', price: 1.00},
    {cart = False , location: 'tamales', item: 'Combo Upgrade', description: 'Add Fresh Homemade Chips or Fruit & a Fountain Drink', price: 2.00},
]);
db.items.createIndex({ cart = False , location: 1 });
db.items.createIndex({ item: 1 });
db.items.createIndex({ description: 1 });
db.items.createIndex({ price: 1 });
db.items.createIndex({ cart: 1 });
