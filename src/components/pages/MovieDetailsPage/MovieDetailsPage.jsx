import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';
import {useParams,useNavigate,Link,Outlet,useLocation} from 'react-router-dom';
import { getMovieDetails } from 'components/shared/services/api';
import Loader from 'components/shared/loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { MovieDetailsButton, MovieDetailsImage, Info, MovieDetailsList, MovieDetailsTitle, Topic, MovieDetailsWrapper, WrapperLink } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genres, setGenres] = useState([]);
    const [date, setDate] = useState('');

    const { movieId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/movies';
    // console.log(location)

    useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getMovieDetails(movieId);

        setMovie(results);

        setGenres(results.genres);

        setDate(results.release_date);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
    }, [movieId, setMovie, setLoading]);
    
    const goBack = () => navigate(from);
    const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);
    const year = useMemo(() => new Date(date).getFullYear(), [date]);

    return (
        <>
            <MovieDetailsButton type='button' onClick={goBack}>
                <MdKeyboardBackspace style={{
                    marginRight: 5,
                    width: 20,
                    height: 20,
                }} 
                /> Go back
            </MovieDetailsButton>
             {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
            {movie && (
                <MovieDetailsWrapper>
                    <MovieDetailsImage src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}
                        loading='lazy'
                        width="300px"
                        height="450px"
                    />
                    <Info>
                        <MovieDetailsTitle>{movie.original_title}
                            <span>({year})</span>
                        </MovieDetailsTitle>
                        <p>User score:{((movie.vote_average / 10) * 100).toFixed(0)}%</p>
                        <Topic>Genres</Topic>
                        <MovieDetailsList>{elements}</MovieDetailsList>
                        <Topic>Overviews</Topic>
                        <p>{movie.overview}</p>
                    </Info>
                </MovieDetailsWrapper>
            )}

            <WrapperLink>

                <Link 
                style={{
            display: 'block',
            textDecoration: 'none',
            color: 'black',
            padding: 8,
            borderRadius: 5,
            backgroundColor:'#dfdfdf',
        }}
          state={{ from }}
          to={`/movies/${movieId}/cast`}
         
        >
          Cast
        </Link>
                <Link
                    style={{
            display: 'block',
            textDecoration: 'none',
            color: 'black',
            padding: 8,
            borderRadius: 5,
            backgroundColor:'#dfdfdf',
        }}
          state={{ from }}
          to={`/movies/${movieId}/reviews`}
          
        >
          Reviews
        </Link>
      </WrapperLink>
      <Outlet />
        </>
    )
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string,
};