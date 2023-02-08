const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrades = grades.filter(grade => grade >= 70);

console.log(passingGrades);

//map array
// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const lighthouseLengths = lighthouses.map(lighthouse => lighthouse.length);

console.log(lighthouseLengths);
