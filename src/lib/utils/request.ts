import axios from 'axios';

export const instance = axios.create({
  baseURL: `/api`,
  timeout: 10000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('err');
    console.log(error);
    if (error.response) {
      if (
        error.response.data.statusCode === 401 &&
        error.response.data.message === 'Token 過期'
      ) {
        // reduxStore.dispatch(userThunks.checkAuth());
      } else {
        return Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error);
  },
);

export const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default instance;
