import axios from "axios";

const baseUrl = "http://localhost:6177/api/User/"



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