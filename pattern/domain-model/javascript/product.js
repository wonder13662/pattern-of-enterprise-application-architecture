const completeRecognitionStrategy = require('./revenueRecognition/completeRecognitionStrategy');
const threeWayRecognitionStrategy = require('./revenueRecognition/threeWayRecognitionStrategy');

const create = (name, recognitionStrategy) => {
  return {
    name,
    recognitionStrategy,
    calculateRevenueRecognitions(contract) {
      this.recognitionStrategy.calculateRevenueRecognitions(contract);
    }
  }
}

module.exports = {
  createWordProcessor(name) {
    return create(name, completeRecognitionStrategy.create());
  },
  createSpreadsheet(name) {
    return create(name, threeWayRecognitionStrategy.create(60, 90));
  },
  createDatabase(name) {
    return create(name, threeWayRecognitionStrategy.create(30, 60));
  }
}
