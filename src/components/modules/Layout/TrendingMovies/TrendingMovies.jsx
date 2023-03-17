import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from '../MovieList/MovieList';
import Loader from 'components/shared/loader/Loader';
import { filmSearch } from 'components/shared/services/api';
import { TrendingMoviesWrapper } from './TrendingMovies.styled';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchMovies = async () => {
        try {
            setLoading(true);
            const results = await filmSearch();
            console.log(results);
            setMovies(results);
        } catch ({ response }) {
            setError(response.data.message);
            toast.error(`Sorry,${response.data.message}`);
        } finally {
            setLoading(false)
        }
    }
    fetchMovies();
}, [setMovies, setLoading]);

return (
    <TrendingMoviesWrapper>
        {loading && <Loader />}
        {error && <ToastContainer theme="colored" />}
        {movies && <MovieList movies={movies}/>}
    </TrendingMoviesWrapper>
)
};

export default TrendingMovies;