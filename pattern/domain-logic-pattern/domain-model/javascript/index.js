const dayjs = require('dayjs');

const contract = require('./contract');
const product = require('./product');
const money = require('./money');

// 1. Word
const word = product.createWordProcessor('Thinking Word');
const wordContract = contract.create(1, word, money.create(1000), dayjs('2020-01-01', 'YYYY-MM-DD').valueOf());
wordContract.calculateRecognitions();
const wordRecognizedRevenue = wordContract.recognizedRevenue(new Date());
console.log('wordRecognizedRevenue:', wordRecognizedRevenue);

// 2. SpreadSheet
const calc = product.createSpreadsheet('Thinking calc');
const calcContract = contract.create(2, calc, money.create(30000), dayjs('2020-01-01', 'YYYY-MM-DD').valueOf());
calcContract.calculateRecognitions();
const calcRecognizedRevenue = calcContract.recognizedRevenue(new Date());
console.log('calcRecognizedRevenue:', calcRecognizedRevenue);

// 3. Database
const db = product.createDatabase('Thinking DB');
const dbContract = contract.create(2, db, money.create(90000), dayjs('2021-01-01', 'YYYY-MM-DD').valueOf());
dbContract.calculateRecognitions();
const dbRecognizedRevenue = dbContract.recognizedRevenue(new Date());
console.log('dbRecognizedRevenue:', dbRecognizedRevenue);
