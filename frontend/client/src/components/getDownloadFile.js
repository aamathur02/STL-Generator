import axios from 'axios'
const getDownloadFile = async () => {
    return axios.get('http://127.0.0.1:5000/stl', {
        responseType: 'blob',
    })
   .then(response => response.data)
  }

export default getDownloadFile;