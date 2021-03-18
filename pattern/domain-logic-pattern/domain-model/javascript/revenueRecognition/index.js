const dayjs = require('dayjs');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)

module.exports = {
  /**
   * Create new revenueRecognition
   * @param {Money} money - Money instance
   * @param {Date} date - js native Date instance
   * @return {void}
   */
  create(money, date) {
    return {
      money,
      date,
      getAmount() {
        return this.money.dollars;
      },
      isRecognizableBy(asOf) {
        return dayjs(asOf).isSameOrAfter(dayjs(this.date));
      }
    }
  }
};
