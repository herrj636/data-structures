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
  }
}

diaryEntries.push(new DiaryEntry(0, 'October 12, 2018', "I was born!", true, ["baby food", "baby formula"]));
diaryEntries.push(new DiaryEntry(1, 'October 12, 2018', "I piloted my first solo flight!", true, ["pancakes"]));
diaryEntries.push(new DiaryEntry(2, 'October 12, 2018', false));

console.log(diaryEntries);