var diaryEntries = [];

class DiaryEntry {
  constructor(dateKey, time, latlon, price, drinkForm, liquor,brand) {
    this.pk = {};
    this.pk.N = dateKey.toString();
    this.time = {}; 
    this.time.N = time.toString();
    this.latlon = {}; 
    for (var i = 0; i < latlon.length; i++)
      latlon[i] = String(latlon[i]);
    this.latlon.NS = latlon
    this.price = {}; 
    this.price.N = price.toString();
    this.drinkFm = {};
    this.drinkFm.S = drinkForm;
    this.liquor = {};
    this.liquor.S = liquor;
    this.brand = {};
    this.brand.S = brand;
  }
}


diaryEntries.push(new DiaryEntry( 1941, 10112018, [40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Sam Adams'));
diaryEntries.push(new DiaryEntry(2017, 10112018, [40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Sam Adams'));
diaryEntries.push(new DiaryEntry(2103, 10112018,[40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Bud Light'));

console.log(JSON.stringify(diaryEntries));