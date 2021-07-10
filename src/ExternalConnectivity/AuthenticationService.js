import axios from "axios";

const baseUrl = process.env.baseUrl


  export const  signin = (username, password) => {
      return axios.post(`${baseUrl}/Authenticate`, {username, password})
        .then(response => {
         
          if (response.data.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
          }
          return response.data.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  export const  signOut =() =>{
    localStorage.removeItem("user");
  }

  export const getCurrentUser= () =>{
    return JSON.parse(localStorage.getItem('user'));
  }
