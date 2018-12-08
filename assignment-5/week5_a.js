var diaryEntries = [];

class DiaryEntry {
  constructor(key, date, time, latlon, price, drinkForm, liquor, brand) {
    this.pk = {};
    this.pk.N = key.toString();
    this.date = {};
    this.date.N = date.toString();
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

// diaryEntries.push(new DiaryEntry(10042018, 1831,[40.7118201, -73.9737431], 7.00, 'beer', 'beer', 'Bud Light'));
// diaryEntries.push(new DiaryEntry(1941, 10112018, [40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Sam Adams'));
// diaryEntries.push(new DiaryEntry(1941, 10112018, [40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Sam Adams'));
// diaryEntries.push(new DiaryEntry(2017, 10112018, [40.7370996, -73.9737431], 4.00, 'beer', 'beer', 'Sam Adams'));

// Oct 4
diaryEntries.push(new DiaryEntry(0, 10042018, 1831,[40.7118201, -73.9737431], 7.00, 'beer', 'beer', 'Bud Light'));

diaryEntries.push(new DiaryEntry(1, 10042018, 1904,[40.7118201, -73.9572489], 7.00, 'tall', 'tequila', 'unknown'));

diaryEntries.push(new DiaryEntry(2, 10042018, 2008,[40.7118201, -73.9572489], 7.00, 'tall', 'tequila', 'unknown'));

diaryEntries.push(new DiaryEntry(3, 10042018, 2122,[40.7130890, -73.9573015], 14.00, 'wine glass', 'wine', 'Cellar Escoda-Sanahuja'));

diaryEntries.push(new DiaryEntry(4, 10042018, 2342,[40.7125548, -73.9558347], 8.00, 'beer', 'beer', 'Brooklyn Lager'));

// Oct 11
diaryEntries.push(new DiaryEntry(5, 10112018, 1917,[40.7294657, -73.9872883], 4.00, 'beer', 'beer', 'Sam Adams'));


diaryEntries.push(new DiaryEntry(6, 10112018, 2002,[40.7294657, -73.9872883], 4.00, 'beer', 'beer', 'Sam Adams'));

diaryEntries.push(new DiaryEntry(7, 10112018, 2033,[40.7294657, -73.9872883], 4.00, 'beer', 'beer', 'Sam Adams'));


diaryEntries.push(new DiaryEntry(8, 10112018, 2115,[40.7294657, -73.9872883], 4.00, 'beer', 'beer', 'Bud Light'));

 // Oct 12
diaryEntries.push(new DiaryEntry(9, 10122018, 2127,[40.7366896, -73.9914390], 7.00, 'beer', 'beer', 'Negra Modelo'));


diaryEntries.push(new DiaryEntry(10, 10122018, 2240,[40.7366896, -73.9914390], 7.00, 'beer', 'beer', 'Stella Artois'));

diaryEntries.push(new DiaryEntry(11, 10122018, 2342,[40.7112767, -73.9578983], 0, 'beer', 'beer', 'Flat Tire'));

// Oct 13
diaryEntries.push(new DiaryEntry(12, 10132018, 1923,[40.6989210, -73.9748450], 0, 'beer', 'beer', 'Flat Tire'));

diaryEntries.push(new DiaryEntry(13, 10132018, 2142,[40.6990443, -73.9745337], 0, 'wine glass', 'wine', 'Unknown'));

diaryEntries.push(new DiaryEntry(14, 10132018, 2238,[40.6989210, -73.9748450], 0, 'beer', 'beer', 'Brooklyn Lager'));

// Oct 14
diaryEntries.push(new DiaryEntry(15, 10142018, 0017,[40.7370996, -73.9737431], 0, 'cup', 'gin', 'Gordons'));

diaryEntries.push(new DiaryEntry(16, 10142018, 0056,[40.7370996, -73.9737431], 0, 'beer', 'beer', 'Corona'));

diaryEntries.push(new DiaryEntry(17, 10142018, 0055,[40.7370996, -73.9737431], 0, 'shot', 'aguardiente', 'Nectar'));

diaryEntries.push(new DiaryEntry(18, 10142018, 0139,[40.7294657, -73.9872883], 7.00, 'beer', 'beer', 'Lagunitas'));

diaryEntries.push(new DiaryEntry(19, 10142018, 0229,[40.7294657, -73.9872883], 7.00, 'beer', 'beer', 'Lagunitas'));

// Oct 15
// Home
diaryEntries.push(new DiaryEntry(20, 10152018, 2237,[40.7090847, -73.9526479], 0, 'short glass', 'rum', 'Santa Fe'));

// Oct 19
// Boulton & Watt
diaryEntries.push(new DiaryEntry(21, 10192018, 1904,[40.7225556, -73.9864347], 10.00, 'beer', 'beer', 'unknown'));

diaryEntries.push(new DiaryEntry(22, 10192018, 1944,[40.7225556, -73.9864347], 7.00, 'shot', 'jagermeister', 'Jagermeister'));

diaryEntries.push(new DiaryEntry(23, 10192018, 2002,[40.7225556, -73.9864347], 10.00, 'beer', 'beer', 'unknown'));

diaryEntries.push(new DiaryEntry(24, 10192018, 2052,[40.7225556, -73.9864347], 10.00, 'beer', 'beer', 'unknown'));

diaryEntries.push(new DiaryEntry(25, 10192018, 2138,[40.7225556, -73.9864347], 10.00, 'beer', 'beer', 'unknown'));

// Oct 20
// PIPS
diaryEntries.push(new DiaryEntry(26, 10202018, 0113,[40.7225556, -73.9864347], 5.00, 'can', 'beer', 'Pabst Blue Ribbon'));

// Refinery Roof
diaryEntries.push(new DiaryEntry(27, 10202018, 2022,[40.7521944, -73.9853695], 14.00, 'short glass', 'bourbon', 'Bulleit'));


// Oct 21
// Zarith
diaryEntries.push(new DiaryEntry(28, 10212018, 1718,[40.7112767, -73.9578983], 0, 'champagne glass', 'sparkling wine', 'unknown'));

diaryEntries.push(new DiaryEntry(29, 10212018, 1739,[40.7112767, -73.9578983], 0, 'champagne glass', 'sparkling wine', 'unknown'));

diaryEntries.push(new DiaryEntry(30, 10212018, 1812,[40.7112767, -73.9578983], 0, 'champagne glass', 'sparkling wine', 'unknown'));

diaryEntries.push(new DiaryEntry(31, 10212018, 1840,[40.7112767, -73.9578983], 0, 'champagne glass', 'sparkling wine', 'unknown'));

// Oct 26 
// Zartih
diaryEntries.push(new DiaryEntry(32, 10262018, 2034, [40.7112767, -73.9578983], 5.00, 'beer', 'beer', 'Stella Artois'));

diaryEntries.push(new DiaryEntry(33, 10262018, 2103, [40.7112767, -73.9578983], 5.00, 'beer', 'beer', 'Stella Artois'));

diaryEntries.push(new DiaryEntry(34, 10262018, 2126, [40.7112767, -73.9578983], 5.00, 'beer', 'beer', 'Stella Artois'));

diaryEntries.push(new DiaryEntry(35, 10262018, 2207, [40.7112767, -73.9578983], 0, 'cup', 'gin', 'Gordons'));

// Party
diaryEntries.push(new DiaryEntry(36, 10262018, 2347, [40.6969513, -73.9345859], 14.00, 'cup', 'whiskey', 'unknown'));

// Oct 27
diaryEntries.push(new DiaryEntry(37, 10272018, 0024, [40.6969513, -73.9345859], 14.00, 'cup', 'whiskey', 'unknown'));

diaryEntries.push(new DiaryEntry(38, 10272018, 0123, [40.6969513, -73.9345859], 14.00, 'cup', 'whiskey', 'unknown'));


// Maddy
diaryEntries.push(new DiaryEntry(39, 10272018, 2244, [40.6718819, -73.951413], 0, 'bottle', 'beer', 'unknown'));

diaryEntries.push(new DiaryEntry(40, 10272018, 2343, [40.6718819, -73.951413], 2.75, 'bottle', 'beer', 'Shocktop'));

diaryEntries.push(new DiaryEntry(41, 10272018, 0013, [40.6718819, -73.951413], 2.75, 'bottle', 'beer', 'Shocktop'));

diaryEntries.push(new DiaryEntry(42, 10272018, 0031, [40.6718819, -73.951413], 2.75, 'bottle', 'beer', 'Shocktop'));

diaryEntries.push(new DiaryEntry(43, 10272018, 0140, [40.6718819, -73.951413], 2.75, 'bottle', 'beer', 'Shocktop'));

diaryEntries.push(new DiaryEntry(44, 10272018, 0214, [40.6718819, -73.951413], 0, 'cup', 'various', 'unknown'));

// Oct 31
//At School
diaryEntries.push(new DiaryEntry(45, 10312018, 2214, [40.737034, -73.992245], 0, 'bottle', 'beer', 'Stella Artois'));

// Nov 1
//Rooftop
diaryEntries.push(new DiaryEntry(46, 11012018, 2233, [40.7170393, -73.9973807], 6.00, 'cup', 'beer', 'Blue Moon'));

diaryEntries.push(new DiaryEntry(47, 11012018, 2258, [40.7170393, -73.9973807], 6.00, 'cup', 'beer', 'Blue Moon'));

diaryEntries.push(new DiaryEntry(48, 11012018, 2320, [40.7170393, -73.9973807], 6.00, 'cup', 'beer', 'Blue Moon'));

diaryEntries.push(new DiaryEntry(49, 11012018, 2359, [40.7170393, -73.9973807], 6.00, 'cup', 'beer', 'Brooklyn Lager'));

// Nov 9
// Primo Valentin
diaryEntries.push(new DiaryEntry(50, 11092018, 2237, [40.7615582, -73.982604], 4.5, 'bottle', 'beer', 'Heineiken'));

diaryEntries.push(new DiaryEntry(51, 11092018, 2303, [40.7615582, -73.982604], 4.5, 'bottle', 'beer', 'Heineiken'));

diaryEntries.push(new DiaryEntry(52, 11092018, 2325, [40.7615582, -73.982604], 0, 'shot', 'tequila', 'Jose Cuervo'));

diaryEntries.push(new DiaryEntry(53, 11092018, 2327, [40.7615582, -73.982604], 4.5, 'bottle', 'beer', 'Heineiken'));

diaryEntries.push(new DiaryEntry(54, 11092018, 2353, [40.7615582, -73.982604], 4.5, 'bottle', 'beer', 'Heineiken'));


// Nov 10
// Aguardiente, $0 (40.7615582, -73.982604)
diaryEntries.push(new DiaryEntry(55, 11102018, 0028, [40.7615582, -73.982604], 0, 'shot', 'aguardiente', 'Nectar'));

diaryEntries.push(new DiaryEntry(56, 11102018, 0102, [40.7615582, -73.982604], 0, 'shot', 'tequila', 'Jose Cuervo'));

// Yuca
// Margarita, $14, Tequila, (40.7262099,-73.9858099)
diaryEntries.push(new DiaryEntry(57, 11102018, 0220, [40.7262099,-73.9858099], 14.00, 'tall glass', 'tequila', 'unknown'));

// Margarita, $0, Tequila, (40.7262099,-73.9858099)
diaryEntries.push(new DiaryEntry(58, 11102018, 0245, [40.7262099,-73.9858099], 0, 'tall glass', 'tequila', 'unknown'));




console.log(JSON.stringify(diaryEntries));