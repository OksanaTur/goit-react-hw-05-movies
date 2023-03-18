import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieSearch } from 'components/shared/services/api';
import Loader from 'components/shared/loader/Loader';

import MovieList from 'components/modules/MovieList/MovieList';
import MovieSearchForm from 'components/modules/MovieSearchForm/MovieSearchForm';


const MoviePage = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading({ loading: true });
        const results = await MovieSearch(query);

        setMovie(results);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const chanceSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <MovieSearchForm onSubmit={chanceSearch} />
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviePage;
