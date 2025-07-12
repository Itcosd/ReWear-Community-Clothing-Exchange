categories = [
    {"name": "Shirts", "min_point": 10},
    {"name": "Trousers", "min_point": 20},
    {"name": "Jackets", "min_point": 30},
    {"name": "Dresses", "min_point": 25},
    {"name": "Footwear", "min_point": 15},
]

item_types = [
    {"name": "Casual Wear"},
    {"name": "Formal Wear"},
    {"name": "Ethnic Wear"},
    {"name": "Sports Wear"},
    {"name": "Winter Wear"},
]

sizes = [
    {"name": "XS"},
    {"name": "S"},
    {"name": "M"},
    {"name": "L"},
    {"name": "XL"},
]

conditions = [
    {"name": "New"},
    {"name": "Like New"},
    {"name": "Gently Used"},
    {"name": "Used"},
    {"name": "Worn Out"},
]

tags = [
    {"name": "cotton"},
    {"name": "denim"},
    {"name": "vintage"},
    {"name": "unisex"},
    {"name": "eco-friendly"},
    {"name": "branded"},
    {"name": "handmade"},
    {"name": "formal"},
    {"name": "casual"},
    {"name": "festive"},
]

items = [
    {
        "title": "Blue Denim Jacket",
        "description": "A stylish faded blue jacket, perfect for winter.",
        "category": "Jackets",
        "uploader": "profile_1",
        "type": "Winter Wear",
        "size": "M",
        "condition": "Like New",
        "tags": ["denim", "unisex"],
        "points": 40,
        "is_verified": True,
        "is_published": True,
        "is_swapped": False,
    },
    {
        "title": "Cotton Kurta",
        "description": "Traditional Indian kurta with embroidery.",
        "category": "Dresses",
        "uploader": "profile_2",
        "type": "Ethnic Wear",
        "size": "L",
        "condition": "Gently Used",
        "tags": ["cotton", "festive", "handmade"],
        "points": 30,
        "is_verified": False,
        "is_published": True,
        "is_swapped": False,
    },
    {
        "title": "White Sneakers",
        "description": "Classic white sneakers, worn just twice.",
        "category": "Footwear",
        "uploader": "profile_3",
        "type": "Casual Wear",
        "size": "XL",
        "condition": "Like New",
        "tags": ["branded", "casual"],
        "points": 20,
        "is_verified": True,
        "is_published": True,
        "is_swapped": True,
    },
]

item_images = [
    {"item": "Blue Denim Jacket", "image": "denim1.jpg"},
    {"item": "Blue Denim Jacket", "image": "denim2.jpg"},
    {"item": "Cotton Kurta", "image": "kurta1.jpg"},
    {"item": "White Sneakers", "image": "sneakers1.jpg"},
    {"item": "White Sneakers", "image": "sneakers2.jpg"},
]

reviews = [
    {"item": "Blue Denim Jacket", "reviewer": "profile_4", "rating": 5, "comment": "Absolutely loved it!"},
    {"item": "Cotton Kurta", "reviewer": "profile_1", "rating": 4, "comment": "Great for festivals, fit was good."},
    {"item": "White Sneakers", "reviewer": "profile_2", "rating": 5, "comment": "Looked brand new!"},
]
