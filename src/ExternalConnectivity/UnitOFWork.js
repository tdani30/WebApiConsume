import axios from "axios";

const baseUrl = process.env.baseUrl


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