import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'https://water-my-plants-2.herokuapp.com/api', //waiting on endpoint from backend.

    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
export default axiosWithAuth;
