/* TABLE */
-- Hasura Enum table containing product categories
-- Arguably, making categories an Enum might not be a best practice
--
-- For a few reasons:
--
-- Primarily that, because each change to the Enum table (insert/update/delete) modifies the GQL schema types
-- any sort of Client SDK containing the schema types has to be regenerated to stay up-to-date after any changes
--
-- And also because the metadata needs to be reloaded after modifications to the enum, since this can't be detected and reflected automatically yet
--
-- But, this is a great way to demo this feature and a semi-realistic usecase
CREATE TABLE product_category_enum (
    name text PRIMARY KEY,
    display_name text NOT NULL UNIQUE
);

INSERT INTO product_category_enum (
    display_name,
    name)
VALUES (
    'Home Furnishing',
    'home_furnishing'),
(
    'Computers',
    'computers'),
(
    'Baby Care',
    'baby_care'),
(
    'Wearable Smart Devices',
    'wearable_smart_devices'),
(
    'Furniture',
    'furniture'),
(
    'Home Entertainment',
    'home_entertainment'),
(
    'Home & Kitchen',
    'home_kitchen'),
(
    'Clothing',
    'clothing'),
(
    'Beauty and Personal Care',
    'beauty_and_personal_care'),
(
    'Sunglasses',
    'sunglasses'),
(
    'Tools & Hardware',
    'tools_hardware'),
(
    'Household Supplies',
    'household_supplies'),
(
    'Home Improvement',
    'home_improvement'),
(
    'Footwear',
    'footwear'),
(
    'Gaming',
    'gaming'),
(
    'Mobiles & Accessories',
    'mobiles_accessories'),
(
    'Sports & Fitness',
    'sports_fitness'),
(
    'Health & Personal Care Appliances',
    'health_personal_care_appliances'),
(
    'Home Decor & Festive Needs',
    'home_decor_festive_needs'),
(
    'Pens & Stationery',
    'pens_stationery'),
(
    'Watches',
    'watches'),
(
    'Food & Nutrition',
    'food_nutrition'),
(
    'Kitchen & Dining',
    'kitchen_dining'),
(
    'Pet Supplies',
    'pet_supplies'),
(
    'Jewellery',
    'jewellery'),
(
    'Cameras & Accessories',
    'cameras_accessories'),
(
    'Automotive',
    'automotive'),
(
    'eBooks',
    'e_books'),
(
    'Toys & School Supplies',
    'toys_school_supplies'),
(
    'Eyewear',
    'eyewear'),
(
    'Automation & Robotics',
    'automation_robotics'),
(
    'Bags, Wallets & Belts',
    'bags_wallets_belts');


/* FOREIGN KEYS */
/* TRIGGERS */
