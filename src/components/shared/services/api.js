// e6335e45e66a73839ab061046ca7a249
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e6335e45e66a73839ab061046ca7a249',
  },
});

export const filmsSearch = async (page = 1) => {
  const { data } = await instance.get('/trending/movie/day?', {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}?`);
  return data;
};

export const MovieSearch = async query => {
  const { data } = await instance.get('/search/movie?', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieCast = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits?`);
  return data.cast;
};

export const getReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}//reviews?`);
  return data.results;
};


