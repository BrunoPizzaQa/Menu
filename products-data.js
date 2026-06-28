/*
 * Bruno — Products catalog (shared by menu.html and dashboard.html)
 * ------------------------------------------------------------------
 * Products are stored in Firestore (collection below) and managed
 * from the dashboard. This file only provides:
 *   - the collection name
 *   - the default category list (section order + titles + display style)
 *   - the DEFAULT catalog, used as a fallback on the menu before the
 *     owner seeds Firestore, and as the source for the dashboard's
 *     one-time "Import current menu" button.
 *
 * Categories: the owner can also create NEW categories from the
 * dashboard. A custom category is stored ON each product as
 * `categoryTitle` (bilingual display name) + `categoryDisplay`
 * ("card" = photo cards, "list" = compact rows). The known categories
 * below take priority for title/order; unknown categories fall back to
 * the values stored on the product.
 *
 * Editing a product in Firestore NEVER changes past orders: each order
 * stores its own snapshot of item name + price (+ note) at order time.
 */
window.PRODUCTS_COLLECTION = "products";

/* Sections rendered on the menu (in this order). The dashboard uses the
 * same list for its category chooser and grouping.
 *   display: "card" = photo cards with a note box (pizzas, sides)
 *            "list" = compact name + price rows (drinks, sauces)
 */
window.PRODUCT_CATEGORIES = [
  { key: "pizzas", title: "Pizzas", display: "card" },
  { key: "sides",  title: "Sides",  display: "card" },
  { key: "drinks", title: "Drinks · المشروبات", display: "list" },
  { key: "sauces", title: "Sauces · الصوصات",   display: "list" }
];

/* Current menu, used as fallback + seed source. sortOrder is per-category. */
window.MENU_PRODUCTS_DEFAULT = [
  { name: "Margherita",        price: 54, category: "pizzas", desc: "Fresh mozzarella · tomato sauce · fresh basil", imageUrl: "menu-images/margherita.png",        available: true, sortOrder: 1 },
  { name: "Chicken Buffalo",   price: 54, category: "pizzas", desc: "Buffalo chicken · cheese · ranch sauce",        imageUrl: "menu-images/chicken-buffalo.png",   available: true, sortOrder: 2 },
  { name: "Burrata & Honey",   price: 64, category: "pizzas", desc: "Burrata cheese · honey · fresh rocca",          imageUrl: "menu-images/burrata-honey.png",     available: true, sortOrder: 3 },
  { name: "Pepperoni",         price: 54, category: "pizzas", desc: "Pepperoni · cheese",                            imageUrl: "menu-images/pepperoni.png",         available: true, sortOrder: 4 },
  { name: "Lemoncillo",        price: 64, category: "pizzas", desc: "Fresh lemon · cheese · fresh basil",            imageUrl: "menu-images/lemoncillo.png",        available: true, sortOrder: 5 },
  { name: "Truffle",           price: 64, category: "pizzas", desc: "Truffle paste · cheese · fresh rocca",          imageUrl: "menu-images/truffle.png",           available: true, sortOrder: 6 },
  { name: "BBQ Brisket",       price: 64, category: "pizzas", desc: "Beef brisket · cheese · BBQ ranch sauce",       imageUrl: "menu-images/bbq-brisket.png",       available: true, sortOrder: 7 },

  { name: "Bechamel Bites",     price: 28, category: "sides", desc: "Bechamel · cheese · beef bacon jam",            imageUrl: "menu-images/bechamel-bites.png",    available: true, sortOrder: 1 },
  { name: "Pannochie Fritte",   price: 28, category: "sides", desc: "Corn on cob · parmesan cheese · cajun spice",   imageUrl: "menu-images/pannochie-fritte.png",  available: true, sortOrder: 2 },
  { name: "Jalapeno Poppers",   price: 28, category: "sides", desc: "Fresh jalapeño · mixed cheese",                 imageUrl: "menu-images/jalapeno-poppers.png",  available: true, sortOrder: 3 },
  { name: "Arancini",           price: 28, category: "sides", desc: "Risotto · chicken · mushroom",                  imageUrl: "menu-images/arancini.png",          available: true, sortOrder: 4 },
  { name: "Brisket Croquettes", price: 38, category: "sides", desc: "Beef brisket · cheese · BBQ honey",             imageUrl: "menu-images/brisket-croquettes.png", available: true, sortOrder: 5 },
  { name: "French Fries",       price: 13, category: "sides", desc: "Crispy fries",                                  imageUrl: "menu-images/fries.png",             available: true, sortOrder: 6 },
  { name: "Parmesan Fries",     price: 20, category: "sides", desc: "Fries · parmesan cheese",                       imageUrl: "menu-images/fries.png",             available: true, sortOrder: 7 },

  { name: "Bottled Water",      price: 2, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 1 },
  { name: "Cola",               price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 2 },
  { name: "Cola Zero",          price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 3 },
  { name: "Seven Up",           price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 4 },
  { name: "Seven Up Diet",      price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 5 },
  { name: "Kinza Cola",         price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 6 },
  { name: "Kinza Cola Diet",    price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 7 },
  { name: "Kinza Citrus",       price: 5, category: "drinks", desc: "", imageUrl: "", available: true, sortOrder: 8 },

  { name: "Hot Honey",          price: 5, category: "sauces", desc: "", imageUrl: "", available: true, sortOrder: 1 },
  { name: "Truffle Sauce",      price: 5, category: "sauces", desc: "", imageUrl: "", available: true, sortOrder: 2 },
  { name: "Ranch Sauce",        price: 5, category: "sauces", desc: "", imageUrl: "", available: true, sortOrder: 3 },
  { name: "Special Sauce",      price: 5, category: "sauces", desc: "", imageUrl: "", available: true, sortOrder: 4 },
  { name: "Ketchup",            price: 2, category: "sauces", desc: "", imageUrl: "", available: true, sortOrder: 5 }
];
