import axios from "axios";

const baseUrl = process.env.baseUrl

class AuthenticationService {
  signin = (username, password) => {
      return axios.post(`${baseUrl}/Authenticate`, {username, password})
        .then(response => {
          debugger;
          if (response.data.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();