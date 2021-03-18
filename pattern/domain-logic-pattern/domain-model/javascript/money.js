module.exports = {
  /**
   * Create new Money instance
   * @param {number} dollars - total amount in dollars
   * @return {Object} money - Money type instance
   */
  create(dollars) {
    return {
      dollars
    };
  }
};
