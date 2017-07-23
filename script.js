const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie-Sklodowska', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Mikołaj', last: 'Kopernik', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// ---------------------------ZADANIE PIERWSZE-----------------------------
// selekcja osób urodzonych w XVI wieku
// .filter()
//-------------------------------------------------------------------------

const fifteen = inventors.filter(function(inventor){
        if(inventor.year >= 1500 && inventor.year < 1600) {
    return true;
}
});
console.log(fifteen);
console.table(fifteen);

// ---------------------------ZADANIE DRUGIE-------------------------------
// tablica z imieniem i nazwiskiem odkrywcy
// .map()
//-------------------------------------------------------------------------
const fullNames = inventors.map(function(inventor){
    if (inventor.first != '' && inventor.last != '') {
        return inventor.first + ' ' + inventor.last;
    }
});
console.log(fullNames);

// ---------------------------ZADANIE TRZECIE------------------------------
//sortowanie najstarszego do najmłodszego
//.sort()
//-------------------------------------------------------------------------
const ordered = inventors.sort(function(firstPerson, secondPerson){
   if(firstPerson.year > secondPerson.year){
       return 1;
   }else{
       return -1;
   }
});
console.table(ordered);

// ---------------------------ZADANIE CZWARTE------------------------------
// ile lat żyli wszyscy odkrywcy  
// .reduce()
//--------------------------------------------------------------------------

const totalYears = inventors.reduce(function(total, inventor){
   return total + (inventor.passed - inventor.year);
},0);  // 0 bo przy pierwszej pętli nie mamy jeszcze "total"

console.log(totalYears);

// ---------------------------ZADANIE PIĄTE------------------------------
// Posortowanie po latach życia od najdłużej do najkrócej  
// .sort()
//--------------------------------------------------------------------------

const live = inventors.sort(function(firstPerson, secondPerson){
    const last = firstPerson.passed - firstPerson.year;
    const next = secondPerson.passed - secondPerson.year;
    
    if(last>next){
        return -1;
    }else{
        return 1;
    }
});
console.table(live);


// ---------------------------ZADANIE SZÓSTE------------------------------
// Pobranie danych z listy na stronie, dodanie ich do listy i wyświetlenie 
// .sort()
//--------------------------------------------------------------------------

const category = document.querySelector('.mw-category'); //wybranie kategorii (sprawdzenie inspektorem)
const links = Array.from(category.querySelectorAll('a')); //stworzenie tablicy z wszystkich elementów "a"
const de = links
                .map(link => link.textContent); //wyselekcjonowane wszystkich tekstowych
                .filter(streetName => streetName.includes('de')); //wybór tylko ulic ze słowem "de"

// ---------------------------ZADANIE SIÓDME------------------------------
// Wybranie ludzi alfabetycznie po nazwisku
// .sort()
//--------------------------------------------------------------------------
