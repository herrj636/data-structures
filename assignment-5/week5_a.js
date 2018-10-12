var diaryEntries = [];

class DiaryEntry {
  constructor(primaryKey, date, time, price, entry, liquor) {
    this.pk = {};
    this.pk.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.time = {}; 
    this.time.N = time.toDateString();
    this.price = {}; 
    this.price.N = price.toDateString();
    this.drink = {};
    this.drink.S = entry;
    this.liquor = {};
    this.liquor.S = liquor;
    this.drinkName = {};
    this.drinkName.S = drinkName;
  }
}

diaryEntries.push(new DiaryEntry(0, 'October 11, 2018', 1941, 4.00, 'beer', 'beer', 'Sam Adams');
diaryEntries.push(new DiaryEntry(1, 'October 11, 2018', 2017, 4.00, 'beer', 'beer', 'Sam Adams');
diaryEntries.push(new DiaryEntry(2, 'October 11, 2018', 2103, 4.00, 'beer', 'beer', 'Bud Light');

console.log(diaryEntries);