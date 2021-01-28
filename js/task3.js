const Storage = function ([...items]) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  this.items.splice(index, 1);
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);
// console.log(storage.items);

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
