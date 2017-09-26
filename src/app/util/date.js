export default {
  isValidStringDate(dateAsString) {
    const valid = dateAsString.length >= 5;

    return valid;
  },

  getDate(dateAsString) {
    const valid = this.isValidStringDate(dateAsString);

    return valid ? new Date(dateAsString) : this.getDefaultDate();
  },

  getDefaultDate() {
    const date = new Date();
    date.setHours(12);
    date.setMinutes(0);

    return date;
  },
};
