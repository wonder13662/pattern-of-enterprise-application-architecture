module.exports = {
  /**
   * Create new contract
   * @param {number} id - unique product id
   * @param {Object} product - Product type instance
   * @param {Object} revenue - Money type instance
   * @param {Object} date - Date type instance
   * @return {Object} contract - Contract type instance
   */
  create(id, product, revenue, whenSigned) {
    return {
      id,
      product,
      revenue,
      whenSigned,
      revenueRecognitions: [],
      /**
       * Sum up total revenue of product
       * @param {date} asOf - target date to compare
       * @return {number} revenue
       */
      recognizedRevenue(asOf = new Date()) {
        const result = this.revenueRecognitions.reduce((acc, r) => r.isRecognizableBy(asOf) ? acc + r.getAmount() : acc, 0);
        return result;
      },
      calculateRecognitions() {
        this.product.calculateRevenueRecognitions(this);
      },
      /**
       * Sum up total revenue of product
       * @param {date} asOf - target date to compare
       * @return {number} revenue
       */
      addRevenueRecognition(revenueRecognition) {
        this.revenueRecognitions.push(revenueRecognition);
      },
      getRevenue() {
        return this.revenue;
      },
      getWhenSigned() {
        return this.whenSigned;
      },
    }
  },
};
