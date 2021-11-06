import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21916614-7a53f7df19892a9cd44c5e501';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&per_page=${perPage}&key=${API_KEY}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

const api = { fetchImages };
export default api;
