import axios from "axios";

const baseUrl = process.env.baseUrl

axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.token){
      const token = 'Bearer ' + user.token;
      config.headers.Authorization =  token;
    }
  
    return config;
  });
  
//   axios.interceptors.request.use( config => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if(user && user.token){
//     const token = 'Bearer ' + user.token;
//     config.headers.Authorization =  token;
//   }

//   return config;
// });

export default {

    dCandidate(operationPath) {
        var url = baseUrl + operationPath
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (updateRecord) => axios.post(url, updateRecord),
            delete: id => axios.get(url+'?id='+ id)
        }
    }
}