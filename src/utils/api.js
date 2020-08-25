const axios = require("axios");
axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://quiet-ocean-04481.herokuapp.com";

module.exports = {
  getLeaders(locationName) {
    return axios.get(`/leaders/${locationName}`);
  },
};
