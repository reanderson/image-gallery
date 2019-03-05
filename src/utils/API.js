import axios from "axios";

//export an object containing methods for accessing the API
//for now there's only the one method, but in the future, additional methods could be added

export default {
  getImages: function() {
    return axios.get("https://jsonplaceholder.typicode.com/photos")
  }
};