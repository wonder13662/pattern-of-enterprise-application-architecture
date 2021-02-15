const dayjs = require('dayjs');
const revenueRecognition = require('./index');
const money = require('../money');

module.exports = {
  create(firstRecognitionOffset, secondRecognitionOffset) {
    return {
      firstRecognitionOffset,
      secondRecognitionOffset,
      calculateRevenueRecognitions(contract) {
        const allocation = Math.floor(contract.getRevenue().dollars / 3);
        contract.addRevenueRecognition(
          revenueRecognition.create(
            money.create(allocation),
            contract.getWhenSigned()
          )
        );
        contract.addRevenueRecognition(
          revenueRecognition.create(
            money.create(allocation),
            dayjs(contract.getWhenSigned()).add(firstRecognitionOffset, 'day').valueOf()
          )
        );
        contract.addRevenueRecognition(
          revenueRecognition.create(
            money.create(allocation),
            dayjs(contract.getWhenSigned()).add(secondRecognitionOffset, 'day').valueOf()
          )
        );
      }
    };
  }
}
