/*
 * Bruno — Products catalog (shared by menu.html and dashboard.html)
 * ------------------------------------------------------------------
 * Products are stored in Firestore (collection below) and managed
 * from the dashboard. This file only provides:
 *   - the collection name
 *   - the category list (section order + titles)
 *   - the DEFAULT catalog, used as a fallback on the menu before the
 *     owner seeds Firestore, and as the source for the dashboard's
 *     one-time "Import current menu" button.
 *
 * Editing a product in Firestore NEVER changes past orders: each order
 * stores its own snapshot of item name + price at order time.
 */
window.PRODUCTS_COLLECTION = "products";

/* Sections rendered on the menu (in this order). The dashboard uses the
 * same list for its category dropdown and grouping. */
window.PRODUCT_CATEGORIES = [
  { key: "pizzas", title: "Pizzas" },
  { key: "sides", title: "Sides" }
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

  { name: "Bechamel Bites",    price: 28, category: "sides",  desc: "Bechamel · cheese · beef bacon jam",            imageUrl: "menu-images/bechamel-bites.png",    available: true, sortOrder: 1 },
  { name: "Pannochie Fritte",  price: 28, category: "sides",  desc: "Corn on cob · parmesan cheese · cajun spice",   imageUrl: "menu-images/pannochie-fritte.png",  available: true, sortOrder: 2 },
  { name: "Jalapeno Poppers",  price: 28, category: "sides",  desc: "Fresh jalapeño · mixed cheese",                 imageUrl: "menu-images/jalapeno-poppers.png",  available: true, sortOrder: 3 },
  { name: "Arancini",          price: 28, category: "sides",  desc: "Risotto · chicken · mushroom",                  imageUrl: "menu-images/arancini.png",          available: true, sortOrder: 4 },
  { name: "Brisket Croquettes", price: 38, category: "sides", desc: "Beef brisket · cheese · BBQ honey",             imageUrl: "menu-images/brisket-croquettes.png", available: true, sortOrder: 5 }
];
