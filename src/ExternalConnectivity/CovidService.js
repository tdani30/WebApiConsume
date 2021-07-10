
import axios from "axios";


export const  GetCovidSummary = () => {

    const url= `${process.env.ExternalbaseUrl}summary`;
    
    return axios.get(url)
      .then(response => 
        {
        return response.data.Countries;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
}