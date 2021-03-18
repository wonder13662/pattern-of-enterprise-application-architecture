const revenueRecognition = require('./index');

module.exports = {
  create() {
    return {
      calculateRevenueRecognitions(contract) {
        contract.addRevenueRecognition(
          revenueRecognition.create(
            contract.getRevenue(),
            contract.getWhenSigned()
          )
        );
      }
    };
  }
}
