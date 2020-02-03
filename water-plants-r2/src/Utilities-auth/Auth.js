import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'https://build-week-backend-test.herokuapp.com', //waiting on endpoint from backend.

    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
