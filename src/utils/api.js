const axios = require("axios");
module.exports = {
  getLeaders(locationName) {
    axios.defaults.baseURL =
      "https://cors-anywhere.herokuapp.com/https://quiet-ocean-04481.herokuapp.com";
    return axios.get(`/leaders/${locationName}`);
  },
};
